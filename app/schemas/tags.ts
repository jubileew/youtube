import { z } from "zod";

export type TagType = z.infer<typeof tagSchema>;
export type TagArrayType = z.infer<typeof tagArraySchema>;

const tagSchema = z.object({
    text: z.string()
})

export const tagArraySchema = z.array(tagSchema)
