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

  try {

  await dbConnect();

  const body = await req.json();

  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const update: any = {};

    if (body.addCandle) {
      update.$addToSet = { candles: username };
    }

if (body.addCondolence) {
  update.$push = {         
    condolence: {
      commentator: username,
      comment: body.comment, 
    },
  };
}
    const grave = await GraveModel.findByIdAndUpdate(id, update, {
      new: true,
    });

  if (!grave) {
    return Response.json({ message: "Grave not found" }, { status: 404 });
  }

    return Response.json(grave, { status: 200 });
} catch (error) {
    console.error(error);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}