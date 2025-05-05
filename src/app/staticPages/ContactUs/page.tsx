import { ReactNode } from "react";

interface StaticLayoutProps {
    children: ReactNode;
}

export default function ContactUs({ children }: StaticLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col items-center ml-20 py-10 bg-[#E1F3FD]">
            <h1 className="text-[64px] font-bold text-[#1045A1] font-inter text-center">
                Contact Us
            </h1>
            <div className="w-full max-w-7xl flex flex-col gap-20 mt-5 ml-100">
                {['Full Name', 'Email', 'Message'].map((label, index) => (
                    <div key={index} className="flex flex-col w-[400px] ml-10 mr-10">
                        <span className="text-[26px] font-montserrat text-[#00024B] text-left">
                            {label}
                        </span>
                        <textarea
                            className="border-b-[3px] border-[#00024B] w-[400px] outline-none resize-none bg-transparent h-[40px]"
                        />
                    </div>
                ))}
            </div>
            <button className="w-[374px] h-[77px] rounded-[48px] bg-[#70C6E6] text-[24px] font-montserrat font-medium text-[#121111] mt-10">
                Contact Us
            </button>
            <div className="w-full max-w-7xl flex flex-wrap items-center justify-between relative">
                {children}
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 md:w-3/7 flex justify-end mt-12 md:mt-0">
                </div>
            </div>
        </div>
    );
}
