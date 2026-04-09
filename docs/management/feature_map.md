# Technical Feature Map

This document maps product features to their technical implementations.

## Home Page
- **Description**: Primary landing page.
- **Route**: `/`
- **Component**: `src/frontend/web/app/page.tsx`
- **Dependencies**: Lucide icons, Framer Motion.

## About Page
- **Description**: Agency mission and values.
- **Route**: `/about`
- **Page**: `src/frontend/web/app/about/page.tsx`

## Blog / Insights
- **Description**: Dynamic blog list and single article views.
- **Route**: `/blog`, `/blog/[slug]`
- **Storage**: Supabase `blogs` table.

## Admin Management
- **Description**: Role-based access for content management.
- **Route**: `/admin` (Redirects to dashboard if role is admin).
- **Project Structure**: Linked from `src/frontend/web/admin/`.

## Auth & Database
- **Auth**: Supabase Auth (Email/Password).
- **Logic**: `src/backend/modules/users`.
