'use client';
import { useEffect } from 'react';

export default function ConsoleMessage() {
  useEffect(() => {
    console.log(
      '%c Hey, you opened the console. Respect. ',
      'background: #0d1117; color: #10b981; font-size: 14px; font-weight: bold; padding: 8px 12px; border-radius: 4px; border: 1px solid #10b981;'
    );
    console.log(
      '%c What\'s running this page:',
      'color: #94a3b8; font-size: 12px; margin-top: 4px;'
    );
    console.log(
      '%c → Next.js static export on GitHub Pages\n → Grafana + Prometheus monitoring homelab live\n → Flask API on Proxmox serving real container metrics\n → 17 LXC containers, all self-hosted\n → Cloudflare Tunnel — zero open ports',
      'color: #64748b; font-size: 11px; line-height: 2;'
    );
    console.log(
      '%c Want to talk infra? jbetgevergiz@gmail.com',
      'color: #10b981; font-size: 12px; font-weight: bold; margin-top: 4px;'
    );
  }, []);
  return null;
}
