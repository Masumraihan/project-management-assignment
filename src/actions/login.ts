"use server";

import { TLoginFields } from "@/app/login/page";

export const login = async ({ email, password }: TLoginFields) => {
  try {
    console.log("Logging in user:", { email, password });
    return true;
  } catch (error) {
    console.error("Error logging in user:", error);
  }
};
