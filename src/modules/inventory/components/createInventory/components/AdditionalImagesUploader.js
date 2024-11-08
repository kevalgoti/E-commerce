import React from 'react';
import { TbCloudShare } from 'react-icons/tb';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoCloudUploadOutline } from 'react-icons/io5';

const AdditionalImagesUploader = ({ additionalImages, setAdditionalImages }) => {
  const handleAdditionalImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setAdditionalImages((prevImages) => [
      ...prevImages,
      ...files.map((file) => URL.createObjectURL(file)),
    ]);
  };

  const handleDeleteImage = (index) => {
    setAdditionalImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="rounded-xl pt-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Additional Images</label>
      <div className="mt-2 grid grid-cols-2 gap-4">
        {additionalImages.map((src, index) => (
          <div key={index} className="relative group border-dotted border-2 rounded-xl">
            <img src={src} alt={`Additional ${index}`} className="w-full h-40 object-cover rounded-md" />
            <div className="absolute top-1 right-1 p-1 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity space-x-1">
              <button className="text-black rounded-lg" >
                <TbCloudShare size={20} className='bg-[#FFF2E2] rounded-lg'/>
              </button>
              <button className="text-black" onClick={() => handleDeleteImage(index)}>
                <MdOutlineDeleteOutline size={20} className='bg-[#FFF2E2] rounded-lg'/>
              </button>
            </div>
          </div>
        ))}
        <div className="relative border-dotted h-40 bg-[#F4F5FA] rounded-xl p-4 flex flex-col border-2 items-center justify-center cursor-pointer">
          <input
            type="file"
            multiple
            onChange={handleAdditionalImageUpload}
            className="absolute opacity-0 w-full h-full cursor-pointer"
          />
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-[#FFF2E2]">
            <IoCloudUploadOutline size={30} className="text-blue-500" />
          </div>
          <p className="text-blue-500 text-sm flex items-center justify-center space-x-2 hover:text-blue-700">
            <span>Upload Image</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalImagesUploader;
