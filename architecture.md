# Proxmox Homelab — Architecture Document

**Last Updated:** April 2026  
**Host:** 192.168.1.67 · Proxmox VE 8.x  
**Live Status API:** https://status.betgevergiz.com/api/status  
**Monitoring Dashboard:** https://monitor.betgevergiz.com

---

## Overview

This is a single-node Proxmox hypervisor running 17 LXC containers in a production-grade homelab environment. The system hosts a mix of personal productivity tools, self-hosted alternatives to cloud services, automation infrastructure, and a live status API that feeds the portfolio site at [jbetgevergiz.github.io/homelab](https://jbetgevergiz.github.io/homelab/).

The design philosophy is deliberate: minimize external dependencies, eliminate public attack surface, and operate real services under real constraints rather than lab simulations. Every service here has uptime requirements. Failures get diagnosed and resolved by one person.

---

## Infrastructure Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│  Physical Host — Dedicated Hardware                                  │
│  192.168.1.67 · 16 vCPU · 32GB RAM · 476GB NVMe                    │
│                                                                       │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │  Proxmox VE 8.x Hypervisor                                     │  │
│  │                                                                 │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────────┐  │  │
│  │  │ CT 101   │  │ CT 103   │  │ CT 107   │  │ CT 112       │  │  │
│  │  │ pihole   │  │cloudflared│  │ searxng  │  │ vaultwarden  │  │  │
│  │  └──────────┘  └────┬─────┘  └──────────┘  └──────────────┘  │  │
│  │                     │                                           │  │
│  │  ┌──────────┐  ┌────┴─────┐  ┌──────────┐  ┌──────────────┐  │  │
│  │  │ CT 111   │  │ CT 128   │  │ CT 131   │  │ CT 132       │  │  │
│  │  │   n8n    │  │ postgres │  │ dealhawk │  │ status-api   │  │  │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────────┘  │  │
│  │                                                                 │  │
│  │  ┌──────────────────────────────────────────────────────────┐  │  │
│  │  │  CT 129 — media (Docker Compose stack)                    │  │  │
│  │  │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌───────┐  │  │  │
│  │  │  │  Plex  │ │Sonarr  │ │Radarr  │ │Prowlarr│ │qBit + │  │  │  │
│  │  │  │        │ │        │ │        │ │        │ │PIA VPN│  │  │  │
│  │  │  └────────┘ └────────┘ └────────┘ └────────┘ └───────┘  │  │  │
│  │  └──────────────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
         │
         │  LAN DNS resolution via CT 101 (pihole)
         │
         ▼
┌─────────────────┐     Outbound tunnel (no open ports)
│  CT 103         │ ──────────────────────────────────────►  Cloudflare
│  cloudflared    │                                           Edge Network
└─────────────────┘                                              │
                                                                 │
                                                          Public Internet
                                                          (HTTPS only, 
                                                          Cloudflare CDN)
```

---

## Container Inventory

| VMID | Name | Purpose | Tech Stack | Status |
|------|------|---------|------------|--------|
| CT 100 | crafty | Minecraft server management panel | Crafty Controller | Stopped |
| CT 101 | pihole | LAN DNS + ad blocking | Pi-hole, dnsmasq | Running |
| CT 103 | cloudflared | Cloudflare Tunnel daemon (zero-trust ingress) | cloudflared, systemd | Running |
| CT 104 | mc-dashboard | Minecraft server dashboard | Node.js | Running |
| CT 106 | openclaw | AI assistant (personal) | OpenClaw, Node.js | Running |
| CT 107 | searxng | Self-hosted metasearch engine | SearXNG, Python | Running |
| CT 111 | n8n | Workflow automation | n8n, Node.js | Running |
| CT 112 | vaultwarden | Password manager (Bitwarden-compatible) | Vaultwarden (Rust) | Running |
| CT 116 | linkding | Bookmark manager | Django, SQLite | Running |
| CT 119 | blog | cooltoolsguide.com blog | Next.js, Node.js | Running |
| CT 121 | website | Portfolio site (this page) | Next.js, Node.js | Running |
| CT 126 | obsidian-sync | Obsidian LiveSync server | CouchDB | Running |
| CT 128 | postgres | Shared PostgreSQL database | PostgreSQL 16 | Running |
| CT 129 | media | Media automation stack | Docker Compose, Plex, Sonarr, Radarr, Prowlarr, qBittorrent | Running |
| CT 130 | reader | RSS reader stack | FreshRSS or Miniflux | Running |
| CT 131 | dealhawk | PC parts price monitor + Telegram alerts | Python, SQLite, APScheduler | Running |
| CT 132 | status-api | Live homelab metrics API | Flask, Python | Running |
| CT 133 | monitoring | Metrics collection + visualization | Prometheus, Grafana | Running |

---

## Network Architecture

### External Access — Cloudflare Tunnel

All inbound traffic from the public internet flows through a Cloudflare Tunnel, not through open router ports. The architecture:

```
User Request (HTTPS)
       │
       ▼
Cloudflare Edge (DNS + TLS termination)
       │
       ▼  Encrypted outbound tunnel
CT 103 — cloudflared daemon
       │
       ▼
Target service LXC container (internal LAN)
```

CT 103 (`cloudflared`) maintains a persistent outbound connection to Cloudflare's edge. When a request arrives for any tunneled hostname (e.g., `status.betgevergiz.com`), Cloudflare routes it inbound through the tunnel to the appropriate internal service. The router has **zero open ports**. There is no port forwarding, no NAT traversal, no public IP exposure.

### Internal DNS — Pi-hole

CT 101 (`pihole`) handles all LAN DNS resolution and doubles as a network-wide ad blocker. All homelab hosts point to `192.168.1.67` (Pi-hole) as their DNS resolver. This enables:

- Internal service discovery via custom DNS records (e.g., `postgres.lan → 192.168.1.x`)
- Ad and tracker blocking for all LAN devices
- DNS query logging for visibility into internal traffic

### Media Container — Per-Container VPN Routing

CT 129 (`media`) runs qBittorrent with all traffic routed through a PIA VPN client at the container level. The VPN interface is the only route for qBittorrent traffic — no killswitch required at the app layer because the container itself enforces routing via the VPN interface. If the VPN drops, traffic stops. The rest of the media stack (Plex, Sonarr, etc.) continues operating on the normal LAN interface.

### Current Limitations

- **VLANs not yet implemented.** All containers share the same bridge (vmbr0). Network segmentation is a planned improvement.
- **Single node, no HA.** If the physical host goes down, all services go down. Acceptable for personal use; would not be acceptable in production.

---

## Design Decisions

### 1. LXC Containers over Full VMs

LXC containers share the host kernel, which means lower overhead per service. A full VM for each service would require allocating a kernel, bootloader, and ~512MB–1GB RAM just for the OS layer. With 17 services on 32GB RAM, that overhead compounds fast. LXC containers run with 256MB–2GB RAM allocations per service with no kernel overhead. The tradeoff is weaker isolation — a kernel exploit on one container could affect others. That risk is acceptable on a single-operator homelab where all containers run trusted software. If multi-tenant isolation were required, full VMs would be appropriate.

### 2. Cloudflare Tunnel over Open Ports / Reverse Proxy

The alternative to a Cloudflare Tunnel is running a reverse proxy (nginx, Traefik, Caddy) behind a public IP with port 443 forwarded from the router. That setup requires:

- A static or DDNS-managed public IP
- An open port (attack surface)
- TLS certificate management
- DDoS exposure at the edge

Cloudflare Tunnel eliminates all of that. TLS is handled at Cloudflare's edge. The origin never sees raw internet traffic. DDoS mitigation, WAF, and bot protection come included. The only outbound connection from the homelab is the tunnel daemon in CT 103. This is the right architecture for single-operator infrastructure where availability matters more than latency, and zero attack surface is the goal.

### 3. Per-Container VPN for Media Traffic

Routing only the media container through PIA VPN (instead of the entire host or all containers) is deliberate. It means:

- Non-media services retain normal routing (no VPN latency on the status API, portfolio site, etc.)
- If PIA has an outage, only media container download traffic is affected
- The VPN configuration is isolated to one container — easier to debug, update, or rotate credentials

The alternative (host-level VPN) would route all homelab traffic through PIA, including the Cloudflare tunnel daemon, the status API, and internal services. That creates operational risk: a VPN failure could take down the entire external-facing stack.

### 4. Self-Hosted Over Cloud for Specific Services

Services that were replaced with self-hosted alternatives, and why:

| Cloud Service | Self-Hosted Replacement | Reason |
|--------------|------------------------|--------|
| 1Password / Bitwarden cloud | CT 112: Vaultwarden | Credentials stay on-premises; Bitwarden-compatible clients |
| Google Bookmarks / Raindrop | CT 116: Linkding | No tracking; full data ownership |
| Feedly / Inoreader | CT 130: Reader (FreshRSS) | Free, private, no algorithmic filtering |
| Obsidian Sync ($10/mo) | CT 126: obsidian-sync | CouchDB on LXC costs nothing; same sync protocol |
| Render/Railway for blog | CT 119: blog (Next.js) | Eliminates hosting cost; full control over deploy pipeline |

The shared PostgreSQL instance (CT 128) exists specifically so services that need a relational database don't each spin up their own — resource efficiency through consolidation.

---

## Operational Practices

### Backup Strategy

- **Tool:** `vzdump` (Proxmox built-in backup)
- **Schedule:** Nightly at 2:00 AM
- **Retention:** 2 copies per container
- **Storage:** Proxmox local storage on the NVMe
- **Coverage:** All running containers

This is a local-only backup strategy. Off-site backup (e.g., rclone to Backblaze B2 or Cloudflare R2) is a planned improvement. Currently, a hardware failure on the NVMe would result in data loss from the last backup point.

### Storage Layout

- **Container disks:** Proxmox `local-lvm` (LVM thin-provisioned on NVMe)
- **Media data:** `/mnt/media` — mounted into CT 129 as a bind mount, separate from the container's root disk so media files survive container rebuilds

### Issue Detection and Resolution

- CT 132 (`status-api`) polls all containers via the Proxmox API and exposes live metrics (container count, running state, CPU load, RAM utilization) at `https://status.betgevergiz.com/api/status`
- The portfolio site's Live Infrastructure widget polls this API every 30 seconds for real-time visibility
- CT 131 (`dealhawk`) uses Telegram for alerts — the same Telegram bot infrastructure could be extended to send homelab alerts
- Issues are currently detected reactively (service stops responding) or via the status API. No active alerting on container state changes yet — that's a gap to close

### Upgrade Approach

- **Proxmox host:** Rolling upgrades via `apt`; no reboots during business hours
- **LXC containers:** Updated individually via `apt upgrade` inside each container, or by rebuilding the container from a fresh template and restoring config
- **Docker services (CT 129):** `docker compose pull && docker compose up -d` for image updates
- **No automated unattended upgrades** — all updates applied manually to maintain visibility into what changed

---

## Live Status

Real-time container state and host metrics are available at:

**Grafana Dashboard:** **[https://monitor.betgevergiz.com](https://monitor.betgevergiz.com)**

Grafana (CT 133) is backed by Prometheus, which scrapes a `/metrics` endpoint on the status API (CT 132) every 15 seconds. Metrics include:
- Host load average (1m, 5m)
- Host RAM utilization (absolute and percent)
- Per-container running state (labeled by ID and name)
- Total and running container counts

The raw JSON API remains available at `https://status.betgevergiz.com/api/status` and continues to feed the portfolio's Live Infrastructure widget.

CT 132 (`status-api`) exposes both `/api/status` (JSON, for the portfolio widget) and `/metrics` (Prometheus text format, for Grafana).

---

## What's Next

- **VLAN segmentation** — isolate media, infrastructure, and public-facing containers onto separate network segments
- **Off-site backups** — rclone to object storage for disaster recovery
- **Alerting** — Telegram notifications on container state changes and high load events
- ~~**Monitoring stack** — Prometheus + Grafana for time-series metrics and dashboards~~ ✅ **Done** — CT 133 runs Prometheus + Grafana, accessible at https://monitor.betgevergiz.com
