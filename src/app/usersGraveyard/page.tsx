"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { Grave } from "../../types/grave";


export default function GravePage() {
  const { data: session } = useSession();
  const [graves, setGraves] = useState<Grave[]>([]);

  useEffect(() => {
    if (!session?.user?.name) return;

    async function fetchGraves() {
      const res = await fetch(`/api/usersGraveyard?username=${session?.user?.name}`);
      const data = await res.json();
      setGraves(data);
    }

    fetchGraves();
  }, [session]);

  return (
    <div>
      {graves.map((grave) => (
        <div key={grave._id}>{grave.projectName}##{grave._id}</div>
      ))}
    </div>
  );
}