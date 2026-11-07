# PixText Design Document

**Date:** 2026-11-07  
**Author:** Brainstorming Session  
**Status:** Awaiting Builder Review

---

## 1. Intent and Why

### The Problem
Users of Claude, ChatGPT, Gemini, and other AI models hit token limits quickly when sharing large text contexts. Token costs scale linearly with text length, and monthly allowances are finite.

### The Solution
PixText converts written text into compact, machine-readable PNG images. When processed directly by multimodal AI models, images consume fewer tokens than equivalent raw text, extending a user's effective context window and monthly budget.

### Success Metric
Primary metric: **User activity volume**—words processed per account monthly, tracked against subscription plan limits. Secondary: retention rate, plan upgrades, and PayPal payment success rate.

---

## 2. Goals, Non-Goals, Anti-Goals

### Goals
- Allow authenticated users to convert text to dense PNG images
- Support automatic multi-page splitting for very long text
- Provide a searchable, filterable conversion history
- Implement subscription tiers with usage quotas enforced server-side
- Enable users to verify image readability via embedded AI playground
- Provide administrators with full visibility into user activity, payments, and conversions
- Support 50+ languages via hand-translation (6 core) + DeepL auto-translation fallback
- Deliver a cohesive, Apple-inspired design across all surfaces

### Non-Goals
- Claim token savings are guaranteed (depends on destination AI model and its image-processing rules)
- Build a desktop or mobile-native app (web-first)
- Support OCR or text-extraction from images (images are read-only tokens)
- Implement user-to-user sharing of generated images
- Support batch or scheduled conversions
- Build a public marketplace or third-party integrations

### Anti-Goals
- Never expose API keys or passwords in frontend code
- Never silently truncate user text
- Never allow users to access other users' conversions or storage
- Never activate paid features based on frontend claims alone
- Never skip server-side quota enforcement

---

## 3. Scope and Feature List

### 3.1 Public Website (Marketing)
- **Home / Landing page** – hero section with CTA, interactive demo (text input → image preview)
- **Features page** – key value props, supported platforms, use cases
- **How It Works page** – visual walkthrough of conversion process
- **Pricing page** – 4 subscription tiers with annual/2-year/4-year discount options
- **FAQ page** – common questions about token savings, image readability, limitations
- **Contact page** – support inquiry form
- **Privacy Policy** – GDPR-compliant data handling and retention
- **Terms and Conditions** – usage terms, acceptable use, liability limits
- **Login / Sign Up / Forgot Password** – auth entry points

### 3.2 Authentication & Registration
- **Sign-up form** – First Name, Last Name, Date of Birth (18+ validation), Email, Password, Confirm Password, CAPTCHA (Cloudflare Turnstile), Terms acceptance
- **Password requirements** – Min 12 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
- **Email verification** – Supabase Auth email confirmation
- **Password reset** – Email-based reset flow
- **Login** – Email + password, remember me option, session management via Supabase
- **Server-side age validation** – Reject users under 18 at registration

### 3.3 User Dashboard
- **Sidebar navigation** – Overview, Paste Words, My History, Subscription, Usage Statistics, Account Settings, Help & Support, Logout
- **Overview tab** – Welcome message, current plan, images generated this month, monthly limit, words processed, remaining quota, recent conversions, renewal date
- **Paste Words tab** – Large text input area ("Write some words..."), word/character counter, clear button, send button

### 3.4 Core Feature: Text-to-Image Conversion
- **Image generation** – Render text using 12px monospaced font, maximize characters per line, no padding/margins/borders/watermarks
- **Multi-page splitting** – Automatically split into sequential numbered PNGs if text exceeds safe canvas dimensions
- **Image preview** – Display generated image(s), show dimensions, word count, file size, font size
- **Download options** – Single image download or ZIP for multi-page images
- **Copy original text** – Button to copy submitted text back to clipboard
- **Validation** – Check input not empty, word count ≤ plan limit, monthly quota not exceeded
- **Error handling** – Clear messages for all failure scenarios (quota exceeded, word limit hit, generation failure, storage failure)
- **Loading state** – Spinner/skeleton while generating

### 3.5 Conversion History
- **History page** – Searchable, filterable list of all user conversions
- **Per-record fields** – Conversion ID, original text preview, word count, image dimensions, file size, creation date/time
- **Per-record actions** – View Image, Download Image, Copy Original Text, Delete Image, Delete Record
- **Search/filter** – By text content, date range, word count
- **Pagination** – Handle large histories efficiently
- **Storage security** – Private Supabase Storage buckets, signed download URLs

