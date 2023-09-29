import { z } from "zod";

const weatherCurrent = z.object({
    feelslike_c: z.number(),
    temp_c: z.number(),
    is_day: z.number(),
    last_updated: z.string()
});
const weatherLocation = z.object({
    name: z.string(),
    country: z.string(),
    localtime: z.string()
});
const weatherSchema = z.object({
    current: weatherCurrent,
    location: weatherLocation
});

export default weatherSchema;