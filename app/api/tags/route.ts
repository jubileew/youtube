import { generateTags } from "@/scripts/generateTags"

export async function GET(request: Request) {
    const data = generateTags(10);
  return Response.json(data)
  }
