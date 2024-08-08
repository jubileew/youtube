import { generateIcons } from "@/scripts/generateIcons"

export async function GET(request: Request) {
    const data = generateIcons(10);
  return Response.json(data)
  }
