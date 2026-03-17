"use client";

import { useForm } from "react-hook-form";
import { createGrave } from "../../lib/api/graveyard";
import { Grave } from "../../types/grave";
import { redirect } from "next/navigation";
import { getProjectName, getProjectLanguages } from "../api/projects/route";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function AddGrave() {
  const { data: session } = useSession();
  const [projects, setProjects] = useState<{ name: string }[]>([]);

  const { register, handleSubmit, reset, watch, setValue } = useForm<Grave>({
    defaultValues: {
      userName: session?.user?.name || "",
    },
  });

  const selectedProject = watch("projectName");
  useEffect(() => {
    if (!selectedProject) return;

    async function fetchLanguages() {
      if (!session?.user.username) return;
      const languages = await getProjectLanguages(
        session.user.username,
        selectedProject
      );
      console.log(Object.keys(languages));
      setValue("languages", Object.keys(languages));
    }
    fetchLanguages();

    setValue(
      "gitHubUrl",
      `https://github.com/${session?.user?.username}/${selectedProject}`
    );
  }, [selectedProject, session?.user.username, setValue]);

  useEffect(() => {
    if (!session) return;
    async function fetchProjects() {
      const result = await getProjectName(session?.user?.username || "");
      setProjects(result);
    }
    fetchProjects();
  }, [session]);

  async function onSubmit(data: Grave) {
    await createGrave(data);
    reset();
    redirect("/graveyard");
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
        <select {...register("projectName")} data-testid="select">
          <option value="">Select a project</option>
          {projects.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        <input {...register("epitaph")} placeholder="epitaph" />
        <input {...register("description")} placeholder="description" />
        <input {...register("causeOfDeath")} placeholder="causeOfDeath" />
        <input type="date" {...register("diedAt")} placeholder="diedAt" />

        <button type="submit">Create user</button>
      </form>
    );
  }
}