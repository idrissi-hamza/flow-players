import { z } from 'zod';

export const validationSchema = z.object({
  firstname: z.string().nonempty('First name is required'),
  lastname: z.string().nonempty('Last name is required'),
  goal: z.coerce
    .number()
    .int()
    .min(0, { message: 'Goals must be a positive integer or zero' })
    .optional(),
  salary: z.coerce
    .number()
    .min(0, { message: 'Salary must be a positive number or zero' })
    .optional(),
  devise: z.enum(['€', 'MAD', '£', '$', 'Fr']).default('$'),
  pictureURL: z.string().url().optional(),
});

export type PlayerType = z.infer<typeof validationSchema>;
export type PlayerTypeWithId = { id: string } & PlayerType;
