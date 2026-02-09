FROM node:24-alpine AS base

# Stage 1: Install dependencies
FROM base AS deps
WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

COPY package.json pnpm-lock.yaml ./

RUN corepack enable
RUN apk add --no-cache libc6-compat
RUN pnpm i --frozen-lockfile

# Stage 2: Build the Next.js app
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NEXT_TELEMETRY_DISABLED=1

RUN corepack enable
RUN pnpm build

# Stage 3: Run the Next.js app
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

RUN mkdir .next

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

ENTRYPOINT ["node", "server.js"]
