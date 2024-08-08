import { z } from "zod";

export type ChannelType = z.infer<typeof channelSchema>;

const channelSchema = z.object({
    avatar: z.string(),
    channelName: z.string()
})

export const channelArraySchema = z.array(channelSchema)
