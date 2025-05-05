import Image from "next/image";

export default function Refund() {
  return (
    <div className="bg-[#E1F3FD] min-h-screen flex flex-col items-center py-20">
      {/* Main Content Container*/}
      <div className="w-full max-w-7xl flex flex-wrap items-center justify-between">
        {/* Text Section (Left)*/}
        <div className="w-full md:w-3/5 space-y-6 pl-2">
          <h1 className="text-[64px] font-bold text-[#1045A1] leading-tight">
            Refund Policy
          </h1>
          <p className="text-gray-700 text-[21px] leading-relaxed">
            At MindfulConnect, we prioritize your mental well-being and satisfaction with our services. We understand that unforeseen circumstances may arise, and this policy outlines the guidelines for refunds related to our counseling sessions. Please read the policy carefully to understand your rights and responsibilities.
          </p>

          <h2 className="text-[36px] font-bold text-[#1045A1] leading-tight">
            Eligibility for Refunds
          </h2>

          <div>
            <h3 className="text-[25px] font-bold text-[#1045A1] leading-tight">
              1. Session Cancelled or Missed by the Counsellor
            </h3>
            <p className="text-gray-700 text-[21px] leading-relaxed pt-2">
              If the counsellor fails to attend the scheduled session, you are entitled to a 100% refund of the session fee.
            </p>
          </div>

          <div>
            <h3 className="text-[25px] font-bold text-[#1045A1] leading-tight">
              2. Session Cancelled or Missed by the Client
            </h3>
            <p className="text-gray-700 text-[21px] leading-relaxed">
              If you cancel the session or fail to join within the scheduled time, you are eligible for either one of the below:
            </p>
            <ul className="text-gray-700 text-[21px] list-disc pl-8 space-y-2">
              <li>An 80% refund.</li>
              <li>A session reschedule at no additional cost.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[25px] font-bold text-[#1045A1] leading-tight">
              3. Session Expired
            </h3>
            <p className="text-gray-700 text-[21px] leading-relaxed">
              If neither the counsellor nor the client attends the scheduled session within 15 minutes of the scheduled start time, the session will be marked as "Unsuccessful: Expired." Here, the client is entitled to a 100% refund of the session fee.
            </p>
          </div>
        </div>

        {/* Image Section (Right) */}
        <div className="absolute right-0 md:w-3/7 flex justify-end mt-12 md:mt-0 m-0 p-0" style={{ right: '-6%' }}>
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

      {/*section 2) */}
        <div className="w-full max-w-7xl flex flex-wrap items-center justify-between  text-justify pl-2 pt-10">
            <h2 className="text-[36px] font-bold text-[#1045A1] leading-tight pb-6">
                Refund Request Process
            </h2> 
            <ul className="text-gray-700 text-[21px] list-disc pl-8 space-y-2">
                <li>To request a refund, please contact our support team at <a href="mailto:support@mindfulconnect.com" className="text-blue-600 hover:underline">support@mindfulconnect.com</a> or call <a href="tel:+94112353353" className="text-blue-600 hover:underline">+94 112 353 353</a> within 7 days of the scheduled session. Provide the session details and the reason for                    your refund request.</li>
                <li>Please include your booking confirmation number and any relevant information to expedite the process.</li>
            </ul>
        </div>

        {/*section 3)*/}
        <div className="w-full max-w-7xl flex flex-wrap items-center justify-between  text-justify pl-2 pt-10">
            <h2 className="text-[36px] font-bold text-[#1045A1] leading-tight pb-6">
                Time Frame for Refunds
            </h2> 
            <ul className="text-gray-700 text-[21px] list-disc pl-8 space-y-2">
                <li>Refunds will be processed within 7 business days of the approval of your refund request.</li>
                <li>Depending on your payment method, it may take additional time for the refund to reflect in your account.</li>
            </ul>
        </div>
    </div>
  );
}
