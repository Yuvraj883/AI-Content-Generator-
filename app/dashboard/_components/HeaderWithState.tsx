"use client";
import Header from "./Header";

interface HeaderWithStateProps {
  toggleSidebar: () => void;
}

export default function HeaderWithState({ toggleSidebar }: HeaderWithStateProps) {
  return <Header toggleSidebar={toggleSidebar} />;
}
