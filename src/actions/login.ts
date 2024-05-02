"use server";

import { TLoginFields } from "@/app/login/page";

export const login = async ({ email, password }: TLoginFields) => {
  try {
    return {
      success: true,
      message: "User logged in successfully",
      data: { email, password },
    };
  } catch (error) {
    console.error("Error logging in user:", error);
  }
};
