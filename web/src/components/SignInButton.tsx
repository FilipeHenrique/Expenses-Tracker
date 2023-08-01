"use client";
import { signIn } from "next-auth/react"

export default function SignInButton() {

  return(
    <>
      <button  onClick={() => signIn("google", { callbackUrl: '/dashboard' })}>login with google</button>
    </>
  )
}