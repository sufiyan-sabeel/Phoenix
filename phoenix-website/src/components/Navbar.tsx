export default function Navbar() {
  return (
    <header className="sticky top-0 w-full z-50 bg-bg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        <div className="flex items-center gap-3">
          <a href="/Phoenix/" className="flex items-center gap-2 text-text font-display font-semibold text-lg">
            <div className="w-7 h-7 rounded bg-elevated border border-ember/40 flex items-center justify-center">
              <span className="material-symbols-outlined text-ember text-base">terminal</span>
            </div>
            <span>PHOENIX</span>
          </a>
          <span className="font-mono text-[10px] tracking-widest uppercase px-1.5 py-0.5 rounded bg-elevated text-ember border border-border">
            v0.4.2
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/Phoenix/#features" className="text-ember border-b-2 border-ember pb-1 font-medium">Features</a>
          <a href="/Phoenix/docs/getting-started" className="text-muted hover:text-text transition-colors">Docs</a>
          <a href="/Phoenix/#install" className="text-muted hover:text-text transition-colors">Install</a>
          <a href="/Phoenix/#roadmap" className="text-muted hover:text-text transition-colors">Roadmap</a>
          <a href="https://github.com/sufiyan-sabeel/Phoenix" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-text transition-colors flex items-center gap-1.5">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path></svg>
            GitHub
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded bg-surface text-muted text-xs font-mono">
            <span className="material-symbols-outlined text-sm text-ember">terminal</span>
            <span>Terminal CLI</span>
          </div>
          <a href="/Phoenix/#install" className="px-3.5 py-1.5 rounded-md bg-ember text-bg text-sm font-mono font-semibold hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-1">
            Get Started
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </header>
  )
}
