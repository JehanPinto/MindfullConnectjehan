import * as React from "react";

interface NavigationItemProps {
  icon: string;
  label: string;
  className?: string;
  isSidebarOpen?: boolean;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  label,
  className = "",
  isSidebarOpen = true,
}) => {
  return (
    <button
      className={`flex items-center gap-5 text-xl font-medium tracking-wide text-black text-center ${className}`}
    >
      <img
        src={icon}
        alt={`${label} icon`}
        className="object-contain shrink-0 w-10 aspect-square"
      />
      {isSidebarOpen && (
        <span className="shrink my-auto mx-1 ">{label}</span>
      )}
    </button>
  );
};