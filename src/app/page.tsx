"use client";

import { Github, Linkedin, ExternalLink, Mail } from "lucide-react";
import { useState } from "react";
import MotionEffects from "@/components/MotionEffects";
import ConsoleMessage from "@/components/ConsoleMessage";
import EasterEgg from "@/components/EasterEgg";
import ScrollProgress from "@/components/ScrollProgress";
import DynamicStatus from "@/components/DynamicStatus";

const coreProjects = [
  {
    path: "~/work/moderne-support",
    title: "Internal IT Support at Moderne",
    badge: "Current",
    badgeStyle: "bg-emerald-900/60 text-emerald-400 border-emerald-800",
    description:
      "Provide day-to-day L1/L2 support for a 10–15 person go-to-market team across Salesforce, Salesloft, ZoomInfo, Nooks, Zoom, and account access issues. I resolve most incidents without escalation and document fixes for repeatability.",
    tech: ["SaaS Admin", "User Support", "Access Troubleshooting", "Documentation"],
    skills: ["Ticket Triage", "User Communication", "Root Cause Isolation", "Remote Support"],
    link: "https://www.linkedin.com/in/jason-betgevergiz",
    linkLabel: "View LinkedIn",
    span: "col-span-1 md:col-span-3",
  },
  {
    path: "~/projects/proxmox-homelab",
    title: "Proxmox Homelab Administration",
    badge: "Live",
    badgeStyle: "bg-emerald-900/60 text-emerald-400 border-emerald-800",
    description:
      "Built and maintain a self-hosted Proxmox environment running 10+ containers and VMs for internal services, monitoring, automation, and web apps. Regular work includes service recovery, container lifecycle management, networking changes, backups, hostname cleanup, and handling break/fix incidents end to end, including recovery, networking changes, and container issues.",
    tech: ["Proxmox VE", "LXC", "Debian Linux", "Docker"],
    skills: ["Linux Administration", "Virtualization", "Service Recovery", "Networking"],
    link: "https://github.com/jbetgevergiz/homelab",
    linkLabel: "View on GitHub",
    span: "col-span-1 md:col-span-2",
  },
  {
    path: "~/projects/monitoring-stack",
    title: "Monitoring & Status Dashboard",
    badge: "Live",
    badgeStyle: "bg-emerald-900/60 text-emerald-400 border-emerald-800",
    description:
      "Set up live infrastructure visibility with Grafana, Prometheus, and a custom status API so I can quickly spot container health, load, memory pressure, and failed services. This portfolio pulls real telemetry from that stack instead of static screenshots.",
    tech: ["Grafana", "Prometheus", "Python", "Cloudflare Tunnel"],
    skills: ["Monitoring", "Alert Context", "Operational Visibility", "Incident Triage"],
    link: "https://github.com/jbetgevergiz/homelab/blob/gh-pages/architecture.md",
    linkLabel: "View Architecture",
    span: "col-span-1",
  },
  {
    path: "~/projects/dealhawk",
    title: "DealHawk — Self-Hosted Automation App",
    badge: "Live",
    badgeStyle: "bg-emerald-900/60 text-emerald-400 border-emerald-800",
    description:
      "Built a self-hosted Python automation app that scrapes pricing data, stores history in SQLite, runs scheduled jobs, and sends Telegram alerts when thresholds are hit. More important than the code: I debugged TLS blocks, scheduler restart issues, and database lock contention until it stayed reliable.",
    tech: ["Python", "SQLite", "Docker", "APScheduler", "Next.js"],
    skills: ["Troubleshooting", "Automation", "Log Analysis", "Reliability Fixes"],
    link: "https://github.com/jbetgevergiz/dealhawk",
    linkLabel: "View on GitHub",
    span: "col-span-1 md:col-span-3",
  },
  {
    path: "~/projects/media-stack",
    title: "Media Stack & Remote Access",
    badge: "Live",
    badgeStyle: "bg-emerald-900/60 text-emerald-400 border-emerald-800",
    description:
      "Built and maintain a multi-service stack involving DNS, remote access, container networking, service dependencies, and user-facing troubleshooting, with VPN-routed traffic and Cloudflare Tunnel access.",
    tech: ["Docker Compose", "VPN Routing", "Cloudflare Tunnels", "DNS"],
    skills: ["Service Administration", "Remote Access", "Network Debugging", "User-Facing Support"],
    link: "https://github.com/jbetgevergiz/homelab/blob/gh-pages/architecture.md",
    linkLabel: "View Architecture",
    span: "col-span-1 md:col-span-2",
  },
  {
    path: "~/projects/k3s-cluster",
    title: "Raspberry Pi k3s Cluster",
    badge: "Learning",
    badgeStyle: "bg-amber-900/60 text-amber-400 border-amber-800",
    description:
      "A hands-on lab for learning cluster operations on small hardware. I treat it as a stretch project, not my headline. It shows I keep expanding beyond the basics while staying grounded in the support and infrastructure work I can already prove.",
    tech: ["k3s", "Raspberry Pi", "ARM Linux", "Ansible"],
    skills: ["Lab Building", "Cluster Basics", "Documentation", "Continuous Learning"],
    link: "https://github.com/jbetgevergiz/k3s-cluster",
    linkLabel: "View on GitHub",
    span: "col-span-1",
  },
];

