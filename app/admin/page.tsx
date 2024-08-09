import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start gap-y-10 px-24 bg-white">
     <p className="text-black text-4xl font-bold underline mt-5">ADMIN PAGE</p>
     <div className="flex flex-col w-auto h-auto justify-start items-center border border-gray-300 gap-y-5 shadow-sm shadow-gray-400 p-10">
        <p className="text-black text-2xl font-bold">Admin Options</p>
        <div className="grid grid-cols-3 w-full h-auto">
            <Link href={'/admin/users'}><button className="bg-red-800 mx-8 text-white hover:bg-red-900 p-2 w-28 rounded-md">USERS</button></Link>
            <Link href={'/admin/products'}><button className="bg-red-800 mx-8 text-white hover:bg-red-900 p-2 w-28 rounded-md">PRODUCTS</button></Link>
            <Link href={'/admin/orders'}><button className="bg-red-800 mx-8 text-white hover:bg-red-900 p-2 w-28 rounded-md">ORDERS</button></Link>
        
        </div>
     </div>
    </main>
  );
}
