"use client";
import Sidebar from "./Sidebar";

interface SidebarWithStateProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

export default function SidebarWithState({ isOpen, closeSidebar }: SidebarWithStateProps) {
  return <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />;
}
