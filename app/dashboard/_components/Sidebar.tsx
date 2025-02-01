"use client";
import { Gift, HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  const pathName = usePathname();

  const Menu = [
    { text: "Home", icon: HomeIcon, link: "/dashboard" },
    { text: "Offers", icon: Gift, link: "/dashboard/offers" },
  ];

  return (
    <>
      {/* Backdrop for closing sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-[#ffffff] backdrop-blur-lg shadow-xl transition-all duration-300 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-[16%] md:flex md:flex-col`}
      >
        {/* Sidebar Header */}
        <section className="flex flex-col items-start ml-5 py-6 border-b border-gray-300">
          <Image
            className="w-[150px] h-auto"
            src="/images/logo.png"
            height={120}
            width={120}
            alt="Logo"
          />
        </section>

        {/* Sidebar Menu */}
        <section className="p-4">
          {Menu.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={`flex items-center px-4 py-3 gap-3 my-4 font-semibold text-lg rounded-xl transition-all duration-300 
                hover:bg-[#254f1a] hover:text-[#d2e823] hover:scale-[1.02]
                ${pathName === item.link ? "bg-[#254f1a] text-[#d2e823] shadow-md" : "text-[#254f1a]"}`
              }
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
