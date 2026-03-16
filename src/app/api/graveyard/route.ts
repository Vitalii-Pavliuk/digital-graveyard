import { dbConnect } from "../../../lib/db";
import Grave from "../../../lib/models/Grave";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();

    const grave = await Grave.create({
      projectName: body.projectName,
      userName: body.userName,
      gitHubUrl: body.gitHubUrl,
      epitaph: body.epitaph,
      languages: body.languages,
      description: body.description,
      causeOfDeath: body.causeOfDeath,
      diedAt: body.diedAt,
      candles: body.candles,
      condolence: body.condolence,
    });

    return Response.json(
      { message: "grave created", grave },
      { status: 201 }
    );
    
  } catch (error) {
    return Response.json(
      { message: "Error creating grave", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const graveyard = await Grave.find();
    return Response.json(graveyard, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Error fetching graveyard", error }, { status: 500 });
  }
}