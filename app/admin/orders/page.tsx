import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Orders() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start gap-y-10 px-24 bg-white">
     <p className="text-black text-4xl font-bold underline mt-5">ORDERS PAGE</p>
     <Link href={'/'}><button className="bg-red-800 hover:bg-red-900 text-white">Add Order</button></Link>
    </main>
  );
}
