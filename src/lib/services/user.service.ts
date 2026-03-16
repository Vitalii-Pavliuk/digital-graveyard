import { dbConnect } from "../db";
import User from "../models/User";

export async function getUsers() {
  await dbConnect();
  return User.find();
}

export async function createUser(name: string, email: string) {
  await dbConnect();
  return User.create({ name, email }); 
}