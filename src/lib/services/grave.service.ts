import GraveModel from "../models/Grave";
import { dbConnect } from "../db";

import { Grave } from "../../types/grave";

export const getGraveyard = async (): Promise<Grave[]> => {
  await dbConnect();
  const graveyard = await GraveModel.find().lean();
  return graveyard as unknown as Grave[];
};

export async function createGrave(data: Omit<Grave, "_id">) {
  await dbConnect();
  return GraveModel.create(data);
}




