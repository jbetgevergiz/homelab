'use client';
import { useEffect, useState } from 'react';

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

const TERMINAL_LINES = [
  { delay: 0,    text: 'root@proxmox:~# pct list', type: 'cmd' },
  { delay: 300,  text: 'VMID    Status    Name', type: 'header' },
  { delay: 400,  text: '101     running   pihole', type: 'row' },
  { delay: 500,  text: '103     running   cloudflared', type: 'row' },
  { delay: 600,  text: '106     running   openclaw', type: 'row' },
  { delay: 700,  text: '107     running   searxng', type: 'row' },
  { delay: 800,  text: '111     running   n8n', type: 'row' },
  { delay: 900,  text: '112     running   vaultwarden', type: 'row' },
  { delay: 1000, text: '119     running   blog', type: 'row' },
  { delay: 1100, text: '121     running   website', type: 'row' },
  { delay: 1200, text: '128     running   postgres', type: 'row' },
  { delay: 1300, text: '129     running   media', type: 'row' },
  { delay: 1400, text: '131     running   dealhawk', type: 'row' },
  { delay: 1500, text: '132     running   status-api', type: 'row' },
  { delay: 1600, text: '133     running   monitoring', type: 'row' },
  { delay: 1900, text: 'root@proxmox:~# uptime', type: 'cmd' },
  { delay: 2200, text: ' 15:42:03 up 47 days, 3:21,  load average: 0.42, 0.38, 0.35', type: 'output' },
  { delay: 2500, text: 'root@proxmox:~# df -h /', type: 'cmd' },
  { delay: 2800, text: 'Filesystem   Size  Used Avail Use%', type: 'header' },
  { delay: 3000, text: '/dev/sda1    110G   41G   65G  39%', type: 'output' },
  { delay: 3300, text: 'root@proxmox:~# echo "You found it. Nice."', type: 'cmd' },
  { delay: 3700, text: 'You found it. Nice.', type: 'special' },
  { delay: 4100, text: 'root@proxmox:~# _', type: 'cmd' },
];

export default function EasterEgg() {
  const [open, setOpen] = useState(false);
  const [visibleLines, setVisibleLines] = useState<{text: string, type: string}[]>([]);
  const [konamiProgress, setKonamiProgress] = useState(0);
  const [typedBuffer, setTypedBuffer] = useState('');

  useEffect(() => {
    let kProgress = 0;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === KONAMI[kProgress]) {
        kProgress++;
        if (kProgress === KONAMI.length) {
          kProgress = 0;
          triggerEasterEgg();
        }
      } else {
        kProgress = e.key === KONAMI[0] ? 1 : 0;
      }
      setKonamiProgress(kProgress);

      if (e.key.length === 1) {
        setTypedBuffer(prev => {
          const next = (prev + e.key).slice(-4);
          if (next === 'help') triggerEasterEgg();
          return next;
        });
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  function triggerEasterEgg() {
    setOpen(true);
    setVisibleLines([]);
    TERMINAL_LINES.forEach(({ delay, text, type }) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, { text, type }]);
      }, delay);
    });
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-[#0d1117] border border-white/10 rounded-xl w-full max-w-2xl mx-4 overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/5">
          <span className="w-3 h-3 rounded-full bg-red-500/70 cursor-pointer" onClick={() => setOpen(false)} />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
          <span className="ml-3 text-xs text-slate-500 font-mono">root@proxmox — bash</span>
          <span className="ml-auto text-xs text-slate-600 font-mono">click outside to close</span>
        </div>
        <div className="p-4 font-mono text-xs space-y-0.5 min-h-[300px] max-h-[500px] overflow-y-auto">
          {visibleLines.map((line, i) => (
            <div key={i} className={
              line.type === 'cmd' ? 'text-emerald-400' :
              line.type === 'header' ? 'text-slate-400 font-bold' :
              line.type === 'row' ? 'text-slate-300' :
              line.type === 'special' ? 'text-yellow-400 font-bold' :
              'text-slate-500'
            }>
              {line.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
