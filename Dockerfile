# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install frontend dependencies
COPY package*.json ./
RUN npm ci

# Copy full source and build frontend
COPY . .
RUN npm run build

# Install server production dependencies
WORKDIR /app/server
RUN npm ci --omit=dev

# Production stage
FROM nginx:alpine

# Install Node.js runtime for the backend
RUN apk add --no-cache nodejs

WORKDIR /app

# Copy Vite build to Nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy backend code and node_modules
COPY --from=builder /app/server /app/server

# Copy custom Nginx configuration with /api reverse proxy
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy startup script
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 8080

CMD ["/docker-entrypoint.sh"]
