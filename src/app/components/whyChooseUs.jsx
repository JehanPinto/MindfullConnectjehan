import * as React from "react";

const FeaturesSection = () => {
  return (
    <div className="bg-[#0082c8] ">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30"
       >
        <div className="relative mx-auto max-w-5xl text-center">
          <h1 className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent  my-3 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider">
            Why choose Us
          </h1>

          <h3 className="block w-full bg-gradient-to-b from-white to-gray-400  bg-clip-text font-bold text-transparent text-xl sm:text-2xl">
            Mindfull Connect offers personalized and professional counseling at
            your convenience, with features designed for privacy, flexibility,
            and expert guidance.
          </h3>
          {/* <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
          Discover a better way to seek guidance, with trusted professionals and features designed for your convenience and privacy.
          </p> */}
        </div>

        {/* Features Grid */}
        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-14 pt-14 sm:grid-cols-2 lg:grid-cols-4 ">
          {/* Feature Item 1 */}
          {/* <div className="hidden lg:block"></div> */}
          <FeatureItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            }
            title="Chats with Counselors"
            description="If you prefer texting over talking, our messaging feature allows you to have real-time chats with counselors, ensuring constant communication and support."
          />

          <FeatureItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            }
            title="One-on-One Sessions"
            description="We offer personalized, one-on-one sessions where you can express your thoughts and concerns in a private and supportive environment."
          />

          {/* Feature Item 2 */}
          <FeatureItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
                <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
              </svg>
            }
            title="Progress Tracker"
            description="Stay on track with your personal growth through our integrated progress tracker, allowing you to monitor your improvement and goals over time."
          />

          <FeatureItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
            }
            title="Licensed Counselors"
            description="Rest assured, our counselors are licensed professionals with extensive experience in providing quality support. You’ll receive expert guidance tailored to your needs."
          />

          {/* Feature Item 3 */}
          <FeatureItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
            }
            title="Secure and Confidential"
            description="Your privacy is our top priority. We ensure that all your interactions and personal information are kept safe and confidential, using state-of-the-art encryption and security protocols."
          />

          <FeatureItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
              </svg>
            }
            title="100% Online and Flexible"
            description="Access professional counseling anytime, anywhere. Our online platform allows you to schedule sessions based on your availability, making it easier for you to get the support you need."
          />
          {/* <div className="hidden lg:block"></div> */}
        </div>

        {/* Gradient Backgrounds */}
        <div
          className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
          style={{
            backgroundImage:
              "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(92, 79, 240, 0.2)",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage:
              "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(61, 58, 94, 0.2)",
          }}
        ></div>
      </section>
    </div>
  );
};

// Feature Item Component
const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="rounded-2xl bg-[#16354a] p-8 text-center shadow transition duration-300 hover:bg-[#1f4865]">
      <div
        className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border transition duration-300 hover:scale-110"
        style={{
          backgroundImage:
            "linear-gradient(rgb(206, 206, 219) 0%, rgb(10, 73, 121) 100%)",
          borderColor: "rgb(87, 87, 94)",
        }}
      >
        {icon}
      </div>
      <h3 className="mt-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent \">
        {title}
      </h3>
      <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent ">
        {description}
      </p>
    </div>
  );
};

export default FeaturesSection;
