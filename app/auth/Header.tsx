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
    <header className="flex justify-end items-center p-4 gap-4 h-16">
      {/* Show the sign-in and sign-up buttons when the user is signed out */}
      <SignedOut>
        <SignInButton mode="modal" />
        <SignUpButton mode="modal">
          <Button className="rounded-full bg-[#6c47ff] text-white hover:bg-[#5a3fd6]">
            Sign Up
          </Button>
        </SignUpButton>
      </SignedOut>
      {/* Show the user button when the user is signed in */}
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}
