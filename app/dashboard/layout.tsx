"use client";
import { ReactNode, useState } from "react";
import HeaderWithState from "./_components/HeaderWithState";
import SidebarWithState from "./_components/SidebarWithState";
import Footer from "./_components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <div className="flex flex-grow relative">
          <div className="flex flex-col flex-grow w-full md:w-5/6 lg:w-4/5 min-h-screen">
            {/* ✅ Pass down state to Header */}
            <HeaderWithState toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

            <div className="flex flex-row">
              {/* ✅ Pass down state to Sidebar */}
              <SidebarWithState isOpen={isSidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
              <main className="flex-grow p-2 w-[70vw]">{children}</main>
            </div>

            {/* ✅ Footer (static component) */}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
