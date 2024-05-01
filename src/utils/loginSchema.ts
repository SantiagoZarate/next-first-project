import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export const passwordSchema = formSchema.extend({
  password: z.string().min(5, "Password must be at least 5 characters"),
});

export type FormSchemaType = z.infer<typeof formSchema>;
export type RegisterSchemaType = z.infer<typeof passwordSchema>;
