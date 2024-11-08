import Link from 'next/link';
import { FaRegCopy } from "react-icons/fa";
import { BiChevronDown } from 'react-icons/bi';
import { IoIosArrowDown } from "react-icons/io";
function ProductCardRecord() {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        {/* Product Info */}
        <div className="flex flex-col gap-2 w-full sm:w-auto">
          <div className="flex flex-wrap items-center text-gray-500 text-sm gap-2">
            <p className="font-bold text-black">Polo T-shirt</p>
            <p className="pl-0 sm:pl-5">Date Added:</p>
            <p>09 Sept 2023, 12:58 pm</p>
            <p className="font-bold text-black">Product URL:</p>
            <Link href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              1nancystores.com/polot-shirt
            </Link>
            <FaRegCopy className="text-blue-500 cursor-pointer" />
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <button className="bg-[#1C1D22] h-[36px] rounded-[12px] text-white px-4 py-2 flex items-center justify-center gap-2 text-sm sm:text-base truncate">
            Edit Product
            <IoIosArrowDown />
          </button>
          <button className="px-4 py-2 rounded-[12px] h-[36px] bg-[#CC5F5F] text-white hover:bg-red-600 text-sm sm:text-base truncate">
            Unpublish Product
          </button>
        </div>

      </div>
      {/* Product Analytics */}
      <div className="grid grid-cols-1 sm:grid-cols-[15%,30%,1fr,1fr] gap-6 h-auto">
        {/* Product Image div */}
        <div className="flex items-center bg-white rounded-xl shadow-lg justify-center p-4">
          <img
            src="/images/blue.png"
            alt="Blue T-Shirt"
            className="w-[124px] h-[124px] object-cover rounded-md"
          />
        </div>

        {/* Price & Orders div */}
        <div className="p-4 bg-white rounded-xl shadow-lg">
          <div className="flex flex-col justify-between h-full">
            {/* Header Section */}
            <div className="flex flex-row items-center justify-between pb-2">
              <div className="text-sm font-medium text-muted-foreground">Orders</div>
              <p className="flex-0 h-[23px] px-2 py-1 gap-2 w-auto bg-[#32936F29] rounded-xl text-sm text-[#519C66]">
                Published
              </p>
            </div>

            {/* Bottom Section */}
            <div className="mt-auto">
              <div className="flex justify-between items-end">
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground">Price</p>
                  <p className="text-sm font-bold">₦25,000.00</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground">Orders</p>
                  <p className="text-sm font-bold">20</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Orders Value div */}
        <div className="p-4 bg-white rounded-xl shadow-lg flex flex-col justify-between">
          <div className="flex justify-between items-center pb-2">
            <div className="text-sm font-medium text-gray-400">
              <img
                src="/images/record/chat.png"
                alt="Chat Icon"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <button className="text-sm text-gray-500 flex items-center space-x-1 focus:outline-none">
              All-Time
              <BiChevronDown />
            </button>
          </div>
          <div className="mt-auto flex justify-between items-end">
            <div>
              <p className="text-sm text-gray-500">Total Orders</p>
              <p className="text-xl font-bold">₦50,000.00</p>
            </div>
          </div>
        </div>

        {/* Views & Favorites div */}
        <div className="p-4 bg-white rounded-xl shadow-lg flex flex-col justify-between">
          <div className="flex justify-between items-center pb-2">
            <div className="text-sm font-medium text-gray-400">
              <img
                src="/images/record/eye.png"
                alt="Eye Icon"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <button className="text-sm text-gray-500 flex items-center space-x-1 focus:outline-none">
              All-Time
              <BiChevronDown />
            </button>
          </div>
          <div className="mt-auto flex justify-between items-end">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground">Views</p>
              <p className="text-sm font-bold">1,200</p>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground">Favorites</p>
              <p className="text-sm font-bold">23</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default ProductCardRecord;
