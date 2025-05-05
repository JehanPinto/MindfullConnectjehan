import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CounsellorsPage() {
    const services = [
        { title: "Teen Therapy", description: "For teenagers below 18", image: "/TeenTherapy.png" },
        { title: "Individual Therapy", description: "For individuals over 18 years old", image: "/IndividualTherapy.png" },
        { title: "Couple Therapy", description: "For partners", image: "/CoupleTherapy.png" },
    ];

    return (
        <>
            <div className="flex items-center justify-center min-h-screen p-6 sm:p-10 bg-[#FEE7E4]">
                <div className="flex flex-col lg:flex-row w-full max-w-6xl items-center">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-1">
                        {["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg", "/img6.jpg"].map((src, index) => (
                            <div key={index} className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[174.18px] md:h-[170.9px] rounded-full overflow-hidden relative hidden sm:block lg:first:block">
                                <Image src={src} alt={`Counsellor ${index + 1}`} layout="fill" objectFit="cover" />
                            </div>
                        ))}
                    </div>

                    <div className="text-center lg:text-left flex flex-col justify-center px-4 sm:px-6 lg:px-10 bg-[#FEE7E4] w-full lg:w-5/6 lg:ml-24 items-center lg:items-start">
                        <h1 className="text-[32px] sm:text-[40px] md:text-[60px] font-inter font-bold text-[#1045A1] leading-tight">
                            Get going with the best panel of Counsellors
                        </h1>
                        <p className="text-[16px] sm:text-[18px] md:text-[24px] font-poppins text-black mt-4 max-w-xl leading-tight">
                            At MindfulConnect, we bring together a panel of registered and licensed counsellors specializing in Teen, Couple, and Individual Counselling. Whether you’re navigating relationships, personal struggles, or life’s challenges, our experts are here to guide you with care, compassion, and professionalism.
                        </p>
                        <button className="mt-6 flex items-center justify-center bg-[#70C6E6] text-black font-inter text-[16px] sm:text-[20px] px-8 sm:px-12 py-3 rounded-[28px] w-[90%] sm:w-[278px] h-[54px] transform transition-transform duration-300 ease-in-out hover:scale-95">
                            Find a counsellor <ArrowRight className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-[#F9F6FF] flex flex-col items-center justify-center p-6 sm:p-10">
                <h1 className="text-[32px] sm:text-[40px] md:text-[60px] font-inter font-bold text-[#1045A1] text-center mb-6 sm:mb-10">
                    Services we offer!
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="w-[270px] sm:w-[310px] h-[280px] sm:h-[312px] rounded-[20px] overflow-hidden relative bg-cover bg-center transition-transform duration-300 hover:scale-110"
                            style={{ backgroundImage: `url(${service.image})` }}
                        >
                            <div className="absolute bottom-0 w-full h-[100px] bg-white flex flex-col items-center justify-center">
                                <h2 className="text-[20px] sm:text-[24px] font-poppins font-bold text-black text-center">
                                    {service.title}
                                </h2>
                                <p className="text-[16px] sm:text-[18px] font-roboto text-black text-center">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8 sm:mt-10">
                    <Image src="/Arrow.png" alt="arrowdown" width={50} height={50} className="sm:w-[80px] sm:h-[50px]" />
                </div>
            </div>
        </>
    );
}
