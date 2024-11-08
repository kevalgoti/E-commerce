import React from 'react';
import { FaTimes } from 'react-icons/fa'; // Importing the delete icon
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { TbCloudShare } from 'react-icons/tb';

const CoverImageUploader = ({ coverImage, setCoverImage }) => {
  const handleCoverImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  const handleDeleteCoverImage = () => {
    setCoverImage(null);
  };

  return (
    <div className="border relative border-gray-200 h-60 rounded-lg bg-gray-50 p-6 flex flex-col items-center justify-center text-center">
  {coverImage ? (
    <div className=" group w-full h-full">
    <img
  src={coverImage}
  alt="Cover"
  className="w-full h-full object-contain rounded-md" // Ensures the whole image is visible without cropping
  aria-label="Product cover image"
/>
      <div className="absolute top-0 right-0 p-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity space-x-2">
        <button className="text-black rounded-lg">
          <TbCloudShare size={20} className="bg-[#FFF2E2] rounded-lg" />
        </button>
        <button className="text-black" onClick={handleDeleteCoverImage}>
          <MdOutlineDeleteOutline size={20} className="bg-[#FFF2E2] rounded-lg" />
        </button>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2">
        <img src="/images/image.png" alt="" />
      </div>
      <p className="text-blue-500 font-medium flex items-center justify-center space-x-2 cursor-pointer hover:text-blue-700">
        <IoCloudUploadOutline size={24} />
        <span>Upload Image</span>
      </p>
      <p className="text-xs text-gray-400 mt-1">
        Upload a cover image for your product.
      </p>
      <p className="text-xs text-gray-300">
        File Format jpeg, png Recommended Size 600×600 (1:1)
      </p>
      <input
        type="file"
        onChange={handleCoverImageUpload}
        className="absolute inset-0 opacity-0 cursor-pointer"
        aria-label="Upload product cover image"
      />
    </div>
  )}
</div>

  );
};

export default CoverImageUploader;
