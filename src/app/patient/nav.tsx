import React, { PropsWithChildren } from 'react';

import { Bell } from 'lucide-react';

interface NavLinkProps extends PropsWithChildren {
  href: string;
  active?: boolean;
}

const Nav = () => {
  return (
    <header className="w-full bg-[#E1F3FD] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Profile Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="./profile"
                alt="Profile"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#" active>Home</NavLink>
            <NavLink href="#">FAQ</NavLink>
            <NavLink href="#">Services</NavLink>
            <NavLink href="#">Find a Counsellor</NavLink>
            <NavLink href="#">Join as a Counsellor</NavLink>
          </nav>

          {/* Right Section - Avatar & Notifications */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-white/50 transition-colors">
              <Bell className="h-5 w-5 text-gray-500" />
            </button>
            <div className="relative">
              <img
                className="h-10 w-10 rounded-full border-2 border-gray-200"
                src="/api/placeholder/40/40"
                alt="Avatar"
              />
              <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// NavLink component for consistent styling
const NavLink: React.FC<NavLinkProps> = ({ href, children, active = false }) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
        active
          ? 'border-blue-500 text-gray-900'
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
      }`}
    >
      {children}
    </a>
  );
};

export default Nav;