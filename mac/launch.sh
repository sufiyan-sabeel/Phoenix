#!/usr/bin/env bash

# PocketstrikeAI Launcher Script for macOS (Apple Silicon & Intel)
# Shows a terminal dashboard menu to configure or start the server on macOS.

# Ensure standard macOS and Homebrew binary paths are available
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/local/sbin:$PATH"
if [ -x "/opt/homebrew/bin/brew" ]; then
    eval "$(/opt/homebrew/bin/brew shellenv 2>/dev/null)" || true
elif [ -x "/usr/local/bin/brew" ]; then
    eval "$(/usr/local/bin/brew shellenv 2>/dev/null)" || true
fi

# Resolve project root directory safely across bash, zsh, and sh
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT" || exit 1

# Auto-activate macOS virtual environment if initialized
if [ -d "$PROJECT_ROOT/.venv" ]; then
    source "$PROJECT_ROOT/.venv/bin/activate" 2>/dev/null || true
elif [ -d "$HOME/PocketStrike-AI/.venv" ]; then
    source "$HOME/PocketStrike-AI/.venv/bin/activate" 2>/dev/null || true
fi

# Colors (UI-Matching Cyber Theme)
BLUE='\033[38;5;39m' # Vibrant Cyber Blue
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color
GREEN='\033[38;5;46m' # Bright Green
WHITE='\033[38;5;255m'

show_menu() {
    clear
    # Check if config.json exists
    if [ -f "config.json" ]; then
        SETUP_STATUS="${CYAN}[ Configured ]${NC}"
        CONFIG_EXISTS=true
    else
        SETUP_STATUS="${RED}[ Unconfigured ]${NC}"
        CONFIG_EXISTS=false
    fi

    echo -e "${BLUE}██████╗  ██████╗  ██████╗██╗  ██╗███████╗████████╗${NC}"
    echo -e "${BLUE}██╔══██╗██╔═══██╗██╔════╝██║ ██╔╝██╔════╝╚══██╔══╝${NC}"
    echo -e "${BLUE}██████╔╝██║   ██║██║     █████╔╝ █████╗     ██║   ${NC}"
    echo -e "${BLUE}██╔═══╝ ██║   ██║██║     ██╔═██╗ ██╔══╝     ██║   ${NC}"
    echo -e "${BLUE}██║     ╚██████╔╝╚██████╗██║  ██╗███████╗   ██║   ${NC}"
    echo -e "${BLUE}╚═╝      ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝   ╚═╝   ${NC}"
    echo -e "${WHITE}███████╗████████╗██████╗ ██╗██╗  ██╗███████╗     █████╗ ██╗${NC}"
    echo -e "${WHITE}██╔════╝╚══██╔══╝██╔══██╗██║██║ ██╔╝██╔════╝    ██╔══██╗██║${NC}"
    echo -e "${WHITE}███████╗   ██║   ██████╔╝██║█████╔╝ █████╗      ███████║██║${NC}"
    echo -e "${WHITE}╚════██║   ██║   ██╔══██╗██║██╔═██╗ ██╔══╝      ██╔══██║██║${NC}"
    echo -e "${WHITE}███████║   ██║   ██║  ██║██║██║  ██╗███████╗    ██║  ██║██║${NC}"
    echo -e "${WHITE}╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝╚═╝${NC}"
    echo -e "       🍎 ${BLUE}Pocket${GREEN}Strike-AI ${NC}— ${BLUE}macOS Dashboard${NC} 🍎"
    echo -e "${GREEN}──────────────────────────────────────────────────────────────────────────${NC}"
    echo -e " Status: $SETUP_STATUS"
    
    if [ "$CONFIG_EXISTS" = true ]; then
        INFO=$(python3 -c '
import json
try:
    with open("config.json") as f:
        cfg = json.load(f)
        p = cfg.get("provider_name", "Unknown").upper()
        m = cfg.get("model", "Unknown")
        print(p + " (" + m + ")")
except Exception:
    print("Invalid Configuration")
' 2>/dev/null)
        echo -e " Active Model: ${CYAN}${INFO}${NC}"
        VOICE_INFO=$(python3 -c '
import json
try:
    with open("config.json") as f:
        cfg = json.load(f)
        v = cfg.get("voice_enabled", True)
        print("Active (Hey Strike)" if v else "Disabled")
except Exception:
    print("Disabled")
' 2>/dev/null)
        echo -e " Voice Assistant: ${CYAN}${VOICE_INFO}${NC}"
    fi
    echo -e "${GREEN}──────────────────────────────────────────────────────────────────────────${NC}"
    echo -e " Please choose an option:\n"
    echo -e "  [1] Run Interactive Setup Wizard"
    echo -e "  [2] Launch PocketstrikeAI Server & Bot"
    echo -e "  [3] Exit"
    echo -e "\n${GREEN}──────────────────────────────────────────────────────────────────────────${NC}"
}

run_setup() {
    python3 setup.py
    echo -e "\nPress Enter to return to menu..."
    read -r
}

launch_server() {
    if [ ! -f "config.json" ]; then
        echo -e "\n${RED}Error: Setup is not completed yet!${NC}"
        echo -e "Please run the Setup Wizard (Option 1) first."
        echo -e "\nWould you like to run it now? (y/n): "
        read -r choice
        case "$choice" in
            [Yy]*) run_setup ;;
        esac
        return
    fi

    echo -e "\n${CYAN}Starting PocketstrikeAI Server on macOS...${NC}"
    python3 server.py
}

while true; do
    show_menu
    echo -n "Enter choice [1-3]: "
    read -r opt
    case $opt in
        1)
            run_setup
            ;;
        2)
            launch_server
            break
            ;;
        3)
            echo -e "\n${BLUE}Goodbye!${NC}"
            exit 0
            ;;
        *)
            echo -e "\n${RED}Invalid option. Press Enter to try again.${NC}"
            read -r
            ;;
    esac
done
