import { useState } from 'react';
import { Save, RefreshCw, Server, Cpu, Globe, Key } from 'lucide-react';

interface Props {
  phoenix: ReturnType<typeof import('../hooks/usePhoenix').usePhoenix>;
}

export function SettingsPanel({ phoenix }: Props) {
  const [url, setUrl] = useState(phoenix.serverUrl);

  const handleSave = () => {
    phoenix.setServerUrl(url);
    phoenix.testConnection();
  };

  return (
    <div className="p-3 space-y-4">
      {/* Server */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-phoenix-muted font-code uppercase">
          <Server size={12} /> Server
        </div>
        <div className="space-y-2">
          <input type="text" value={url} onChange={e => setUrl(e.target.value)} className="w-full bg-phoenix-bg border border-phoenix-border rounded-lg px-3 py-2 text-xs text-phoenix-text font-code focus:outline-none focus:border-phoenix-ember/50" placeholder="http://127.0.0.1:5000" />
          <div className="flex gap-2">
            <button onClick={handleSave} className="flex-1 flex items-center justify-center gap-1.5 py-1.5 bg-phoenix-ember text-white rounded-lg text-xs font-semibold hover:brightness-110 transition-all"><Save size={12} /> Save</button>
            <button onClick={() => phoenix.testConnection()} className="flex-1 flex items-center justify-center gap-1.5 py-1.5 bg-phoenix-surface border border-phoenix-border text-phoenix-muted rounded-lg text-xs hover:text-phoenix-text transition-all"><RefreshCw size={12} /> Test</button>
          </div>
        </div>
      </div>

      {/* Status */}
      {phoenix.serverStatus && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-phoenix-muted font-code uppercase">
            <Cpu size={12} /> Server Info
          </div>
          <div className="bg-phoenix-bg border border-phoenix-border rounded-lg divide-y divide-phoenix-border">
            <div className="flex items-center justify-between px-3 py-2"><span className="text-xs text-phoenix-muted">Provider</span><span className="text-xs text-phoenix-text font-code">{phoenix.serverStatus.provider}</span></div>
            <div className="flex items-center justify-between px-3 py-2"><span className="text-xs text-phoenix-muted">Model</span><span className="text-xs text-phoenix-text font-code">{phoenix.serverStatus.model}</span></div>
            <div className="flex items-center justify-between px-3 py-2"><span className="text-xs text-phoenix-muted">OS</span><span className="text-xs text-phoenix-text font-code">{phoenix.serverStatus.os_name}</span></div>
            <div className="flex items-center justify-between px-3 py-2"><span className="text-xs text-phoenix-muted">Telegram</span><span className={`text-xs font-code ${phoenix.serverStatus.telegram_enabled ? 'text-phoenix-success' : 'text-phoenix-muted'}`}>{phoenix.serverStatus.telegram_status}</span></div>
          </div>
        </div>
      )}

      <p className="text-[10px] text-phoenix-muted/50 text-center">Credentials managed by PHOENIX server</p>
    </div>
  );
}
