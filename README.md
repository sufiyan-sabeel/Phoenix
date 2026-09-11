<p align="center">
  <img src="https://img.shields.io/badge/Platform-Termux%20%7C%20Android%20%7C%20Linux%20%7C%20macOS%20%7C%20Windows-green?style=for-the-badge&logo=windows" alt="Platform" />
  <img src="https://img.shields.io/badge/Language-Python%20%7C%20JS-blue?style=for-the-badge&logo=python" alt="Languages" />
  <img src="https://img.shields.io/badge/Tools-76%20Built--in%20+%20MCP-purple?style=for-the-badge" alt="Tools" />
  <img src="https://img.shields.io/badge/License-MIT-orange?style=for-the-badge" alt="License" />
</p>

# PHOENIX

**PHOENIX — AI All-Rounder Assistant**

Creator: Umaiz Sufiyan

## AI Agent that gives Termux, Linux, macOS & Windows a Brain
Phoenix is a highly optimized, fully featured **super lightweight AI agent core** designed to bridge high-level reasoning with low-level device and operating system APIs. It runs seamlessly on Android (via Termux), native Linux distributions, macOS, and Windows (10/11).

It couples a gorgeous, responsive, glassmorphic chat interface with an advanced ReAct (Reasoning and Action) Function Calling Framework and native Model Context Protocol (MCP) support. This allows you to inspect system parameters, run subnet-wide network sweeps, execute background crons, dump active UI layouts for device automation, run sandboxed Python scripts, search the web using RAG, and connect to remote tool servers over SSE (Server-Sent Events).

Additionally, it integrates a Telegram Bot backend with unified session tracking, allowing you to trigger any of these system tools, check background schedules, or query your AI models remotely from your Telegram app.

### Why is it Super Lightweight?
*   **Zero Local AI Inference Overhead**: Instead of running massive, hot-running local LLMs on your mobile CPU or PC (consuming huge RAM and draining battery), Phoenix acts as an **intelligent orchestrator**. It runs a lightweight ReAct state engine locally and delegates heavy token processing to remote API endpoints or local Ollama servers.
*   **Minimal Memory Footprint**: The background Flask server is highly optimized, consuming only **30MB - 50MB of RAM** under active loads.
*   **Ultra-Fast Vanilla Frontend**: The user interface is crafted using Vanilla HTML, CSS, and JS (no heavy layout engines like React or Tailwind), loading instantly even on older budget Android phones or low-resource machines.
*   **Efficient Async I/O**: High-speed utilities (like network sweeps and port scanners) run via custom parallel Python threads, completing sweeps in seconds with negligible CPU usage.

### System Requirements & Storage Footprint
| Component | Minimum Specification | Recommended Specification |
| :--- | :--- | :--- |
| **Processor (CPU)** | Dual-Core 1.4 GHz+ | Quad-Core 2.0 GHz+ |
| **System Memory (RAM)**| 1 GB (with ~100MB free) | 2 GB or more |
| **Operating System** | Android 7.0+ (Termux) / Linux / macOS 12+ / Windows 10/11 | Android 10+ / Linux / macOS / Windows 11 |
| **Installation Space** | **~100 MB** total storage space (Core files + Python pip dependencies) | **~150 MB** (including cached logs & history) |

---

## Installation Methods

### 1. Termux Package (Recommended)

PHOENIX is available as a native Termux package. This is the easiest installation method.

```bash
pkg update && pkg upgrade
pkg install phoenix
phoenix
```

### 2. pip Install (All Platforms)

PHOENIX is also available as a Python package. Works on Linux, macOS, Windows, and Termux.

```bash
pip install phoenix-cli
phoenix
```

### 3. Manual Installation (Git Clone)

If you prefer to install PHOENIX manually:

#### Quick Launch (Manual Install Only)
* **Android (Termux)**: `cd ~/PHOENIX && bash launch.sh`
* **Linux**: `cd ~/PHOENIX && bash linux/launch.sh`
* **macOS**: `cd ~/PHOENIX && bash mac/launch.sh`
* **Windows**: Double-click `windows\launch.bat` or run `.\windows\launch.bat` in PowerShell/CMD

---

## Project Structure

