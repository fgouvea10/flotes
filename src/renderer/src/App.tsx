import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "../lib/query-client";
import { Routes } from "./Routes";

import "./styles/globals.css";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}
