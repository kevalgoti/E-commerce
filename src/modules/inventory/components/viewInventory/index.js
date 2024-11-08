import Link from 'next/link'; // Import Link for navigation
import { BiChevronDown } from 'react-icons/bi';
import InventoryList from './components/InventoryList'

function ViewInventory() {
    return (
        <>
            <div className="flex flex-row sm:flex-row justify-between items-center text-black">
                <h1 className="text-2xl md:text-lg text-[#1C1D22] font-semibold">Inventory Summary</h1>
                <Link href="inventory/new">
                    <button className="bg-[#5570F1] rounded-[12px] text-white px-4 py-2 h-[36px] hover:bg-blue-700 transition mt-3 sm:mt-0 flex items-center">
                        <span className="sm:inline hidden">+ Add a New Product</span>
                        <span className="sm:hidden">+ New</span>
                    </button>
                </Link>
            </div>


            <div className="flex flex-col sm:flex-row w-full rounded-xl overflow-hidden mt-5 h-auto sm:h-[145px] gap-4 sm:gap-5">
                {/* Blue section */}
                <div className="bg-blue-700 p-4 text-white rounded-md flex-1">
                    <img
                        src="/images/inventory/icon.png"
                        alt="inventory icon"
                        width={24}
                        height={24}
                        className="object-contain"
                    />
                    <div className="flex pt-5 items-center justify-between">
                        <div className="flex-1">
                            <p className="text-sm opacity-80">All Products</p>
                            <p className="text-3xl font-bold">350</p>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm opacity-80">Active</p>
                            <span className="text-3xl font-bold">316</span>
                            <span className="text-sm pl-2 text-blue-200">91%</span>
                        </div>
                    </div>
                </div>

                {/* White section */}
                <div className="bg-white text-black p-4 rounded-md flex-1">
                    <div className="flex justify-between items-center pb-2">
                        <div className="text-sm font-medium text-gray-400">
                            <img
                                src="/images/inventory/icon1.png"
                                alt="inventory icon"
                                width={24}
                                height={24}
                                className="object-contain"
                            />
                        </div>
                        <button className="text-sm text-gray-500 flex items-center space-x-1 focus:outline-none">
                            This-Week
                            <BiChevronDown />
                        </button>
                    </div>
                    <div className="flex pt-5 items-center justify-between">
                        <div className="flex-1">
                            <p className="text-sm text-red-500">Low Stock Alert</p>
                            <p className="text-3xl font-bold text-red-600">23</p>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-muted-foreground">Expired</p>
                            <p className="text-3xl font-bold text-gray-600">3</p>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-muted-foreground">Start Rating</p>
                            <p className="text-3xl font-bold text-gray-600">2</p>
                        </div>
                    </div>
                </div>
            </div>

            <InventoryList />
        </>
    );
}

export default ViewInventory;
