import Link from "next/link";
import { getSession } from "../auth";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";

export default async function Home() {

  return (
   <>
   <div>
        <Link href="/graveyard">
       <h1>Link</h1> 
      </Link>

              <Link href="/newGrave">
       <h1>Link</h1> 
      </Link>
   </div>
  </>
  );
} 