### 3.6 Embedded AI Playground (Test Image Feature)
- **Scope** – Sandboxed iframe allowing users to temporarily paste API key (Claude or ChatGPT) and test image readability
- **Free tier** – 1 lifetime test use
- **Paid tiers** – Unlimited tests
- **Security** – API key never stored; session-only temporary storage in iframe context
- **Flow** – User generates image → clicks "Test Readability" → enters API key in sandbox → upload image to AI model → view response

### 3.7 Subscription & Pricing

#### Plans (EUR, monthly)

| Plan | Price | Images/Month | Max Words/Image | Features |
|------|-------|-------------|-----------------|----------|
| **Free** | €0 | 5 | 10,000 | Conversion history, PNG download, 1 lifetime test |
| **Starter** | €3 | 15 | 25,000 | All Free + priority processing |
| **Pro** | €8 | 50 | 50,000 | All Starter + advanced usage stats, faster support |
| **Business** | €18 | 100 | 90,000 | All Pro + premium support |

#### Annual/Multi-Year Discounts
- 1 Year: 5% discount
- 2 Years: 8% discount
- 4 Years: 10% discount

**Calculation example (Pro):**
- Monthly: €8
- 1 Year: €8 × 12 × 0.95 = €91.20
- 2 Years: €8 × 12 × 2 × 0.92 = €176.64
- 4 Years: €8 × 12 × 4 × 0.90 = €345.60

#### Billing & Quotas
- Monthly quotas reset on billing anniversary
- Upfront payment for multi-year commitments (unless recurring subscription configured)
- PayPal Checkout for one-time + PayPal Subscriptions for recurring

### 3.8 PayPal Integration
- **Checkout flow** – Secure order creation, user approval, server-side capture
- **Webhook verification** – Validate PayPal events authentically
- **Payment status** – Only activate paid features after webhook confirmation
- **Refund handling** – Support refunds per PayPal API
- **Subscription management** – Track start/end dates, billing periods, renewal
- **Payment history** – Users can view transaction records
- **Sandbox + production** – Support both environments via env vars

### 3.9 Email Integration (Resend)
- **Templates** – Welcome, email verification, password reset, payment success, payment failure, subscription activation, subscription expiration, monthly limit reached, account security alert
- **Sender domain** – Verified Pixora brand domain
- **API key** – Server-side only, never exposed to frontend

### 3.10 Admin Dashboard
- **Authentication** – Role-based access control, server-side authorization, no frontend elevation
- **Overview tab** – Total users, active users, new registrations, total conversions, images generated, words processed, subscription breakdown (Free/Starter/Pro/Business), revenue, failed payments
- **User management** – List/search/filter users, view profiles, edit details, update subscriptions, suspend/reactivate/delete accounts
- **Conversion management** – View all conversions, search/filter, delete records
- **Audit logging** – Record admin actions (who, what, when)
- **Security** – No access to passwords; admin cannot retrieve auth credentials

### 3.11 Account Settings
- Update first/last name
- Change email (verified process)
- Change password
- Change language preference
- Toggle dark/light mode
- View subscription details and payment history
- Request account deletion
- Log out all sessions (if supported by Supabase)

### 3.12 Internationalization
- **Hand-translated (6 core)** – English, Bengali, Hindi, Spanish, French, German
- **Auto-translated fallback** – All other languages via DeepL API (50+ total)
- **Language selector** – In top navigation bar
- **Preference storage** – User locale saved in profiles table

### 3.13 Theme Support
- **Light mode** – Clean white backgrounds, dark text
- **Dark mode** – Dark backgrounds, light text
- **Theme toggle** – In top navigation bar, persisted to user profile

### 3.14 Design Direction
- **Inspiration** – Apple: minimalist, premium, clean, smooth, typography-focused
- **Color palette** – Neutral grays, accent color (to be defined in DESIGN.md), no generic gradients
- **Typography** – San-serif, readable hierarchy, consistent spacing
- **Components** – Modern cards, subtle shadows, rounded corners (8–12px), smooth transitions
- **Responsive** – Mobile-first, supports all screen sizes
- **Accessibility** – WCAG 2.1 AA compliance, keyboard navigation, proper contrast

---

## 4. Technical Constraints & Decisions

