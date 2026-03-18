import { dbConnect } from "../../../../lib/db";
import GraveModel from "../../../../lib/models/Grave";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../auth";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.username) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const username = session.user.username;

  await dbConnect();

  const grave = await GraveModel.findByIdAndUpdate(
    id,
    { $addToSet: { candles: username } },
    { new: true }
  );

  if (!grave) {
    return Response.json({ message: "Grave not found" }, { status: 404 });
  }

  return Response.json({ candles: grave.candles }, { status: 200 });
}