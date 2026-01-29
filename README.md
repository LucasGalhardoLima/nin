# Nin.

Nin is a real estate matching platform designed specifically for the regions of Matão and Araraquara, SP. It connects potential buyers/renters with property listings through an intelligent matching system.

## 🏗️ Architecture

This project is organized as a monorepo using **Turborepo** and **pnpm** workspaces:

- `apps/web`: The frontend application built with **Next.js**.
- `apps/api`: The backend API built with **NestJS**.
- `packages/database`: Shared database package using **Prisma** and **Drizzle** (or Prisma, based on configuration).
- `packages/config`: Shared configuration (ESLint, Prettier, etc.).
- `packages/types`: Shared TypeScript definitions.

## 🚀 Tech Stack

- **Frontend**: Next.js, TailwindCSS, Framer Motion, Lucide React.
- **Backend**: NestJS, Passport (JWT), RxJS, Winston.
- **Database**: Prisma, PostgreSQL (recommended).
- **Automation/Scraping**: Playwright.
- **Package Manager**: pnpm.
- **Monorepo Management**: Turborepo.

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (>= 20.x)
- [pnpm](https://pnpm.io/) (>= 9.x)

### Installation

```bash
pnpm install
```

### Database Setup

1. Configure your environment variables in `.env` (refer to `.env.example` if available).
2. Generate the database client:
   ```bash
   pnpm db:generate
   ```
3. Push the schema to your database:
   ```bash
   pnpm db:push
   ```
4. (Optional) Seed the database with initial data:
   ```bash
   pnpm db:seed
   ```

### Running Locally

To start all applications (API and Web) in development mode:

```bash
pnpm dev
```

The applications will be available at:
- Web: [http://localhost:3000](http://localhost:3000)
- API: [http://localhost:3001](http://localhost:3001) (Check NestJS configuration for exact port)

## 📜 Available Scripts

- `pnpm dev`: Starts both apps in watch mode.
- `pnpm build`: Builds all apps and packages.
- `pnpm lint`: Runs linting across the entire workspace.
- `pnpm format`: Formats code using Prettier.
- `pnpm clean`: Removes build artifacts and `node_modules`.
- `pnpm db:studio`: Opens Prisma Studio for database manual management.

---

Built with ❤️ for Matão and Araraquara.
