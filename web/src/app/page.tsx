"use client";
import { useSession } from "next-auth/react";
import SignInButton from "../components/SignInButton";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/dashboard");
  }

  return (
    <>
      <h1>hello</h1>
      <SignInButton />
    </>
  );
}
