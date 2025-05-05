import React from 'react';
import Nav from './nav';
import SideNav from './sideNav';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';


interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="w-full">
                <Nav />
            </header>
            <main className="flex flex-grow">
                <SideNav  /> {/* Apply margin-top only here */}
                <div className="flex-grow">{children}</div>
            </main>
            <footer className="w-full">
             
            </footer>
        </div>
    );
};

export default Layout;