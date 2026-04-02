'use client';
import { useEffect, useState } from 'react';

interface StatusData {
  containers?: {
    running?: number;
    total?: number;
    list?: Array<{ status: string }>;
  };
  ok?: boolean;
}

export default function DynamicStatus() {
  const [data, setData] = useState<{ running: number; total: number } | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://status.betgevergiz.com/api/status')
      .then(r => r.json())
      .then((json: StatusData) => {
        const running = json.containers?.running ??
          (json.containers?.list?.filter(c => c.status === 'running').length ?? 0);
        const total = json.containers?.total ?? 0;
        setData({ running, total });
      })
      .catch(() => setError(true));
  }, []);

  if (error || !data) return null;

  return (
    <div className="font-mono text-[11px] text-emerald-500/60 mt-2 space-y-0.5">
      <span className="text-slate-600">$ curl status.betgevergiz.com/api/status</span>
      <div className="text-emerald-400/80">
        → <span className="text-emerald-300">{data.running} containers running</span>
        <span className="text-slate-500"> · {data.total - data.running} stopped</span>
        <span className="text-slate-600"> · 0 open ports</span>
      </div>
    </div>
  );
}
