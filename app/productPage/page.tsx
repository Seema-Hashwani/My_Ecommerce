'use client';

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import Menu from "@components/Menu";
import Navbar from "@components/Navbar";
import Services from "@components/Services";
import Footer from "@components/Footer";
import { IoIosStarOutline } from "react-icons/io";
import productImage from "@public/images/product.jpg";
import Bar from "@components/Bar";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: StaticImageData;
}

const initialProducts: Product[] = [
  { id: 1, name: "Product 1", description: "Description 1", price: "$10", image: productImage },
  { id: 2, name: "Product 2", description: "Description 2", price: "$20", image: productImage },
  { id: 3, name: "Product 3", description: "Description 3", price: "$30", image: productImage },
  { id: 4, name: "Product 4", description: "Description 4", price: "$40", image: productImage },
  { id: 1, name: "Product 5", description: "Description 1", price: "$10", image: productImage },
  { id: 2, name: "Product 6", description: "Description 2", price: "$20", image: productImage },
  { id: 3, name: "Product 7", description: "Description 3", price: "$30", image: productImage },
  { id: 4, name: "Product 8", description: "Description 4", price: "$40", image: productImage },
  { id: 3, name: "Product 3", description: "Description 3", price: "$30", image: productImage },
  { id: 4, name: "Product 4", description: "Description 4", price: "$40", image: productImage },
  // Add more products as needed
];

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start gap-y-4 px-24 bg-white">
      <Navbar />
      <Menu />
      <p className="font-bold text-4xl text-black">Product Category</p>

      <div className="flex flex-col w-full gap-y-4 p-4">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map(product => (
              <div
                key={product.id}
                className="flex flex-col items-center border border-black shadow-md p-4 text-black shadow-slate-500"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-48 h-48 object-cover mb-2"
                />
                <p className="font-bold text-lg">{product.name}</p>
                <p className="text-center">{product.description}</p>
                <div className="flex flex-row gap-x-1 my-2">
                  {[...Array(5)].map((_, i) => (
                    <IoIosStarOutline key={i} className="cursor-pointer" />
                  ))}
                </div>
                <p className="font-semibold text-red-900">{product.price}</p>
                <Link href={"/login"}><button className="bg-red-900 hover:bg-red-950 text-white p-2 font-bold mt-2">
                  Login to Shop
                </button></Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No products available</p>
        )}
      </div>

      <Services />
      <Footer />
      <Bar/>
    </main>
  );
}
