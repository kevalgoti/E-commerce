'use client'
import React, { useState, useEffect } from 'react'
import { MdFilterListAlt,MdOutlineDateRange, MdSearch } from "react-icons/md";

import { CiShare1 } from "react-icons/ci";
import { CgSortAz } from "react-icons/cg";
import productsData from './products.json'

function InventoryList() {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)

    useEffect(() => {
        setProducts(productsData)
    }, [])

    const totalPages = Math.ceil(products.length / itemsPerPage)
    const currentItems = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber)
        }
    }

    return (
        <section className="mt-6 bg-white shadow-md rounded-xl text-black p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start sm:space-x-4 space-y-4 sm:space-y-0 w-full">
                <p className="text-lg font-semibold">Inventory item</p>
                <div className="flex flex-wrap sm:flex-row flex-col items-center space-x-0 sm:space-x-4 space-y-2 sm:space-y-0 w-full sm:w-auto justify-between">

                    <div className="relative w-full sm:w-[300px] md:w-[400px] lg:w-auto max-w-[500px]">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border border-gray-200 rounded-xl px-10 py-2 w-full"
                        />
                        <div className="absolute inset-y-0 left-3 flex items-center">
                            <MdSearch className="text-gray-500" size={20} />
                        </div>
                    </div>
                    <div className="flex sm:space-x-2 space-x-0 space-y-0 sm:space-y-0 w-full sm:w-auto justify-between">
                        <button className="flex items-center justify-center border border-gray-200 rounded-xl px-4 py-2 space-x-2 sm:w-auto w-full max-w-[40px] sm:max-w-[120px]">
                            <MdFilterListAlt className="sm:mr-2" />
                            <span className="hidden sm:block">Filter</span>
                        </button>
                        <button className="flex items-center justify-center border border-gray-200 rounded-xl px-4 py-2 space-x-2 sm:w-auto w-full max-w-[40px] sm:max-w-[120px]">
                            <MdOutlineDateRange className="sm:mr-2" />
                            <span className="hidden sm:block">Filter</span>
                        </button>
                        <button className="flex items-center justify-center border border-gray-200 rounded-xl px-4 py-2 space-x-2 sm:w-auto w-full max-w-[40px] sm:max-w-[120px]">
                            <CiShare1 className="sm:mr-2" />
                            <span className="hidden sm:block">Share</span>
                        </button>
                        <button className="border border-gray-200 rounded-xl px-4 py-2 sm:w-auto w-full max-w-[40px] sm:max-w-[140px]">
                            <span className="hidden sm:block">Bulk Action ▼</span>
                            <span className="sm:hidden">▼</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto mt-4">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-50 text-gray-500 border-t border-b border-gray-300 text-sm h-[52px]">
                            <th className="px-4 py-2">
                                <input type="checkbox" className="w-6 h-6 rounded-lg border-[#CFD3D4] bg-[#CFD3D4]" />
                            </th>
                            <th className="px-4 py-2"></th>
                            <th className="px-4 py-2">
                                <div className="flex items-center">
                                    Product Name
                                    <CgSortAz className="text-base md:text-xl" size={24} /> {/* Responsive icon size */}
                                </div>
                            </th>
                            <th className="px-4 py-2">
                                <div className="flex items-center">
                                    Category
                                    <CgSortAz className="text-base sm:text-lg md:text-xl" size={24} /> {/* Responsive icon size */}
                                </div>
                            </th>
                            <th className="px-4 py-2">
                                <div className="flex items-center">
                                    Unit Price
                                    <CgSortAz className="text-base sm:text-lg md:text-xl" size={24} /> {/* Responsive icon size */}
                                </div>
                            </th>
                            <th className="px-4 py-2">
                                <div className="flex items-center">
                                    In-Stock
                                    <CgSortAz className="text-base sm:text-lg md:text-xl" size={24} /> {/* Responsive icon size */}
                                </div>
                            </th>
                            <th className="px-4 py-2">
                                <div className="flex items-center">
                                    Discount
                                    <CgSortAz className="text-base sm:text-lg md:text-xl" /> {/* Responsive icon size */}
                                </div>
                            </th>
                            <th className="px-4 py-2">
                                <div className="flex items-center">
                                    Total Value
                                    <CgSortAz className="text-base sm:text-lg md:text-xl" /> {/* Responsive icon size */}
                                </div>
                            </th>
                            <th className="px-4 py-2">
                                <div className="flex items-center">
                                    Action
                                    <CgSortAz className="text-base sm:text-lg md:text-xl" /> {/* Responsive icon size */}
                                </div>
                            </th>
                            <th className="px-4 py-2">
                                <div className="flex items-center">
                                    Status
                                    <CgSortAz className="text-base sm:text-lg md:text-xl" /> {/* Responsive icon size */}
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm">
                        {currentItems.map((product) => (
                            <tr key={product.id} className="h-12">
                                <td className="px-4 py-2">
                                    <input type="checkbox" className="w-6 h-6 rounded-lg border-[#CFD3D4] bg-[#CFD3D4]" />
                                </td>
                                <td className="px-4 py-2">
                                    <img src={product.imageSrc} alt={product.productName} className="w-9 h-9 object-cover rounded" />
                                </td>
                                <td className="px-4 py-2">{product.productName}</td>
                                <td className="px-4 py-2">{product.category}</td>
                                <td className="px-4 py-2">{product.unitPrice}</td>
                                <td className="px-4 py-2">{product.inStock}</td>
                                <td className="px-4 py-2">{product.discount}</td>
                                <td className="px-4 py-2">{product.totalValue}</td>
                                <td className="px-4 py-2">
                                    <select className="bg-[#5E636614] h-[23px] rounded-lg">
                                        <option value="publish">Publish</option>
                                        <option value="unPublish">Unpublish</option>
                                    </select>
                                </td>
                                <td className="px-4 py-2">
                                    <button className={`h-[23px] px-4 gap-2 w-auto rounded-lg ${product.status === 'Published' ? 'bg-[#5570F129]' : 'bg-[#FFF2E2]'}`}>
                                        {product.status}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {/* Pagination */}
            <div className="flex items-center justify-between mt-4 border-t border-gray-300 pt-4 text-gray-600">
                <div className="flex items-center space-x-2">
                    <select
                        value={itemsPerPage}
                        onChange={(e) => {
                            setItemsPerPage(Number(e.target.value));
                            setCurrentPage(1); // Reset to first page
                        }}
                        className="border border-gray-200 rounded-xl px-2 py-1"
                    >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                    </select>
                    <p>Items per page</p>
                    <p>
                        {((currentPage - 1) * itemsPerPage) + 1}-
                        {Math.min(currentPage * itemsPerPage, products.length)} of {products.length} items
                    </p>
                </div>


                <div className="flex items-center space-x-2 ">

                    <span>
                        <select value={currentPage}
                            className="border border-gray-200 rounded-xl px-2 p-1">
                            <option value={currentPage}>{currentPage}</option>

                        </select>
                    </span>
                    <span className='ml-1'>  of {totalPages} pages</span>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}

                    >
                        {"<"}
                    </button>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}

                    >
                        {">"}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default InventoryList;
