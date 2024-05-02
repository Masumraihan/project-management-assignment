"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ThemeProvider from "./ThemeProvider";
import { Toaster } from "sonner";
const Provider = ({ children }: { children: React.ReactNode }) => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Toaster />
      <ThemeProvider>{children}</ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Provider;
