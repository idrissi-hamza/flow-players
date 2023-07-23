import { z } from "zod";

export const validationSchema = z.object({
  firstname: z.string().nonempty("First name is required"),
  lastname: z.string().nonempty("Last name is required"),
  goal: z
    .string() // Accept the number as a string from the form
    .refine((value) => Number.isInteger(parseFloat(value)), { message: "Goal must be an integer" }) // Check if it's an integer
    .refine((value) => parseInt(value, 10) >= 0, { message: "Goal must be a positive number" }) // Check if it's positive
    .transform((value) => parseInt(value, 10)), // Transform the string to an integer
  salary: z
    .string() // Accept the number as a string from the form
    .transform((value) => parseFloat(value)), // Transform the string to a float
  devise: z.enum(["€", "MAD","£","$","Fr"]).default("$"),
  pictureURL: z.string().url().optional(),
});


export   type PlayerType = z.infer<typeof validationSchema>;