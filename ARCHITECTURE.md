# PixText Project Architecture

## Project Organization by Phase

This document maps the project files to their corresponding implementation phase for clarity and maintainability.

---

## Phase 1: Project Setup & Design System ✅

**Objective:** Establish foundational tooling, design system, and build configuration.

### Configuration Files
- `package.json` – Dependencies and scripts
- `tsconfig.json` – TypeScript configuration
- `tailwind.config.ts` – Tailwind CSS configuration with design tokens
- `jest.config.js` – Jest testing framework setup
- `jest.setup.js` – Jest environment setup
- `.eslintrc.json` – ESLint configuration
- `.prettierrc.json` – Prettier code formatting
- `components.json` – shadcn/ui component configuration

### Design System
- `DESIGN.md` – Comprehensive design tokens, color palette, typography scale, spacing, shadows, and component guidelines
- `lib/cn.ts` – Utility for classname composition (clsx wrapper)

### Documentation
- `docs/superpowers/specs/2026-11-07-pixtext-design.md` – Design specification
- `docs/superpowers/plans/2026-11-07-phase1-project-setup.md` – Phase 1 implementation plan

---

## Phase 2: Public Website ✅

**Objective:** Build marketing website with homepage, pricing, features, and FAQ pages.

### Core Components (Reusable UI Primitives)
- `app/components/Button.tsx` – Button component with primary/secondary variants
- `app/components/Card.tsx` – Card component with border, shadow, and hover effects
- `app/components/Badge.tsx` – Badge/label component with variants
- `app/components/Navigation.tsx` – Header navigation with logo and links
- `app/components/Hero.tsx` – Hero section component for landing pages

### Pages
- `app/page.tsx` – Homepage with hero section and feature cards
- `app/pricing/page.tsx` – Pricing page with 3 subscription tiers
- `app/features/page.tsx` – Features page showcasing product capabilities
- `app/faq/page.tsx` – FAQ page with interactive accordions

### Layout & Styling
- `app/layout.tsx` – Root layout with Navigation component
- `app/globals.css` – Global styles and Tailwind directives

### Testing
- `__tests__/Button.test.tsx` – Button component unit tests
- `__tests__/Card.test.tsx` – Card component unit tests
- `__tests__/Badge.test.tsx` – Badge component unit tests
- `__tests__/Navigation.test.tsx` – Navigation component unit tests
- `__tests__/integration/homepage.test.tsx` – Homepage integration tests
- `__tests__/integration/navigation.test.tsx` – Navigation accessibility tests

### Documentation
- `docs/superpowers/plans/2026-11-10-pixtext-mvp.md` – Phase 2 detailed implementation plan

---

## Phase 3: Authentication & Database

**Objective:** Set up Supabase authentication and PostgreSQL database.

**Status:** Not yet implemented

**Planned Files:**
- `app/api/auth/[...nextauth].ts` – Authentication API routes
- `lib/supabase.ts` – Supabase client initialization
- `types/auth.ts` – Authentication type definitions
- Database migrations in `db/migrations/`

---

## Phase 4: User Dashboard

**Objective:** Build authenticated user dashboard with profile and settings.

**Status:** Not yet implemented

**Planned Files:**
- `app/dashboard/page.tsx` – Main dashboard page
- `app/dashboard/profile/page.tsx` – User profile page
- `app/dashboard/settings/page.tsx` – User settings page
- `app/components/DashboardLayout.tsx` – Dashboard layout wrapper

---

## Phase 5: Core Feature – Text to Image Conversion

**Objective:** Implement the main PixText conversion engine.

**Status:** Not yet implemented

**Planned Files:**
- `app/convert/page.tsx` – Conversion interface
- `app/api/convert.ts` – Conversion API endpoint
- `lib/pixtext-engine.ts` – Core conversion algorithm
- `lib/image-optimizer.ts` – PNG optimization logic
- `types/conversion.ts` – Conversion-related types

---

## Phase 6: Conversion History

**Objective:** Store and display user conversion history.

**Status:** Not yet implemented

**Planned Files:**
- `app/dashboard/history/page.tsx` – History page
- `app/api/history.ts` – History API endpoints
- `lib/history.ts` – History management utilities

---

## Phase 7: Embedded AI Playground

**Objective:** Interactive demo showing text-to-image conversion.

**Status:** Not yet implemented

