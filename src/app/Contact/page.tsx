import Image from "next/image";

export default function ContactUs() {
    return (
        <div className="min-h-screen flex items-center justify-center py-10 px-6 bg-[#E1F3FD] relative">
            <div className="flex flex-col lg:flex-row items-center lg:items-start w-full max-w-7xl">
                <div className="flex flex-col items-center lg:items-start lg:ml-32 py-10 w-full lg:w-auto">
                    <h1 className="text-[40px] sm:text-[50px] md:text-[64px] font-bold text-[#1045A1] font-inter text-center lg:text-left">
                        Contact Us
                    </h1>
                    <div className="w-full flex flex-col gap-10 mt-5 items-center lg:items-start">
                        {['Full Name', 'Email', 'Message'].map((label, index) => (
                            <div key={index} className="flex flex-col w-[90%] sm:w-[400px]">
                                <span className="text-[20px] sm:text-[26px] font-montserrat text-[#00024B] text-left">
                                    {label}
                                </span>
                                <textarea
                                    className="border-b-[3px] border-[#00024B] w-full outline-none resize-none bg-transparent h-[40px]"
                                />
                            </div>
                        ))}
                    </div>
                    <button className="w-[90%] sm:w-[374px] h-[70px] rounded-[48px] bg-[#70C6E6] text-[20px] sm:text-[24px] font-montserrat font-medium text-[#121111] mt-10 transform transition-transform duration-300 ease-in-out hover:scale-95">
                        Contact Us
                    </button>
                </div>

                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 mr-5">
                    <Image
                        width={678}
                        height={1036}
                        src="/HeroImg.png"
                        alt="Smiling woman representing healing"
                        priority
                        className="rounded-lg drop-shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}