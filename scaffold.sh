#!/usr/bin/env bash
set -euo pipefail

TARGET="${1:-beton-landing}"

# Katalogi
mkdir -p "$TARGET/static/css"
mkdir -p "$TARGET/static/js"
mkdir -p "$TARGET/static/img"

# Puste pliki
: > "$TARGET/index.html"
: > "$TARGET/static/css/app.css"
: > "$TARGET/static/js/vendors.js"
: > "$TARGET/static/js/app.js"

# Plik w katalogu img, by git śledził pusty katalog (opcjonalnie)
: > "$TARGET/static/img/.gitkeep"

echo "Utworzono strukturę w: $TARGET"
