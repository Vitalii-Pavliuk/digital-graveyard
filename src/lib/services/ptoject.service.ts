import ProjectModel from "../models/Project";
import { dbConnect } from "../db";

import { Project } from "../../types/project";

export const getProjects = async (): Promise<Project[]> => {
  await dbConnect();
  const projects = await ProjectModel.find().lean();
  return projects as unknown as Project[];
};

export async function createProject(data: Omit<Project, "_id">) {
  await dbConnect();
  return ProjectModel.create(data);
}




