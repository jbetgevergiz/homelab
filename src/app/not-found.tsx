export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center font-mono">
      <div className="max-w-lg w-full mx-4">
        <div className="bg-[#0d1117] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/5">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
            <span className="ml-3 text-xs text-slate-500">bash — 80×24</span>
          </div>
          <div className="p-6 space-y-2 text-xs">
            <p className="text-emerald-400">root@proxmox:~# cd /this-page</p>
            <p className="text-red-400">bash: cd: /this-page: No such file or directory</p>
            <p className="text-slate-600 mt-4"># Maybe try one of these?</p>
            <p className="text-emerald-400 mt-2">root@proxmox:~# ls ~/</p>
            <p className="text-slate-400 mt-1">about/&nbsp;&nbsp;&nbsp;projects/&nbsp;&nbsp;&nbsp;skills/&nbsp;&nbsp;&nbsp;contact/</p>
            <p className="text-emerald-400 mt-4">root@proxmox:~# cd ~/</p>
            <a
              href="/"
              className="inline-block mt-2 text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              → Return home
            </a>
            <p className="text-emerald-400 animate-pulse mt-1">_</p>
          </div>
        </div>
      </div>
    </div>
  );
}
