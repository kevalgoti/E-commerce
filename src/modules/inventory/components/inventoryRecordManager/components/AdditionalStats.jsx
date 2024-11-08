import { BiChevronDown } from 'react-icons/bi';
function AdditionalStats() {
    return (
        <div className="grid gap-4 md:grid-cols-2 mt-4">
            {/* Critical Stock Card */}
            <div className="bg-white p-4 rounded-xl shadow-lg flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2">
                    <img
                        src="/images/record/purchases.png"
                        alt="Purchases Icon"
                        width={36}
                        height={36}
                        className="object-contain"
                    />
                    <div className="mt-2 flex justify-end">
                        <button className="text-sm text-gray-500 flex items-center space-x-1 focus:outline-none">
                            All-Time
                            <BiChevronDown />
                        </button>
                    </div>
                </div>
                <div className="flex justify-between items-end mt-auto">
                    <div className="flex-1">
                        <p className="text-sm font-medium text-destructive">Critical Stock</p>
                        <p className="text-2xl font-bold text-destructive">23</p>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-medium text-muted-foreground">Expired</p>
                        <p className="text-2xl font-bold">3</p>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-medium text-muted-foreground">Rating</p>
                        <p className="text-2xl font-bold">2</p>
                    </div>
                </div>

            </div>

            {/* Returns Card */}
            <div className="bg-white p-4 rounded-xl shadow-lg flex flex-col justify-between h-[145px]">
                <div className="flex items-center justify-between pb-2">
                    <img
                        src="/images/record/purchases.png"
                        alt="Purchases Icon"
                        width={36}
                        height={36}
                        className="object-contain"
                    />
                    <div className="mt-2 flex justify-end">
                        <button className="text-sm text-gray-500 flex items-center space-x-1 focus:outline-none">
                            All-Time
                            <BiChevronDown />
                        </button>
                    </div>
                </div>
                <div className="flex justify-between items-end mt-auto">
                    <div className="flex-1">
                        <p className="text-sm font-medium text-destructive">Returns</p>
                        <p className="text-2xl font-bold text-destructive">23</p>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-medium text-muted-foreground">Damaged</p>
                        <p className="text-2xl font-bold">3</p>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-medium text-muted-foreground">Rating</p>
                        <p className="text-2xl font-bold">2</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AdditionalStats;
