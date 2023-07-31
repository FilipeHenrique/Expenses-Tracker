import { useSession } from "next-auth/react";
import SignInButton from "../components/SignInButton";


export default function Home() {
  
  //dashboard
  //use effect [session]
    // se session > chama api pra salvar os dados
      // salva no storage

  return (
    <>
      <h1>hello</h1>
      <SignInButton />
    </>
  )
}
