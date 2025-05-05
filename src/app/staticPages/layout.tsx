import { ReactNode } from "react";
import Image from "next/image";

interface StaticLayoutProps {
  children: ReactNode;
}

export default function StaticLayout({ children }: StaticLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col items-center py-20">
      {/* Main Content Container */}
      <div className="w-full max-w-7xl flex flex-wrap items-center justify-between">
        {children}
        {/* Image Section (Right) */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 md:w-3/7 flex justify-end mt-12 md:mt-0 pt-">
            <Image
                width={600}
                height={1000}
                src="/HeroImg copy.png"
                alt="Smiling woman representing healing"
                priority
                className="rounded-lg drop-shadow-lg"
            />
        </div>
      </div>
    </div>
  );
}