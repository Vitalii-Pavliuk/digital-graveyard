export async function getUsers() {
  const res = await fetch("/api/users");
  return res.json();
}

export async function createUser(name: string, email: string) {
  const res = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({ name, email }),
  });

  return res.json();
}