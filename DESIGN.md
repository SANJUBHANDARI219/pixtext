# PixText Design System

## Overview

PixText follows an Apple-inspired design philosophy: minimalist, premium, clean, typography-focused, and accessible. This document defines the design tokens, component guidelines, and best practices for all interfaces.

---

## 1. Color Palette

### Neutral Colors (Grays)

Used for backgrounds, borders, text, and neutral UI elements.

| Name     | Hex     | Use Case                                |
| -------- | ------- | --------------------------------------- |
| Gray-50  | #F9FAFB | Lightest background, secondary surfaces |
| Gray-100 | #F3F4F6 | Light background, hover states          |
| Gray-200 | #E5E7EB | Subtle borders, dividers                |
| Gray-300 | #D1D5DB | Standard borders                        |
| Gray-400 | #9CA3AF | Disabled text, muted elements           |
| Gray-500 | #6B7280 | Default body text, secondary content    |
| Gray-600 | #4B5563 | Stronger text, labels                   |
| Gray-700 | #374151 | Headings, strong emphasis               |
| Gray-800 | #1F2937 | Dark text, high contrast                |
| Gray-900 | #111827 | Darkest text, maximum contrast          |

### Accent Color (Teal)

Primary action color, links, and interactive states.

| Name     | Hex     | Use Case                             |
| -------- | ------- | ------------------------------------ |
| Teal-50  | #F0FDFA | Background hover for teal elements   |
| Teal-100 | #CCFBF1 | Light background for teal sections   |
| Teal-200 | #99F6E4 | Teal background (secondary use)      |
| Teal-500 | #14B8A6 | Primary buttons, links, focus states |
| Teal-600 | #0D9488 | Button hover, active states          |
| Teal-700 | #0F766E | Pressed/focused states               |

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

| Role             | Size            | Weight | Line Height | Letter Spacing |
| ---------------- | --------------- | ------ | ----------- | -------------- |
| Heading XL       | 2.5rem (40px)   | 700    | 3rem        | -0.5px         |
| Heading Large    | 2rem (32px)     | 700    | 2.5rem      | -0.5px         |
| Heading Medium   | 1.5rem (24px)   | 600    | 2rem        | -0.25px        |
| Heading Small    | 1.25rem (20px)  | 600    | 1.75rem     | 0px            |
| Body Large       | 1.125rem (18px) | 400    | 1.75rem     | 0px            |
| Body Medium      | 1rem (16px)     | 400    | 1.5rem      | 0px            |
| Body Small       | 0.875rem (14px) | 400    | 1.25rem     | 0px            |
| Label            | 0.75rem (12px)  | 500    | 1rem        | 0.5px          |
| Monospace (code) | 0.875rem (14px) | 400    | 1.5rem      | 0px            |

### Usage

- **Headings:** Use for section titles and page headings. Maintain hierarchy (XL → Large → Medium → Small).
- **Body:** Default text for paragraphs, descriptions, and lists.
- **Label:** Used for form labels, badges, and small UI text.
- **Monospace:** Code blocks, input text, technical content.

---

## 3. Spacing System

Consistent spacing creates visual rhythm and predictability.

| Token | Value         | Common Uses                                |
| ----- | ------------- | ------------------------------------------ |
| xs    | 0.25rem (4px) | Micro-spacing, icon gaps                   |
| sm    | 0.5rem (8px)  | Padding in small elements, tight spacing   |
| md    | 1rem (16px)   | Standard padding, spacing between elements |
| lg    | 1.5rem (24px) | Larger padding, spacing sections           |
| xl    | 2rem (32px)   | Major spacing, container padding           |
| 2xl   | 3rem (48px)   | Large section gaps                         |
| 3xl   | 4rem (64px)   | Page-level spacing                         |

### Application

- **Components:** Use md for standard padding
- **Cards:** Use lg for internal padding
- **Sections:** Use xl–2xl for spacing between major sections
- **Margins:** Use spacing tokens consistently (no magic numbers)

---

## 4. Border Radius

Rounded corners soften interfaces while maintaining clarity.

| Token | Value          | Use Case                      |
| ----- | -------------- | ----------------------------- |
| sm    | 0.375rem (6px) | Small elements, badges        |
| md    | 0.5rem (8px)   | Standard borders, form inputs |
| lg    | 0.75rem (12px) | Cards, buttons                |
| xl    | 1rem (16px)    | Larger cards, modals          |
| 2xl   | 1.5rem (24px)  | Extra-large elements          |

---

## 5. Shadows

Shadows create depth and visual hierarchy. Use sparingly.

| Token | Value                                                                     | Use Case                       |
| ----- | ------------------------------------------------------------------------- | ------------------------------ |
| sm    | 0 1px 2px 0 rgba(0, 0, 0, 0.05)                                           | Subtle elevation, hover states |
| md    | 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)     | Cards, standard elevation      |
| lg    | 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)   | Dropdowns, modals              |
| xl    | 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) | Floating elements, overlays    |

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
