'use client';
import { useEffect, useState } from 'react';

interface StatusData {
  containers?: {
    running?: number;
    total?: number;
    list?: Array<{ status: string }>;
  };
  uptime_seconds?: number;
  ok?: boolean;
}

function formatUptime(seconds: number): string {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  return `${days}d ${hours}h`;
}

export default function DynamicStatus() {
  const [data, setData] = useState<{ running: number; total: number; uptime: string | null } | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://status.betgevergiz.com/api/status')
      .then(r => r.json())
      .then((json: StatusData) => {
        const running = json.containers?.running ??
          (json.containers?.list?.filter(c => c.status === 'running').length ?? 0);
        const total = json.containers?.total ?? 0;
        const uptime = json.uptime_seconds != null ? formatUptime(json.uptime_seconds) : null;
        setData({ running, total, uptime });
      })
      .catch(() => setError(true));
  }, []);

  if (error || !data) return null;

  return (
    <div className="font-mono text-[11px] text-emerald-500/60 mt-2 space-y-0.5">
      <span className="text-slate-600">$ curl status.betgevergiz.com/api/status</span>
      <div className="text-emerald-400/80">
        → <span className="text-emerald-300">{data.running} containers running</span>
        {data.uptime && (
          <span className="text-slate-400"> · uptime {data.uptime}</span>
        )}
        <span className="text-slate-600"> · 0 open ports</span>
      </div>
    </div>
  );
}
