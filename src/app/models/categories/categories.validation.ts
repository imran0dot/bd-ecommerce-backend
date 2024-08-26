import { z } from 'zod';

// Define the Zod schema with validation rules and custom error messages
const categoriesValidationSchema = z.object({
    name: z.string()
        .min(1, { message: "Name is required and cannot be empty." })
        .max(255, { message: "Name cannot be longer than 255 characters." }),

    description: z.string()
        .min(10)
        .max(100, { message: "Description cannot be longer than 1000 characters." })
        .optional(),

    img: z.string()
        .min(1, { message: "Image URL is required and cannot be empty." })
        .url({ message: "Image URL must be a valid URL." })
});

export default categoriesValidationSchema;
