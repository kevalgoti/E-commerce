'use client';
import { usePathname } from 'next/navigation';
import { FaBars } from 'react-icons/fa';
import { IoIosNotifications } from "react-icons/io";
import { IoMdHome } from "react-icons/io";

export default function Header({ toggleSidebar }) {
  const currentPath = usePathname();
  const pathSegments = currentPath.split('/').filter(Boolean);

  return (
    <>
      <header className="text-black sticky top-0 py-[14px] border-b bg-gray-50 flex justify-between items-center px-6 z-10">
        <button
          onClick={toggleSidebar}
          className="block sm:hidden top-4 p-2 rounded-full bg-blue-700 text-white shadow-lg hover:bg-blue-600 transition-colors"
        >
          <FaBars size={24} />
        </button>
        <h1 className="text-xl font-semibold">Inventory</h1>

        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hidden md:inline-flex bg-[#FEF5EA] rounded-lg py-2 sm:pl-5">Nanny's Shop ▼</button>
          <IoIosNotifications className="w-[20px] h-[20px] text-[#5570F1]" />
          <img
            src="/images/header/profilephoto.png"
            alt="Profile"
            width={36}
            height={36}
            className="w-9 h-9 rounded-full bg-white"
          />
        </div>
      </header>
      <div className="text-gray-500 text-sm p-2 px-6 flex items-center bg-gray-50">
        <IoMdHome className="text-blue-500" size={24} />
        <span className="ml-3">/</span>

        {pathSegments.map((segment, index) => (
          <span key={index}>
            <span className="text-blue-600 mx-2">{segment}</span>
            {index < pathSegments.length - 1 && <span className="mx-2">/</span>}
          </span>
        ))}
      </div>

    </>
  );
}
