"use client";
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";

export default function SignInButton() {
  const { data: session } = useSession();
  return(
    <>
      <button  onClick={() => signIn("google")}>login with google</button>
      {session ? <>
        <p>{session.user?.name}</p>
        <p>{session.user?.email}</p>
        <p> Access Token {session.token}</p>
        {/* <img src={session.user?.image} alt="User Image"/> */}
      </> : <></>}
      <button  onClick={() => signOut()}>sair</button>
    </>
  )
}