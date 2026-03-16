import { Project } from "../../types/project";

export async function getProjects() {
  const res = await fetch("/api/projects");
    
  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}

export async function createProject(project: Project): Promise<Project[]> {
  const res = await fetch("/api/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });

    if (!res.ok) {
    throw new Error("Failed to create project");
  }

  return res.json();
}