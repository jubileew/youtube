import { z } from "zod";

export type VideoType = z.infer<typeof videoSchema>;

const videoSchema = z.object({
    thumbnail: z.string(),
    title: z.string(),
    channelName: z.string(),
    channelAvatar: z.string(),
    views: z.number(),
})

export const videoArraySchema = z.array(videoSchema)
