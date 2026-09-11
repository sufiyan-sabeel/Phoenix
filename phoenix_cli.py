#!/usr/bin/env python3
"""
PHOENIX CLI — AI All-Rounder Assistant
Entry point for pip/Termux installed package.
"""
import sys
import os

__version__ = "1.0.0"

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
    # Resolve the package directory
    # For Termux: $PREFIX/lib/phoenix/
    # For pip: same directory as this file
    pkg_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Check if we're in a Termux environment
    prefix = os.environ.get("PREFIX", "/data/data/com.termux/files/usr")
    termux_pkg_dir = os.path.join(prefix, "lib", "phoenix")
    
    if os.path.exists(termux_pkg_dir):
        pkg_dir = termux_pkg_dir
    elif not os.path.exists(os.path.join(pkg_dir, "server.py")):
        # Fallback: search common locations
        for search_dir in [
            os.path.join(prefix, "lib", "phoenix"),
            os.path.expanduser("~/PHOENIX"),
            os.path.expanduser("~/phoenix"),
        ]:
            if os.path.exists(os.path.join(search_dir, "server.py")):
                pkg_dir = search_dir
                break

    args = sys.argv[1:]

    if "--help" in args or "-h" in args:
        print(HELP_TEXT)
        sys.exit(0)

    if "--version" in args or "-v" in args:
        print(f"phoenix {__version__}")
        sys.exit(0)

    if not args or args[0] == "setup":
        # Run setup wizard
        os.chdir(pkg_dir)
        sys.path.insert(0, pkg_dir)
        from setup_wizard import main as setup_main
        setup_main()
    elif args[0] == "server":
        # Run server
        sys.path.insert(0, pkg_dir)
        os.chdir(pkg_dir)
        exec(open(os.path.join(pkg_dir, "server.py")).read())
    else:
        print(f"Unknown command: {args[0]}")
        print("Run 'phoenix --help' for usage information.")
        sys.exit(1)


if __name__ == "__main__":
    main()
