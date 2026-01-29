# Nin. Constitution

<!--
Sync Impact Report
==================
Version change: 0.0.0 → 1.0.0 (Initial release)
Modified principles: N/A (new document)
Added sections:
  - Core Principles (5 principles)
  - Technology Standards
  - Development Workflow
  - Governance
Removed sections: N/A
Templates requiring updates:
  - .specify/templates/plan-template.md ✅ (compatible - uses generic Constitution Check)
  - .specify/templates/spec-template.md ✅ (compatible - no constitution references)
  - .specify/templates/tasks-template.md ✅ (compatible - no constitution references)
Follow-up TODOs: None
-->

## Core Principles

### I. User-Centric Matching

The platform exists to help users find properties that match their lifestyle, not just their budget.

- Every feature MUST consider how it impacts the user's property discovery experience
- Matching algorithms MUST weight lifestyle factors (proximity to schools, parks, hospitals, etc.) alongside price
- User preferences MUST be persisted and editable at any time
- The onboarding flow MUST capture sufficient data to produce meaningful matches from day one

**Rationale**: Real estate decisions are life decisions. A platform that only filters by price misses the point.

### II. Monorepo Modularity

The codebase follows a Turborepo monorepo structure with clear package boundaries.

- Apps (`apps/*`) MUST NOT directly import from other apps; shared code goes in packages
- Packages (`packages/*`) MUST be independently buildable and testable
- The `@nin/types` package MUST be the single source of truth for shared TypeScript interfaces
- The `@nin/database` package MUST own all Prisma schema and database concerns
- Cross-package dependencies MUST be declared explicitly in each package's `package.json`

**Rationale**: Clear boundaries prevent spaghetti dependencies and enable independent scaling of apps.

### III. Type Safety End-to-End

TypeScript strict mode is non-negotiable across the entire stack.

- All packages MUST use `"strict": true` in their TypeScript configuration
- API request/response types MUST be defined in `@nin/types` and used by both API and Web
- Runtime validation (class-validator in NestJS) MUST mirror TypeScript types
- Database types from Prisma MUST flow through to API responses without manual casting

**Rationale**: Type safety catches bugs at compile time and serves as living documentation.

### IV. API-First Design

The NestJS API is the single source of truth for business logic.

- All business logic MUST reside in the API, not the frontend
- The frontend MUST only call documented API endpoints
- Swagger documentation MUST be kept current with all endpoints
- API responses MUST use consistent envelope formats (data, pagination, errors)
- Authentication MUST use JWT tokens with proper expiration

**Rationale**: A well-designed API enables future clients (mobile apps, integrations) without duplication.

### V. Data Integrity

Data is the platform's most valuable asset and MUST be protected.

- Database schema changes MUST go through Prisma migrations
- Seed data MUST be idempotent (re-runnable without duplicates)
- User data MUST be scoped by user ID; no cross-user data leakage
- Soft deletes SHOULD be preferred over hard deletes for user-facing entities
- Price and location data MUST include source attribution for auditability

**Rationale**: Trust is earned through consistent, reliable data handling.

## Technology Standards

The following technology choices are standardized across the project:

| Layer | Technology | Version Constraint |
|-------|------------|-------------------|
| Runtime | Node.js | >= 20 |
| Package Manager | pnpm | >= 9.0.0 |
| Monorepo | Turborepo | ^2.0.0 |
| Backend | NestJS | ^10.x |
| Frontend | Next.js | ^15.x |
| Database | SQLite (dev) / PostgreSQL (prod) | Via Prisma |
| ORM | Prisma | ^5.x |
| Styling | Tailwind CSS | ^3.x |
| Language | TypeScript | ^5.x |

**Deviation Policy**: Introducing new frameworks or major version upgrades requires documentation of rationale and migration plan.

## Development Workflow

### Local Development

1. Run `pnpm install` from repository root
2. Run `pnpm db:generate && pnpm db:push && pnpm db:seed` for database setup
3. Run `pnpm dev` to start all apps in watch mode
4. API available at `http://localhost:3001` (Swagger at `/api/docs`)
5. Web available at `http://localhost:3000`

### Code Quality Gates

- All code MUST pass `pnpm lint` before commit
- All code MUST be formatted with Prettier (`pnpm format`)
- TypeScript compilation MUST succeed with zero errors
- New API endpoints MUST include Swagger decorators

### Branch Strategy

- Feature branches MUST follow pattern: `feature/[short-description]`
- Bug fix branches MUST follow pattern: `fix/[short-description]`
- All changes MUST go through pull request review

## Governance

This constitution establishes the foundational rules for the Nin. platform. All development decisions MUST align with these principles.

### Amendment Process

1. Propose changes via pull request to `.specify/memory/constitution.md`
2. Document rationale for principle changes
3. Update version according to semantic versioning:
   - MAJOR: Principle removal or fundamental redefinition
   - MINOR: New principle or significant expansion
   - PATCH: Clarification or wording improvement
4. Ensure dependent templates remain compatible

### Compliance

- All PRs MUST verify alignment with Core Principles
- Code reviews SHOULD reference specific principles when requesting changes
- Complexity beyond these standards MUST be justified in writing

### Runtime Guidance

For day-to-day development guidance beyond this constitution, refer to:
- API documentation: `http://localhost:3001/api/docs`
- Type definitions: `packages/types/src/index.ts`
- Database schema: `packages/database/prisma/schema.prisma`

**Version**: 1.0.0 | **Ratified**: 2026-01-25 | **Last Amended**: 2026-01-25
