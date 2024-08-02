import React from "react";
import Image from "next/image";
import { FaTruck } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { FaHeadphonesSimple } from "react-icons/fa6";

export default function Services(){
    return(
        <div className=" h-24 w-screen px-24">
            <div className="flex flex-row justify-between items-center py-7 border-y-2  border-black text-black">
            <div className="flex flex-row gap-x-3">
            <FaTruck className="text-red-900 w-16 h-16"/>
            <div className="flex flex-col justify-center gap-y-1">
                <p className="font-bold">RELIABLE DELIVERY</p>
                <p>ALL ORDERS SHIP SAME DAY</p>
            </div>
            </div>

            <div className="flex flex-row gap-x-3">
            <FaBox className="text-red-900 w-16 h-16"/>
            <div className="flex flex-col justify-center gap-y-1">
                <p className="font-bold">FREE SHIPPING</p>
                <p>MULTIPLE OFFERS ON ORDERS</p>
            </div>
            </div>

            <div className="flex flex-row gap-x-3">
            <FaHandshake className="text-red-900 w-16 h-16"/>
            <div className="flex flex-col justify-center gap-y-1">
                <p className="font-bold">LIFE TIME WARRANTY</p>
                <p>ON ALL PRODUCTS</p>
            </div>
            </div>

            <div className="flex flex-row gap-x-3">
            <FaHeadphonesSimple className="text-red-900 w-16 h-16"/>
            <div className="flex flex-col justify-center gap-y-1">
                <p className="font-bold">CUSTOMER SERVICE</p>
                <p>OUR CUSTOMERS COME FIRST</p>
            </div>
            </div>
            </div>
        </div>
    )
}