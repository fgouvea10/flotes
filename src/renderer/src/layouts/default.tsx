import { Outlet } from "react-router-dom";
import * as Collapsible from "@radix-ui/react-collapsible";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useState } from "react";

export function DefaultLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Collapsible.Root
      defaultOpen
      onOpenChange={setIsSidebarOpen}
      className="flex h-screen w-screnn bg-flotes-900 text-flotes-100"
    >
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header isSidebarOpen={isSidebarOpen} />
        <Outlet />
      </div>
    </Collapsible.Root>
  );
}
