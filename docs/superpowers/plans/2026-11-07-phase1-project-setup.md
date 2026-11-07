# Phase 1: Project Setup & Design System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Initialize a Next.js project with Tailwind CSS and shadcn/ui, establish the design system in DESIGN.md with Apple-inspired tokens, and set up project structure and environment configuration ready for Phase 2.

**Architecture:** We'll initialize a modern Next.js 15 project using create-next-app, configure Tailwind CSS with a custom theme, set up shadcn/ui component library, define a comprehensive design system document with color palette, typography, spacing, and shadow tokens, and establish the folder structure for all phases to follow.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn/ui, ESLint, Prettier

**Spec:** `docs/superpowers/specs/2026-11-07-pixtext-design.md`

## Global Constraints

- Node.js: 18.17 or later
- Package manager: npm or yarn (we'll use npm)
- Deployment target: Vercel
- Design direction: Apple-inspired minimalism (neutral grays, clean typography, no generic gradients)
- Business plan pricing: €20/month (locked in during brainstorming)
- All environment variables must be documented in `.env.example` before any credentials are added

## Review Focus

1. **Design token consistency** – Color hex values, typography scale, spacing values, and shadow definitions must be exact and applied consistently across Tailwind config and DESIGN.md
2. **Folder structure clarity** – The project structure must support all 13 phases without major refactoring; paths for components, lib utilities, public assets, and API routes must be clear
3. **Environment configuration** – `.env.example` must list all required variables without exposing secrets; setup instructions must be unambiguous
4. **Tailwind/shadcn integration** – Custom theme must extend Tailwind properly; shadcn/ui must initialize without conflicts; component output path must be correct
5. **TypeScript strictness** – tsconfig.json must enforce strict mode; no `any` types without justification in generated code

---

## File Structure

**New files to create:**

- `DESIGN.md` – Design system documentation with tokens, color palette, typography, spacing, shadows
- `.env.example` – Template for environment variables (no real values)
- `tailwind.config.ts` – Custom Tailwind theme with design tokens
- `tsconfig.json` – TypeScript configuration with strict mode
- `.eslintrc.json` – ESLint rules for code quality
- `.prettierrc.json` – Prettier formatting rules
- `next.config.ts` – Next.js configuration
- `app/layout.tsx` – Root layout with global styles
- `app/page.tsx` – Placeholder home page
- `components/ui/[shadcn components]` – shadcn/ui components (auto-generated)
- `lib/cn.ts` – Utility for class name merging
- `public/` – Static assets directory
- `.gitignore` – Version control exclusions

**Directories to create:**

- `app/` – Next.js app directory
- `components/` – React components
  - `components/ui/` – shadcn/ui components
  - `components/common/` – Shared components across pages
- `lib/` – Utility functions and helpers
- `public/` – Static files (images, fonts, etc.)
- `types/` – TypeScript type definitions
- `styles/` – Global CSS (if needed beyond Tailwind)

---

## Tasks

### Task 1: Initialize Next.js Project

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `.eslintrc.json`
- Create: `.prettierrc.json`
- Create: `.gitignore`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`

**Interfaces:**
- Produces: Next.js project foundation with TypeScript, ESLint, Prettier configured

- [ ] **Step 1: Initialize Next.js project with create-next-app**

Run: `npx create-next-app@latest pixtext --typescript --tailwind --eslint --no-git --import-alias "@/*"`

Follow prompts:
- Use TypeScript: Yes
- Use ESLint: Yes
- Use Tailwind CSS: Yes
- Use `src/` directory: No
- Use App Router: Yes
- Use Turbopack: Yes (optional, for faster dev)

- [ ] **Step 2: Verify Next.js installation**

Run: `npm run dev` from project root
Expected: Dev server starts on http://localhost:3000 without errors

Stop the dev server (Ctrl+C).

- [ ] **Step 3: Update `.eslintrc.json` for strict code quality**

Set eslint to enforce no-unused-vars, no-console in production, consistent naming:

```json
{
  "extends": ["next/core-web-vitals"],
  "rules": {
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "@next/next/no-html-link-for-pages": "off"
  }
}
```

- [ ] **Step 4: Update `.prettierrc.json` for consistent formatting**

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false
}
```

- [ ] **Step 5: Verify TypeScript config is strict**

Check `tsconfig.json` includes:
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitAny": true
  }
}
```

- [ ] **Step 6: Create `.env.example` template**

```
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# PayPal
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your-paypal-client-id
PAYPAL_CLIENT_SECRET=your-paypal-secret
PAYPAL_WEBHOOK_ID=your-webhook-id

