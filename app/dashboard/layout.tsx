"use client";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <Sidebar
            isOpen={isSidebarOpen}
            closeSidebar={() => setSidebarOpen(false)}
          />

          {/* Main content container */}
          <div className="flex flex-col flex-grow md:ml-[14%]">
            <Header toggleSidebar={() => setSidebarOpen(true)} />

            {/* Main content */}
            <main className="flex-grow p-4">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
