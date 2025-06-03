import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .nonempty(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export const signUpSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      message: "First name must be at least 2 characters.",
    })
    .max(50, {
      message: "First name must be at most 50 characters.",
    })
    .nonempty("First name is required"),
  lastName: z
    .string()
    .min(2, {
      message: "Last name must be at least 2 characters.",
    })
    .max(50, {
      message: "Last name must be at most 50 characters.",
    })
    .nonempty("Last name is required"),

  phoneNumber: z
    .string()
    .min(10, {
      message: "Phone number must be at least 10 characters.",
    })
    .max(10, {
      message: "Phone number must be at most 10 characters.",
    })
    .nonempty("Phone number is required"),
  email: z
    .string()
    .email({
      message: "Invalid email address",
    })
    .nonempty("Email is required"),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .max(20, {
      message: "Password must be at most 20 characters.",
    })
    .nonempty("Password is required"),
});
