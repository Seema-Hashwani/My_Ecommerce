import React from "react";
import Image from "next/image";
import banner1 from "@public/images/banner1.jpg";
import banner2 from "@public/images/banner2.jpg";


export default function Banner(){
    return(
        <div className="flex flex-row h-40 w-screen justify-between items-center px-24 ">
            <Image src={banner1} alt="banner 1" className="h-40 w-[670px]"/>
            <Image src={banner2} alt="banner 2" className="h-40 w-[670px]"/>

        </div>
    )
}