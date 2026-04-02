'use client';
import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const filled = Math.round(progress / 10);
  const empty = 10 - filled;

  return (
    <div className="fixed bottom-4 left-4 z-40 font-mono text-[10px] text-slate-600 hidden lg:block select-none pointer-events-none">
      [{'\u2588'.repeat(filled)}{'\u2591'.repeat(empty)}] {progress}%
    </div>
  );
}
