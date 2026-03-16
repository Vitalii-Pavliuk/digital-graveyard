"use client";
import { useEffect, useState } from "react";
import { createUser, getUsers } from "../../lib/api/users";
import { User } from "../../types/project";

export default function AddUser() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUsers();
  }, []);

  async function handleSubmit() {
    try {
      await createUser("Ivan", "ivan@gmail.com");
      const updatedUsers = await getUsers();
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  return (
    <>
      <button onClick={handleSubmit}>Create user</button>
      <div>
        {users.map((user) => (
          <div key={user._id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}