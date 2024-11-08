"use client";
import { useState, useCallback, useLayoutEffect } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sideNavbar/SideNavbar";

function PageLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false); // Initially closed on small screens

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useLayoutEffect(() => {
    const checkScreenSize = () => {
      const isNowSmallScreen = window.innerWidth <= 640;
      setIsSmallScreen(isNowSmallScreen);
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize(); // Initial check on mount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSidebar = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div className="min-h-screen flex bg-gray-100 overflow-hidden relative">
      <div
        className={`${
          isSmallScreen ? "fixed" : "relative"
        } z-20 bg-white h-full transition-transform duration-300`}
      >
        {isSmallScreen && !isOpen ? null : <Sidebar />}
      </div>
      <div className="w-full h-screen overflow-x-auto transition-all duration-300">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-5">
          <div className="w-full h-full overflow-hidden">{children}</div>
        </main>
        {isSmallScreen && isOpen ? (
          <div
            className="w-full h-screen absolute z-10 top-0 bg-black bg-opacity-20"
            onClick={toggleSidebar}
          ></div>
        ) : null}
      </div>
    </div>
  );
}

export default PageLayout;