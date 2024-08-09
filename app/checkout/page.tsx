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

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [shippingAddress, setShippingAddress] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('cash_on_delivery');
  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = () => {
      const username = localStorage.getItem('username');
      setIsLoggedIn(!!username);
      if (!username) {
        router.push('/login'); // Redirect to login if not logged in
      }
    };

    const fetchCart = () => {
      if (isLoggedIn) {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
          const cartItems: CartItem[] = JSON.parse(cartData);
          setCart(cartItems);
          calculateTotal(cartItems);
        }
      }
    };

    checkLoginStatus();
    fetchCart();
  }, [isLoggedIn, router]);

  const calculateTotal = (items: CartItem[]) => {
    const totalAmount = items.reduce((sum, item) => sum + item.price * item.count, 0);
    setTotal(totalAmount);
  };

  const handlePlaceOrder = async () => {
    if (!shippingAddress) {
      alert('Please provide a shipping address.');
      return;
    }

    try {
      const response = await fetch('/api/orders/place', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cart,
          total,
          shippingAddress,
          paymentMethod,
        }),
      });

      const data = await response.json();
      if (data.success) {
        localStorage.removeItem('cart'); // Clear cart after successful order
        alert('Order placed successfully!');
        router.push('/'); // Redirect to home
      } else {
        console.error('Error placing order:', data.error);
        alert('Error placing order: ' + data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred');
    }
  };

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start gap-y-10 px-24 bg-gray-100 text-black">
      <Navbar />
      <Menu />
      <h1 className="text-4xl font-bold mt-5">Checkout</h1>

      {isLoggedIn ? (
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
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
                    <p><strong>Count:</strong> {item.count}</p>
                    <p><strong>Total:</strong> ${(item.price * item.count).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full mb-6">
            <h2 className="text-2xl font-semibold mb-2">Shipping Details</h2>
            <textarea
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              placeholder="Enter your shipping address here..."
              className="border border-gray-300 p-4 w-full h-32 rounded-md"
              required
            />
          </div>

          <div className="w-full mb-6">
            <h2 className="text-2xl font-semibold mb-2">Payment Method</h2>
            <div className="flex items-center">
              <input
                type="radio"
                id="cash_on_delivery"
                name="paymentMethod"
                value="cash_on_delivery"
                checked={paymentMethod === 'cash_on_delivery'}
                onChange={() => setPaymentMethod('cash_on_delivery')}
                className="mr-2"
              />
              <label htmlFor="cash_on_delivery" className="text-lg">Cash on Delivery</label>
            </div>
          </div>

          <div className="w-full text-right mb-6">
            <h2 className="text-2xl font-semibold">Total: ${total.toFixed(2)}</h2>
            <button
              onClick={handlePlaceOrder}
              className="bg-green-500 hover:bg-green-600 text-white p-2 mt-4 rounded"
            >
              Place Order
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center">Login to view checkout</p>
      )}

      <Footer />
    </main>
  );
}
