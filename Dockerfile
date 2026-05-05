# Base stage for shared configurations and Corepack activation
FROM node:24.15.0-alpine3.23 AS base

WORKDIR /app

# Disable Next.js telemetry during build and runtime
ENV NEXT_TELEMETRY_DISABLED=1

# Enable Corepack to manage pnpm automatically via package.json 'packageManager'
RUN corepack enable

# --- Stage 1: Builder ---
FROM base AS builder

# Copy only lockfiles and workspace definitions to leverage Docker layer caching
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Download dependencies into the pnpm store based on lockfile
# This layer is cached unless your lockfile changes
RUN pnpm fetch

# Copy the entire project source code
COPY . .

# Install all dependencies (including devDeps) from the local store (offline)
RUN pnpm install -r --offline

# Build the Next.js application (generates the .next/standalone folder)
RUN pnpm build

# --- Stage 2: Runner ---
FROM base AS runner

# Set environment to production
ENV NODE_ENV=production
ENV PORT=3000

# Best practice: Run as a non-privileged user for security
# USER node

# Only copy the necessary files from the builder stage
# standalone mode includes the minimal node_modules required for production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

# Start the server using the standalone entry point
ENTRYPOINT ["node", "server.js"]
