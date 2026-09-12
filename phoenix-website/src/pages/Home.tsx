export default function Home() {
  return (
    <main className="flex-1 w-full bg-grid-tech">
      {/* Hero */}
      <section className="max-w-[1240px] mx-auto px-6 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-elevated border border-border text-text">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-ember">OPEN SOURCE &bull; AI &bull; TERMINAL &bull; ANDROID</span>
            </div>
            <h1 className="font-display text-[48px] leading-[56px] tracking-tight font-bold text-text">
              Your AI-powered <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">terminal companion.</span>
            </h1>
            <p className="text-lg text-muted max-w-xl leading-relaxed">
              Code, automate and build with PHOENIX directly from your terminal. Built for Android Termux, Linux, and remote shell environments.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#install" className="px-5 py-3 rounded-md bg-ember text-bg text-[15px] font-mono font-bold flex items-center gap-2 hover:brightness-110 transition-all glow-ember active:scale-[0.98]">
                Install PHOENIX
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
              <a href="https://github.com/sufiyan-sabeel/Phoenix" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-md bg-surface border border-border text-text text-[15px] font-mono font-medium hover:bg-elevated transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path></svg>
                View on GitHub
              </a>
            </div>
            <div className="p-3 bg-surface border border-border rounded-md flex items-center justify-between text-xs font-mono text-text">
              <div className="flex items-center gap-2 truncate">
                <span className="text-ember font-bold select-none">&gt;</span>
                <span className="select-all">pkg install phoenix &amp;&amp; phoenix</span>
              </div>
              <button
                className="p-1.5 rounded hover:bg-elevated text-muted hover:text-ember transition-colors flex items-center gap-1"
                onClick={() => navigator.clipboard.writeText('pkg install phoenix && phoenix')}
              >
                <span className="material-symbols-outlined text-sm">content_copy</span>
                <span className="font-mono text-[10px] tracking-widest uppercase hidden sm:inline">COPY</span>
              </button>
            </div>
            <div className="text-xs font-mono text-muted/80 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-ember"></span>
              <span>Architected &amp; maintained by <span className="text-text font-medium">Umaiz Sufiyan</span></span>
            </div>
          </div>

          {/* Terminal Preview */}
          <div className="lg:col-span-6">
            <div className="w-full rounded-lg bg-surface border border-border overflow-hidden glow-ember-subtle">
              <div className="px-4 py-2.5 bg-elevated border-b border-border flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-error/60 border border-error/40"></span>
                  <span className="w-3 h-3 rounded-full bg-tertiary/60 border border-tertiary/40"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/60 border border-emerald-400/40"></span>
                  <span className="ml-2 text-xs font-mono text-muted font-medium">PHOENIX CLI &bull; session_01</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] tracking-widest uppercase px-1.5 py-0.5 rounded bg-bg text-emerald-400 border border-border">PID: 4921</span>
                  <span className="material-symbols-outlined text-sm text-muted">splitscreen</span>
                </div>
              </div>
              <div className="p-5 font-mono text-[13px] leading-relaxed text-text bg-bg space-y-2">
                <div className="text-muted flex items-center gap-2">
                  <span className="text-ember font-bold">&gt;</span>
                  <span className="text-text">phoenix</span>
                </div>
                <div className="text-ember font-bold tracking-tight">PHOENIX CLI v0.4.2 [Termux aarch64]</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-0.5 pt-1 text-muted text-xs">
                  <div><span className="text-muted/70">Provider:</span> <span className="text-text">OpenRouter (DeepSeek / Claude)</span></div>
                  <div><span className="text-muted/70">Model:</span> <span className="text-text">openrouter/free-tier</span></div>
                  <div><span className="text-muted/70">Status:</span> <span className="text-emerald-400">● Ready (latency: 24ms)</span></div>
                  <div><span className="text-muted/70">Workspace:</span> <span className="text-text">~/projects/phoenix-core</span></div>
                </div>
                <div className="pt-3 border-t border-border/60 space-y-1">
                  <div className="text-tertiary flex items-center gap-1.5">
                    <span className="text-ember">&gt;</span> Ask PHOENIX anything...
                  </div>
                  <div className="text-muted flex items-center gap-1.5">
                    <span className="text-ember">&gt;</span> Running automated diagnostics...
                  </div>
                  <div className="text-emerald-400 flex items-center gap-1.5">
                    <span>✔</span> Termux API hooks verified
                  </div>
                  <div className="text-emerald-400 flex items-center gap-1.5">
                    <span>✔</span> Android ADB bridge detected (Device: Pixel 8 Pro)
                  </div>
                  <div className="text-emerald-400 flex items-center gap-1.5">
                    <span>✔</span> Context memory indexed (14 files, 4.2k tokens)
                  </div>
                </div>
                <div className="pt-3 flex items-center gap-1 text-text font-semibold">
                  <span className="text-ember">&gt;</span>
                  <span>Ready for command.</span>
                  <span className="inline-block w-2.5 h-4 bg-ember caret-blink ml-1"></span>
                </div>
              </div>
              <div className="px-4 py-1.5 bg-elevated border-t border-border flex items-center justify-between text-[11px] font-mono text-muted">
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Online</span>
                <span>UTF-8 &bull; aarch64</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-border bg-bg">
        <div className="max-w-[1240px] mx-auto px-6 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-border text-center">
            {['OPEN SOURCE (MIT)', 'TERMUX READY', 'MULTI-PROVIDER AI', 'CLI FIRST', 'ANDROID & LINUX', 'LOCAL CONTEXT MEMORY'].map((item, i) => (
              <div key={i} className="py-2 sm:py-0 px-3 flex items-center justify-center gap-2 text-muted font-mono text-[10px] tracking-widest uppercase">
                <span className="material-symbols-outlined text-ember text-base">
                  {['verified', 'phone_android', 'hub', 'terminal', 'devices', 'memory'][i]}
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="max-w-[1240px] mx-auto px-6 py-10" id="features">
        <div className="mb-10">
          <div className="font-mono text-[10px] tracking-widest uppercase text-ember mb-1">01 / CAPABILITIES</div>
          <h2 className="font-display text-[32px] leading-[40px] tracking-tight font-semibold text-text">One CLI. Multiple workflows.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: 'code', tag: '01 / CODE', title: 'AI Coding Agent', desc: 'AI-assisted coding workflows, diff inspection, and patch generation directly from your terminal. Autonomously navigates codebases and reviews syntax.', cmd: 'phoenix code --diff ./src' },
            { icon: 'smartphone', tag: '02 / ANDROID', title: 'Android & Termux Control', desc: 'Android automation capabilities through supported ADB workflows, Termux native intents, and direct sensor/notification API integrations.', cmd: 'phoenix adb --tap-record app.flow' },
            { icon: 'terminal', tag: '03 / SHELL', title: 'Terminal Intelligence', desc: 'AI-powered command synthesis, syntax error auto-correction, and execution pipeline safety checks to guard against destructive scripts.', cmd: 'phoenix shell "compress all pngs"' },
          ].map((card, i) => (
            <div key={i} className="bg-surface border border-border rounded-lg p-6 flex flex-col justify-between hover:border-ember/40 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-md bg-elevated border border-border flex items-center justify-center text-ember group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-xl">{card.icon}</span>
                  </div>
                  <span className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded bg-elevated text-ember border border-border">{card.tag}</span>
                </div>
                <h3 className="font-display text-[22px] leading-[28px] font-semibold text-text mb-2">{card.title}</h3>
                <p className="text-sm text-muted mb-6 leading-relaxed">{card.desc}</p>
              </div>
              <div className="p-3 bg-bg rounded-md border border-border font-mono text-xs text-muted">
                <span className="text-ember font-bold">{card.cmd.split(' ')[0]}</span> {card.cmd.split(' ').slice(1).join(' ')}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Installation */}
      <section className="max-w-[1240px] mx-auto px-6 py-12" id="install">
        <div className="bg-surface border border-border rounded-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-[10px] tracking-widest uppercase text-ember">02 / PORTABILITY FIRST</span>
              <h2 className="font-display text-[32px] leading-[40px] font-semibold text-text">Serious AI tooling. <br/>In your pocket.</h2>
              <p className="text-lg text-muted leading-relaxed">
                Built around terminal-first workflows for developers using Termux and Android without compromising desktop performance.
              </p>
              <div className="space-y-2 pt-2">
                {['Zero bloated dependencies (Pure Python 3.10+)', 'ARM64 / aarch64 native acceleration', 'Works offline with local quant models via Ollama'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-text">
                    <span className="material-symbols-outlined text-emerald-400 text-sm">check_circle</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-bg border border-border rounded-lg overflow-hidden">
                <div className="flex border-b border-border bg-elevated">
                  <button className="px-4 py-2.5 text-xs font-mono font-semibold border-b-2 border-ember text-ember bg-bg">Termux (pkg)</button>
                  <button className="px-4 py-2.5 text-xs font-mono text-muted hover:text-text border-b-2 border-transparent">PyPI (pip)</button>
                  <button className="px-4 py-2.5 text-xs font-mono text-muted hover:text-text border-b-2 border-transparent">Build from Source</button>
                </div>
                <div className="p-5 font-mono text-[13px] space-y-3">
                  <div className="text-muted/80 text-xs"># Update package repos and install directly</div>
                  <div className="p-3 bg-surface rounded border border-border flex items-center justify-between text-text">
                    <code className="text-sm">pkg update &amp;&amp; pkg install phoenix-cli</code>
                    <button className="p-1 rounded hover:bg-elevated text-muted hover:text-ember transition-colors">
                      <span className="material-symbols-outlined text-sm">content_copy</span>
                    </button>
                  </div>
                  <div className="text-muted/80 text-xs pt-2"># Initialize configuration and set up API provider</div>
                  <div className="p-3 bg-surface rounded border border-border flex items-center justify-between text-text">
                    <code className="text-sm">phoenix init --quickstart</code>
                    <button className="p-1 rounded hover:bg-elevated text-muted hover:text-ember transition-colors">
                      <span className="material-symbols-outlined text-sm">content_copy</span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between pt-2 text-[11px] font-mono text-muted">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="material-symbols-outlined text-xs">verified</span> Tested on Termux Android 12/13/14
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Matrix */}
      <section className="max-w-[1240px] mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="font-mono text-[10px] tracking-widest uppercase text-ember mb-1">SPECIFICATIONS</div>
          <h2 className="font-display text-[32px] leading-[40px] font-semibold text-text">Built around the terminal.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'AI Coding Agent', status: 'AVAILABLE', color: 'emerald', desc: 'Full project tree reading, patch generation, and git commit integration.' },
            { title: 'Multi-Provider AI', status: 'AVAILABLE', color: 'emerald', desc: 'Seamless support for OpenRouter, Groq, Anthropic, and local Ollama nodes.' },
            { title: 'Terminal Assistant', status: 'AVAILABLE', color: 'emerald', desc: 'Natural language to bash translation with pipe safety inspections.' },
            { title: 'Android / ADB Bridge', status: 'AVAILABLE', color: 'emerald', desc: 'Direct shell-level hardware control, screenshot capture, and touch inputs.' },
            { title: 'Shell Automation', status: 'AVAILABLE', color: 'emerald', desc: 'Declarative task sequences with retry logic and telemetry logging.' },
            { title: 'Custom Extensions', status: 'IN DEV', color: 'ember', desc: 'Write custom plugins in Lua or Python to extend PHOENIX capabilities.' },
            { title: 'Persistent Memory', status: 'IN DEV', color: 'ember', desc: 'Embedded vector store for long-term project comprehension.' },
            { title: 'Terminal Vision', status: 'PLANNED', color: 'ghost', desc: 'Direct terminal render of image outputs and UI screenshot debugging.' },
            { title: 'Voice Mode', status: 'PLANNED', color: 'ghost', desc: 'Hands-free terminal command dispatch via low-latency Whisper models.' },
          ].map((f, i) => (
            <div key={i} className="p-4 rounded-lg bg-surface border border-border flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display text-lg font-semibold text-text">{f.title}</span>
                  <span className={`font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded border ${
                    f.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                    f.color === 'ember' ? 'bg-ember/10 text-ember border-ember/20' :
                    'bg-elevated text-muted border-border'
                  }`}>{f.status}</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLI Showcase */}
      <section className="max-w-[1240px] mx-auto px-6 py-12">
        <div className="w-full rounded-xl bg-bg border border-border overflow-hidden glow-ember-subtle">
          <div className="px-4 py-3 bg-elevated border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-border"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-border"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-border"></span>
              <span className="ml-2 text-xs font-mono text-text">phoenix-session // automated-refactor-daemon</span>
            </div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-ember">BUFFER: STREAMING</span>
          </div>
          <div className="p-6 font-mono text-[13px] leading-relaxed space-y-3 bg-bg">
            <div className="text-muted">
              <span className="text-ember font-bold">phoenix</span> run --agent refactor --target ./services/android_bridge.py
            </div>
            <div className="text-text">[PHOENIX v0.4.2] Loading abstract syntax tree...</div>
            <div className="text-muted pl-4 border-l-2 border-ember/40 space-y-1">
              <p>&gt; Scanning project... Reading AST... 18 modules verified.</p>
              <p className="text-tertiary">&gt; Inspecting <code className="text-text bg-elevated px-1 py-0.5 rounded">android_bridge.py: line 42</code></p>
              <p className="text-emerald-400">✔ Found potential memory leak in unbounded socket handler thread.</p>
              <p>&gt; Applying non-blocking asynchronous event loop patch...</p>
            </div>
            <div className="mt-4 rounded border border-border overflow-hidden font-mono text-xs">
              <div className="bg-elevated px-3 py-1.5 border-b border-border text-muted flex justify-between">
                <span>DIFF: services/android_bridge.py</span>
                <span className="text-emerald-400">+4 lines / -2 lines</span>
              </div>
              <div className="bg-bg p-3 space-y-1">
                <div className="text-red-400 bg-red-950/20 px-2 py-0.5 rounded">- while self.is_connected: thread.sleep(100)</div>
                <div className="text-emerald-400 bg-emerald-950/20 px-2 py-0.5 rounded">+ async with asyncio.timeout(30):</div>
                <div className="text-emerald-400 bg-emerald-950/20 px-2 py-0.5 rounded">+     await self.event_stream.read_message()</div>
              </div>
            </div>
            <div className="text-text flex items-center gap-2 pt-2">
              <span className="text-emerald-400 font-bold">✔</span>
              <span>Refactor validated against test suite. Commit created: <code className="text-ember font-mono">c84a2f1</code></span>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="max-w-[1240px] mx-auto px-6 py-12" id="architecture">
        <div className="mb-8">
          <div className="font-mono text-[10px] tracking-widest uppercase text-ember mb-1">03 / ARCHITECTURE</div>
          <h2 className="font-display text-[32px] leading-[40px] font-semibold text-text">Decoupled. Extensible. Lightweight.</h2>
        </div>
        <div className="bg-surface border border-border rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="space-y-3">
              <div className="font-mono text-[10px] tracking-widest uppercase text-ghost">UPSTREAM AI PROVIDERS</div>
              {['OpenRouter (Multi-Model)', 'Groq (Ultra-low Latency)', 'Ollama (Local Offline LLM)'].map((name, i) => (
                <div key={i} className="p-3 bg-elevated rounded border border-border flex items-center justify-between">
                  <span className="text-xs font-mono text-text">{name}</span>
                  <span className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-ember' : 'bg-emerald-400'}`}></span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-bg border-2 border-ember rounded-lg glow-ember text-center">
              <div className="w-12 h-12 rounded-full bg-ember/20 border border-ember flex items-center justify-center text-ember mb-3">
                <span className="material-symbols-outlined text-2xl">memory</span>
              </div>
              <h3 className="text-lg font-display font-bold text-text">PHOENIX CORE</h3>
              <p className="text-xs font-mono text-ember mb-2">v0.4.2 [Rust / Python]</p>
              <p className="text-sm text-muted max-w-xs">Dispatches prompts, formats context trees, manages sandboxed executions, and monitors latency.</p>
            </div>
            <div className="space-y-3">
              <div className="font-mono text-[10px] tracking-widest uppercase text-ghost">SUBSYSTEM EXECUTION</div>
              {[
                { icon: 'terminal', name: 'Terminal Engine & PTY' },
                { icon: 'smartphone', name: 'Android ADB & Termux API' },
                { icon: 'extension', name: 'Extension Sandbox (Lua)' },
              ].map((item, i) => (
                <div key={i} className="p-3 bg-elevated rounded border border-border flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-ember">{item.icon}</span>
                  <span className="text-xs font-mono text-text">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Docs + Roadmap */}
      <section className="max-w-[1240px] mx-auto px-6 py-12" id="docs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-surface border border-border rounded-xl p-6">
            <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
              <div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-ember">DOCUMENTATION</div>
                <h3 className="font-display text-[22px] leading-[28px] font-semibold text-text">Quickstart Guide</h3>
              </div>
              <a href="/Phoenix/docs/getting-started" className="text-xs font-mono text-ember hover:underline flex items-center gap-1">
                Full Manual <span className="material-symbols-outlined text-xs">open_in_new</span>
              </a>
            </div>
            <div className="space-y-4 text-sm text-muted">
              <p>1. Export your API token or let PHOENIX manage secrets via keychain:</p>
              <div className="p-3 bg-bg border border-border rounded font-mono text-xs text-text">export OPENROUTER_API_KEY="sk-or-v1-..."</div>
              <p>2. Execute an interactive prompt or pipe command outputs:</p>
              <div className="p-3 bg-bg border border-border rounded font-mono text-xs text-text">git status | phoenix "summarize changes and suggest commit title"</div>
              <p>3. Generate executable shell scripts safely:</p>
              <div className="p-3 bg-bg border border-border rounded font-mono text-xs text-text">phoenix make-script "backup docker volumes daily at 2am"</div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-surface border border-border rounded-xl p-6" id="roadmap">
            <div className="border-b border-border pb-4 mb-6">
              <div className="font-mono text-[10px] tracking-widest uppercase text-ember">DEVELOPMENT CADENCE</div>
              <h3 className="font-display text-[22px] leading-[28px] font-semibold text-text">Project Roadmap</h3>
            </div>
            <div className="space-y-6">
              <div className="relative pl-6 border-l border-emerald-500/40">
                <span className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-emerald-400"></span>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-display font-semibold text-text">v0.4.0</span>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-emerald-400">RELEASED</span>
                </div>
                <p className="text-sm text-muted">Initial open-source release, Termux package, OpenRouter integration.</p>
              </div>
              <div className="relative pl-6 border-l border-ember">
                <span className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-ember animate-pulse"></span>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-display font-semibold text-text">v0.5.0</span>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-ember">IN PROGRESS</span>
                </div>
                <p className="text-sm text-muted">Local vector memory, custom tool hooks, multi-file code editing agent.</p>
              </div>
              <div className="relative pl-6 border-l border-border">
                <span className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-border"></span>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-display font-semibold text-text">v0.6.0+</span>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-muted">PLANNING</span>
                </div>
                <p className="text-sm text-muted">Terminal Vision, WebRTC audio, plugin marketplace.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-[1240px] mx-auto px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-elevated border border-border text-text">
            <span className="material-symbols-outlined text-ember text-sm">favorite</span>
            <span className="font-mono text-[10px] tracking-widest uppercase">BUILT IN THE OPEN &bull; MIT LICENSED</span>
          </div>
          <h2 className="font-display text-[48px] leading-[56px] tracking-tight font-bold text-text">Ready to ignite your terminal?</h2>
          <p className="text-lg text-muted">
            Free, fully open source, and built for hackers who live in the CLI. Install PHOENIX in seconds.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="#install" className="px-6 py-3 rounded-md bg-ember text-bg text-[15px] font-mono font-bold flex items-center gap-2 hover:brightness-110 transition-all glow-ember active:scale-[0.98]">
              Install PHOENIX
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
            <a href="/Phoenix/docs/getting-started" className="px-6 py-3 rounded-md bg-surface border border-border text-text text-[15px] font-mono font-medium hover:bg-elevated transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-base">menu_book</span>
              Read Documentation
            </a>
          </div>
          <div className="text-xs font-mono text-muted pt-4">
            Engineered by <span className="text-ember font-semibold">Umaiz Sufiyan</span> &amp; open source contributors.
          </div>
        </div>
      </section>
    </main>
  )
}
