'use client';
import { useEffect, useState } from 'react';

export default function DynamicStatus() {
  const [status, setStatus] = useState<{containers: number, uptime_days?: number} | null>(null);

  useEffect(() => {
    fetch('https://status.betgevergiz.com/api/status')
      .then(r => r.json())
      .then(data => {
        const running = Array.isArray(data.containers)
          ? data.containers.filter((c: {status: string}) => c.status === 'running').length
          : data.running_containers || 0;
        setStatus({ containers: running });
      })
      .catch(() => setStatus(null));
  }, []);

  if (!status) return null;

  return (
    <div className="font-mono text-[10px] text-emerald-500/50 mt-1">
      $ curl status.betgevergiz.com/api/status | jq .running_containers<br />
      <span className="text-emerald-400/70">{status.containers} containers running</span>
    </div>
  );
}
