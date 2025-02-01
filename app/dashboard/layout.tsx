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
        <div className="flex flex-grow">
          {/* Sidebar - Responsive */}
          <aside className="hidden md:block md:w-1/6 lg:w-1/7  min-h-screen">
            <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
          </aside>

          {/* Main Content */}
          <div className="flex flex-col flex-grow w-full md:w-3/4 lg:w-4/5 min-h-screen">
            <Header toggleSidebar={() => setSidebarOpen(true)} />
            <main className="flex-grow p-4">{children}</main>
            <Footer className="mt-auto" />
          </div>
        </div>
      </body>
    </html>
  );
}
