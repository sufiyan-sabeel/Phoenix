#!/data/data/com.termux/files/usr/bin/bash
# PHOENIX — Add APT Repository for Termux
# Usage: bash add-repo.sh

set -e

REPO_URL="https://sufiyan-sabeel.github.io/Phoenix"
SOURCES_FILE="$PREFIX/etc/apt/sources.list.d/phoenix.list"

echo "Adding PHOENIX APT repository..."

# Check if already added
if [ -f "$SOURCES_FILE" ] && grep -q "phoenix" "$SOURCES_FILE" 2>/dev/null; then
    echo "PHOENIX repository already configured."
else
    echo "deb $REPO_URL stable main" > "$SOURCES_FILE"
    echo "Repository added to $SOURCES_FILE"
fi

# Update and install
pkg update -y
pkg install -y phoenix

echo ""
echo "PHOENIX installed successfully!"
echo "Run 'phoenix' to start."
