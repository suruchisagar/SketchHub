# SketchHub - Collaborative Whiteboarding Platform

A real-time collaborative whiteboarding application built using modern web technologies, featuring multiplayer support, room-based collaboration, and real-time chat.

## Features

- **Real-time Collaboration**: Multiple users can draw and edit on the same canvas simultaneously
- **Room-based Workspaces**: Create and join drawing rooms with unique identifiers
- **User Authentication**: Secure signup and signin with JWT-based authentication
- **Real-time Chat**: Chat with other users in the same room
- **Modern UI**: Beautiful, responsive interface built with Next.js and Tailwind CSS
- **Canvas Drawing**: Interactive canvas with drawing tools and shape recognition

## Project Structure

This is a [Turborepo](https://turborepo.org) monorepo containing the following packages and apps:

### Apps

- **`apps/frontend`**: Landing page and authentication UI (Next.js)
  - Landing page with features showcase
  - Sign in/Sign up pages
  - Canvas access

- **`apps/web`**: Main drawing application (Next.js)
  - Canvas drawing interface
  - Room joining and management
  - Real-time collaboration UI

- **`apps/http-backend`**: REST API server (Express)
  - User authentication (signup/signin)
  - Room management
  - Chat message retrieval
  - Runs on port `3001`

- **`apps/ws-backend`**: WebSocket server for real-time features
  - Real-time drawing synchronization
  - Live chat broadcasting
  - Room-based message routing
  - Runs on port `8080`

### Packages

- **`packages/db`**: Prisma database package
  - Database schema definitions
  - Prisma client generation
  - PostgreSQL connection

- **`packages/common`**: Shared TypeScript types and schemas
  - Validation schemas (Zod)
  - Common type definitions

- **`packages/backend-common`**: Backend utilities
  - JWT configuration
  - Shared backend constants

- **`packages/ui`**: Shared React UI components
  - Reusable button, card, and other UI components

- **`packages/eslint-config`**: ESLint configurations
- **`packages/typescript-config`**: TypeScript configurations

##  Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Backend**: Express.js, WebSocket (ws)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT (JSON Web Tokens)
- **Monorepo**: Turborepo
- **Package Manager**: pnpm 9.0.0
- **Node Version**: >=18

##  Prerequisites

- Node.js >= 18
- pnpm 9.0.0 (or install via `npm install -g pnpm@9.0.0`)
- PostgreSQL database

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/suruchisagar/SketchHub.git
cd excelidraw
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up the database

1. Create a PostgreSQL database
2. Update the database connection string in `packages/db/prisma/schema.prisma` or use environment variables
3. Run Prisma migrations:

```bash
cd packages/db
pnpm prisma migrate dev
pnpm prisma generate
```

### 4. Configure environment variables

Create `.env` files in the respective apps/packages as needed:

**For `apps/http-backend` and `apps/ws-backend`:**
- `JWT_SECRET`: Secret key for JWT token signing
- Database connection string (if not in Prisma schema)

### 5. Build the project

Build all apps and packages:

```bash
pnpm build
```

Or build a specific app:

```bash
pnpm build --filter=frontend
pnpm build --filter=web
pnpm build --filter=http-backend
pnpm build --filter=ws-backend
```

### 6. Run development servers

Start all development servers:

```bash
pnpm dev
```

Or start specific apps:

```bash
# Start frontend (landing page)
pnpm dev --filter=frontend

# Start web app (drawing canvas)
pnpm dev --filter=web

# Start HTTP backend
pnpm dev --filter=http-backend

# Start WebSocket backend
pnpm dev --filter=ws-backend
```

**Default ports:**
- Frontend: `http://localhost:3000` (Next.js default)
- HTTP Backend: `http://localhost:3001`
- WebSocket Backend: `ws://localhost:8080`

##  Available Scripts

### Root level

- `pnpm build` - Build all apps and packages
- `pnpm dev` - Start all development servers
- `pnpm lint` - Lint all packages
- `pnpm format` - Format code with Prettier
- `pnpm check-types` - Type check all packages

### App-specific

Each app has its own scripts defined in their `package.json` files.

##  Database Schema

The application uses the following main models:

- **User**: User accounts with email, password, and profile information
- **Room**: Drawing rooms with unique slugs and admin users
- **Chat**: Chat messages associated with rooms and users

##  Authentication

The application uses JWT-based authentication:

1. Users sign up or sign in through the frontend
2. The HTTP backend validates credentials and returns a JWT token
3. The token is used for authenticated requests and WebSocket connections
4. WebSocket connections require a token in the query string: `ws://localhost:8080?token=<JWT_TOKEN>`

##  API Endpoints

### HTTP Backend (Port 3001)

- `POST /signup` - Create a new user account
- `POST /signin` - Authenticate and get JWT token
- `POST /room` - Create a new room (requires authentication)
- `GET /room/:slug` - Get room details by slug
- `GET /chats/:roomId` - Get chat messages for a room

### WebSocket Backend (Port 8080)

- Connect with JWT token: `ws://localhost:8080?token=<JWT_TOKEN>`
- Message types:
  - `join_room`: Join a room for real-time updates
  - `leave_room`: Leave a room
  - `chat`: Send a chat message to a room

##  Development

### Adding a new package

1. Create a new directory in `packages/`
2. Add a `package.json` with the package name following `@repo/*` convention
3. Update workspace configuration if needed

### Adding a new app

1. Create a new directory in `apps/`
2. Add a `package.json` with appropriate scripts
3. Update `turbo.json` if new task configurations are needed


```





