"use client";

import React from "react";
import ClientList from "./ClientList";
import { useAuth } from "@/context/AuthContext";

interface ProfileSidebarProps {
  className?: string;
  onBack?: () => void; // Added onBack prop
}

export const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ className, onBack }) => {
  const { user, logout } = useAuth();

  return (
    <aside className={`flex flex-col bg-white h-full min-w-60 w-[306px] p-6 ${className || ""}`}>
      <div className="flex items-center justify-between mb-4">
        {onBack && (
          <button onClick={onBack} className="sm:hidden text-blue-500">
            Back
          </button>
        )}
        <div className="flex-1" /> {/* Spacer to push content to the center */}
      </div>
      <div className="flex flex-col items-center">
        <img
          src={user?.profileImageUrl || "/ava1.svg"}
          alt={user?.fullName}
          className="w-16 h-16 rounded-full mb-4"
        />
        <h2 className="text-lg font-semibold">{user?.fullName}</h2>
        <p className="text-sm text-gray-500">{user?.role}</p>
        <button
          onClick={logout}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Logout
        </button>
      </div>
      <div className="mt-8">
        <ClientList />
      </div>
    </aside>
  );
};

export default ProfileSidebar;