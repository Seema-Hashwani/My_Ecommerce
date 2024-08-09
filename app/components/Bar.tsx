import React from "react";
import Image from "next/image";
import visa from './../../public/images/visa.png';
import mastercard from "./../../public/images/mastercard.jpeg";
import paypal from "./../../public/images/paypal.jpeg";
import { FaCopyright } from "react-icons/fa";


export default function Bar(){
    return(
        <div className="flex flex-row h-20 w-screen justify-between items-center px-24 border-t border-gray-300">
           <p className="text-gray-500 items-center flex flex-row">Frontend <FaCopyright className="m-2"/> 2024 CREATED BY Seema Hashwani</p>

           <div className="flex flex-row gap-x-3">
            <Image src={visa} alt="visa" className="h-5 w-10"/>
            <Image src={mastercard} alt="mastercard" className="h-5 w-10"/>
            <Image src={paypal} alt="paypal" className="h-5 w-10"/>
            </div>
        </div>
    )
}  