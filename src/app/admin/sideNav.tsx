import React from 'react';
import Image from 'next/image';

const SideNav = () => {
  return (
    <div>
        {/* <div className=' mt-12 bg-slate-500'>3</div> */}
      <div className="flex mt-5 flex-col items-start justify-start w-full max-w-[200px] bg-white text-black mx-3">
        <div className="flex gap-5 my-3 items-center">
          <div>
            <Image
              src={'/dashboard.svg'}
              alt="some"
              width={20}
              height={20}
            />
          </div>
          <span>Dashboard</span>
        </div>

        <div className="flex gap-5 my-3 items-center">
          <div>
            <Image
              src={'/Fever.svg'}
              alt="some"
              width={20}
              height={20}
            />
          </div>
          <span>Patient</span>
        </div>

        <div className="flex gap-5 my-3 items-center">
          <div>
            <Image
              src={'/Fever.svg'}
              alt="some"
              width={20}
              height={20}
            />
          </div>
          <span>Consullor</span>
        </div>


        <div className="flex gap-5 my-3 items-center">
          <div>
            <Image
              src={'/Fever.svg'}
              alt="some"
              width={20}
              height={20}
            />
          </div>
          <span>Employee</span>
        </div>

        <div className="flex gap-5 my-3 items-center">
          <div>
            <Image
              src={'/Fever.svg'}
              alt="some"
              width={20}
              height={20}
            />
          </div>
          <span>Report</span>
        </div>


      </div>
    </div>
  );
};

export default SideNav;
