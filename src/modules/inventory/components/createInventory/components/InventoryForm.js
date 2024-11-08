const InventoryForm = ({ discountEnabled, setDiscountEnabled, expiryEnabled, setExpiryEnabled }) => (
  <div className="w-full lg:w-1/3 space-y-6 bg-white p-6 rounded-xl shadow-md">
    {/* Product Name */}
    <input className="w-full p-3 rounded-md border bg-gray-100 border-gray-300" placeholder="Product Name" />

    {/* Product Category */}
    <select className="w-full p-3 rounded-md border bg-gray-100 border-gray-300">
      <option>Select Product Category</option>
    </select>

    {/* Selling & Cost Price */}
    <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
      <input className="w-full p-3 rounded-md border bg-gray-100 border-gray-300" placeholder="Selling Price" />
      <input className="w-full p-3 rounded-md border bg-gray-100 border-gray-300" placeholder="Cost Price" />
    </div>

    {/* Quantity in Stock */}
    <input className="w-full p-3 rounded-md border bg-gray-100 border-gray-300" placeholder="Quantity in Stock" />

    {/* Order Type */}
    <select className="w-full p-3 rounded-md border bg-gray-100 border-gray-300">
      <option>Order Type</option>
    </select>

    {/* Discount Section */}
    <div className="flex justify-between items-center">
      <span>Discount</span>
      <div className="flex items-center">
        <span className="mr-2">Add Discount</span>
        {/* Custom Toggle for Discount */}
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer bg-gray-100"
            checked={discountEnabled}
            onChange={() => setDiscountEnabled(!discountEnabled)}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-checked:before:translate-x-full before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:rounded-full before:h-5 before:w-5 before:transition-all"></div>
        </label>
      </div>
    </div>

    {/* Discount Inputs */}
    {discountEnabled && (
      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
        <select className="w-full lg:w-1/2 p-3 rounded-md border bg-gray-100 border-gray-300">
          <option>Type</option>
          <option>Percentage</option>
          <option>Flat</option>
        </select>
        <input className="w-full lg:w-1/2 p-3 rounded-md border border-gray-300" placeholder="Value" type="number" />
      </div>
    )}

    {/* Expiry Date Section */}
    <div className="flex justify-between items-center">
      <span>Expiry Date</span>
      <div className="flex items-center">
        <span className="mr-2">Add Expiry Date</span>
        {/* Custom Toggle for Expiry Date */}
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"  // Fixed the input type here
            className="sr-only peer"
            checked={expiryEnabled}
            onChange={() => setExpiryEnabled(!expiryEnabled)}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-checked:before:translate-x-full before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:rounded-full before:h-5 before:w-5 before:transition-all"></div>
        </label>
      </div>
    </div>

    {/* Expiry Date Input */}
    {expiryEnabled && <input className="w-full p-3 rounded-md border border-gray-300" type="date" />}
  </div>
);

export default InventoryForm;
