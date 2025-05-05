import React from "react";
import Image from "next/image";

const Nav = () => {
  return (
    <>
    <div className="flex justify-between items-center py-4  bg-white mx-4">
      {/* Logo and Title */}
      <div className="flex items-center gap-5">
        <Image
          src="/logo.png"
          alt="image"
          width={50}
          height={50}
          className="inline"
        />
        <h1 className="px-10 font-bold text-[#000000] text-[20px] mt-2">
          Admin
        </h1>
      </div>

      {/* Search Bar and Icons */}
      <div className="flex gap-5 items-center">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            className="bg-[#F5F7FA] rounded-[40px] pl-10 pr-4 py-2 w-[200px]"
            placeholder="Enter your text here"
          />
          <Image
            src="/search.svg"
            alt="icon"
            width={20}
            height={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          />
        </div>

        {/* Bell Icon */}
        <div>
          <Image src="/bell.svg" width={25} height={25} alt="notification" />
        </div>

        {/* Profile Icon */}
        <div>
          <Image
            src="/profile.svg"
            className="rounded-full"
            width={30}
            height={30}
            alt="profile"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Nav;
