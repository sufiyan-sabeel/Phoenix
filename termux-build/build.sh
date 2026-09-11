#!/bin/bash
# Termux package build script for PHOENIX
# This script assembles the .deb package

set -e

PACKAGE_NAME="phoenix"
VERSION="1.0.0"
ARCH="aarch64"
BUILD_DIR="$(cd "$(dirname "$0")" && pwd)"
SRC_DIR="$(cd "$BUILD_DIR/.." && pwd)"

echo "Building PHOENIX Termux package v${VERSION}..."

# Clean previous build
rm -rf "$BUILD_DIR/data/lib/phoenix/"*

# Copy application files to package
cp "$SRC_DIR/phoenix_ai/__init__.py" "$BUILD_DIR/data/lib/phoenix/"
cp "$SRC_DIR/phoenix_ai/cli.py" "$BUILD_DIR/data/lib/phoenix/"
cp "$SRC_DIR/phoenix_ai/server.py" "$BUILD_DIR/data/lib/phoenix/"
cp "$SRC_DIR/phoenix_ai/setup_wizard.py" "$BUILD_DIR/data/lib/phoenix/"
cp "$SRC_DIR/phoenix_ai/logo.py" "$BUILD_DIR/data/lib/phoenix/"

# Copy templates and static files
cp -r "$SRC_DIR/phoenix_ai/templates" "$BUILD_DIR/data/lib/phoenix/"
cp -r "$SRC_DIR/phoenix_ai/static" "$BUILD_DIR/data/lib/phoenix/"

# Copy LICENSE
cp "$SRC_DIR/LICENSE" "$BUILD_DIR/data/share/doc/phoenix/"

# Make wrapper executable
chmod 755 "$BUILD_DIR/data/bin/phoenix"

# Build the .deb
DEB_FILE="${PACKAGE_NAME}_${VERSION}_${ARCH}.deb"
cd "$BUILD_DIR"
dpkg-deb --build data "../dist/${DEB_FILE}"

echo "Package built: dist/${DEB_FILE}"
echo "Size: $(du -h "../dist/${DEB_FILE}" | cut -f1)"
