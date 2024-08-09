'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Image from 'next/image';
import placeholderImage from './../../public/images/product.jpg'; 

interface CartItem {
  id: string;
  name: string;
  price: number;
  count: number;
  image: string;
  quantity: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = () => {
      const username = localStorage.getItem('username');
      setIsLoggedIn(!!username);
    };

    checkLoginStatus();

    const fetchCart = () => {
      if (isLoggedIn) {
        const cartData = localStorage.getItem('cart');
        console.log('Fetched cart data:', cartData);
        if (cartData) {
          const cartItems: CartItem[] = JSON.parse(cartData);
          console.log('Parsed cart items:', cartItems);
          setCart(cartItems);
          calculateTotal(cartItems);
        }
      }
    };

    fetchCart();
  }, [isLoggedIn]);

  const calculateTotal = (items: CartItem[]) => {
    const totalAmount = items.reduce((sum, item) => sum + item.price * item.count, 0);
    setTotal(totalAmount);
  };

  const handleCountChange = (id: string, delta: number) => {
    const updatedCart = cart.map(item =>
      item.id === id
        ? {
            ...item,
            count: Math.min(Math.max(item.count + delta, 1), item.quantity)
          }
        : item
    );

    console.log('Updated cart on count change:', updatedCart);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const handleRemove = (id: string) => {
    const updatedCart = cart.filter(item => item.id !== id);
    console.log('Updated cart after removal:', updatedCart);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start gap-y-10 px-24 bg-gray-100 text-black">
      <Navbar />
      <Menu />
      <h1 className="text-4xl font-bold mt-5">Your Cart</h1>

      <div className="w-full">
        {isLoggedIn ? (
          cart.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cart.map(item => (
                <div key={item.id} className="border border-gray-300 shadow-md p-4 rounded bg-white">
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image || placeholderImage}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="w-24 h-24 object-cover"
                    />
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                      <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
                      <p><strong>Count:</strong></p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleCountChange(item.id, -1)}
                          className="bg-gray-300 hover:bg-gray-400 text-black p-1 rounded"
                        >
                          -
                        </button>
                        <span>{item.count}</span>
                        <button
                          onClick={() => handleCountChange(item.id, 1)}
                          className="bg-gray-300 hover:bg-gray-400 text-black p-1 rounded"
                        >
                          +
                        </button>
                      </div>
                      <p><strong>Total:</strong> ${(item.price * item.count).toFixed(2)}</p>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 mt-4 rounded"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Your cart is empty</p>
          )
        ) : (
          <p className="text-center">Login to view cart</p>
        )}
      </div>

      {isLoggedIn && (
        <div className="w-full text-right">
          <h2 className="text-2xl font-semibold">Total: ${total.toFixed(2)}</h2>
          <button
            onClick={handleCheckout}
            className="bg-green-500 hover:bg-green-600 text-white p-2 mt-4 rounded"
          >
            Proceed to Checkout
          </button>
        </div>
      )}

      <Footer />
    </main>
  );
}
