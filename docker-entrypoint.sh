#!/bin/sh
set -e

# Start Node.js Express backend in background on internal port 5000
echo "Starting Node.js backend on port 5000..."
node /app/server/server.js &

# Start Nginx in foreground on port 8080 (serves frontend and proxies /api)
echo "Starting Nginx on port 8080..."
exec nginx -g "daemon off;"

