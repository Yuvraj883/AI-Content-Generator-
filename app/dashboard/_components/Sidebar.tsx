"use client";
import { Gift, HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  const pathName = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component only renders on client to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Avoid rendering on server

  const Menu = [
    { text: "Home", icon: HomeIcon, link: "/dashboard" },
    { text: "Offers", icon: Gift, link: "/dashboard/offers" },
  ];

  return (
    <>
      {/* Backdrop for closing sidebar (Mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 md:w-[40vw] h-full w-64 bg-white shadow-xl transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative md:w-1/6 lg:w-1/5`}
      >
        {/* Sidebar Header */}
        <Link href="/dashboard">
        <section className="flex flex-col items-start ml-5 py-6 border-b border-gray-300">
          <Image
            className="w-[150px] h-auto cursor-pointer"
            src="/images/logo.png"
            height={120}
            width={120}
            alt="Logo"
          />
        </section>
        </Link>

        {/* Sidebar Menu */}
        <section className="p-4">
          {Menu.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={`flex items-center px-4 py-3 gap-3 my-4 font-semibold text-lg rounded-xl transition-all duration-300
                hover:bg-[#254f1a] hover:text-[#d2e823] hover:scale-[1.02]
                ${pathName === item.link ? "bg-[#254f1a] text-[#d2e823] shadow-md" : "text-[#254f1a]"}`}
              onClick={closeSidebar}
            >
              <item.icon className="w-6 h-6" />
              <p className="text-sm">{item.text}</p>
            </Link>
          ))}
        </section>
      </div>
    </>
  );
};

export default Sidebar;