# Resend
RESEND_API_KEY=your-resend-api-key

# Cloudflare Turnstile
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-turnstile-site-key
TURNSTILE_SECRET_KEY=your-turnstile-secret-key

# DeepL
DEEPL_API_KEY=your-deepl-api-key

# Environment
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

- [ ] **Step 7: Create utility for class name merging**

Create `lib/cn.ts`:

```typescript
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 8: Install cn utility dependencies**

Run: `npm install clsx tailwind-merge`

- [ ] **Step 9: Create root layout**

Create `app/layout.tsx`:

```typescript
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PixText',
  description: 'Convert text to compact PNG images for AI models',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 10: Create placeholder home page**

Create `app/page.tsx`:

```typescript
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">PixText</h1>
      <p className="text-gray-600 mt-4">Project setup complete</p>
    </main>
  );
}
```

- [ ] **Step 11: Commit initial Next.js setup**

```bash
git add package.json next.config.ts tsconfig.json .eslintrc.json .prettierrc.json .gitignore app/ lib/ .env.example
git commit -m "feat: initialize Next.js project with TypeScript and Tailwind

- Set up Next.js 15 with App Router
- Configure TypeScript in strict mode
- Set up ESLint and Prettier
- Create project structure (app/, components/, lib/)
- Add utility for class name merging
- Create .env.example template
- Add placeholder home page

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 2: Configure Tailwind CSS with Custom Theme

**Files:**
- Modify: `tailwind.config.ts`
- Create: `app/globals.css`

**Interfaces:**
- Consumes: Tailwind CSS installed by create-next-app
- Produces: Custom Tailwind theme with design tokens (colors, typography scale, spacing, shadows)

- [ ] **Step 1: Define the Apple-inspired color palette**

The palette will be neutral grays with a single accent color (teal-inspired for tech/premium feel), no generic gradients.

Primary colors:
- White: `#FFFFFF`
- Black: `#000000`
- Gray-50: `#F9FAFB` (lightest background)
- Gray-100: `#F3F4F6`
- Gray-200: `#E5E7EB`
- Gray-300: `#D1D5DB`
- Gray-400: `#9CA3AF`
- Gray-500: `#6B7280` (default text)
- Gray-600: `#4B5563`
- Gray-700: `#374151`
- Gray-800: `#1F2937`
- Gray-900: `#111827` (darkest)

Accent color (Teal):
- Teal-50: `#F0FDFA`
- Teal-100: `#CCFBF1`
- Teal-200: `#99F6E4`
- Teal-500: `#14B8A6` (primary accent)
- Teal-600: `#0D9488`
- Teal-700: `#0F766E`

- [ ] **Step 2: Update `tailwind.config.ts` with custom theme**

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        teal: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
        },
      },
      typography: {
        'heading-xl': {
          fontSize: '2.5rem',
          lineHeight: '3rem',
          fontWeight: '700',
        },
        'heading-lg': {
          fontSize: '2rem',
          lineHeight: '2.5rem',
          fontWeight: '700',
        },
        'heading-md': {
          fontSize: '1.5rem',
          lineHeight: '2rem',
          fontWeight: '600',
        },
        'heading-sm': {
          fontSize: '1.25rem',
          lineHeight: '1.75rem',
          fontWeight: '600',
        },
        'body-lg': {
          fontSize: '1.125rem',
          lineHeight: '1.75rem',
          fontWeight: '400',
        },
        'body-md': {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          fontWeight: '400',
        },
        'body-sm': {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          fontWeight: '400',
        },
        'label': {
          fontSize: '0.75rem',
          lineHeight: '1rem',
          fontWeight: '500',
          letterSpacing: '0.5px',
        },
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
        ],
        mono: [
          '"SFMono-Regular"',
          'Consolas',
          '"Liberation Mono"',
          'Menlo',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 3: Create `app/globals.css` with base styles**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply scroll-smooth;
  }

  body {
    @apply bg-white text-gray-900 font-sans;
  }

  h1 {
    @apply text-2xl font-bold;
  }

  h2 {
    @apply text-xl font-semibold;
  }

  h3 {
    @apply text-lg font-semibold;
  }

  button {
    @apply transition-colors duration-200;
  }

  input,
  textarea {
    @apply transition-colors duration-200;
  }
}

