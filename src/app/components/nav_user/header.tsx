"use client";
import * as React from "react";
import SearchBar from "@/app/components/nav_user/SearchBar";
import NotificationIcon from "@/app/components/nav_user/NotificationIcon";

function Header() {
  return (
    <header className="flex justify-between items-center px-2.5 py-5 bg-sky-100 h-[90px]">
      <div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/63aacfb1d0df45549cd9dedaa54c2d3e1b1d7106?placeholderIfAbsent=true"
          className="h-[84px] rounded-[54.5px] w-[90px]"
          alt="Logo"
        />
      </div>
      <nav className="flex gap-5 items-center">
        <a href="#" className="text-xl font-bold text-black text-opacity-60">
          Home
        </a>
        <SearchBar />
        <NotificationIcon />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1aa4998c822b50245fe6e42d3cd3b975a9ed8f8?placeholderIfAbsent=true"
          className="w-14 h-14 border-2 border-white border-solid rounded-[200px]"
          alt="Avatar"
        />
        <button className="px-2.5 py-1 text-lg text-white bg-red-400 rounded-xl">
          Logout
        </button>
      </nav>
    </header>
  );
}

export default Header;