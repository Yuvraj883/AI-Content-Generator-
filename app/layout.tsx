import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easily Famous",
  description: "One stop solution to all aspiring creators' needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (


    <html lang="en">

      <body className={inter.className}>
        {/* <Sidebar/> */}
        {children}
        </body>
        <Analytics/>
    </html>


  );
}