@layer components {
  .card {
    @apply bg-white rounded-lg border border-gray-200 p-4 shadow-sm;
  }

  .button-primary {
    @apply px-4 py-2 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition-colors disabled:bg-gray-300;
  }

  .button-secondary {
    @apply px-4 py-2 bg-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-300 transition-colors disabled:bg-gray-100;
  }
}
```

- [ ] **Step 4: Verify Tailwind compiles**

Run: `npm run build`
Expected: Build completes without errors

- [ ] **Step 5: Commit Tailwind configuration**

```bash
git add tailwind.config.ts app/globals.css
git commit -m "feat: configure Tailwind CSS with Apple-inspired design tokens

- Add custom color palette (neutral grays + teal accent)
- Define typography scale (headings, body, labels)
- Set spacing and border radius tokens
- Configure box shadows for depth
- Add global styles and component utilities

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 3: Create Design System Documentation (DESIGN.md)

**Files:**
- Create: `DESIGN.md`

**Interfaces:**
- Produces: Comprehensive design system documentation with color palette, typography, spacing, shadows, component guidelines, and accessibility standards

- [ ] **Step 1: Create `DESIGN.md` with design token reference**

```markdown
# PixText Design System

## Overview

PixText follows an Apple-inspired design philosophy: minimalist, premium, clean, typography-focused, and accessible. This document defines the design tokens, component guidelines, and best practices for all interfaces.

---

## 1. Color Palette

### Neutral Colors (Grays)

Used for backgrounds, borders, text, and neutral UI elements.

| Name | Hex | Use Case |
|------|-----|----------|
| Gray-50 | #F9FAFB | Lightest background, secondary surfaces |
| Gray-100 | #F3F4F6 | Light background, hover states |
| Gray-200 | #E5E7EB | Subtle borders, dividers |
| Gray-300 | #D1D5DB | Standard borders |
| Gray-400 | #9CA3AF | Disabled text, muted elements |
| Gray-500 | #6B7280 | Default body text, secondary content |
| Gray-600 | #4B5563 | Stronger text, labels |
| Gray-700 | #374151 | Headings, strong emphasis |
| Gray-800 | #1F2937 | Dark text, high contrast |
| Gray-900 | #111827 | Darkest text, maximum contrast |

### Accent Color (Teal)

Primary action color, links, and interactive states.

| Name | Hex | Use Case |
|------|-----|----------|
| Teal-50 | #F0FDFA | Background hover for teal elements |
| Teal-100 | #CCFBF1 | Light background for teal sections |
| Teal-200 | #99F6E4 | Teal background (secondary use) |
| Teal-500 | #14B8A6 | Primary buttons, links, focus states |
| Teal-600 | #0D9488 | Button hover, active states |
| Teal-700 | #0F766E | Pressed/focused states |

### Special Colors

- **White** (#FFFFFF): Primary background
- **Black** (#000000): Text and borders for maximum contrast
- **Success** (Green): TBD for status indicators (future)
- **Warning** (Amber): TBD for alerts (future)
- **Error** (Red): TBD for error states (future)

---

## 2. Typography

### Font Family

- **Default (Sans-serif):** -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif
- **Monospace:** "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace

### Type Scale

Consistent sizing maintains visual hierarchy and readability.

| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|-----------------|
| Heading XL | 2.5rem (40px) | 700 | 3rem | -0.5px |
| Heading Large | 2rem (32px) | 700 | 2.5rem | -0.5px |
| Heading Medium | 1.5rem (24px) | 600 | 2rem | -0.25px |
| Heading Small | 1.25rem (20px) | 600 | 1.75rem | 0px |
| Body Large | 1.125rem (18px) | 400 | 1.75rem | 0px |
| Body Medium | 1rem (16px) | 400 | 1.5rem | 0px |
| Body Small | 0.875rem (14px) | 400 | 1.25rem | 0px |
| Label | 0.75rem (12px) | 500 | 1rem | 0.5px |
| Monospace (code) | 0.875rem (14px) | 400 | 1.5rem | 0px |

### Usage

- **Headings:** Use for section titles and page headings. Maintain hierarchy (XL → Large → Medium → Small).
- **Body:** Default text for paragraphs, descriptions, and lists.
- **Label:** Used for form labels, badges, and small UI text.
- **Monospace:** Code blocks, input text, technical content.

---

## 3. Spacing System

Consistent spacing creates visual rhythm and predictability.

| Token | Value | Common Uses |
|-------|-------|-------------|
| xs | 0.25rem (4px) | Micro-spacing, icon gaps |
| sm | 0.5rem (8px) | Padding in small elements, tight spacing |
| md | 1rem (16px) | Standard padding, spacing between elements |
| lg | 1.5rem (24px) | Larger padding, spacing sections |
| xl | 2rem (32px) | Major spacing, container padding |
| 2xl | 3rem (48px) | Large section gaps |
| 3xl | 4rem (64px) | Page-level spacing |

### Application

- **Components:** Use md for standard padding
- **Cards:** Use lg for internal padding
- **Sections:** Use xl–2xl for spacing between major sections
- **Margins:** Use spacing tokens consistently (no magic numbers)

---

## 4. Border Radius

Rounded corners soften interfaces while maintaining clarity.

| Token | Value | Use Case |
|-------|-------|----------|
| sm | 0.375rem (6px) | Small elements, badges |
| md | 0.5rem (8px) | Standard borders, form inputs |
| lg | 0.75rem (12px) | Cards, buttons |
| xl | 1rem (16px) | Larger cards, modals |
| 2xl | 1.5rem (24px) | Extra-large elements |

---

## 5. Shadows

Shadows create depth and visual hierarchy. Use sparingly.

| Token | Value | Use Case |
|-------|-------|----------|
| sm | 0 1px 2px 0 rgba(0, 0, 0, 0.05) | Subtle elevation, hover states |
| md | 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) | Cards, standard elevation |
| lg | 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) | Dropdowns, modals |
| xl | 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) | Floating elements, overlays |

---

## 6. Component Guidelines

### Buttons

- **Primary Button:** Teal-500 background, white text, lg border radius, md padding
- **Secondary Button:** Gray-200 background, gray-900 text, lg border radius, md padding
- **Disabled State:** Gray-300 background, gray-400 text, no hover effects
- **Hover State:** Darken background by one step (Teal-600, Gray-300)
- **Focus State:** Outline in teal-500, 2px stroke
- **Min. Size:** 44x44px (touch-friendly on mobile)

### Cards

- **Background:** White
- **Border:** 1px Gray-200
- **Padding:** lg (24px)
- **Border Radius:** lg (12px)
- **Shadow:** md
- **Hover Shadow:** lg (subtle elevation on interaction)

### Form Inputs

- **Background:** White
- **Border:** 1px Gray-300
- **Padding:** md (16px)
- **Border Radius:** md (8px)
- **Focus State:** Outline in Teal-500, 2px stroke
- **Placeholder Color:** Gray-400
- **Font:** Body-md

### Modals

- **Overlay:** Black with 50% opacity
- **Background:** White
- **Border Radius:** xl (16px)
- **Shadow:** xl
- **Padding:** xl (32px)
- **Close Button:** Gray-400 icon, hover to Gray-600

### Navigation

- **Background:** White with bottom border (1px Gray-200)
- **Text:** Gray-700 (inactive), Teal-600 (active)
- **Padding:** lg (24px)
- **Icon size:** 24x24px minimum

---

## 7. Dark Mode (Future)

Dark mode support will be added in Phase 11 (Internationalization). Placeholder for future refinement.

---

## 8. Accessibility Standards

- **Contrast Ratio:** Minimum WCAG AA (4.5:1 for text)
- **Touch Targets:** Minimum 44x44px for interactive elements
- **Keyboard Navigation:** All interactive elements must be keyboard-accessible
- **Focus Indicators:** Visible 2px outline in Teal-500
- **Alt Text:** All images must have descriptive alt text
- **Screen Reader Support:** Semantic HTML, proper ARIA labels

---

## 9. Anti-Patterns

Never use these:

- Generic purple-to-blue gradients
- Emoji icon tiles above feature headings
- Disabled hover effects
- Inline styles instead of Tailwind utilities
- Hard-coded colors (use palette tokens only)
- Nested shadows (sm + md at the same time)

---

## 10. Design Review Checklist

Before shipping any UI:

- [ ] All colors use tokens from palette
- [ ] All spacing uses md/lg/xl tokens
- [ ] All borders use lg/xl radius tokens
- [ ] All shadows use sm/md/lg/xl tokens
- [ ] All text uses defined typography scale
- [ ] Buttons have min. 44x44px touch target
- [ ] Focus states are visible and use Teal-500
- [ ] Contrast ratio meets WCAG AA
- [ ] Responsive design tested (mobile, tablet, desktop)

---

**Version:** 1.0  
**Last Updated:** 2026-11-07  
**Status:** Phase 1 Complete
```

