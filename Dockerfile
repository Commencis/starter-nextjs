FROM node:24-alpine AS base

# Stage 1: Install Dependencies and Build the Next.js app
FROM base AS builder
WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json pnpm-lock.yaml ./

RUN corepack enable
RUN corepack install
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

# Stage 2: Run the Next.js app
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

EXPOSE 3000

RUN mkdir .next

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

ENTRYPOINT ["node", "server.js"]