### Stack (User's Choice)
- **Frontend** – Next.js (latest), React, TypeScript, Tailwind CSS, shadcn/ui, Lucide icons
- **Backend** – Next.js API routes
- **Database** – Supabase PostgreSQL with Row Level Security (RLS)
- **Authentication** – Supabase Auth
- **File storage** – Supabase Storage (private buckets)
- **Email** – Resend API
- **Payments** – PayPal Checkout + Subscriptions
- **CAPTCHA** – Cloudflare Turnstile
- **Image rendering** – HTML Canvas API (client-side or worker for large images)
- **Validation** – Zod + React Hook Form
- **Deployment** – Vercel
- **Internationalization** – (TBD: next-intl or i18next + DeepL API)
- **Hosting** – InfinityFree (current), Supabase managed, Resend managed

### Database Tables (Sketch)
- **auth.users** (Supabase native)
- **profiles** – id, first_name, last_name, date_of_birth, preferred_language, theme, created_at, updated_at
- **user_roles** – id, user_id, role (admin, user), created_at
- **subscriptions** – id, user_id, plan_id, status, billing_interval, amount, currency, start_date, end_date, next_billing_date, created_at
- **plans** – id, name, images_per_month, max_words_per_image, price_eur, features
- **payment_transactions** – id, user_id, subscription_id, paypal_order_id, paypal_capture_id, amount, currency, payment_status, created_at
- **conversions** – id, user_id, original_text, word_count, image_path (Storage bucket ref), image_width, image_height, image_size, created_at
- **admin_audit_logs** – id, admin_id, action, target_type, target_id, details, created_at

### Security Decisions
- **Password hashing** – Delegated to Supabase Auth (never store plain-text or manual hashes)
- **RLS policies** – Users can read/update only their own data; admins verified server-side
- **API protection** – Middleware to verify session/role before sensitive endpoints
- **Webhook verification** – PayPal webhook signature validation before processing
- **File access** – Signed URLs with short expiration; storage RLS enforces ownership
- **Environment variables** – Service-role key, PayPal secrets, Resend key, Turnstile secret never exposed to browser

### Image Rendering Strategy
- **Client-side rendering** – Use HTML Canvas API to render text
- **Font** – Monospaced (e.g., Monaco, Courier New, with fallbacks)
- **Dimensions** – Automatically calculate based on text length and line-wrap
- **Large image handling** – If canvas exceeds safe limits (e.g., 16,000px height), split into multiple sequential PNGs
- **Export** – Convert Canvas to PNG blob, upload to Supabase Storage

### Internationalization Strategy
- **Approach** – Use next-intl for UI strings + DeepL API for dynamic fallback
- **Core languages** – English, Bengali, Hindi, Spanish, French, German (hand-translated JSON files)
- **Fallback** – If user's locale not in core 6, use DeepL to auto-translate core English strings
- **Storage** – Locale preference in profiles.preferred_language

---

## 5. Implementation Phases

### Phase 1: Project Setup & Design System
- Initialize Next.js project
- Configure Tailwind CSS + shadcn/ui
- Create DESIGN.md with Apple-inspired color palette, typography, spacing tokens
- Set up environment variables structure (.env.example)
- Create project structure (app/, components/, lib/, public/)

### Phase 2: Public Website
- Build responsive navigation (logo, links, language selector, light/dark toggle, Login/Get Started CTA)
- Build landing page (hero, features, demo section, supported platforms, pricing teaser, FAQ teaser, footer)
- Build Features, How It Works, Pricing, FAQ, Contact pages
- Build Privacy Policy, Terms & Conditions
- Build Login, Sign Up, Forgot Password pages

### Phase 3: Authentication & Database
- Set up Supabase project and database
- Create database migrations (profiles, roles, subscriptions, plans, conversions, payments, audit logs)
- Configure RLS policies
- Implement Supabase Auth integration in Next.js
- Implement registration flow with email verification, age validation, CAPTCHA
- Implement login, password reset, session management
- Implement logout

### Phase 4: User Dashboard
- Build dashboard layout (sidebar navigation, responsive)
- Build Overview tab (welcome, plan info, usage display, recent conversions)
- Build Account Settings tab (profile edit, language, theme, subscription view, delete account)

### Phase 5: Core Feature – Text to Image Conversion
- Build Paste Words interface (large text input, word/char counter, clear/send buttons)
- Implement HTML Canvas-based text rendering (12px font, monospaced, character-per-line maximization)
- Implement multi-page splitting logic (detect overflow, create sequential PNGs)
- Implement image preview (dimensions, word count, file size display)
- Implement PNG download (single or ZIP for multi-page)
- Implement copy original text button
- Implement quota checking and error handling
- Implement loading state

