"use server";

import { TRegisterFields } from "@/app/register/page";

export const register = async ({ name, email, address, password }: TRegisterFields) => {
  try {
    console.log("Registering user:", { name, email, address, password });
    return {
      success: true,
      message: "User registered successfully",
      data: { name, email, address },
    };
  } catch (error) {
    console.error("Error registering user:", error);
  }
};
