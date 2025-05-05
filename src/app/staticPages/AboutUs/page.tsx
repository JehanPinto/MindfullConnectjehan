import { ReactNode } from "react";

interface StaticLayoutProps {
  children: ReactNode;
}

export default function ContactUs({ children }: StaticLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col items-center py-0 rounded-2xl shadow-lg bg-gradient-to-r from-[#E1F3FD] to-[#FFFFFF] ">
      <h1 className="text-[75px] font-bold bg-gradient-to-r from-[#1045A1] to-[#527cc4] 
             text-transparent bg-clip-text font-inter mb-4 " style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.3)" }}>
        About Us
      </h1>
      <h3 className="text-3xl font-bold text-black p-5">Empowering Minds, Connecting Hearts</h3>
      <div className="mt-5  p-6 rounded-lg">
            <p className="text-[18px] pb-9 text-gray-900 leading-relaxed">
              At <strong>Mindful Connect</strong>, we believe that mental well-being should be 
              accessible, secure, and stigma-free. Our platform bridges the gap between 
              individuals seeking support and professional counselors, fostering a 
              compassionate space for healing and growth.
            </p>

            <p className="text-[18px] text-gray-900 leading-relaxed mt-4 pb-9">
              Driven by innovation, we integrate cutting-edge technology with 
              human-centered care. From secure messaging to insightful progress tracking, 
              every feature is designed to empower users on their mental health journey.
            </p>

            <p className="text-[18px] text-gray-900 leading-relaxed mt-4">
              More than just a platform, <strong>Mindful Connect</strong> is a movement—a 
              commitment to reshaping the future of mental health support. Together, we 
              are building a world where emotional wellness is not just prioritized 
              but truly embraced.
            </p>
          </div>
      
      
    </div>
  );
}
