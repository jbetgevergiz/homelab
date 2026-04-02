# Homelab Infrastructure

Personal homelab running on Proxmox VE — 17 LXC containers, self-hosted services, live monitoring, and zero open ports via Cloudflare Tunnels.

**Portfolio:** https://jbetgevergiz.github.io/homelab/
**Live Metrics:** https://monitor.betgevergiz.com

## Infrastructure Overview

```
┌─────────────────────────────────────────────────────────────┐
│              Proxmox Host (192.168.1.67)                    │
│         16 cores · 32GB RAM · 476GB NVMe · Debian 12        │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ CT 101   │  │ CT 103   │  │ CT 106   │  │ CT 107   │   │
│  │ pihole   │  │cloudflare│  │ openclaw │  │ searxng  │   │
│  │ DNS/DHCP │  │ tunnel   │  │ AI asst. │  │ search   │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ CT 111   │  │ CT 112   │  │ CT 119   │  │ CT 121   │   │
│  │   n8n    │  │vaultwarden│  │  blog    │  │ website  │   │
│  │automation│  │passwords │  │ tools    │  │portfolio │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ CT 129   │  │ CT 131   │  │ CT 132   │  │ CT 133   │   │
│  │  media   │  │ dealhawk │  │status-api│  │monitoring│   │
│  │Plex+*Arr │  │price mon.│  │Flask API │  │ Grafana  │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
                          │
              Cloudflare Tunnel (zero open ports)
                          │
              ┌───────────▼──────────┐
              │   Public Services    │
              │ monitor.betgevergiz  │
              │ status.betgevergiz   │
              │ tv.betgevergiz.com   │
              └──────────────────────┘
```

## Container Inventory

| CT | Hostname | Service | Notes |
|----|----------|---------|-------|
| 101 | pihole | DNS + DHCP | Network-wide ad blocking |
| 103 | cloudflared | Cloudflare Tunnel | Primary tunnel, all public services |
| 106 | openclaw | AI Assistant | Claude-powered personal assistant |
| 107 | searxng | Search | Self-hosted private search engine |
| 111 | n8n | Automation | Workflow automation |
| 112 | vaultwarden | Password Manager | Bitwarden-compatible self-hosted |
| 119 | blog | cooltoolsguide.com | Content site |
| 121 | website | Portfolio | This site |
| 126 | obsidian-sync | Notes Sync | Obsidian LiveSync backend |
| 128 | postgres | Database | Shared PostgreSQL instance |
| 129 | media | Media Stack | Plex, Sonarr, Radarr, Prowlarr, qBittorrent |
| 130 | reader | RSS Stack | Self-hosted RSS reader |
| 131 | dealhawk | Price Monitor | Python deal alerter → Telegram |
| 132 | status-api | Flask API | `/api/status` + Prometheus `/metrics` |
| 133 | monitoring | Grafana + Prometheus | Live metrics at monitor.betgevergiz.com |

## Networking

- **Internal DNS:** Pi-hole handles all `.home` resolution + DHCP reservations
- **External access:** Cloudflare Tunnel — no open firewall ports
- **VPN routing:** CT 129 (media) routes all traffic through PIA VPN at the container network level
- **Status API:** Flask on Proxmox host (not in container) for direct `/proc` access without SSH overhead

## Monitoring

- **Grafana:** https://monitor.betgevergiz.com — live container status, load, RAM
- **Prometheus:** Scrapes `/metrics` from status API every 15s
- **Alerts:** Telegram notifications via DealHawk + n8n workflows

## Key Design Decisions

See [`architecture.md`](architecture.md) for full design decisions and rationale.

## Projects in this Repo

- [`architecture.md`](architecture.md) — Full infrastructure documentation
- [`TUNNEL_MAP.md`](TUNNEL_MAP.md) — Cloudflare tunnel routing documentation
- `src/` — Portfolio site source (Next.js, deployed to GitHub Pages)
