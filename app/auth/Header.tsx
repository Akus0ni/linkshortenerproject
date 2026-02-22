"use client"

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

export default function AuthHeader() {
  return (
    <header className="flex justify-between items-center p-4 gap-4 h-16">
      <div className="text-xl font-bold text-white">Link Shortener</div>
      <div className="flex items-center gap-4">
        {/* Show the sign-in and sign-up buttons when the user is signed out */}
        <SignedOut>
          <SignInButton mode="modal">
            <Button variant="link" className="text-white hover:text-gray-300 no-underline hover:no-underline">
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button className="rounded-lg bg-[#6c47ff] text-white hover:bg-[#5a3fd6]">
              Sign Up
            </Button>
          </SignUpButton>
        </SignedOut>
        {/* Show the user button when the user is signed in */}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  )
}
