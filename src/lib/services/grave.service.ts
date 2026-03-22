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

export const getGrave = async (id: string): Promise<Grave | null> => {
  await dbConnect();
  const grave = await GraveModel.findById(id).lean();
  return grave as unknown as Grave | null;
};

export const getUserGraves = async (userName: string): Promise<Grave[] | null> => {
  await dbConnect();
  const grave = await GraveModel.find({userName: userName}).lean().exec();
  return grave as unknown as Grave[];
};