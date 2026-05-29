# ── Frontend Dockerfile ─────────────────────────────────────────────────────
# React + Vite, built with Node, served by nginx on port 8080
# Place this file at: make_your_own_adv/frontend/Dockerfile
# Choreo expects port 8080 for web app components by default
# ─────────────────────────────────────────────────────────────────────────────

# ── Stage 1: Build ───────────────────────────────────────────────────────────
FROM node:20-slim AS builder

WORKDIR /app

# Copy lockfiles first for layer cache
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build
# Output is at /app/dist


# ── Stage 2: Serve ───────────────────────────────────────────────────────────
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Our custom config: serves static files + proxies /api to backend
COPY nginx.conf /etc/nginx/conf.d/app.conf

# Copy built assets from Stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]