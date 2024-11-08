'use client'
import React, { useState, useEffect } from 'react';
import { CiShare1 } from "react-icons/ci";
import { MdFilterListAlt,MdOutlineDateRange, MdSearch } from "react-icons/md";


import productsData from './products.json';
import { CgSortAz } from 'react-icons/cg';


function Purchases() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productsData);
    }, []);
    return (
        <>
            <section className="mt-6 bg-white shadow-md rounded-xl text-black p-4 sm:p-6">

                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start sm:space-x-4 space-y-4 sm:space-y-0 w-full">
                    <p className="text-lg font-semibold">Purchases</p>
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



                <div className="overflow-x-auto mt-4 ">
                    <table className="w-full text-left">
                        <thead>

                            <tr className="bg-gray-50 text-gray-500 border-t border-b border-gray-300 text-sm h-[52px]">
                                <th className="px-4 py-2">
                                    <input type="checkbox" className="w-6 h-6 rounded-lg border-[#CFD3D4] bg-[#CFD3D4]" />
                                </th>
                                <th className="px-4 py-2">
                                    <div className="flex items-center">
                                        Order Name<CgSortAz />
                                    </div>
                                </th>
                                <th className="px-4 py-2">
                                    <div className="flex items-center">
                                        Order Type<CgSortAz />
                                    </div>
                                </th>
                                <th className="px-4 py-2">
                                    <div className="flex items-center">
                                        Unit Price<CgSortAz />
                                    </div>
                                </th>
                                <th className="px-4 py-2">
                                    <div className="flex items-center">
                                        Qty<CgSortAz />
                                    </div>
                                </th>
                                <th className="px-4 py-2">
                                    <div className="flex items-center">
                                        Discount<CgSortAz />
                                    </div>
                                </th>
                                <th className="px-4 py-2">
                                    <div className="flex items-center">
                                        Total Value<CgSortAz />
                                    </div>
                                </th>

                                <th className="px-4 py-2">
                                    <div className="flex items-center">
                                        Status<CgSortAz />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm">
                            {products.map(product => (
                                <tr key={product.id} className="h-12">
                                    <td className="px-4 py-2"><input type="checkbox" className="w-6 h-6 rounded-lg border-[#CFD3D4] bg-[#CFD3D4]" /></td>
                                    <td className="px-4 py-2">{product.orderDate}</td>
                                    <td className="px-4 py-2">{product.orderType}</td>
                                    <td className="px-4 py-2">{product.unitPrice}</td>
                                    <td className="px-4 py-2">{product.qty}</td>
                                    <td className="px-4 py-2">{product.discount}</td>
                                    <td className="px-4 py-2">{product.totalValue}</td>
                                    <td className="px-4 py-2">
                                        <span className={`h-[23px] p-1 gap-2 w-auto text-[#519C66] rounded-lg ${product.status === 'Completed' ? 'bg-[#32936F29]' : 'bg-[#FFF2E2]'}`}>
                                            {product.status}

                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>

    );
}

export default Purchases;
