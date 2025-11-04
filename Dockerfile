# Multi-stage build for Node.js app
FROM node:18-alpine AS builder

WORKDIR /app

# Set npm cache to /tmp to avoid conflicts with Docker cache mounts
ENV npm_config_cache=/tmp/.npm

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --no-audit

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm ci --omit=dev --no-audit

# Copy built files from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./server.js

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]

