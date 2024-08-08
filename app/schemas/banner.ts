import {z} from "zod";

export type BannerType = z.infer<typeof bannerSchema>;

export const bannerSchema = z.object({img: z.string()});