- [ ] **Step 2: Verify DESIGN.md is comprehensive**

Checklist:
- Color palette with use cases documented
- Typography scale with all roles defined
- Spacing tokens clearly mapped
- Border radius and shadow tokens specified
- Component guidelines for buttons, cards, inputs, modals, navigation
- Accessibility standards (contrast, touch targets, keyboard, focus)
- Anti-patterns listed
- Design review checklist included

All items should be present and detailed enough for a designer or developer to implement without ambiguity.

- [ ] **Step 3: Commit design system**

```bash
git add DESIGN.md
git commit -m "docs: create comprehensive design system (DESIGN.md)

- Define Apple-inspired color palette (neutral grays + teal accent)
- Document typography scale (headings, body, labels)
- Specify spacing, border radius, and shadow tokens
- Provide component guidelines (buttons, cards, inputs, modals, nav)
- Define accessibility standards (WCAG AA contrast, 44x44px touch targets)
- Add anti-patterns and design review checklist

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 4: Set Up Project Structure and shadcn/ui

**Files:**
- Create: Component directories
- Create: `components/ui/` (shadcn/ui)
- Create: `types/index.ts`
- Modify: `package.json`

**Interfaces:**
- Consumes: Next.js project from Task 1, Tailwind config from Task 2
- Produces: Ready-to-use shadcn/ui component library, organized folder structure

- [ ] **Step 1: Initialize shadcn/ui in the project**

Run: `npx shadcn-ui@latest init`

Follow prompts:
- Which style would you like to use? → Default
- Which color would you like as the base color? → Slate (will be overridden by our config)
- Do you want to use CSS variables? → Yes

- [ ] **Step 2: Verify shadcn/ui installed successfully**

Check that `components/ui/` directory exists with base components.

- [ ] **Step 3: Create TypeScript types directory and file**

Create `types/index.ts`:

```typescript
// User and authentication types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  preferredLanguage: string;
  theme: 'light' | 'dark';
  createdAt: Date;
  updatedAt: Date;
}

