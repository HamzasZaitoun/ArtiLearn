# ═══════════════════════════════════════════════════════
#  Artikeys Frontend — Angular 17+ Dev Server
# ═══════════════════════════════════════════════════════
FROM node:20-alpine

WORKDIR /app

# Install dependencies first (cache layer)
COPY frontend/package*.json ./
RUN npm ci --legacy-peer-deps

# Copy source
COPY frontend/ .

EXPOSE 4200

# Start Angular dev server, accessible from Docker host
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--port", "4200", "--disable-host-check"]
