import { z } from "zod";

export type IconType = z.infer<typeof iconSchema>;

const iconSchema = z.object({text: z.string()});

export const iconArraySchema = z.array(iconSchema);
