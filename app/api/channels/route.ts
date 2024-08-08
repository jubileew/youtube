import { generateChannels } from "@/scripts/generateChannels"

export async function GET(request: Request) {
    const data = generateChannels(5);
  return Response.json(data)
  }
