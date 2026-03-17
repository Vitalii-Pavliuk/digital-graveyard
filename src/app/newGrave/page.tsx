"use client";

import { useForm } from "react-hook-form";
import { createGrave } from "../../lib/api/graveyard";
import { Grave } from "../../types/grave"
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function AddGrave() {
   const { data: session } = useSession();

  const { register, handleSubmit, reset } = useForm<Grave>({
    defaultValues: {
      userName: session?.user?.name || "",
      
    }
  });

  async function onSubmit(data: Grave) {
    await createGrave(data);
    reset();
    redirect("/graveyard")
  }


  if (!session) {
      return (
        <>
        <h1>Sdaasdd</h1>
        </>
      );
  } else {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{session.user?.name}</h1>
      <input {...register("projectName")} placeholder="projectName"  />
      <input {...register("gitHubUrl")} placeholder="gitHubUrl" />
      <input {...register("epitaph")} placeholder="epitaph" />
      <input {...register("languages")} placeholder="languages" />
      <input {...register("description")} placeholder="description" />
      <input {...register("causeOfDeath")} placeholder="causeOfDeath" />
      <input type="date" {...register("diedAt")} placeholder="diedAt" />

        <button type="submit">Create user</button>
    </form>
  );
}
}