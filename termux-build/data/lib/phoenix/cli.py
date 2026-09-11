#!/usr/bin/env python3
"""
PHOENIX CLI — AI All-Rounder Assistant
Entry point for pip/Termux installed package.
"""
import sys
import os
import runpy

from phoenix_ai import __version__

HELP_TEXT = """\
PHOENIX — AI All-Rounder Assistant

Usage:
  phoenix              Run the interactive Setup Wizard
  phoenix server       Start the Phoenix server and bot
  phoenix setup        Run the interactive Setup Wizard
  phoenix --help       Show this help message
  phoenix --version    Show version

Examples:
  phoenix              # Launch setup wizard
  phoenix server       # Start the server

For more information, visit: https://github.com/sufiyan-sabeel/Phoenix
"""


def main():
    pkg_dir = os.path.dirname(os.path.abspath(__file__))

    args = sys.argv[1:]

    if "--help" in args or "-h" in args:
        print(HELP_TEXT)
        sys.exit(0)

    if "--version" in args or "-v" in args:
        print(f"phoenix {__version__}")
        sys.exit(0)

    if not args or args[0] == "setup":
        os.chdir(pkg_dir)
        from phoenix_ai.setup_wizard import main as setup_main
        setup_main()
    elif args[0] == "server":
        os.chdir(pkg_dir)
        runpy.run_path(os.path.join(pkg_dir, "server.py"), run_name="__main__")
    else:
        print(f"Unknown command: {args[0]}")
        print("Run 'phoenix --help' for usage information.")
        sys.exit(1)


if __name__ == "__main__":
    main()
