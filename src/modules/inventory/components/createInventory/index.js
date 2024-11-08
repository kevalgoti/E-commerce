'use client';
import React, { useState } from 'react';
import InventoryForm from './components/InventoryForm';
import DescriptionForm from './components/DescriptionForm';
import CoverImageUploader from './components/CoverImageUploader';
import AdditionalImagesUploader from './components/AdditionalImagesUploader';
import Link from 'next/link';

const CreateInventory = () => {
  const [discountEnabled, setDiscountEnabled] = useState(false);
  const [expiryEnabled, setExpiryEnabled] = useState(false);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [coverImage, setCoverImage] = useState(null);

  return (
    <div className="bg-[#F4F5FA] space-y-6 text-black">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl sm:text-sm lg:text-3xl xl:text-[19px]  font-semibold">
          New Inventory Item
        </h1>  <div className="flex sm:flex-row flex-col sm:space-x-4 space-y-2 sm:space-y-0">
          <button className="bg-[#1C1D22] h-[32px] sm:h-[36px] rounded-[8px] sm:rounded-[12px] text-white text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2">
            <span className="sm:inline hidden">Save as Draft</span>
            <span className="sm:hidden">Save</span>
          </button>
          <button className="bg-[#5570F1] h-[32px] sm:h-[36px] rounded-[8px] sm:rounded-[12px] text-white text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2">
            <Link href="/inventory/record/1">
              <span className="sm:inline hidden">Save & Publish</span>
              <span className="sm:hidden">Publish</span>
            </Link>
          </button>
        </div>
      </div>

      {/* Responsive Form Layout */}
      <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-6 lg:space-y-0">
        {/* Left Side Form */}
        <InventoryForm
          discountEnabled={discountEnabled}
          setDiscountEnabled={setDiscountEnabled}
          expiryEnabled={expiryEnabled}
          setExpiryEnabled={setExpiryEnabled}
        />

        {/* Middle Form - Descriptions */}
        <DescriptionForm />

        {/* Right Side - Image Upload */}
        <div className="space-4 p-4 w-full lg:w-1/3 bg-white rounded-xl">
          <CoverImageUploader coverImage={coverImage} setCoverImage={setCoverImage} />
          <AdditionalImagesUploader
            additionalImages={additionalImages}
            setAdditionalImages={setAdditionalImages}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateInventory;
