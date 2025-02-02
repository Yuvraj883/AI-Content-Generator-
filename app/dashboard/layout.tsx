// RootLayout.tsx (Keep this as a Server Component)
import { ReactNode } from "react";
import HeaderWithState from "./_components/HeaderWithState";
import SidebarWithState from "./_components/SideBarWithState";
import Footer from "./_components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <div className="flex flex-grow relative">
          <div className="flex flex-col flex-grow w-full md:w-5/6 lg:w-4/5 min-h-screen">
            {/* ✅ Header with interactive state */}
            <HeaderWithState />

            <div className="flex flex-row">
              {/* ✅ Sidebar with interactive state */}
              <SidebarWithState/>
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
