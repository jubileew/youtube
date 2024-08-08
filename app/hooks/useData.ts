import { z } from "zod";
import { fetcher } from "../utils/fetcher";
import useSWR from "swr";

type useDataProps = {
    path: string,
    schema: z.ZodType<any>;
}

export const useData = ({path, schema}: useDataProps) => {
    const {data, error, isLoading} = useSWR(`api/${path}`, fetcher);
    if(data) {
        const result = schema.safeParse(data);

        if (!result.success) {
            console.log(result, error, isLoading)
            return {data: null, error: result.error, isLoading: false}
        }
        return {data:result.data, error, isLoading}
    }
    return {data:null, error, isLoading}
}
