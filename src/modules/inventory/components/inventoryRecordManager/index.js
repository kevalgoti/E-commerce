'use client'
import Purchases from './components/Purchases';
import AdditionalStats from './components/AdditionalStats';
import ProductCardRecord from './components/ProductCardRecord';

function InventoryRecordManager() {
    return (
        <>
            <div className="px-2 lg:p-4 text-black">
                <ProductCardRecord />
                <div>
                    <AdditionalStats />
                </div>
                <div>
                    <Purchases />
                </div>
            </div>
        </>
    );
}

export default InventoryRecordManager;
