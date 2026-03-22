import { NextResponse } from "next/server";
import { getUserGraves } from "@/lib/services/grave.service";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "No username" }, { status: 400 });
  }

  const graves = await getUserGraves(username);

  return NextResponse.json(graves);
}