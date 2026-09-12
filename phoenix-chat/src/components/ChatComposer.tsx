import { useState, useRef, useCallback } from 'react';
import { Send, Paperclip, Mic, Square, Upload, X } from 'lucide-react';
import type { UploadResult } from '../types/phoenix';

interface Props {
  phoenix: ReturnType<typeof import('../hooks/usePhoenix').usePhoenix>;
}

interface AttachedFile {
  file: File;
  result?: UploadResult;
  uploading: boolean;
  error?: string;
}

export function ChatComposer({ phoenix }: Props) {
  const [text, setText] = useState('');
  const [files, setFiles] = useState<AttachedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = async () => {
    const trimmed = text.trim();
    if (!trimmed && files.length === 0) return;
    if (phoenix.isLoading) return;

    const attached = files.filter(f => f.result).map(f => ({ name: f.result!.filename, path: f.result!.path }));
    setText('');
    setFiles([]);
    await phoenix.sendMessage(trimmed || 'Analyze the attached files', attached);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  const uploadFiles = async (fileList: FileList) => {
    const newFiles: AttachedFile[] = Array.from(fileList).map(f => ({ file: f, uploading: true }));
    setFiles(prev => [...prev, ...newFiles]);

    for (let i = 0; i < newFiles.length; i++) {
      try {
        const result = await phoenix.uploadFile(newFiles[i].file);
        setFiles(prev => prev.map((f, idx) => {
          const origIdx = prev.indexOf(newFiles[i]);
          return idx === origIdx ? { ...f, result, uploading: false } : f;
        }));
      } catch (err: any) {
        setFiles(prev => prev.map((f, idx) => {
          const origIdx = prev.indexOf(newFiles[i]);
          return idx === origIdx ? { ...f, uploading: false, error: err.message } : f;
        }));
      }
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length) uploadFiles(e.dataTransfer.files);
  };

  const removeFile = (idx: number) => setFiles(prev => prev.filter((_, i) => i !== idx));

  return (
    <div className="border-t border-phoenix-border bg-phoenix-surface p-3 md:p-4">
      <div className="max-w-3xl mx-auto">
        {/* Attached files */}
        {files.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {files.map((f, i) => (
              <div key={i} className="flex items-center gap-2 bg-phoenix-elevated border border-phoenix-border rounded-lg px-2.5 py-1.5 text-xs">
                {f.uploading ? (
                  <Upload size={12} className="text-phoenix-ember animate-pulse" />
                ) : f.error ? (
                  <X size={12} className="text-phoenix-error" />
                ) : (
                  <Paperclip size={12} className="text-phoenix-success" />
                )}
                <span className="text-phoenix-text max-w-[120px] truncate">{f.file.name}</span>
                <span className="text-phoenix-muted">{(f.file.size / 1024).toFixed(1)}KB</span>
                <button onClick={() => removeFile(i)} className="text-phoenix-muted hover:text-phoenix-error"><X size={10} /></button>
              </div>
            ))}
          </div>
        )}

        {/* Composer */}
        <div
          className={`relative bg-phoenix-bg border rounded-xl transition-colors ${isDragging ? 'border-phoenix-ember' : 'border-phoenix-border focus-within:border-phoenix-ember/50'}`}
          onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
        >
          <div className="flex items-end gap-2 p-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="p-2 text-phoenix-muted hover:text-phoenix-ember hover:bg-phoenix-elevated rounded-lg transition-colors shrink-0"
              title="Attach file"
            >
              <Paperclip size={16} />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              className="hidden"
              onChange={e => e.target.files && uploadFiles(e.target.files)}
            />

            <textarea
              ref={textareaRef}
              value={text}
              onChange={e => setText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Message PHOENIX..."
              rows={1}
              className="flex-1 bg-transparent text-phoenix-text text-sm placeholder:text-phoenix-muted/50 focus:outline-none resize-none py-2 font-body max-h-[200px]"
            />

            {phoenix.isStreaming ? (
              <button onClick={phoenix.stopStreaming} className="p-2 text-phoenix-error hover:bg-phoenix-error/10 rounded-lg transition-colors shrink-0" title="Stop">
                <Square size={16} />
              </button>
            ) : (
              <button
                onClick={handleSend}
                disabled={!text.trim() && files.length === 0}
                className="p-2 bg-phoenix-ember text-white rounded-lg hover:brightness-110 disabled:opacity-30 disabled:hover:brightness-100 transition-all shrink-0"
                title="Send"
              >
                <Send size={16} />
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between mt-1.5 px-1">
          <span className="text-[10px] text-phoenix-muted/50 font-code">
            {phoenix.serverStatus ? `${phoenix.serverStatus.provider}/${phoenix.serverStatus.model}` : 'No model selected'}
          </span>
          <span className="text-[10px] text-phoenix-muted/50 font-code">Enter to send, Shift+Enter for newline</span>
        </div>
      </div>
    </div>
  );
}
