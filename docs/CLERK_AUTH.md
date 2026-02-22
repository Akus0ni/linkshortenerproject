# Clerk Authentication

Purpose

- Centralize authentication behavior for this app; use Clerk exclusively.

Rules

- Use Clerk for all authentication. Do not add or use any other auth methods.
- The `/dashboard` route is a protected route: users must be authenticated to access it.
- If a user is already authenticated and navigates to the home page (`/`), they must be redirected to `/dashboard`.
- Sign-in and sign-up flows must always open as a Clerk modal (do not navigate to a full-page sign-in or sign-up route).

Implementation guidance (Next.js / Clerk)

- Protecting `/dashboard` (server-side - App Router): use Clerk's server auth helpers. Example pattern:

  ```ts
  // app/dashboard/page.tsx (server)
  import { auth } from "@clerk/nextjs";
  import { redirect } from "next/navigation";

  export default function DashboardPage() {
    const { userId } = auth();
    if (!userId) redirect('/');
    return (<div>Dashboard content</div>);
  }
  ```

- Redirecting from `/` when signed in (client-side example):

  ```tsx
  // app/page.tsx (client)
  'use client'
  import { useUser } from '@clerk/nextjs'
  import { useRouter } from 'next/navigation'
  import { useEffect } from 'react'

  export default function Home() {
    const { isSignedIn } = useUser();
    const router = useRouter();
    useEffect(() => {
      if (isSignedIn) router.push('/dashboard');
    }, [isSignedIn, router]);
    return (<div>Public homepage</div>);
  }
  ```

- Launching Clerk modal for sign-in / sign-up:

  - Use Clerk-provided modal components or helpers (for example, render `<SignIn />` or `<SignUp />` inside your app modal component, or call Clerk helpers to open a modal). Do not navigate to separate pages for sign-in/sign-up.

Notes

- Keep all auth logic and UI behavior consistent across the app. If you need to modify or add auth-related code, update this doc and notify maintainers.
- For any edge cases (passwordless, SSO, custom providers), coordinate with maintainers — still implement via Clerk only.

Reference

- Clerk docs: https://clerk.com/docs
