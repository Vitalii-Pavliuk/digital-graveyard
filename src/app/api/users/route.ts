import { getUsers, createUser } from "../../../lib/services/user.service";


export async function GET() {
  const users = await getUsers();
  return Response.json(users);
}

export async function POST(req: Request) {
  const body = await req.json();
  const user = await createUser(body.name, body.email);
  return Response.json(user, { status: 201 });
}