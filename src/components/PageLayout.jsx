"use client";
import { useState, useEffect, useCallback } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sideNavbar/SideNavbar";

function PageLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false); // Initially closed on small screens

  // const screenSize = window?.innerWidth;
  // const isSmallScreen = screenSize <= 768;

  // useEffect(() => {
  //   const checkScreenSize = () => {
  //     const isNowSmallScreen = window.innerWidth <= 768;
  //     setIsSmallScreen(isNowSmallScreen);

  //     if (isNowSmallScreen) {
  //       setIsOpen(false);
  //     } else {
  //       setIsOpen(true);
  //     }
  //   };

  //   window.addEventListener("resize", checkScreenSize);
  //   checkScreenSize(); // Initial check on mount
  //   return () => window.removeEventListener("resize", checkScreenSize);
  // }, []);

  const toggleSidebar = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div className="min-h-screen flex bg-gray-100 overflow-hidden">
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block fixed md:relative z-20 bg-white h-full transition-transform duration-300`}
      >
        <Sidebar />
      </div>
      <div className="flex flex-col w-full h-full overflow-x-auto transition-all duration-300">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-5">
          <div className="w-full h-full overflow-hidden">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default PageLayout;
