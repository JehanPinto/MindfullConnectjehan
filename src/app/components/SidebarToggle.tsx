"use client";

import * as React from "react";
import Sidebar from "@/app/sidebar/page";

export const SidebarToggle: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const toggleSidebar = () => {
    const newState = !isSidebarOpen;
    setIsSidebarOpen(newState);
    // Removed: onToggle(newState); // No longer needed
  };

  return (
    <div className={`${isSidebarOpen ? "w-[287px]" : "w-[60px]"} bg-sky-100 transition-all duration-300`}>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};