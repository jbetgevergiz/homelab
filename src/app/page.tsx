"use client";

import { Github, Linkedin, ExternalLink, Mail } from "lucide-react";
import MotionEffects from "@/components/MotionEffects";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-100 flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-64 border-r border-white/10 bg-[#0d1117]/95 backdrop-blur-sm p-6 z-50">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" style={{animationDuration: '2.4s'}}></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs text-slate-400">Available for work</span>
          </div>
          <h1 className="text-lg font-bold text-white leading-tight">Jason Betgevergiz</h1>
          <p className="text-sm text-slate-400 mt-1">Infrastructure &amp; Systems Engineer</p>
        </div>
        <nav className="flex flex-col gap-2 flex-1">
          <a href="#about" className="nav-link text-sm text-slate-400 hover:text-white transition-colors py-1.5 px-2 rounded-md hover:bg-white/5">About</a>
          <a href="#infrastructure" className="nav-link text-sm text-slate-400 hover:text-white transition-colors py-1.5 px-2 rounded-md hover:bg-white/5">Live Infrastructure</a>
          <a href="#projects" className="nav-link text-sm text-slate-400 hover:text-white transition-colors py-1.5 px-2 rounded-md hover:bg-white/5">Projects</a>
          <a href="#skills" className="nav-link text-sm text-slate-400 hover:text-white transition-colors py-1.5 px-2 rounded-md hover:bg-white/5">Skills</a>
        </nav>
        <div className="flex gap-3 mt-4">
          <a href="https://github.com/jbetgevergiz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/jason-betgevergiz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        <p className="text-xs text-slate-600 mt-4">Building production-grade infrastructure</p>
      </aside>

      {/* Main */}
      <main className="lg:ml-64 flex-1">
        {/* Hero */}
        <section className="mesh-bg min-h-screen flex flex-col justify-center px-8 py-20 max-w-5xl mx-auto">
          <h1 data-hero-name style={{ fontFamily: 'var(--font-space-grotesk)' }} className="text-7xl sm:text-8xl font-extrabold text-[#f0f0f0] mb-3 tracking-tight leading-none">
            Jason Betgevergiz
          </h1>
          <p className="text-sm text-slate-400 mb-2 font-light tracking-[0.08em] uppercase">
            Infrastructure &amp; Systems Engineer
            <span className="inline-block w-0.5 h-4 bg-emerald-500 ml-1 animate-pulse align-middle" />
          </p>
          <blockquote className="border-l-2 border-emerald-500/60 pl-4 mb-8 max-w-lg">
            <p className="text-slate-200 text-base font-medium leading-snug">
              &ldquo;5 years selling to engineering leaders.<br />Now building the infrastructure I used to demo.&rdquo;
            </p>
          </blockquote>
          <div className="flex gap-4 flex-wrap">
            <a href="#about" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-lg transition-all duration-200">
              Read My Story
            </a>
            <a
              href="https://github.com/jbetgevergiz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-white/5 border border-white/10 text-slate-300 hover:text-white font-medium rounded-lg transition-all duration-200"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-8 max-w-5xl mx-auto">
          <div className="flex items-baseline gap-3 mb-8">
            <div className="w-1 h-7 rounded-full bg-slate-600"></div>
            <h2 className="text-3xl font-bold text-white tracking-tight">About</h2>
          </div>
          <div className="max-w-3xl space-y-5">
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl mb-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                <span className="text-white font-semibold">TL;DR:</span> 5 years in enterprise tech sales → self-taught infrastructure engineer. Running a production homelab with 10+ containers, a k3s cluster on Raspberry Pis, and more. Providing L1/L2 IT support at Moderne. Currently studying CompTIA A+.
              </p>
            </div>
            <p className="text-slate-300 leading-relaxed">
              For as long as I can remember, I&apos;ve been obsessed with computers. I was the kid taking things apart just to figure out how they worked, teaching myself to code, building machines out of whatever I could get my hands on. That curiosity never faded — but for a long time, I convinced myself that without a degree, I had no business turning it into a career. So I leaned into what did come naturally: building relationships and communicating clearly. That led me into enterprise tech sales.
            </p>
            <blockquote className="border-l-2 border-slate-600 pl-4 my-6">
              <p className="text-slate-200 text-lg font-medium leading-snug italic">&ldquo;I bridge two worlds that rarely overlap.&rdquo;</p>
            </blockquote>
            <p className="text-slate-300 leading-relaxed">
              I spent five years selling complex software to engineering leaders — cybersecurity platforms, risk management tools, and most recently, automated code migration and AI developer tooling at Moderne. My job was never just closing deals. It was sitting across from engineers in deeply technical conversations about dependency management, framework migrations, and developer workflows, and distilling those concepts into language that landed with both technical and non-technical stakeholders. I got good at it. But the more technical my world became, the more I realized I wasn&apos;t just keeping up — I was in my element. Moderne was the tipping point. Surrounded daily by that level of technical depth, I finally stopped second-guessing myself and decided to reach for what I&apos;d always wanted.
            </p>
            <p className="text-slate-300 leading-relaxed">
              So I started building — not through coursework or boot camps, but the same way I&apos;ve always learned: by doing. I stood up a Proxmox hypervisor at home and started running real services on it. Today it hosts over ten LXC containers and VMs: a Python-based price monitoring tool with a Next.js frontend and SQLite backend, Docker Compose service stacks with container-level VPN routing and Cloudflare tunnel access, and a growing list of services I maintain around the clock. At Moderne, I also wear the IT support hat alongside my sales role — handling the majority of internal technical issues without escalation for a team of 12 users across Salesforce, Salesloft, and Zoominfo.
            </p>
            <p className="text-slate-300 leading-relaxed">
              I&apos;m building a Kubernetes cluster on Raspberry Pi hardware running BOINC distributed computing workloads for cancer research through World Community Grid. I&apos;m assembling a custom PC specifically to self-host large language models locally. Every skill on this page, I taught myself — because I genuinely couldn&apos;t stop myself from learning it. I&apos;m not asking anyone to take a gamble. I&apos;m asking them to look at what I&apos;ve already built and decide if they want in on what comes next.
            </p>
          </div>
        </section>

        {/* Live Infrastructure */}
        <section id="infrastructure" className="py-8 px-8 max-w-5xl mx-auto">
          <div className="flex items-baseline justify-between gap-3 mb-6">
            <div className="flex items-baseline gap-3">
              <div className="w-1 h-7 rounded-full bg-slate-600"></div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Live Infrastructure</h2>
            </div>
            <a
              href="https://github.com/jbetgevergiz/homelab/blob/gh-pages/architecture.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1"
            >
              View Architecture →
            </a>
          </div>
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <iframe
              src="https://monitor.betgevergiz.com/d/2291b076-6042-499d-bca1-724ac0a21850/proxmox-homelab?orgId=1&refresh=30s&theme=dark&kiosk"
              width="100%"
              height="400"
              frameBorder="0"
              title="Homelab Live Metrics"
              className="w-full"
            />
            <div className="px-4 py-2 flex items-center justify-between border-t border-white/10">
              <span className="text-xs text-slate-500">Live data · refreshes every 30s</span>
              <a href="https://monitor.betgevergiz.com" target="_blank" rel="noopener noreferrer"
                 className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                Open in Grafana →
              </a>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 px-8 max-w-5xl mx-auto">
          <div className="flex items-baseline gap-3 mb-8">
            <div className="w-1 h-7 rounded-full bg-slate-600"></div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Projects</h2>
          </div>
          <p className="text-slate-400 text-sm italic mb-8">Here&apos;s the evidence.</p>

          {/* Production */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <h3 className="text-lg font-semibold text-white">Production</h3>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-12">
            {/* Proxmox Homelab */}
            <div data-card className="col-span-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 min-h-[200px] hover:border-white/20 hover:bg-white/[0.08] hover:scale-[1.02] transition-all duration-300 flex flex-col gap-3">
              <div className="flex items-center gap-1.5 mb-3 pb-3 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span>
                <span className="ml-2 text-xs text-slate-600 font-mono">~/projects/proxmox-homelab</span>
              </div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-white font-semibold text-base leading-snug">Proxmox Homelab</h3>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full border font-medium bg-emerald-900/60 text-emerald-400 border-emerald-800">Live</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed flex-1">
                Self-hosted Proxmox hypervisor running 10+ LXC containers and VMs 99%. Services include a media stack, web apps, price monitoring, AI assistant, and monitoring infrastructure — all maintained and troubleshot independently.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Proxmox VE", "LXC", "Docker", "Debian Linux"].map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">{t}</span>
                ))}
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Skills:</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Virtualization", "Linux Administration", "Resource Management", "Networking"].map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10">{s}</span>
                  ))}
                </div>
              </div>
              <a href="https://github.com/jbetgevergiz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 transition-colors mt-1">
                <Github className="w-3 h-3" /> View on GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Media Stack */}
            <div data-card className="col-span-1 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 min-h-[200px] hover:border-white/20 hover:bg-white/[0.08] hover:scale-[1.02] transition-all duration-300 flex flex-col gap-3">
              <div className="flex items-center gap-1.5 mb-3 pb-3 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span>
                <span className="ml-2 text-xs text-slate-600 font-mono">~/projects/media-stack</span>
              </div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-white font-semibold text-base leading-snug">Self-Hosted Media Stack</h3>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full border font-medium bg-emerald-900/60 text-emerald-400 border-emerald-800">Live</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed flex-1">
                Full *Arr stack (Sonarr, Radarr, Prowlarr) + Plex + qBittorrent with all traffic routed through PIA VPN at the container network level. Externally accessible via Jellyseerr at a custom domain through Cloudflare Tunnel — zero open ports.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Docker Compose", "Proxmox LXC", "Cloudflare Tunnels", "PIA VPN"].map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">{t}</span>
                ))}
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Skills:</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Container Orchestration", "VPN Routing", "Reverse Proxy", "Network Security"].map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10">{s}</span>
                  ))}
                </div>
              </div>
              <a href="https://github.com/jbetgevergiz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 transition-colors mt-1">
                <Github className="w-3 h-3" /> View on GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* DealHawk */}
            <div data-card className="col-span-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 min-h-[200px] hover:border-white/20 hover:bg-white/[0.08] hover:scale-[1.02] transition-all duration-300 flex flex-col gap-3">
              <div className="flex items-center gap-1.5 mb-3 pb-3 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span>
                <span className="ml-2 text-xs text-slate-600 font-mono">~/projects/dealhawk</span>
              </div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-white font-semibold text-base leading-snug">DealHawk — Price Monitor &amp; Alert System</h3>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full border font-medium bg-emerald-900/60 text-emerald-400 border-emerald-800">Live</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed flex-1">
                Self-hosted price monitoring and alerting tool built from scratch. Tracks any product across Amazon and Newegg, calculates a 30-day rolling average, and fires Telegram alerts when prices drop below a configurable threshold. Config-file driven, Dockerized, and published open source.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Python", "SQLite", "APScheduler", "Docker", "Next.js", "Cloudflare Tunnels"].map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">{t}</span>
                ))}
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Skills:</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Web Scraping", "Data Pipelines", "SQLite", "REST APIs", "Full-Stack Dev"].map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10">{s}</span>
                  ))}
                </div>
              </div>
              <a href="https://github.com/jbetgevergiz/dealhawk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 transition-colors mt-1">
                <Github className="w-3 h-3" /> View on GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* In Progress */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            <h3 className="text-lg font-semibold text-white">In Progress</h3>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2.5 py-1 rounded-full text-xs bg-amber-900/40 text-amber-400 border border-amber-800/50">Studying: CompTIA A+</span>
            <span className="px-2.5 py-1 rounded-full text-xs bg-slate-800 text-slate-400 border border-slate-700">Next: Network+, Security+</span>
            <span className="px-2.5 py-1 rounded-full text-xs bg-slate-800 text-slate-400 border border-slate-700">Target: AWS Security Specialty</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {/* Kubernetes */}
            <div data-card className="col-span-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 min-h-[200px] hover:border-white/20 hover:bg-white/[0.08] hover:scale-[1.02] transition-all duration-300 flex flex-col gap-3">
              <div className="flex items-center gap-1.5 mb-3 pb-3 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span>
                <span className="ml-2 text-xs text-slate-600 font-mono">~/projects/k8s-cluster</span>
              </div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-white font-semibold text-base leading-snug">Kubernetes Cluster</h3>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full border font-medium bg-amber-900/60 text-amber-400 border-amber-800">In Progress</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed flex-1">
                k3s cluster on 6 Raspberry Pi nodes (1 control plane + 5 workers) running BOINC distributed computing for cancer research via World Community Grid. Real DaemonSets, real cluster networking, real container orchestration on constrained ARM hardware.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["k3s", "Kubernetes DaemonSet", "Raspberry Pi OS", "ARM Linux", "Ansible"].map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">{t}</span>
                ))}
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Skills:</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Container Orchestration", "Cluster Networking", "ARM Linux", "Distributed Systems"].map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10">{s}</span>
                  ))}
                </div>
              </div>
              <a href="https://github.com/jbetgevergiz/project-cloud-security-homelab" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 transition-colors mt-1">
                <Github className="w-3 h-3" /> View on GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Cloud Security */}
            <div data-card className="col-span-1 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 min-h-[200px] hover:border-white/20 hover:bg-white/[0.08] hover:scale-[1.02] transition-all duration-300 flex flex-col gap-3">
              <div className="flex items-center gap-1.5 mb-3 pb-3 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span>
                <span className="ml-2 text-xs text-slate-600 font-mono">~/projects/cloud-security</span>
              </div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-white font-semibold text-base leading-snug">Cloud Security Homelab</h3>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full border font-medium bg-amber-900/60 text-amber-400 border-amber-800">In Progress</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed flex-1">
                Building a security-focused AWS environment from scratch. Enabling GuardDuty, CloudTrail, AWS Config, Security Hub. Intentionally misconfiguring resources to practice detection and remediation. Writing incident response playbooks for each finding type.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["AWS", "GuardDuty", "CloudTrail", "OpenSearch SIEM", "IAM", "AWS Config"].map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">{t}</span>
                ))}
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Skills:</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Cloud Security", "Threat Detection", "Incident Response", "CSPM"].map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10">{s}</span>
                  ))}
                </div>
              </div>
              <a href="https://github.com/jbetgevergiz/project-cloud-security-homelab" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 transition-colors mt-1">
                <Github className="w-3 h-3" /> View on GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Wiz CSPM */}
            <div data-card className="col-span-1 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 min-h-[200px] hover:border-white/20 hover:bg-white/[0.08] hover:scale-[1.02] transition-all duration-300 flex flex-col gap-3">
              <div className="flex items-center gap-1.5 mb-3 pb-3 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span>
                <span className="ml-2 text-xs text-slate-600 font-mono">~/projects/wiz-cspm</span>
              </div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-white font-semibold text-base leading-snug">Wiz CSPM Integration</h3>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full border font-medium bg-amber-900/60 text-amber-400 border-amber-800">In Progress</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed flex-1">
                Hands-on with the Wiz cloud security platform on a personal AWS environment. Triaging findings by severity, writing remediation playbooks, documenting the full CSPM workflow from detection to verification.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Wiz", "Prowler", "AWS", "CSPM", "CWPP", "Checkov"].map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">{t}</span>
                ))}
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Skills:</p>
                <div className="flex flex-wrap gap-1.5">
                  {["CSPM Operations", "Vulnerability Triage", "Remediation Documentation"].map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10">{s}</span>
                  ))}
                </div>
              </div>
              <a href="https://github.com/jbetgevergiz/project-wiz-cspm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 transition-colors mt-1">
                <Github className="w-3 h-3" /> View on GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Terraform */}
            <div data-card className="col-span-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 min-h-[200px] hover:border-white/20 hover:bg-white/[0.08] hover:scale-[1.02] transition-all duration-300 flex flex-col gap-3">
              <div className="flex items-center gap-1.5 mb-3 pb-3 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span>
                <span className="ml-2 text-xs text-slate-600 font-mono">~/projects/terraform-modules</span>
              </div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-white font-semibold text-base leading-snug">Terraform Security Modules</h3>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full border font-medium bg-amber-900/60 text-amber-400 border-amber-800">In Progress</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed flex-1">
                Building reusable Terraform modules for hardened AWS infrastructure: VPCs with segmentation, security groups, CloudTrail logging, GuardDuty enablement, and IAM baseline policies. CI/CD pipeline with Checkov security scanning on PRs.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Terraform", "HCL", "AWS", "GitHub Actions", "Checkov"].map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">{t}</span>
                ))}
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Skills:</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Infrastructure as Code", "Security Automation", "CI/CD Pipelines"].map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10">{s}</span>
                  ))}
                </div>
              </div>
              <a href="https://github.com/jbetgevergiz/project-terraform-security-modules" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 transition-colors mt-1">
                <Github className="w-3 h-3" /> View on GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 px-8 max-w-5xl mx-auto">
          <div className="flex items-baseline gap-3 mb-8">
            <div className="w-1 h-7 rounded-full bg-slate-600"></div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Skills</h2>
          </div>
          <div className="font-mono text-xs">
            <div className="grid grid-cols-3 gap-4 mb-3 pb-2 border-b border-white/10 text-slate-500 uppercase tracking-wider text-[10px]">
              <span>Skill</span>
              <span>Proficiency</span>
              <span>Status</span>
            </div>
            {[
              { name: 'Proxmox VE', level: 8, status: 'PROD', color: 'emerald' },
              { name: 'Linux (Debian/Ubuntu)', level: 8, status: 'DAILY', color: 'emerald' },
              { name: 'Docker & Compose', level: 8, status: 'PROD', color: 'emerald' },
              { name: 'Cloudflare Tunnels', level: 9, status: 'PROD', color: 'emerald' },
              { name: 'LXC Containers', level: 7, status: 'PROD', color: 'emerald' },
              { name: 'Python / Bash', level: 7, status: 'DAILY', color: 'emerald' },
              { name: 'Networking (DNS/VPN)', level: 7, status: 'PROD', color: 'emerald' },
              { name: 'Kubernetes / k3s', level: 5, status: 'LEARNING', color: 'amber' },
              { name: 'Terraform (HCL)', level: 4, status: 'LEARNING', color: 'amber' },
              { name: 'AWS / Cloud Security', level: 4, status: 'LEARNING', color: 'amber' },
              { name: 'CI/CD Pipelines', level: 4, status: 'LEARNING', color: 'amber' },
              { name: 'SQLite', level: 6, status: 'PROD', color: 'emerald' },
            ].map((skill) => (
              <div key={skill.name} className="grid grid-cols-3 gap-4 py-1.5 border-b border-white/5 hover:bg-white/5 px-2 -mx-2 rounded transition-colors">
                <span className="text-slate-300">{skill.name}</span>
                <span className="text-slate-500">{'█'.repeat(skill.level)}{'░'.repeat(10 - skill.level)}</span>
                <span className={skill.color === 'emerald' ? 'text-emerald-400' : 'text-amber-400'}>{skill.status}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-8 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-3">Let&apos;s Talk</h2>
          <p className="text-slate-400 text-base leading-relaxed mb-6 max-w-xl mx-auto">
            I&apos;m actively looking for IT support, sysadmin, or junior infrastructure roles — remote or Miami-based. If you want someone who can communicate at both levels and keeps building on their own time, let&apos;s talk.
          </p>
          <a
            href="mailto:jbetgevergiz@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-lg transition-all duration-200"
          >
            <Mail className="w-4 h-4" /> jbetgevergiz@gmail.com
          </a>
          <div className="mt-4">
            <a
              href="https://linkedin.com/in/jason-betgevergiz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
            >
              or connect on LinkedIn →
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-8 border-t border-white/10 max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <a href="https://github.com/jbetgevergiz" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/jason-betgevergiz" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <p className="text-slate-600 text-sm">Miami, FL · © 2026 Jason Betgevergiz</p>
        </footer>
      </main>
      <MotionEffects />
    </div>
  );
}
