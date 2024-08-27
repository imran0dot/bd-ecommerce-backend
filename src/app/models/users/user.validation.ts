import { z } from "zod";

const ZodName = z.object({
    firstName: z.string().min(1, 'First name is required'),
    middleName: z.string().optional(),
    lastName: z.string().min(1, 'Last name is required'),
  });
  
 const ZodUser = z.object({
    id: z.string(),
    name: ZodName,
    email: z.string().email(),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    isActive: z.boolean().default(true),
  });

export default ZodUser;


