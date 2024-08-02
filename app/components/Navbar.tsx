import React from "react";
import Image from "next/image";
import logo from '@public/images/logo.jpg';
import { LuUser2 } from "react-icons/lu";
import { CgShoppingCart } from "react-icons/cg";
import Link from "next/link";

var price=55;

export default function Navbar(){
    return(
        <nav className="flex flex-row h-20 w-screen justify-between items-center px-24">
            <Image src={logo} alt="logo" width={100}/>

            <div className="flex flex-row">
                <input type="search" placeholder="Search for products" className="w-[500px] h-12 text-black p-2 border focus:outline-none focus:border-red-900 focus:border-2 border-black"/>
                <button className="border border-black text-black w-20 hover:font-bold hover:text-red-900">Search</button>
            </div>
            

            <div className="flex flex-row gap-x-5">
                <button>
                <Link href={"/login"}><LuUser2 className="h-8 w-8 text-black hover:text-red-900"/></Link>
                </button>
                <p className="text-black text-xl">|</p>
                <button className="text-black flex justify-center items-center gap-x-2">
                <CgShoppingCart className="h-8 w-8" /> ${price}
                </button>

            </div>

        </nav>
    )
}