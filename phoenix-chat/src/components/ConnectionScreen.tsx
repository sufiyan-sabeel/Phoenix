import { useState, useEffect } from 'react';
import { Server, Wifi, WifiOff, Loader2 } from 'lucide-react';

interface Props {
  phoenix: ReturnType<typeof import('../hooks/usePhoenix').usePhoenix>;
}

export function ConnectionScreen({ phoenix }: Props) {
  const [url, setUrl] = useState(phoenix.serverUrl);
  const [error, setError] = useState('');

  useEffect(() => {
    phoenix.testConnection();
  }, []);

  const handleConnect = async () => {
    setError('');
    phoenix.setServerUrl(url);
    const ok = await phoenix.testConnection();
    if (!ok) setError('Could not reach PHOENIX server. Make sure it is running.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <div className="text-center space-y-3">
          <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100" fill="none">
            <rect width="100" height="100" rx="20" fill="#101216"/>
            <path d="M50 12 C60 26 72 38 72 52 C72 66 62 76 50 76 C38 76 28 66 28 52 C28 38 40 26 50 12Z" fill="#FF6A00"/>
            <path d="M50 28 C55 36 61 44 61 52 C61 60 56 66 50 66 C44 66 39 60 39 52 C39 44 45 36 50 28Z" fill="#FFB347" opacity="0.6"/>
            <circle cx="50" cy="52" r="5" fill="#fff"/>
          </svg>
          <h1 className="font-display text-3xl font-bold text-phoenix-text">PHOENIX</h1>
          <p className="text-phoenix-muted text-sm">Terminal Forged AI Companion</p>
        </div>

        <div className="bg-phoenix-surface border border-phoenix-border rounded-xl p-6 space-y-5">
          <div className="flex items-center gap-2 text-phoenix-muted">
            <Server size={16} />
            <span className="font-code text-xs uppercase tracking-wider">Server Connection</span>
          </div>

          <div>
            <label className="block text-xs text-phoenix-muted mb-1.5 font-code uppercase">Server URL</label>
            <input
              type="text"
              value={url}
              onChange={e => setUrl(e.target.value)}
              className="w-full bg-phoenix-bg border border-phoenix-border rounded-lg px-3 py-2.5 font-code text-sm text-phoenix-text placeholder:text-phoenix-muted/50 focus:outline-none focus:border-phoenix-ember transition-colors"
              placeholder="http://127.0.0.1:5000"
            />
          </div>

          {error && (
            <div className="bg-phoenix-error/10 border border-phoenix-error/20 rounded-lg px-3 py-2 text-phoenix-error text-sm font-code">
              {error}
            </div>
          )}

          <button
            onClick={handleConnect}
            disabled={phoenix.connectionState === 'connecting'}
            className="w-full py-2.5 rounded-lg bg-phoenix-ember text-white font-code font-semibold text-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {phoenix.connectionState === 'connecting' ? (
              <><Loader2 size={16} className="animate-spin" /> Connecting...</>
            ) : phoenix.connectionState === 'connected' ? (
              <><Wifi size={16} /> Connected</>
            ) : (
              <><WifiOff size={16} /> Connect</>
            )}
          </button>

          <p className="text-center text-phoenix-muted/60 text-xs">
            Credentials are managed by the PHOENIX server.
          </p>
        </div>
      </div>
    </div>
  );
}
