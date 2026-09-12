import { useEffect, useState } from 'react';
import { Plug, Plus, Trash2, RefreshCw, CheckCircle, XCircle } from 'lucide-react';

interface Props {
  phoenix: ReturnType<typeof import('../hooks/usePhoenix').usePhoenix>;
}

export function MCPPanel({ phoenix }: Props) {
  const [showAdd, setShowAdd] = useState(false);
  const [name, setName] = useState('');
  const [transport, setTransport] = useState('sse');
  const [url, setUrl] = useState('');

  useEffect(() => { phoenix.loadMCP(); }, []);

  const handleAdd = async () => {
    if (!name) return;
    await phoenix.loadMCP();
    setShowAdd(false);
    setName(''); setUrl('');
  };

  return (
    <div className="p-3 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs text-phoenix-muted font-code uppercase">Connectors</span>
        <button onClick={() => setShowAdd(!showAdd)} className="text-phoenix-ember hover:text-phoenix-fire transition-colors"><Plus size={16} /></button>
      </div>

      {showAdd && (
        <div className="bg-phoenix-bg border border-phoenix-border rounded-lg p-3 space-y-2 animate-fade-in">
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Connector name" className="w-full bg-phoenix-surface border border-phoenix-border rounded px-2.5 py-1.5 text-xs text-phoenix-text placeholder:text-phoenix-muted/50 focus:outline-none focus:border-phoenix-ember/50" />
          <div className="flex gap-2">
            <button onClick={() => setTransport('sse')} className={`flex-1 py-1.5 rounded text-xs font-code ${transport==='sse' ? 'bg-phoenix-ember text-white' : 'bg-phoenix-surface text-phoenix-muted border border-phoenix-border'}`}>SSE</button>
            <button onClick={() => setTransport('stdio')} className={`flex-1 py-1.5 rounded text-xs font-code ${transport==='stdio' ? 'bg-phoenix-ember text-white' : 'bg-phoenix-surface text-phoenix-muted border border-phoenix-border'}`}>Stdio</button>
          </div>
          {transport === 'sse' && <input type="text" value={url} onChange={e => setUrl(e.target.value)} placeholder="Server URL" className="w-full bg-phoenix-surface border border-phoenix-border rounded px-2.5 py-1.5 text-xs text-phoenix-text placeholder:text-phoenix-muted/50 focus:outline-none focus:border-phoenix-ember/50" />}
          <button onClick={handleAdd} className="w-full py-1.5 bg-phoenix-ember text-white rounded text-xs font-semibold hover:brightness-110 transition-all">Connect</button>
        </div>
      )}

      <div className="space-y-1.5">
        {phoenix.mcpConnections.length === 0 ? (
          <p className="text-xs text-phoenix-muted text-center py-4">No connectors configured</p>
        ) : phoenix.mcpConnections.map(conn => (
          <div key={conn.name} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-phoenix-bg border border-phoenix-border">
            <Plug size={14} className="text-phoenix-ember shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-phoenix-text font-medium">{conn.name}</div>
              <div className="text-[10px] text-phoenix-muted font-code">{conn.transport} &middot; {conn.tools.length} tools</div>
            </div>
            {conn.status === 'connected' ? <CheckCircle size={12} className="text-phoenix-success" /> : <XCircle size={12} className="text-phoenix-error" />}
          </div>
        ))}
      </div>
    </div>
  );
}
