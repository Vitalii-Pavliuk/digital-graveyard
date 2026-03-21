import { Grave } from "../../types/grave";

export async function getGraveyard() {
  const res = await fetch("/api/graveyard");
    
  if (!res.ok) {
    throw new Error("Failed to fetch graveyard");
  }

  return res.json();
}

export async function createGrave(grave: Grave): Promise<Grave[]> {
  const res = await fetch("/api/graveyard", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(grave),
  });

    if (!res.ok) {
    alert("Такий запис вже існує");
  }

  return res.json();
}



