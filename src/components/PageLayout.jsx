'use client';
import { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sideNavbar/SideNavbar";

function PageLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false); // Initially closed on small screens
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const checkScreenSize = () => {
      const isNowSmallScreen = window.innerWidth <= 768;
      setIsSmallScreen(isNowSmallScreen);

      if (isNowSmallScreen) {
        setIsOpen(false); // Close sidebar on smaller screens
      } else {
        setIsOpen(true); // Open sidebar on larger screens
      }
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize(); // Initial check on mount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div className="min-h-screen flex bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block fixed md:relative z-20 w-64 bg-white h-full transition-transform duration-300`}
      >
        <Sidebar />
      </div>

      {/* Main content */}
      <div
        className={`flex flex-col w-full h-full transition-all duration-300 ${
          isOpen && !isSmallScreen ? "md:ml-64" : ""
        }`}
      >
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-5">
          <div className="w-full h-full overflow-hidden">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default PageLayout;
