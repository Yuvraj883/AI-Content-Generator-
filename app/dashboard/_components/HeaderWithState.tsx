// _components/HeaderWithState.tsx
"use client";
import { useState } from "react";
import Header from "./Header";

export default function HeaderWithState() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />;
}
