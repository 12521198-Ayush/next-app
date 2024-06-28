import { Button } from "flowbite-react";
import { redirect } from "next/navigation";
import { auth } from "./auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  console.log(session);
  if(!session) redirect("api/auth/signin")

  return (
   <>
    <div>
      <h2>Welcome {session.user.name} </h2>
      <h5>You are {session.user.role} of this page</h5>
      <br></br>
      <Link href="/api/auth/signout" >Logout</Link>
    </div>
   </>
  );
}
