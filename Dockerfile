# Base image with Playwright dependencies
FROM mcr.microsoft.com/playwright:v1.48.0-focal AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
# Install pnpm directly to avoid corepack signature issues
RUN npm install -g pnpm@9.0.0

WORKDIR /app

# --- Builder Stage ---
FROM base AS builder

# Copy root configurations
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json turbo.json ./
COPY packages ./packages
COPY apps/api ./apps/api

# Install dependencies (including dev)
RUN pnpm install --frozen-lockfile

# Generate Prisma Client first
RUN pnpm --filter @nin/database db:generate

# Build database package explicitly  
RUN pnpm --filter @nin/database build

# Now build API (Turbo will respect the already-built database)
RUN pnpm --filter @nin/api build

# --- Runner Stage ---
FROM base AS runner

WORKDIR /app

# Copy root configurations
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY packages ./packages
COPY apps/api/package.json ./apps/api/package.json

# Install only production dependencies
RUN pnpm install --frozen-lockfile --prod

# Copy built artifacts from builder
COPY --from=builder /app/apps/api/dist ./apps/api/dist
COPY --from=builder /app/packages/database/dist ./packages/database/dist
COPY --from=builder /app/packages/database/src/generated ./packages/database/src/generated
COPY --from=builder /app/packages/database/prisma ./packages/database/prisma

# Regenerate Prisma Client in production (needed for runtime)
RUN pnpm --filter @nin/database db:generate

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Install Playwright browsers (only chromium for efficiency)
RUN npx playwright install chromium

EXPOSE 3000

# Start the application
CMD ["node", "apps/api/dist/apps/api/src/main.js"]
