'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoIosStarOutline } from 'react-icons/io';
import productImage from './../../public/images/product.jpg'; // Placeholder for product images

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartItem extends Product {
  id: string;
  count: number;
}

export default function Featured() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const username = localStorage.getItem('username');
    setIsLoggedIn(!!username);

    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/featured-products');
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
  }, []);

  const handleButtonClick = (product: Product) => {
    if (isLoggedIn) {
      const newItem: CartItem = {
        ...product,
        id: product._id,
        count: 1,
      };

      let cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
      console.log('Current cart:', cart);

      const existingProductIndex = cart.findIndex((item) => item.id === newItem.id);
      console.log('Existing product index:', existingProductIndex);

      if (existingProductIndex !== -1) {
        cart[existingProductIndex].count += 1;
        console.log('Updated cart item count:', cart[existingProductIndex]);
      } else {
        cart.push(newItem);
        console.log('Added new item to cart:', newItem);
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Product added to cart!');
    } else {
      window.location.href = '/login';
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col h-auto w-screen justify-center items-center px-24">
      <p className="text-black text-4xl font-bold m-4">Best Selling Items</p>

      <div className="flex flex-row justify-between items-center text-black w-full">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="flex flex-col h-auto w-auto gap-y-2 border border-black shadow-md p-2 shadow-slate-500"
            >
              <Image
                src={product.image || productImage}
                alt={product.name}
                className="w-72 h-72"
                width={288}
                height={288}
              />
              <p>{product.name.trim()}</p>
              <p>{product.description}</p>
              <div className="flex flex-row gap-x-1">
                {[...Array(5)].map((_, i) => (
                  <IoIosStarOutline key={i} className="cursor-pointer" />
                ))}
              </div>
              <p className="font-semibold text-red-900">${product.price.toFixed(2)}</p>
              <button
                onClick={() => handleButtonClick(product)}
                className="bg-red-900 hover:bg-red-950 text-white p-2 font-bold"
              >
                {isLoggedIn ? 'Add to Cart' : 'Login to Shop'}
              </button>
            </div>
          ))
        ) : (
          <p>No featured products available</p>
        )}
      </div>
    </div>
  );
}
