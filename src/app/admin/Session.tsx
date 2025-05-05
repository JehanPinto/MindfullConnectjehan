import React from "react";
import Image from "next/image";
const Session = () => {
  return (
    <div className=" bg-white py-5 px-10 rounded-[10px] w-[350px] mr-[40px]">
      <div className="flex flex-row gap-9">
        <div>
          <Image
            src={"./profile.svg"}
            width={40}
            height={40}
            alt="j"
            className="rounded-full"
          ></Image>
        </div>
        <div>
          <h2>Dr. John Doe</h2>
          <h3 className=" text-gray-500 ">Cardiologist</h3>
        </div>
        <div>
          <span className="text-[#FF4B4A]">3 hrs</span>
        </div>
      </div>
      <div className="flex flex-row gap-9 mt-6">
        <div>
          <Image
            src={"./profile.svg"}
            width={40}
            height={40}
            alt="j"
            className="rounded-full"
          ></Image>
        </div>
        <div>
          <h2>Dr. John Doe</h2>
          <h3 className=" text-gray-500 ">Cardiologist</h3>
        </div>
        <div>
          <span className="text-[#FF4B4A]">3 hrs</span>
        </div>
      </div>
      <div className="flex flex-row gap-9 mt-6">
        <div>
          <Image
            src={"./profile.svg"}
            width={40}
            height={40}
            alt="j"
            className="rounded-full"
          ></Image>
        </div>
        <div>
          <h2>Dr. John Doe</h2>
          <h3 className=" text-gray-500 ">Cardiologist</h3>
        </div>
        <div>
          <span className="text-[#FF4B4A]">3 hrs</span>
        </div>
      </div>
    </div>
  );
};

export default Session;
