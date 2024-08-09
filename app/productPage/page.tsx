'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoIosStarOutline } from 'react-icons/io';
import Menu from './../components/Menu';
import Navbar from './../components/Navbar';
import Services from './../components/Services';
import Footer from './../components/Footer';
import Bar from './../components/Bar';
import Link from 'next/link';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number; // Changed to number
  image: string;
}

interface CartItem extends Product {
  id: string;
  count: number;
}

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        if (data.success) {
          setProducts(data.products);
        } else {
          console.error('Failed to fetch products:', data.error);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    // Check if user is logged in
    const username = localStorage.getItem('username');
    setIsLoggedIn(!!username);
  }, []);

  const handleButtonClick = (product: Product) => {
    if (isLoggedIn) {
      const newItem: CartItem = {
        ...product,
        id: product._id,
        count: 1,
      };

      let cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
      const existingProductIndex = cart.findIndex((item) => item.id === newItem.id);

      if (existingProductIndex !== -1) {
        cart[existingProductIndex].count += 1;
      } else {
        cart.push(newItem);
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Product added to cart!');
    } else {
      window.location.href = '/login';
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start gap-y-4 px-24 bg-white">
      <Navbar />
      <Menu />
      <p className="font-bold text-4xl text-black">Product Category</p>

      <div className="flex flex-col w-full gap-y-4 p-4">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product._id}
                className="flex flex-col items-center border border-black shadow-md p-4 text-black shadow-slate-500"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-48 h-48 object-cover mb-2"
                  width={192}
                  height={192}
                />
                <p className="font-bold text-lg">{product.name}</p>
                <p className="text-center">{product.description}</p>
                <div className="flex flex-row gap-x-1 my-2">
                  {[...Array(5)].map((_, i) => (
                    <IoIosStarOutline key={i} className="cursor-pointer" />
                  ))}
                </div>
                <p className="font-semibold text-red-900">${product.price.toFixed(2)}</p>
                <button
                  onClick={() => handleButtonClick(product)}
                  className="bg-red-900 hover:bg-red-950 text-white p-2 font-bold mt-2"
                >
                  {isLoggedIn ? 'Add to Cart' : 'Login to Shop'}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No products available</p>
        )}
      </div>

      <Services />
      <Footer />
      <Bar />
    </main>
  );
}
