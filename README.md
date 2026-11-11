

# PixText

Convert written text into compact, machine-readable PNG images optimized for multimodal AI models.

## Project Structure

- `app/` – Next.js app directory with pages and layouts
- `components/` – React components
  - `components/common/` – Shared components across pages
  - `components/ui/` – shadcn/ui components
- `lib/` – Utility functions and helpers
- `types/` – TypeScript type definitions
- `public/` – Static assets (images, fonts, etc.)
- `docs/` – Documentation
  - `docs/superpowers/specs/` – Project specifications
  - `docs/superpowers/plans/` – Implementation plans
- `DESIGN.md` – Design system documentation

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository
2. Copy `.env.example` to `.env.local` and fill in your credentials
3. Install dependencies: `npm install`
4. Start dev server: `npm run dev`
5. Open http://localhost:3000

### Development Commands

- `npm run dev` – Start dev server
- `npm run build` – Build for production
- `npm run start` – Run production server
- `npm run lint` – Run ESLint
- `npm run lint:fix` – Fix linting issues
- `npm run format` – Format code with Prettier

## Design System

See `DESIGN.md` for comprehensive design tokens, component guidelines, and accessibility standards.

## 

- Phase 1: ✅ Project Setup & Design System
- Phase 2: Public Website
- Phase 3: Authentication & Database
- Phase 4: User Dashboard
- Phase 5: Core Feature – Text to Image Conversion
- Phase 6: Conversion History
- Phase 7: Embedded AI Playground
- Phase 8: Subscription & Payments
- Phase 9: Email Integration
- Phase 10: Admin Dashboard
- Phase 11: Internationalization
- Phase 12: Testing & QA
- Phase 13: Deployment & Launch

## Stack

- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** Next.js API Routes
- **Database:** Supabase PostgreSQL
- **Authentication:** Supabase Auth
- **Storage:** Supabase Storage
- **Payments:** PayPal Checkout & Subscriptions
- **Email:** Resend
- **CAPTCHA:** Cloudflare Turnstile
- **Translation:** DeepL API
- **Deployment:** Vercel

## License

[TBD by user]
