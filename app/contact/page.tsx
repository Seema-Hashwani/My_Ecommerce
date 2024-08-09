import Image from "next/image";
import React from "react";
import Menu from "./../components/Menu";
import Navbar from "./../components/Navbar";
import Services from "./../components/Services";
import Footer from "./../components/Footer";
import map from '@public/images/map.jpg';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaBlenderPhone } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";


import Link from "next/link";
import Bar from "./../components/Bar";

export default function ContactPage() {
    return (
        <main className="flex min-h-screen w-screen flex-col items-center justify-start gap-y-4 px-4 bg-white">
            <Navbar />
            <Menu />

            <div className="flex flex-col px-24 w-auto gap-y-7">
                <div className="h-96 w-auto">
                    <Image src={map} alt="map" className="h-96 w-[1400px] rounded-md relative" />
                    <button className="flex flex-col bg-white hover:bg-gray-300 text-gray-800 hover:text-black absolute p-2 rounded-sm right-24 top-[450px]"><FaPlus />
                    </button>
                    <button className="flex flex-col bg-white hover:bg-gray-300 text-gray-800 hover:text-black absolute p-2 rounded-sm right-24 top-[480px]"><FaMinus />
                    </button>
                </div>

                <div className="flex flex-row w-auto h-auto">

                    <div className="flex flex-col gap-y-4 w-3/5 h-auto">
                        <p className="text-black font-bold text-3xl mb-2">Get In Touch</p>
                        <div className="flex flex-row gap-x-2 justify-between">
                            <input type="text" placeholder="First Name" className="text-black border rounded-md border-gray-500 focus:border-black p-2 w-96" />
                            <input type="text" placeholder="First Name" className="text-black border rounded-md border-gray-500 focus:border-black p-2 w-96" />
                        </div>
                        <input type="text" placeholder="Email Address" className="text-black border rounded-md border-gray-500 focus:border-black p-2 w-full" />
                        <input type="text" placeholder="Message" className="text-black border rounded-md border-gray-500 focus:border-black p-2 w-full h-40" />
                        <button className="p-2 bg-gray-300 rounded-md text-black hover:bg-gray-400 font-bold w-24">Send</button>
                    </div>
                    <div className="w-2/5 pl-10 gap-y-4 h-auto flex flex-col justify-start items-start">
                    <p className="text-3xl text-black font-bold mb-2">Need A Help?</p>
                    <p className="flex flex-row justify-start items-center text-gray-600 gap-x-5"><FaPhone/>+92-xxx-xxxxxxx</p>
                    <p className="flex flex-row justify-start items-center text-gray-600 gap-x-5"><FaBlenderPhone/>+92-xxx-xxxxxxx</p>
                    <p className="flex flex-row justify-start items-center text-gray-600 gap-x-5"><FaEnvelope/>sales@xyz.com</p>
                </div>
                </div>
            </div>
            <Services />
            <Footer />
            <Bar/>
        </main>
    );
}
