"use client";
import * as React from "react";
import { NavigationItem } from "@/app/components/sideBar/NavigationItem";
import { UserProfile } from "@/app/components/sideBar/UserProfile";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isSidebarOpen, toggleSidebar }: SidebarProps) {
  return (
    <nav
      className={`flex flex-col pt-5 pb-40 text-xl font-medium tracking-tight text-black transition-all duration-300 ${
        isSidebarOpen ? "w-[287px]" : "w-[60px]"
      } bg-sky-100`}
    >
      {/* Hamburger Button (Top-Right) */}
      <div className="flex justify-end pr-2.5">
        <button
          onClick={toggleSidebar}
          className="p-2"
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* User Profile */}
      <div className={`flex justify-center ${isSidebarOpen ? "block" : "hidden"}`}>
        <UserProfile
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/422083d55776b5251fa18806729c82ba917ae2dd?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
          name="John Smith"
          email="johnsmithmindful@gmail.com"
        />
      </div>

      {/* Dashboard Item */}
      <div
        className={`flex items-center gap-3 px-6 py-3 mt-5 ${
          isSidebarOpen ? "justify-start  rounded-lg ml-2" : "justify-center ml-[-6px] w-[90px]  "
        }`}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f73ff521328155843915869dd01f93747793ac7a?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
          alt="Dashboard Icon"
          className="object-contain shrink-0 aspect-[1.05] w-[42px] ml-[-18px]"
        />
        {isSidebarOpen && <span>Dashboard</span>}
      </div>

      {/* Navigation Items */}
      <section className="flex flex-col w-full gap-2.5 ">
        <NavigationItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/39afe77cb46785d86e8e9dabc196237363ce9f9c?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
          label="Manage profile"
          className={`mt-2.5 ${isSidebarOpen ? "max-w-[215px] mx-2.5" : "max-w-[60px] justify-center mx-0"}`}
          isSidebarOpen={isSidebarOpen}
        />

        <NavigationItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/300987d911717b215ce77db7935a00fe1fc2fe11?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
          label="Sessions"
          className={` mt-2.5 ${isSidebarOpen ? "max-w-[215px] mx-2.5" : "max-w-[60px] justify-center mx-0"}`}
          isSidebarOpen={isSidebarOpen}
        />

        <NavigationItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7ab067e1449b66771846141a779f689d9945be4b?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
          label="Messages"
          className={`mt-2.5 ${isSidebarOpen ? " object-contain max-w-[215px] ml-10 bg-slate-400 rounded-lg  " : "bg-slate-400 rounded-lg max-w-[60px] justify-center mx-0 "}`}
          isSidebarOpen={isSidebarOpen}
        />

        <NavigationItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9f621d7143796019a3e130359593ce3c5c2518d1?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
          label="Progress Tracking"
          className={`mt-2.5 ${isSidebarOpen ? "max-w-[300px] mx-2.5" : "max-w-[60px] justify-center mx-0"}`}
          isSidebarOpen={isSidebarOpen}
        />

        <NavigationItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4017f0fad2456399c06ed634f96c631840f4fbba?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
          label="Feedbacks"
          className={`mt-2.5 ${isSidebarOpen ? "max-w-[215px] mx-2.5" : "max-w-[60px] justify-center mx-0"}`}
          isSidebarOpen={isSidebarOpen}
        />

        <NavigationItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/77c60112244cee4674ff0de7dff9d053da7526ba?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
          label="Patient details"
          className={`mt-2.5 ${isSidebarOpen ? "max-w-[240px] mx-2.5" : "max-w-[60px] justify-center mx-0"}`}
          isSidebarOpen={isSidebarOpen}
        />

        <NavigationItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/dafe475c9ebbe1add6bb18f7d93eec61f868c778?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
          label="blog section"
          className={`mt-4 ${isSidebarOpen ? "max-w-[190px] mx-2.5" : "max-w-[60px] justify-center mx-0"}`}
          isSidebarOpen={isSidebarOpen}
        />
      </section>
    </nav>
  );
}