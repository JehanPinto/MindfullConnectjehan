import { ReactNode } from "react";
import Image from "next/image";

interface StaticLayoutProps {
  children: ReactNode;
}

export default function StaticLayout({ children }: StaticLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col items-center py-12">
      {/* Main Content Container */}
      <div className=" w-full max-w-7xl flex flex-wrap items-center justify-between">
      <div className="md:w-3/5 w-full px-6 z-10">
          {children}
        </div>
        {/* Image Section (Right) */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 md:w-3/7 flex justify-end mt-12 md:mt-0  pt-">
            <Image
                width={600}
                height={1000}
                src="hero2.svg"
                alt="Smiling woman representing healing"
                priority
                className="rounded-lg drop-shadow-lg object-cover 
                   w-full h-auto max-w-[600px] md:max-w-[400px] lg:max-w-[500px] 
                   sm:max-w-[300px] mix-blend-multiply z-[-1] md:z-10"
            />
        </div>
      </div>
    </div>
  );
}