import React, { useState } from 'react';

const DescriptionForm = () => {
  return (
    <div className="w-full lg:w-1/3 space-y-6 bg-white p-6 rounded-xl shadow-md">
      {/* Short Description */}
      <textarea
        className="w-full h-20 p-3 rounded-md border bg-gray-100 border-gray-300"
        placeholder="Short Description"
      ></textarea>

      {/* Long Description */}
      <span className="block mt-3 font-medium">Product Long Description</span>
      <div className="border border-gray-300 rounded-md mt-2">
        {/* Toolbar */}
        <div className="flex items-center justify-between bg-gray-100 p-2 rounded-t-md">
          <select className="p-1  rounded border bg-gray-100 w-full border-gray-300 text-gray-500">
            <option>Roboto</option>
            <option>Arial</option>
            <option>Times New Roman</option>
          </select>
          <select className="p-1 rounded border bg-gray-100 text-gray-500 border-gray-300">
            <option>Paragraph</option>
            <option>Heading 1</option>
            <option>Heading 2</option>
          </select>
          <div className="flex space-x-2">
            <button className="p-1 text-gray-500 hover:text-black font-bold">B</button>
            <button className="p-1 text-gray-500 hover:text-black italic">I</button>
            <button className="p-1 text-gray-500 hover:text-black underline">U</button>
            <button className="p-1 text-gray-500 hover:text-black">🔗</button>
          </div>
        </div>

        {/* Long Description Text Area */}
        <textarea
          className="w-full h-32 p-2 rounded-b-md border-t-0 bg-gray-100"
          placeholder="Your text goes here"
        ></textarea>
      </div>

      {/* Return Policy Section */}
      <div className="flex justify-between items-center mt-4">
        <span>Return Policy</span>
        <div className="flex items-center">
          <span className="mr-2">Add Policy</span>
          <label className="relative inline-flex items-center cursor-pointer ">
            <input type="checkbox" className="sr-only peer bg-gray-100" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-checked:before:translate-x-full before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:rounded-full before:h-5 before:w-5 before:transition-all"></div>
          </label>
        </div>
      </div>

      {/* Return Date and Time */}
      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 mt-4">
        <input className="w-full lg:w-1/2 p-3 rounded-md border bg-gray-100 border-gray-300" type="date" />
        <input className="w-full lg:w-1/2 p-3 rounded-md border bg-gray-100 border-gray-300" type="time" />
      </div>
    </div>
  );
};

export default DescriptionForm;
