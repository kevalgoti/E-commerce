'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const sidebarItems = [
  { id: 1, bgColor: 'bg-blue-700', imageSrc: '/images/sidebar/logo.png' },
  { id: 2, bgColor: 'bg-gray-300', imageSrc: '/images/sidebar/home.png' },
  { id: 3, bgColor: 'bg-blue-200', imageSrc: '/images/sidebar/shoppingcart.png' },
  { id: 4, bgColor: 'bg-purple-500', imageSrc: '/images/sidebar/user.png' },
  { id: 5, bgColor: 'bg-yellow-400', imageSrc: '/images/sidebar/inventory.png', link: '/inventory' },
  { id: 6, bgColor: 'bg-yellow-400', imageSrc: '/images/sidebar/messages.png', },
  { id: 7, bgColor: 'bg-yellow-400', imageSrc: '/images/sidebar/setting.png' },
];

export default function Sidebar() {
  return (
    <>
      <aside
        className={`top-0 left-0 h-screen w-20 z-50 bg-white justify-between sticky border-r flex flex-col items-center border-gray-200 shadow-lg transform transition-transform sm:translate-x-0 pt-0 md:justify-between`}
      >
        <nav className="flex flex-col space-y-4 justify-start h-full w-full items-center pt-4">
          {sidebarItems.map((item, index) => (
            <div
              key={item.id}
              className={`sm:w-12 md:w-16 lg:w-20 xl:w-24 rounded-full flex items-center justify-center ${index === 0 ? 'pt-0' : ''}`} // Add pt-0 to the first item to remove space
            >
              <Link href={item.link || '/'}>
                <Image
                  src={item.imageSrc}
                  alt={`Icon for ${item.id}`}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </Link>
            </div>
          ))}
        </nav>

        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-[#5E63661A] flex items-center m-2 justify-center">
            <Image src="/images/sidebar/music.png" alt="Logout" width={24} height={24} className="object-contain" />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#FFCC9133] flex items-center m-2 justify-center">
            <Image src="/images/sidebar/gift.png" alt="Logout" width={24} height={24} className="object-contain" />
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center m-2 justify-center">
            <Image src="/images/sidebar/logout.png" alt="Logout" width={24} height={24} className="object-contain" />
          </div>
        </div>
      </aside>


    </>
  );
}
