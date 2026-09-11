export interface DocPage {
  slug: string
  title: string
  content: string
}

export interface DocSection {
  title: string
  items: DocPage[]
}

export const docs: DocSection[] = [
  {
    title: 'Getting Started',
    items: [
      {
        slug: 'getting-started',
        title: 'Introduction',
        content: `# Introduction to PHOENIX

PHOENIX is an open-source AI coding and automation CLI built for terminal and Android workflows.

## What is PHOENIX?

PHOENIX is a lightweight AI agent that runs in your terminal. It provides:

- AI-assisted coding workflows
- Android automation via ADB
- Network scanning and security auditing
- 76 built-in tools
- MCP integration for remote tool servers
- Telegram bot support

## Requirements

- Python 3.8+
- Termux (for Android) or Linux/macOS/Windows
- An AI provider API key (Gemini, OpenAI, Claude, Ollama, or OpenRouter)

## First Launch

\`\`\`bash
phoenix
\`\`\`

This starts the setup wizard where you configure your AI provider and settings.`,
      },
    ],
  },
  {
    title: 'Installation',
    items: [
      {
        slug: 'installation-termux',
        title: 'Termux',
        content: `# Termux Installation

## Package Install

\`\`\`bash
pkg update && pkg upgrade
pkg install phoenix
phoenix
\`\`\`

## Manual Install

\`\`\`bash
pkg install git python
git clone https://github.com/sufiyan-sabeel/Phoenix.git
cd Phoenix
bash install.sh
phoenix
\`\`\``,
      },
      {
        slug: 'installation-pip',
        title: 'pip / PyPI',
        content: `# pip Installation

## Install

\`\`\`bash
pip install phoenix-cli
phoenix
\`\`\`

## Requirements

- Python 3.8+
- pip

## Verify

\`\`\`bash
phoenix --version
phoenix --help
\`\`\``,
      },
      {
        slug: 'installation-source',
        title: 'From Source',
        content: `# Source Installation

## Clone and Install

\`\`\`bash
git clone https://github.com/sufiyan-sabeel/Phoenix.git
cd Phoenix
pip install .
phoenix
\`\`\`

## Development

\`\`\`bash
git clone https://github.com/sufiyan-sabeel/Phoenix.git
cd Phoenix
pip install -e .
phoenix
\`\`\``,
      },
    ],
  },
  {
    title: 'Configuration',
    items: [
      {
        slug: 'configuration',
        title: 'Setup Wizard',
        content: `# Configuration

Run the setup wizard:

\`\`\`bash
phoenix
\`\`\`

## AI Providers

Select your provider:

1. **Google Gemini** - gemini-1.5-flash, gemini-1.5-pro
2. **OpenAI** - gpt-4o, gpt-4-turbo
3. **Anthropic Claude** - claude-3-5-sonnet
4. **Ollama** - Local models (Llama3, Phi3, Gemma)
5. **OpenRouter** - Multiple models
6. **OpenCode** - OpenCode integration
7. **OpenCode Zen** - OpenCode Zen
8. **Custom API** - Any OpenAI-compatible endpoint

## API Keys

Enter your API key when prompted. Keys are stored locally in \`config.json\`.

## Telegram Bot

Optionally enable Telegram integration with your Bot Token and Chat ID.`,
      },
    ],
  },
  {
    title: 'CLI Commands',
    items: [
      {
        slug: 'cli-commands',
        title: 'Commands',
        content: `# CLI Commands

## Available Commands

\`\`\`bash
phoenix              # Run setup wizard
phoenix server       # Start the server
phoenix setup        # Run setup wizard
phoenix --help       # Show help
phoenix --version    # Show version
\`\`\`

## Server

Start the PHOENIX server:

\`\`\`bash
phoenix server
\`\`\`

Opens the web interface at \`http://localhost:5000\`.

## Setup

Reconfigure PHOENIX:

\`\`\`bash
phoenix setup
\`\`\``,
      },
    ],
  },
  {
    title: 'Android / ADB',
    items: [
      {
        slug: 'android-adb',
        title: 'ADB Integration',
        content: `# Android / ADB

PHOENIX uses direct ADB for Android automation.

## Requirements

- ADB installed and configured
- USB debugging enabled on device
- Device connected via USB or network

## Supported Operations

- Screenshot capture
- Screen tap and swipe
- App launch and control
- UI layout inspection
- Key press simulation

## Connection Status

PHOENIX automatically detects ADB connection status at startup.`,
      },
    ],
  },
  {
    title: 'Automation',
    items: [
      {
        slug: 'automation',
        title: 'Automation',
        content: `# Automation

## Background Scheduler

PHOENIX includes a persistent background scheduler for:

- Reminders
- Recurring cron jobs
- Automated tasks

## Commands

\`\`\`bash
add_scheduled_task(type, trigger, description, target)
list_scheduled_tasks()
remove_scheduled_task(id)
\`\`\`

## Examples

- "Remind me to blink every 1 minute"
- "Run network scan every 5 minutes"
- "Check system stats every hour"`,
      },
    ],
  },
  {
    title: 'Troubleshooting',
    items: [
      {
        slug: 'troubleshooting',
        title: 'Common Issues',
        content: `# Troubleshooting

## "CANNOT LINK EXECUTABLE"

Fix Termux:

\`\`\`bash
apt update && apt full-upgrade
\`\`\`

## Server Won't Start

Check port availability:

\`\`\`bash
phoenix server
\`\`\`

If port 5000 is in use, PHOENIX will use an alternative port.

## ADB Not Detected

Ensure ADB is installed:

\`\`\`bash
which adb
adb devices
\`\`\`

## Python Version

PHOENIX requires Python 3.8+:

\`\`\`bash
python --version
\`\`\``,
      },
      {
        slug: 'faq',
        title: 'FAQ',
        content: `# FAQ

## Is PHOENIX free?

Yes. PHOENIX is open source under the MIT License.

## Does PHOENIX send data externally?

Only to your configured AI provider API. All conversation data is stored locally.

## Can I use PHOENIX without an API key?

Yes. PHOENIX supports Ollama for local AI inference without API keys.

## What platforms are supported?

- Termux (Android)
- Linux (Debian, Ubuntu, Kali, Mint)
- macOS (12+)
- Windows (10/11)

## How do I update PHOENIX?

\`\`\`bash
pkg update && pkg upgrade phoenix
\`\`\`

Or:

\`\`\`bash
pip install --upgrade phoenix-cli
\`\`\``,
      },
    ],
  },
]