const skillGroups = [
  {
    title: "Support & Operations",
    items: [
      "L1/L2 troubleshooting",
      "User communication",
      "Account/access issues",
      "SaaS admin support",
      "Incident triage",
      "Documentation",
    ],
  },
  {
    title: "Systems Administration",
    items: [
      "Linux (Debian/Ubuntu)",
      "Proxmox VE",
      "LXC containers",
      "Docker & Compose",
      "systemd / cron",
      "Backup & recovery",
    ],
  },
  {
    title: "Networking & Remote Access",
    items: [
      "DNS",
      "Cloudflare Tunnels",
      "VPN routing",
      "Firewall basics",
      "SSH",
      "Service exposure",
    ],
  },
  {
    title: "Monitoring & Scripting",
    items: [
      "Grafana",
      "Prometheus",
      "Python",
      "Bash",
      "SQLite",
      "Log-based debugging",
    ],
  },
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleEmailCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("jbetgevergiz@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-100 flex overflow-x-hidden">
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-64 border-r border-white/10 bg-[#0d1117]/95 backdrop-blur-sm p-6 z-50">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" style={{ animationDuration: "2.4s" }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs text-slate-400">Open to support + infrastructure roles</span>
          </div>
          <h1 className="text-lg font-bold text-white leading-tight">Jason Betgevergiz</h1>
          <p className="text-sm text-slate-400 mt-1">Junior Sysadmin / Infrastructure Support</p>
        </div>
        <nav className="flex flex-col gap-2 flex-1">
          <a href="#about" className="nav-link text-sm text-slate-400 hover:text-white transition-colors py-1.5 px-2 rounded-md hover:bg-white/5">About</a>
          <a href="#projects" className="nav-link text-sm text-slate-400 hover:text-white transition-colors py-1.5 px-2 rounded-md hover:bg-white/5">Projects</a>
          <a href="#infrastructure" className="nav-link text-sm text-slate-400 hover:text-white transition-colors py-1.5 px-2 rounded-md hover:bg-white/5">Live Infrastructure</a>
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
        <p className="text-xs text-slate-600 mt-4">Support-first operator with hands-on homelab evidence</p>
      </aside>

      <main className="lg:ml-64 flex-1 min-w-0">
        <header className="lg:hidden sticky top-0 z-50 bg-[#0d1117]/95 backdrop-blur-sm border-b border-white/10">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2 min-w-0">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" style={{ animationDuration: "2.4s" }}></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-bold text-white truncate">Jason Betgevergiz</span>
            </div>
            <nav className="flex items-center gap-3 shrink-0 ml-3">
              <a href="#about" className="text-xs text-slate-400 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-xs text-slate-400 hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="text-xs text-slate-400 hover:text-white transition-colors">Skills</a>
              <a href="#infrastructure" className="text-xs text-slate-400 hover:text-white transition-colors">Infra</a>
            </nav>
          </div>
        </header>

        <section className="mesh-bg min-h-screen flex flex-col justify-center relative">
          <div className="px-4 sm:px-6 py-14 sm:py-20 max-w-7xl mx-auto w-full">
            <DynamicStatus />
            <h1 data-hero-name style={{ fontFamily: "var(--font-space-grotesk)" }} className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-extrabold text-[#f0f0f0] mb-3 tracking-tight leading-tight mt-4">
              Jason Betgevergiz
            </h1>
            <p className="text-sm text-slate-400 mb-2 font-light tracking-[0.08em] uppercase">
              Junior Sysadmin / Infrastructure Support
              <span className="inline-block w-0.5 h-4 bg-emerald-500 ml-1 animate-pulse align-middle" />
            </p>
            <blockquote className="border-l-2 border-emerald-500/60 pl-4 mb-6 max-w-2xl">
              <p className="text-slate-200 text-sm sm:text-base font-medium leading-snug">
                “I troubleshoot user problems during the day and run my own infrastructure after hours.”
              </p>
            </blockquote>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl mb-8 max-w-3xl">
              <p className="text-slate-300 text-sm leading-relaxed">
                I provide day-to-day user support, troubleshoot SaaS and access issues, and run a live homelab where I get hands-on reps with Linux, Proxmox, Docker, networking, monitoring, backups, and service recovery. I&apos;m targeting junior sysadmin, IT support, and infrastructure support roles where practical troubleshooting matters.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8 max-w-5xl">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-500 mb-2">Why I&apos;m a fit</p>
                <p className="text-sm text-slate-300 leading-relaxed">Resolve day-to-day L1/L2 user and SaaS issues without heavy escalation.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-500 mb-2">Infrastructure reps</p>
                <p className="text-sm text-slate-300 leading-relaxed">Operate a live homelab with Linux, Proxmox, Docker, monitoring, backups, and recovery work.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-500 mb-2">Support + systems</p>
                <p className="text-sm text-slate-300 leading-relaxed">Communicate clearly with end users while staying technical under the hood.</p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <a href="#projects" className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-lg transition-all duration-200 text-sm sm:text-base">
                See the Proof
              </a>
              <button
                onClick={handleEmailCopy}
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-transparent hover:bg-white/5 border border-white/10 text-slate-300 hover:text-white font-medium rounded-lg transition-all duration-200 text-sm sm:text-base"
              >
                <Mail className="w-4 h-4" /> Contact Jason
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="flex items-baseline gap-3 mb-8">
            <div className="w-1 h-7 rounded-full bg-slate-600"></div>
            <h2 className="text-3xl font-bold text-white tracking-tight">About</h2>
          </div>
          <div className="space-y-5 max-w-4xl">
            <p className="text-slate-300 leading-relaxed">
              I came from enterprise tech sales, but the technical side was always where I leaned. At Moderne, that became real internal IT support work: resolving user issues, fixing SaaS and access problems, documenting solutions, and handling most incidents without escalation.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Outside work, I built and maintain a live homelab with containers, monitoring, automation, tunnels, backups, and routine break/fix work. That&apos;s the core story here: user support experience plus hands-on infrastructure practice.
            </p>
          </div>
        </section>

        <section id="projects" className="py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="flex items-baseline gap-3 mb-8">
            <div className="w-1 h-7 rounded-full bg-slate-600"></div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Projects & Experience</h2>
          </div>
          <p className="text-slate-400 text-sm italic mb-8">This page leads with proof: real support work, real infrastructure, and projects I can actually talk through.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {coreProjects.map((project) => (
              <div key={project.title} data-card className={`${project.span} backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 min-h-[200px] hover:border-white/20 hover:bg-white/[0.08] hover:scale-[1.02] transition-all duration-300 flex flex-col gap-3`}>
                <div className="flex items-center gap-1.5 mb-3 pb-3 border-b border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span>
                  <span className="ml-2 text-xs text-slate-600 font-mono truncate">{project.path}</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-white font-semibold text-base leading-snug">{project.title}</h3>
                  <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full border font-medium ${project.badgeStyle}`}>{project.badge}</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">{t}</span>
                  ))}
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">What this shows:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.skills.map((s) => (
                      <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10">{s}</span>
                    ))}
                  </div>
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 transition-colors mt-1">
                  <Github className="w-3 h-3" /> {project.linkLabel} <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>

          <div className="mb-6 border border-white/10 rounded-xl overflow-hidden bg-white/5">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-white/[0.03]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <span className="font-mono text-xs text-slate-400">dealhawk — live alert screenshots</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              <div className="flex flex-col gap-2">
                <p className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider">Deal Alert</p>
                <img src="/homelab/dealhawk-alert.jpg" alt="DealHawk deal alert example" className="rounded-lg border border-white/10 w-full object-contain max-h-96" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-mono text-[10px] text-amber-400 uppercase tracking-wider">Error / Warning Alert</p>
                <img src="/homelab/dealhawk-warning.jpg" alt="DealHawk error alert example" className="rounded-lg border border-white/10 w-full object-contain max-h-96" />
              </div>
            </div>
          </div>

          <div className="mb-12 border border-amber-500/20 rounded-xl bg-amber-950/10 overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-amber-500/20 bg-amber-900/10 flex-wrap gap-y-1">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0"></span>
              <span className="font-mono text-xs text-amber-400">dealhawk — reliability notes</span>
              <span className="ml-auto font-mono text-[10px] text-amber-600 hidden sm:block">// real incidents beat made-up resume bullets</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-amber-500/10 md:divide-y-0 md:divide-x md:divide-amber-500/10">
              <div className="p-4">
                <p className="font-mono text-[10px] text-amber-500 mb-2 uppercase tracking-wider">Incident #1</p>
                <p className="font-mono text-xs text-amber-300 mb-1">Amazon TLS fingerprint block</p>
                <p className="text-slate-500 text-xs leading-relaxed">Requests were getting flagged by bot detection. I swapped to <code className="text-emerald-400 text-[10px]">curl_cffi</code> and restored stable scraping instead of pretending the problem would fix itself.</p>
              </div>
              <div className="p-4">
                <p className="font-mono text-[10px] text-amber-500 mb-2 uppercase tracking-wider">Incident #2</p>
                <p className="font-mono text-xs text-amber-300 mb-1">Scheduler drift after restart</p>
                <p className="text-slate-500 text-xs leading-relaxed">Container restarts caused scheduled jobs to stop behaving predictably. I tightened restart behavior, improved job visibility, and verified recovery timing after service restarts.</p>
              </div>
              <div className="p-4">
                <p className="font-mono text-[10px] text-amber-500 mb-2 uppercase tracking-wider">Incident #3</p>
                <p className="font-mono text-xs text-amber-300 mb-1">SQLite lock contention</p>
                <p className="text-slate-500 text-xs leading-relaxed">Concurrent writes caused database lock errors. I fixed it with WAL mode and better connection handling. Small stack, practical fix, no infrastructure theater.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="infrastructure" className="py-8 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between gap-3 mb-6 flex-wrap gap-y-2">
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
          <p className="text-slate-400 text-sm mb-4 max-w-3xl">
            This is the part I like most: running services, watching the health data, and fixing what breaks. The dashboard below is live, not mocked.
          </p>
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <iframe
              src="https://monitor.betgevergiz.com/d/2291b076-6042-499d-bca1-724ac0a21850/proxmox-homelab?orgId=1&refresh=30s&theme=dark&kiosk"
              width="100%"
              frameBorder="0"
              title="Homelab Live Metrics"
              className="w-full h-[250px] md:h-[400px]"
            />
            <div className="px-4 py-2 flex items-center justify-between border-t border-white/10 flex-wrap gap-2">
              <span className="text-xs text-slate-500">Live data · refreshes every 30s</span>
              <a href="https://monitor.betgevergiz.com" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                Open in Grafana →
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="flex items-baseline gap-3 mb-8">
            <div className="w-1 h-7 rounded-full bg-slate-600"></div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
            {skillGroups.map((group) => (
              <div key={group.title} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-3">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm text-slate-400 max-w-3xl">
            Currently studying for <span className="text-white font-medium">CompTIA Network+</span>. I&apos;m deliberately keeping the emphasis on systems, support, networking, and operational reliability — not inflating myself into a security specialist before I&apos;ve earned that yet.
          </div>
        </section>

        <section className="py-14 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-3">Let&apos;s talk</h2>
          <p className="text-slate-400 text-base leading-relaxed mb-4 max-w-2xl mx-auto">
            If you&apos;re hiring for help desk, IT support, junior sysadmin, or infrastructure support, I&apos;m ready to contribute immediately in a hands-on support environment. My value is simple: I can work well with users, troubleshoot methodically, and keep learning fast on the systems side.
          </p>
          <p className="text-slate-500 text-sm mt-4 mb-6 font-mono text-xs border-l-2 border-emerald-500/40 pl-3 max-w-2xl mx-auto text-left break-words">
            // Clear communicator.<br />
            // Hands-on lab operator.<br />
            // Junior title, real reps.
          </p>
          <button
            onClick={handleEmailCopy}
            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-lg transition-all duration-200 cursor-pointer text-sm sm:text-base"
          >
            <Mail className="w-4 h-4 shrink-0" /> <span className="truncate">{copied ? "jbetgevergiz@gmail.com copied ✓" : "jbetgevergiz@gmail.com"}</span>
          </button>
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

        <footer className="py-8 px-4 sm:px-6 border-t border-white/10 max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
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
      <ConsoleMessage />
      <EasterEgg />
      <ScrollProgress />
      {copied && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0d1117] border border-emerald-500/40 text-emerald-400 font-mono text-xs px-4 py-2 rounded-lg shadow-lg animate-fade-in">
          $ echo &quot;jbetgevergiz@gmail.com&quot; | pbcopy ✓
        </div>
      )}
    </div>
  );
}
