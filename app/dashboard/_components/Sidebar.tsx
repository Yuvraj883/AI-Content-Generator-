"use client";
import { Gift, History, HomeIcon } from "lucide-react";
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
    // { text: "History", icon: History, link: "/dashboard/history" },
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
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-md transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-[14%] md:flex md:flex-col`}
      >
        {/* Sidebar Header */}
        <section className="flex flex-col justify-center items-start shadow-md p-2">
          <Image
            className="h-12 w-auto"
            src="/images/logo.svg"
            height={100}
            width={100}
            alt="Logo"
          />
        </section>

        {/* Sidebar Menu */}
        <section className="p-2">
          {Menu.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={`flex items-center m-2 justify-start px-2 py-6 gap-2 font-semibold text-lg cursor-pointer
              hover:bg-purple-600 hover:text-white rounded-md ${
                pathName === item.link && "bg-purple-600 text-white"
              }`}
              onClick={closeSidebar}
            >
              <item.icon />
              <p>{item.text}</p>
            </Link>
          ))}
        </section>
      </div>
    </>
  );
};

export default Sidebar;
