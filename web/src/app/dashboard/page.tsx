"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Dashboard() {
  const { data: session } = useSession();
  return(
    <>
     {session ? <>
        <p>{session.user?.name}</p>
        <p>{session.user?.email}</p>
        <p> Access Token {session.token}</p>
        <Image src={`${session.user?.image}`} alt="User Image" width={150} height={150}/>
      </> : <></>}
      <button  onClick={() => signOut({callbackUrl: '/'})}>sair</button>
    </>
  )
}