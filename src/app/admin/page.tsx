import React from "react";
import BoxOne from "./boxOne";
import Session from "./Session";
import Image from "next/image";

const Admin = () => {
  return (
    <div className="n bg-[#E6EFF5] pt-12 px-4">
      <div className="mainContent flex flex-row justify-between">
        {/* Left Content */}
        <div className="leftContent">
          <h1 className="text-[#343C6A] mb-4 text-[20px]">
            <b>Recent Data </b>
          </h1>
          <div className="flex gap-3">
            <BoxOne />
            <BoxOne />
          </div>
          <div className="flex gap-3 mt-3">
            <BoxOne />
            <BoxOne />
          </div>
        </div>

        {/* Right Content */}
        <div className="rightContent">
          <h1 className="text-[#343C6A] mb-4 text-[20px]">
            <b>Recent Data </b>
          </h1>
          <Session />
        </div>
      </div>
      <div className="mt-8 flex justify-between">
        <div>
          <h1 className="text-[#343C6A] mb-4 text-[20px]">
            <b>Recent Data </b>
          </h1>
          <Image src="/graph.png" width={600} height={200} alt="text"></Image>
        </div>
        <div className="mr-10">
          <h1 className="text-[#343C6A] mb-4 text-[20px]">
            <b>Recent Data </b>
          </h1>
          <Image src="/pie.png" width={400} height={200} alt="text"></Image>
        </div>
      </div>
    </div>
  );
};

export default Admin;
