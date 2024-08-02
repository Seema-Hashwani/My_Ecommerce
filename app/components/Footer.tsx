import React from "react";
import Image from "next/image";
import logo from "@public/images/logo.jpg";
import { IoIosSend, IoIosPhonePortrait } from "react-icons/io";
import { BsEnvelope } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


export default function Footer() {
    return (
        <div className="flex flex-row h-auto py-5 w-screen justify-between items-start px-24">
            <div className="flex flex-col justify-start gap-y-3 w-1/4 h-96 p-6">
                <Image src={logo} alt="logo" className="w-80 mb-3" />
                <div className="flex flex-row items-center gap-x-2">
                    <IoIosSend className="text-red-900 w-5 h-5" />
                    <p className="text-slate-700">5755 Bonhomme Rd STE 400</p>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                    <IoIosPhonePortrait className="text-red-900 w-5 h-5" />
                    <p className="text-slate-700">Phone: +92 332 6789000</p>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                    <BsEnvelope className="text-red-900 w-5 h-5" />
                    <p className="text-slate-700">Email: help@digitalcube.pk</p>
                </div>
            </div>

            <div className="w-2/4 h-96 py-5">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-extrabold text-black uppercase tracking-wider w-1/3">Information</th>
                            <th className="px-6 py-3 text-left text-xs font-extrabold text-black uppercase tracking-wider w-1/3">Quick Links</th>
                            <th className="px-6 py-3 text-left text-xs font-extrabold text-black uppercase tracking-wider w-1/3">Categories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700"><p className="cursor-pointer hover:text-red-900">About Us</p></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"><p className="cursor-pointer hover:text-red-900">My Account</p></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"><p className="cursor-pointer hover:text-red-900">Apple</p></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700"><p className="cursor-pointer hover:text-red-900">Contact Us</p></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"><p className="cursor-pointer hover:text-red-900">Orders</p></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"><p className="cursor-pointer hover:text-red-900">Samsung</p></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700"><p className="cursor-pointer hover:text-red-900">Privacy Policy</p></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"><p className="cursor-pointer hover:text-red-900">Account Details</p></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"><p className="cursor-pointer hover:text-red-900">LG</p></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700"><p className="cursor-pointer hover:text-red-900">Terms & Conditions</p></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"><p className="cursor-pointer hover:text-red-900">Order Tracking</p></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"><p className="cursor-pointer hover:text-red-900">Motorola</p></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700"><p className="cursor-pointer hover:text-red-900">Shipping and Returns</p></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"><p className="cursor-pointer hover:text-red-900">Cart</p></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"><p className="cursor-pointer hover:text-red-900">Accessories & Tools</p></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700"><p className="cursor-pointer hover:text-red-900">LCD Buyback</p></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"></td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className="w-1/4 h-96 flex flex-col py-5 gap-y-3 justify-center">
            <p className="text-black font-bold">SUBSCRIBE TO NEWSLETTER</p>
            <input placeholder="Your Email Address" className="border-2 border-red-900 p-2 rounded-md focus:border-4 focus:outline-none text-black"></input>
            <button className="bg-red-800 hover:bg-red-950 text-white py-2 w-36 rounded-md font-bold"> Subscribe</button>
            <p className="text-black font-bold">Social Links:</p>

            <div className="flex flex-row justify-start gap-x-4 items-center">
            <FaFacebookSquare className="w-8 h-8 text-slate-700 cursor-pointer"/>
            <FaInstagramSquare className="w-8 h-8 text-slate-700 cursor-pointer"/>
            <FaTwitterSquare className="w-8 h-8 text-slate-700 cursor-pointer"/>

            </div>

            </div>
        </div>
    );
}