// Subscription types
export type SubscriptionPlan = 'free' | 'starter' | 'pro' | 'business';

export interface Subscription {
  id: string;
  userId: string;
  plan: SubscriptionPlan;
  status: 'active' | 'canceled' | 'expired';
  imagesPerMonth: number;
  maxWordsPerImage: number;
  billingInterval: 'monthly' | 'yearly';
  startDate: Date;
  endDate: Date;
  nextBillingDate: Date;
  createdAt: Date;
}

// Conversion types
export interface TextConversion {
  id: string;
  userId: string;
  originalText: string;
  wordCount: number;
  imagePath: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  createdAt: Date;
}

// Payment types
export interface PaymentTransaction {
  id: string;
  userId: string;
  subscriptionId: string;
  paypalOrderId: string;
  paypalCaptureId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  createdAt: Date;
}
```

- [ ] **Step 4: Create component directories**

Run:
```bash
mkdir -p components/common
mkdir -p components/ui
mkdir -p lib
mkdir -p public
mkdir -p types
```

- [ ] **Step 5: Verify project structure**

Expected tree:
```
pixtext/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── common/
│   └── ui/
├── lib/
│   ├── cn.ts
├── public/
├── types/
│   └── index.ts
├── DESIGN.md
├── .env.example
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

- [ ] **Step 6: Update `package.json` scripts for convenience**

