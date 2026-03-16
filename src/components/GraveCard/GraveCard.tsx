"use client";
import { useEffect, useState } from "react";
import { getProjects } from "../../lib/api/ptojects";
import { Project } from "../../types/project";

export default function GetProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchProjects();
  }, []);


  return (
    <>
      <div>
        {projects.map((project) => (
          <div key={project._id}>
            <p>Name: {project.projectName}</p>
          </div>
        ))}
      </div>
    </>
  );
}