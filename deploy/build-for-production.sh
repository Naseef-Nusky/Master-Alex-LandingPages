#!/bin/bash
# Build landing pages for services.yourdomain.com subdomain
set -euo pipefail

cd "$(dirname "$0")/.."

if [ ! -f .env ]; then
  echo "Copy .env.example to .env and set VITE_SITE_URL=https://services.yourdomain.com"
  exit 1
fi

npm install
npm run build

echo "Build complete: dist/"
echo "Upload to server: scp -r dist/* root@DROPLET_IP:/var/www/master-alex-landing/dist/"
