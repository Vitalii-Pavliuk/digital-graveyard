"use client";

import { useForm } from "react-hook-form";
import { createUser, getUsers } from "../../lib/api/users";
import { useEffect, useState } from "react";
import { User } from "@/types/grave";

type FormData = {
  name: string;
  email: string;
};

export default function AddUser() {
  const [users, setUsers] = useState<User[]>([]);

  async function fetchUsers() {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

useEffect(() => {
  async function loadUsers() {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  }

  loadUsers();
}, []);

  const { register, handleSubmit, reset } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    try {
      await createUser(data.name, data.email);

      await fetchUsers(); 

      reset();
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" />

        <input {...register("email")} placeholder="Email" />

        <button type="submit">Create user</button>
      </form>

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