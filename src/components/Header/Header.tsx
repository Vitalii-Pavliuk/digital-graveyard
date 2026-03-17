"use client";
import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header>
      <nav>
        <Link href="/">Головна</Link>
        <Link href="/graveyard">Цвинтар</Link>
        <Link href="/newGrave">+ Могила</Link>
      </nav>

      <div>
        {session ? (
          <>
            <span>{session.user?.name}</span>
            <button onClick={() => signOut()}>Вийти</button>
          </>
        ) : (
          <button onClick={() => signIn("github")}>Увійти</button>
        )}
      </div>
    </header>
  );
}