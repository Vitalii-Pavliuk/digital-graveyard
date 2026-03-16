import { dbConnect } from "../../../lib/db";
import Project from "../../../lib/models/Project";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();

    const project = await Project.create({
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
      { message: "project created", project },
      { status: 201 }
    );
    
  } catch (error) {
    return Response.json(
      { message: "Error creating project", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const projects = await Project.find();
    return Response.json(projects, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Error fetching projects", error }, { status: 500 });
  }
}