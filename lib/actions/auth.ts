"use server";

import { signIn } from "@/auth";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { hashPassword } from "../utils";
import { eq } from "drizzle-orm";

export const SignInWithCredentials = async (
  params: Pick<AuthCredentials, "email" | "password">
) => {
  const { email, password } = params;

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { success: false, error: result.error };
    }

    return { success: true };
  } catch (error) {
    console.log(error, "Error signing in with credentials");
    // Handle error appropriately
    return { success: false, error: "An error occurred while signing in." };
  }
};

export const signUp = async (params: AuthCredentials) => {
  const { email, firstName, lastName, password, phoneNumber } = params;

  // check if user already exists
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    return { success: false, error: "User already exists" };
  }

  // // create user

  try {
    // hash the password asynchronously
    const hashedPassword = await hashPassword(password);

    // insert new user into the database
    await db.insert(users).values({
      name: `${firstName} ${lastName}`,
      email: email.toLowerCase(),
      password: hashedPassword,
      phoneNumber,
    });

    await SignInWithCredentials({ email, password });

    return { success: true };
  } catch (error) {
    console.log(error, "Error creating user");
    // Handle error appropriately
    return { success: false, error: "An error occurred while signing up." };
  }
};
