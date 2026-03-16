import ProjectModel from "../models/Project";
import { dbConnect } from "../db";

import { Project } from "../../types/project";

export async function getProjects(): Promise<Project[]> {
      await dbConnect();

  return ProjectModel.find();
}

export async function createProject(data: Project) {
      await dbConnect();
return ProjectModel.create({data});


 }




