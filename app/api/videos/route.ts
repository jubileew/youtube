import { generateVideos } from "@/scripts/generateVideos"

export async function GET(request: Request) {
    const data = generateVideos(100);
  return Response.json(data)
  }
