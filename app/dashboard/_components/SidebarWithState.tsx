// _components/SidebarWithState.tsx
"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function SidebarWithState() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setSidebarOpen(false)} />;
}