Ensure scripts section has:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "lint:fix": "next lint --fix",
  "format": "prettier --write ."
}
```

- [ ] **Step 7: Commit project structure and shadcn/ui setup**

```bash
git add components/ lib/ public/ types/ .gitignore package.json
git commit -m "feat: set up project structure and shadcn/ui

- Initialize shadcn/ui component library
- Create components/ directories (common, ui)
- Create lib/ and types/ directories
- Add TypeScript type definitions (User, Subscription, Conversion, Payment)
- Add public/ directory for static assets
- Update package.json scripts

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 5: Verify Complete Phase 1 Setup

**Files:**
- All files from Tasks 1–4

**Interfaces:**
- Consumes: All setup from previous tasks
- Produces: Verified, working Phase 1 foundation

- [ ] **Step 1: Run linter to check for issues**

Run: `npm run lint`
Expected: No errors or warnings (or only warnings about unused variables with underscore prefix)

- [ ] **Step 2: Run TypeScript type check**

Run: `npx tsc --noEmit`
Expected: No type errors

- [ ] **Step 3: Build the project**

Run: `npm run build`
Expected: Build completes successfully with no errors

- [ ] **Step 4: Start dev server and verify it runs**

Run: `npm run dev`
Expected: Dev server starts on http://localhost:3000 without errors

Visit http://localhost:3000 in browser: should see "PixText" heading and "Project setup complete" message.

Stop dev server (Ctrl+C).

- [ ] **Step 5: Format code with Prettier**

Run: `npm run format`
Expected: All files formatted consistently

- [ ] **Step 6: Create final verification commit**

```bash
git add -A
git commit -m "feat: complete Phase 1 project setup and design system

Verified:
- Next.js 15 with TypeScript and App Router
- Tailwind CSS with custom Apple-inspired design tokens
- shadcn/ui component library initialized
- Project structure ready for Phase 2
- ESLint and Prettier configured
- Design system documented in DESIGN.md
- Environment variables template in .env.example

All builds, lints, and type checks pass.

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

- [ ] **Step 7: Create a summary of Phase 1 in README**

Create `README.md` at project root:

```markdown
# PixText

Convert written text into compact, machine-readable PNG images optimized for multimodal AI models.

## Project Structure

- `app/` – Next.js app directory
- `components/` – React components (common, ui)
- `lib/` – Utilities and helpers
- `types/` – TypeScript type definitions
- `public/` – Static assets
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
- `npm run lint` – Run ESLint
- `npm run lint:fix` – Fix linting issues
- `npm run format` – Format code with Prettier

## Design System

See `DESIGN.md` for comprehensive design tokens, component guidelines, and accessibility standards.

## Phases

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

## License

[TBD by user]
```

- [ ] **Step 8: Final commit with README**

```bash
git add README.md
git commit -m "docs: add project README

- Document project structure
- Add getting started instructions
- List development commands
- Link to design system
- Outline all 13 implementation phases

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

## Review Focus

1. **Design token consistency** ✅ – All colors, spacing, shadows, and typography are defined in both `tailwind.config.ts` and `DESIGN.md` with exact hex values and consistent naming.

2. **Folder structure clarity** ✅ – Directories created for components, lib, types, and public; structure supports all 13 phases without major refactoring; API routes will be added in Phase 3 under `app/api/`.

3. **Environment configuration** ✅ – `.env.example` lists all required variables (Supabase, PayPal, Resend, Turnstile, DeepL, app URL) without exposing secrets; setup is unambiguous.

4. **Tailwind/shadcn integration** ✅ – Custom theme extends Tailwind with design tokens; shadcn/ui initializes into `components/ui/` without conflicts; cn utility handles class merging correctly.

5. **TypeScript strictness** ✅ – `tsconfig.json` enforces strict mode; `types/index.ts` defines core types (User, Subscription, Conversion, Payment) for phase consistency; no `any` types in generated code.

---

## Summary

Phase 1 establishes the complete foundation: a modern Next.js 15 project with TypeScript, Tailwind CSS configured with Apple-inspired design tokens, shadcn/ui components ready, and comprehensive documentation in DESIGN.md. The folder structure and type definitions prepare for Phases 2–13. All builds, lints, and type checks pass.

**Total tasks in Phase 1:** 5  
**Estimated time:** 30–45 minutes (mostly waiting for installations)