**Planned Files:**
- `app/playground/page.tsx` – Playground interface
- `app/components/TextEditor.tsx` – Text input component
- `app/components/PreviewPane.tsx` – Image preview component

---

## Phase 8: Subscription & Payments

**Objective:** PayPal integration for subscription management.

**Status:** Not yet implemented

**Planned Files:**
- `app/api/payments/[...routes].ts` – Payment API routes
- `lib/paypal.ts` – PayPal client initialization
- `types/subscription.ts` – Subscription types

---

## Phase 9: Email Integration

**Objective:** Resend integration for transactional emails.

**Status:** Not yet implemented

**Planned Files:**
- `app/api/email/[...routes].ts` – Email API routes
- `lib/email.ts` – Email utilities
- `emails/` – Email templates

---

## Phase 10: Admin Dashboard

**Objective:** Administrative interface for monitoring and management.

**Status:** Not yet implemented

**Planned Files:**
- `app/admin/page.tsx` – Admin dashboard
- `app/admin/users/page.tsx` – User management
- `app/admin/analytics/page.tsx` – Analytics

---

## Phase 11: Internationalization

**Objective:** Multi-language support with DeepL translation.

**Status:** Not yet implemented

**Planned Files:**
- `lib/i18n.ts` – i18n setup
- `translations/` – Translation files
- `middleware.ts` – Language routing middleware

---

## Phase 12: Testing & QA

**Objective:** Comprehensive test coverage and quality assurance.

**Status:** In progress (unit and integration tests for Phase 2)

**Planned Files:**
- `__tests__/e2e/` – End-to-end tests with Playwright
- `__tests__/coverage/` – Coverage reports

---

## Phase 13: Deployment & Launch

**Objective:** Production deployment and launch.

**Status:** In progress (preparing for Vercel deployment)

**Planned Files:**
- `vercel.json` – Vercel deployment configuration
- `.github/workflows/` – CI/CD workflows
- `docker/` – Docker configuration (optional)

---

## Directory Structure Overview

```
PixText/
├── app/                          # Next.js app directory
│   ├── api/                      # API routes (Phases 3+)
│   ├── components/               # Reusable React components (Phase 2)
│   ├── dashboard/                # User dashboard (Phase 4+)
│   ├── faq/                      # FAQ page (Phase 2)
│   ├── features/                 # Features page (Phase 2)
│   ├── pricing/                  # Pricing page (Phase 2)
│   ├── layout.tsx                # Root layout (Phase 2)
│   ├── page.tsx                  # Homepage (Phase 2)
│   └── globals.css               # Global styles (Phase 2)
├── __tests__/                    # Test files (Phase 2, 12)
├── docs/                         # Documentation
│   └── superpowers/
│       ├── plans/                # Implementation plans
│       └── specs/                # Design specifications
├── lib/                          # Utility functions
│   ├── cn.ts                     # Classname utility (Phase 1)
│   ├── supabase.ts               # Supabase setup (Phase 3)
│   └── pixtext-engine.ts         # Conversion engine (Phase 5)
├── types/                        # TypeScript type definitions
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tailwind.config.ts            # Tailwind config
├── jest.config.js                # Jest config
├── DESIGN.md                     # Design system
├── README.md                     # Project README
└── ARCHITECTURE.md               # This file
```

---

## Key Technologies by Phase

| Phase | Technology | Purpose |
|-------|-----------|---------|
| 1 | TypeScript, Tailwind, Jest | Setup & configuration |
| 2 | React 19, Next.js 15 | Public website & components |
| 3 | Supabase Auth | User authentication |
| 4 | React, Next.js | Dashboard UI |
| 5 | Canvas/Sharp API | Image conversion |
| 6 | PostgreSQL | History storage |
| 7 | React | Interactive demo |
| 8 | PayPal API | Payment processing |
| 9 | Resend API | Email delivery |
| 10 | React | Admin interface |
| 11 | DeepL API | Translation |
| 12 | Playwright, Jest | Testing |
| 13 | Vercel | Deployment |

---

## Next Steps

1. **Current:** Phase 2 complete, ready for Vercel deployment
2. **Next:** Phase 3 (Authentication & Database setup)
3. **Then:** Phase 5 (Core conversion engine)

See `docs/superpowers/plans/` for detailed implementation plans for each phase.