### Phase 6: Conversion History
- Build History page (searchable list, filters, pagination)
- Implement per-record actions (view, download, copy, delete)
- Implement search by text content, date, word count
- Implement private storage access via signed URLs

### Phase 7: Embedded AI Playground (Test Feature)
- Design sandboxed iframe component
- Implement temporary API key input (Claude or ChatGPT)
- Implement image upload to AI model
- Implement quota tracking (1 lifetime for free, unlimited for paid)
- Test security model (no key persistence)

### Phase 8: Subscription & Payments
- Build Pricing page with discount selector (1/2/4 year options)
- Integrate PayPal Checkout for one-time payments
- Implement PayPal Subscriptions for recurring billing
- Implement server-side payment verification via webhooks
- Implement subscription status tracking in database
- Implement quota reset logic (monthly on billing anniversary)
- Build subscription management page (view active plan, upgrade/downgrade, payment history)

### Phase 9: Email Integration
- Set up Resend API credentials
- Create email templates (welcome, verification, password reset, payment success, payment failure, subscription alerts)
- Implement transactional email triggers
- Test email delivery

### Phase 10: Admin Dashboard
- Implement admin authentication & role check
- Build Admin Overview tab (metrics dashboard)
- Build User Management tab (list, search, edit, suspend, delete)
- Build Conversion Management tab (search, view, delete)
- Implement audit logging for admin actions

### Phase 11: Internationalization
- Set up next-intl or i18next
- Create JSON translation files for 6 core languages
- Integrate DeepL API for fallback auto-translation
- Implement language selector and preference persistence
- Test all UI text in multiple languages

### Phase 12: Testing & QA
- Write unit tests (auth validation, quota calculation, image splitting logic)
- Write integration tests (registration flow, payment flow, conversion flow)
- Write E2E tests (user signup → conversion → payment flow)
- Security audit (RLS policies, API authorization, CAPTCHA verification)
- Performance testing (large image generation, large history queries)
- Cross-browser and mobile testing

### Phase 13: Deployment & Launch
- Configure Vercel deployment
- Set up production environment variables
- Set up PayPal production credentials (from user)
- Set up Resend production domain verification (from user)
- Perform staging environment testing
- Deploy to production
- Monitor logs and errors

---

## 6. What's Left to the Builder

### Credentials & External Setup
The builder will need to obtain and configure the following (user provides credentials):
- **Supabase:** Project URL, anon key, service-role key
- **Resend:** API key, verified sender domain
- **PayPal:** Client ID, Client Secret, Webhook ID (both sandbox and production)
- **Cloudflare Turnstile:** Site Key, Secret Key
- **DeepL API:** API key (for auto-translation fallback)

### Design Refinements (Pending)
- **DESIGN.md:** Exact color palette, typography scale, spacing system (Apple-inspired to be defined)
- **Branding assets:** Logo, favicon, email templates styling
- **Visual mockups:** Landing page, dashboard layouts (if user wants to review before build)

### Business Logic Decisions (Pending)
- **Free tier support costs:** Budget for support/hosting for free users
- **Data retention policy:** How long to keep deleted user data in backups
- **Refund policy:** After PayPal charges, what's the refund window
- **Support channels:** Email, Discord, Zendesk, or other?

### Optional Enhancements (Future)
- Dark mode refinements for admin dashboard
- Mobile app (iOS/Android) via React Native or Flutter
- API for third-party integrations
- Batch conversion uploads
- User referral program
- Advanced analytics (heatmaps, user behavior tracking)

---

## 7. Success Criteria (Builder Check)

- [ ] Is the scope clear and complete?
- [ ] Are there ambiguities in the conversion process (image dimensions, splitting logic)?
- [ ] Are the pricing/margin calculations realistic?
- [ ] Are the database schema and RLS policies sufficient?
- [ ] Are the phasing and dependencies correct?
- [ ] Is anything missing from the public website or admin dashboard?
- [ ] Are there questions about the embedded AI playground design?

---

## 8. Approval Checklist

**User must approve before build starts:**
- [ ] Full scope and feature list
- [ ] Pricing model (€0, €3, €8, €18)
- [ ] Phases 1–13 sequencing
- [ ] Apple-inspired design direction confirmed
- [ ] Internationalization approach (6 core + DeepL fallback)
- [ ] No additional features or anti-goals added

---

**End of Design Document**
