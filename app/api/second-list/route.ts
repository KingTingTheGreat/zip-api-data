import { NextRequest } from "next/server";

const data = [
	{ description: "first description" },
	{ description: "second description" },
	{ description: "third description" },
	{ description: "fourth description" },
	{ description: "fifth description" },
	{ description: "sixth description" },
	{ description: "seventh description" },
	{ description: "eighth description" },
	{ description: "ninth description" },
	{ description: "tenth description" },
];

export async function GET(req: NextRequest) {
	return new Response(JSON.stringify(data));
}
