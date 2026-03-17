import Link from "next/link";

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
