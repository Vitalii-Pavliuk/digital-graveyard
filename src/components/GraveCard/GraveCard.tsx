import { Project } from "../../types/project";

interface Props {
  projects: Project;
}

export const GraveCard = ({ projects }: Props) => {
  return (
    <>
      <h3>{projects.projectName}</h3>
    </>
  );
}
