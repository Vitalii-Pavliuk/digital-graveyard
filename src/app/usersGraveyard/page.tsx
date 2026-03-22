"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { Grave } from "../../types/grave";
import { deleteGrave } from "../../lib/api/graveyard";

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


  async function handleDelete(id: string) {
  await deleteGrave(id);
  setGraves((prev) => prev.filter((g) => g._id !== id));
}

  return (
    <div>
{graves.map((grave) => (
  <div key={grave._id}>
    {grave.projectName}
    <button onClick={() => handleDelete(grave._id)}>Видалити</button>
  </div>
))}
    </div>
  );
}