export interface Feature {
  title: string
  description: string
  icon: string
  status: 'available' | 'in-development' | 'planned'
}

export const features: Feature[] = [
  {
    title: 'AI Coding Agent',
    description: 'Full project tree reading, patch generation, and git commit integration.',
    icon: 'Code',
    status: 'available',
  },
  {
    title: 'Multi-Provider AI',
    description: 'Seamless support for OpenRouter, Groq, Anthropic, and local Ollama nodes.',
    icon: 'Cpu',
    status: 'available',
  },
  {
    title: 'Terminal Assistant',
    description: 'Natural language to bash translation with pipe safety inspections.',
    icon: 'Terminal',
    status: 'available',
  },
  {
    title: 'Android / ADB Bridge',
    description: 'Direct shell-level hardware control, screenshot capture, and touch inputs.',
    icon: 'Smartphone',
    status: 'available',
  },
  {
    title: 'Shell Automation',
    description: 'Declarative task sequences with retry logic and telemetry logging.',
    icon: 'Clock',
    status: 'available',
  },
  {
    title: 'Custom Extensions',
    description: 'Write custom plugins in Lua or Python to extend PHOENIX capabilities.',
    icon: 'Puzzle',
    status: 'in-development',
  },
  {
    title: 'Persistent Memory',
    description: 'Embedded vector store for long-term project comprehension.',
    icon: 'Brain',
    status: 'in-development',
  },
  {
    title: 'Terminal Vision',
    description: 'Direct terminal render of image outputs and UI screenshot debugging.',
    icon: 'Eye',
    status: 'planned',
  },
  {
    title: 'Voice Mode',
    description: 'Hands-free terminal command dispatch via low-latency Whisper models.',
    icon: 'Mic',
    status: 'planned',
  },
]
