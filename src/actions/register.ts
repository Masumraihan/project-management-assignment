"use server";

import { TRegisterFields } from "@/app/register/page";

export const register = async ({ name, email, address, password }: TRegisterFields) => {
  try {
    console.log("Registering user:", { name, email, address, password });
    return true;
  } catch (error) {
    console.error("Error registering user:", error);
  }
};
