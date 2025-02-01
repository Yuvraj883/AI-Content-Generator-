"use client";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { useState } from "react";
import Sidebar from "./_components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <div className="flex flex-grow relative">
          {/* Sidebar (Always present, but toggled for mobile) */}
          <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setSidebarOpen(false)} />

          {/* Main Content */}
          <div className="flex flex-col flex-grow w-full md:w-5/6 lg:w-4/5 min-h-screen">
            <Header toggleSidebar={() => setSidebarOpen(true)} />
            <main className="flex-grow p-4">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