```text
PHOENIX/
├── LICENSE                # MIT License
├── README.md              # Documentation
├── pyproject.toml         # Python package configuration
├── config.json            # Runtime configuration
├── phoenix_ai/            # Python package
│   ├── __init__.py        # Package version
│   ├── cli.py             # CLI entry point
│   ├── server.py          # Flask server + AI agent
│   ├── setup_wizard.py    # Setup wizard
│   ├── logo.py            # ASCII art banner
│   ├── templates/         # HTML templates
│   └── static/            # CSS + JS assets
├── termux-build/          # Termux .deb build files
├── apt-repo/              # APT repository structure
├── scripts/               # Utility scripts
├── linux/                 # Linux launcher scripts
├── mac/                   # macOS launcher scripts
├── windows/               # Windows launcher scripts
├── server.py              # Root server (legacy)
├── setup_wizard.py        # Root wizard (legacy)
├── launch.sh              # Termux launcher
└── install.sh             # Termux installer
```

---

## Termux Setup (Detailed)

### Step 1: Install Git
```bash
pkg install git
```

### Step 2: Clone and Run Installer
```bash
git clone https://github.com/sufiyan-sabeel/Phoenix.git && cd Phoenix && sed -i 's/\r$//' install.sh && bash install.sh
```

> [!TIP]
> **Getting "CANNOT LINK EXECUTABLE" Error?**
> Fix your Termux package manager:
> ```bash
> apt update && apt full-upgrade
> ```

### Step 3: Configure
```bash
phoenix
```
1. Select your AI provider (Gemini, OpenAI, Claude, Ollama, OpenRouter, Custom)
2. Enter API keys and settings
3. Optionally enable Telegram Bot

### Step 4: Start Server
```bash
phoenix server
```

---

## Linux Setup

```bash
git clone https://github.com/sufiyan-sabeel/Phoenix.git && cd Phoenix && bash linux/install.sh
bash linux/launch.sh
```

---

## macOS Setup

```bash
git clone https://github.com/sufiyan-sabeel/Phoenix.git && cd Phoenix && bash mac/install.sh
bash mac/launch.sh
```

---

## Windows Setup

```powershell
git clone https://github.com/sufiyan-sabeel/Phoenix.git
cd Phoenix
.\windows\install.bat
.\windows\launch.bat
```

---

## MCP Integration

Phoenix natively supports the **Model Context Protocol (MCP)** using HTTP/SSE transport.

### Connect a Remote Server:
1. Start your MCP server on `0.0.0.0` with SSE transport
2. Get the host IP address
3. Open Phoenix Web UI and add the server in **MCP Connections**
4. Phoenix auto-discovers tools and adds them to the AI

---

## Voice Assistant

* **Background Wake-Word**: Say "Hey Strike" while using any app
* **Auto Tool Execution**: AI processes voice, runs tools, speaks answer
* **Web UI Voice Mode**: Tap mic button for hands-free voice

---

## Features

*   **Unified Chat History**: Telegram and Web UI messages sync in real-time
*   **60-Message Sliding Window**: Deep conversation tracking
*   **Self-Evolving Memory**: AI updates `agent/user.md`, `agent/memory.md`, `agent/agent.md`
*   **Threat Intrusion Sentinel**: Detects ARP spoofing/MITM attacks
*   **Rich Media Previews**: Images and videos render in chat
*   **Auto Health Check**: Diagnoses and installs missing dependencies
*   **Persistent Scheduler**: Background reminders and cron jobs
*   **ADB Device Control**: Screenshot, tap, swipe, launch apps
*   **Network Security Tools**: Port scanner, subnet sweep, DNS lookup
*   **Web Security Auditors**: SSL audit, header analysis, VPN leak detection

---

## Privacy & Security

*   **Local Only**: Zero data sent to external trackers
*   **Sandboxed**: All file operations restricted to workspace
*   **Command Filter**: Blocks dangerous commands (`rm -rf`, `mkfs`, etc.)

---

## Built-in Tools (76 Total)

| Category | Tools |
|----------|-------|
| **System** | System stats, battery, RAM, storage |
| **Network** | Port scan, subnet sweep, ARP detect, VPN audit |
| **Security** | SSL audit, header check, APK analyze, JWT decode |
| **Android** | Screenshot, tap, swipe, notifications, TTS |
| **Files** | Read, write, search, delete, download |
| **Web** | Search, fetch, RAG content |
| **Media** | Camera, contacts, clipboard |
| **Automation** | Scheduler, WhatsApp, app install |

---

## License

MIT License - Copyright (c) 2026 Umaiz Sufiyan

---

## Links

- [GitHub Repository](https://github.com/sufiyan-sabeel/Phoenix)
- [Issues](https://github.com/sufiyan-sabeel/Phoenix/issues)
- [PyPI Package](https://pypi.org/project/phoenix-cli/) (coming soon)
