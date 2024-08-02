import React from "react";
import Image from "next/image";
import product from "@public/images/product.jpg";
import { IoIosStarOutline } from "react-icons/io";


export default function BestSelling(){
    return(
        <div className="flex flex-col h-auto w-screen justify-center items-center px-24 ">
            <p className="text-black text-4xl font-bold m-4">Featured Items</p>

            <div className="flex flex-row justify-between items-center text-black w-full">
                <div className="flex flex-col h-auto w-auto  gap-y-2 border border-black shadow-md p-2 shadow-slate-500">
                    <Image src={product} alt="product" className="w-72 h-72"/>
                    <p>Product name and description</p>
                    <div className="flex flex-row gap-x-1">
                    <IoIosStarOutline className="cursor-pointer"/>
                    <IoIosStarOutline className="cursor-pointer"/>
                    <IoIosStarOutline className="cursor-pointer"/>
                    <IoIosStarOutline className="cursor-pointer"/>
                    <IoIosStarOutline className="cursor-pointer"/>
                    </div>
                    <p className="font-semibold text-red-900">$Price</p>
                    <button className="bg-red-900 hover:bg-red-950 text-white p-2 font-bold">Login to Shop</button>
                </div>

                <div className="flex flex-col h-auto w-auto  gap-y-2 border border-black shadow-md p-2 shadow-slate-500">
                    <Image src={product} alt="product" className="w-72 h-72"/>
                    <p>Product name and description</p>
                    <div className="flex flex-row gap-x-1">
                    <IoIosStarOutline className="cursor-pointer"/>
                    <IoIosStarOutline className="cursor-pointer"/>
                    <IoIosStarOutline className="cursor-pointer"/>
                    <IoIosStarOutline className="cursor-pointer"/>
                    <IoIosStarOutline className="cursor-pointer"/>
                    </div>
                    <p className="font-semibold text-red-900">$Price</p>
                    <button className="bg-red-900 hover:bg-red-950 text-white p-2 font-bold">Login to Shop</button>
                </div>

                <div className="flex flex-col h-auto w-auto  gap-y-2 border border-black shadow-md p-2 shadow-slate-500">
                    <Image src={product} alt="product" className="w-72 h-72"/>
                    <p>Product name and description</p>
                    <div className="flex flex-row gap-x-1">
                    <IoIosStarOutline className="cursor-pointer"/>
                    <IoIosStarOutline className="cursor-pointer"/>
                    <IoIosStarOutline className="cursor-pointer"/>
                    <IoIosStarOutline className="cursor-pointer"/>
                    <IoIosStarOutline className="cursor-pointer"/>
                    </div>
                    <p className="font-semibold text-red-900">$Price</p>
                    <button className="bg-red-900 hover:bg-red-950 text-white p-2 font-bold">Login to Shop</button>
                </div>

                <div className="flex flex-col h-auto w-auto  gap-y-2 border border-black shadow-md p-2 shadow-slate-500">
                    <Image src={product} alt="product" className="w-72 h-72"/>
                    <p>Product name and description</p>
                    <div className="flex flex-row gap-x-1">
                    <IoIosStarOutline className="cursor-pointer"/>
                    <IoIosStarOutline className="cursor-pointer"/>
                    <IoIosStarOutline className="cursor-pointer"/>
                    <IoIosStarOutline className="cursor-pointer"/>
                    <IoIosStarOutline className="cursor-pointer"/>
                    </div>
                    <p className="font-semibold text-red-900">$Price</p>
                    <button className="bg-red-900 hover:bg-red-950 text-white p-2 font-bold">Login to Shop</button>
                </div>

            </div>
        </div>
    )
} 