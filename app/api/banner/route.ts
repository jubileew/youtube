import { generateBanner } from "@/scripts/generateBanner"

export async function GET(request: Request) {
    const data = generateBanner();
  return Response.json(data)
  }
