"use client";

import { useForm } from "react-hook-form";
import { createGrave } from "../../lib/api/graveyard";
import { Grave } from "../../types/grave"
import { useRouter } from "next/navigation";

export default function AddGrave() {
  const { register, handleSubmit, reset } = useForm<Grave>();
const router = useRouter();

  async function onSubmit(data: Grave) {
    await createGrave(data);
    reset();
    router.push("/graveyard");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("projectName")} placeholder="projectName"  />
      <input {...register("userName")} placeholder="userName" />
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