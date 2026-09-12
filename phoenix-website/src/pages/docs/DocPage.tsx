import { useParams, Navigate } from 'react-router-dom'
import { docs } from '../../data/docs'
import type { DocPage as DocPageType } from '../../data/docs'

function renderMarkdown(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let inCodeBlock = false
  let codeLines: string[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        elements.push(
          <pre key={`code-${i}`} className="my-4 p-4 rounded-lg bg-surface border border-border overflow-x-auto">
            <code className="text-sm font-mono text-text">{codeLines.join('\n')}</code>
          </pre>
        )
        codeLines = []
        inCodeBlock = false
      } else { inCodeBlock = true }
      continue
    }
    if (inCodeBlock) { codeLines.push(line); continue }

    if (line.startsWith('# ')) {
      elements.push(<h1 key={i} className="text-3xl font-display font-bold text-text mt-8 mb-4 first:mt-0">{line.slice(2)}</h1>)
    } else if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="text-2xl font-display font-semibold text-text mt-8 mb-3">{line.slice(3)}</h2>)
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="text-xl font-display font-semibold text-text mt-6 mb-2">{line.slice(4)}</h3>)
    } else if (line.startsWith('- ')) {
      elements.push(<li key={i} className="text-muted ml-4 mb-1 list-disc">{renderInline(line.slice(2))}</li>)
    } else if (line.match(/^\d+\. /)) {
      elements.push(<li key={i} className="text-muted ml-4 mb-1 list-decimal">{renderInline(line.replace(/^\d+\. /, ''))}</li>)
    } else if (line.startsWith('> ')) {
      elements.push(<blockquote key={i} className="border-l-2 border-ember pl-4 my-4 text-muted italic">{renderInline(line.slice(2))}</blockquote>)
    } else if (line.trim() === '') {
      elements.push(<div key={i} className="h-2" />)
    } else {
      elements.push(<p key={i} className="text-muted leading-relaxed mb-2">{renderInline(line)}</p>)
    }
  }
  return elements
}

function renderInline(text: string) {
  const parts = text.split(/(`[^`]+`)/g)
  return parts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} className="px-1.5 py-0.5 rounded bg-elevated border border-border text-ember text-sm font-mono">{part.slice(1, -1)}</code>
    }
    return part
  })
}

export default function DocPage() {
  const { slug } = useParams<{ slug: string }>()
  const allPages = docs.flatMap((s) => s.items)
  const page = allPages.find((p: DocPageType) => p.slug === slug)
  if (!page) return <Navigate to="/docs/getting-started" replace />
  return <article className="prose-none">{renderMarkdown(page.content)}</article>
}
