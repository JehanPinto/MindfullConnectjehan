"use client";
import * as React from "react";
import Header from "@/app/nav_user/page";
import Sidebar from "@/app/sidebar/page";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="w-full bg-sky-100">
        <Header />
      </div>

      {/* Sidebar and Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className={`${isSidebarOpen ? "w-[287px]" : "w-[60px]"} bg-sky-100 transition-all duration-300`}>
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>

        {/* Main Content */}
        <section className="flex-1 p-5 bg-white">
          {children}
        </section>
      </div>
    </div>
  );
}