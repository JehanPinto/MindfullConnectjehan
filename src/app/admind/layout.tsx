'use client';

import { useState } from 'react';
import { Home, PsychologyAlt, Person, ReportProblem, Badge, NotificationsNone, NotificationsActive, Search } from '@mui/icons-material';

export default function AdminLayout() {
    const [notifications, setNotifications] = useState(false);
    const [activeMenu, setActiveMenu] = useState('Dashboard');
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const handleMenuClick = (menu: string, hasSubItems: boolean) => {
        if (hasSubItems) {
            setOpenDropdown(openDropdown === menu ? null : menu);
        } else {
            setActiveMenu(menu);
            setOpenDropdown(null);
        }
    };

    const menuItems = [
        { name: 'Dashboard', icon: <Home fontSize="large" /> },
        { name: 'Patient', icon: <PsychologyAlt fontSize="large" /> },
        {
            name: 'Counsellors',
            icon: <Person fontSize="large" />,
            subItems: ['Active', 'Pending'],
        },
        {
            name: 'Reported',
            icon: <ReportProblem fontSize="large" />,
            subItems: ['Resolved', 'Pending'],
        },
        { name: 'Employee', icon: <Badge fontSize="large" /> },
    ];

    return (
        <div className="flex h-screen">
            <div className="w-64 bg-white shadow-md p-4 flex flex-col items-center">
                <img src="/logo.png" alt="Logo" className="w-20 h-20 object-contain mb-6" />
                <ul className="w-full pl-4">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <button
                                className={`flex items-center gap-3 p-3 rounded-lg text-[18px] font-medium w-full ${activeMenu === item.name ? 'text-[#2D60FF]' : 'text-[#9C9C9C] hover:text-[#7B7A7A]'
                                    }`}
                                onClick={() => handleMenuClick(item.name, !!item.subItems)}
                            >
                                {item.icon} {item.name}
                            </button>
                            {item.subItems && openDropdown === item.name && (
                                <ul className="pl-8">
                                    {item.subItems.map((sub) => (
                                        <li key={sub} className="text-[14px] text-[#9C9C9C] hover:text-[#7B7A7A] py-1">
                                            {sub}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex-1 bg-[#E6EFF5]">
                <header className="h-[110px] bg-white shadow-md flex items-center px-8 justify-between">
                    <h1 className="text-[#343C6A] text-[28px] font-semibold font-inter">Admin</h1>
                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-[255px] h-[50px] pl-12 pr-4 rounded-[40px] bg-[#F5F7FA] outline-none"
                            />
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                        <button className="w-[50px] h-[50px] flex items-center justify-center bg-gray-200 rounded-full">
                            {notifications ? <NotificationsActive fontSize="large" /> : <NotificationsNone fontSize="large" />}
                        </button>
                        <div className="w-[60px] h-[60px] bg-gray-300 rounded-full overflow-hidden">
                            <img src="/admin-photo.jpg" alt="Admin" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}
