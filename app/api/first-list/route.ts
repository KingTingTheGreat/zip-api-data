import { NextRequest } from "next/server";

const data = [
	{ title: "first title" },
	{ title: "second title" },
	{ title: "third title" },
	{ title: "fourth title" },
	{ title: "fifth title" },
	{ title: "sixth title" },
	{ title: "seventh title" },
	{ title: "eighth title" },
	{ title: "ninth title" },
	{ title: "tenth title" },
];

export async function GET(req: NextRequest) {
	return new Response(JSON.stringify(data));
}
