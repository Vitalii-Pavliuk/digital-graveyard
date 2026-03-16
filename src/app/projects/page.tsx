import { getProjects } from "../../lib/services/ptoject.service";
import { Project } from "../../types/project";
import { GraveCard } from "../../components/GraveCard/GraveCard";


export default async function GraveYard() {

  const projects: Project[] = await getProjects();

return (
  <>
  <div>
    {projects.map((project) => (
<GraveCard key={project._id} projects={project} />
    ))}
  </div>
  </>
);
}