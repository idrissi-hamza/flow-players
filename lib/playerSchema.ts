import { z } from 'zod';

export const validationSchema = z.object({
  firstname: z.string().nonempty('First name is required'),
  lastname: z.string().nonempty('Last name is required'),
  goal: z
    .string()
    .transform((value) => (value === '' ? undefined : parseInt(value, 10)))
    .refine((value) => value === undefined || Number.isInteger(value), {
      message: 'Goal must be an integer',
    })
    .refine((value) => value === undefined || value >= 0, {
      message: 'Goal must be a positive number',
    })
    .optional(),
  salary: z
    .string()
    .transform((value) => (value === '' ? undefined : parseFloat(value)))
    .optional(),
  devise: z.enum(['€', 'MAD', '£', '$', 'Fr']).default('$'),
  pictureURL: z.string().url().optional(),
});

export type PlayerType = z.infer<typeof validationSchema>;
export type PlayerTypeWithId = { id: string } & PlayerType;
