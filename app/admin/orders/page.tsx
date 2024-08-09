'use client';

import React, { useEffect, useState } from 'react';

interface CartItem {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  count: number;
}

interface Order {
  _id: string;
  cart?: CartItem[];
  total: number;
  shippingAddress?: string;
  paymentMethod?: string;
  createdAt?: string;
}

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders');
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        console.log('Data received from API:', data); // Debug the data
        setOrders(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error('Error fetching orders:', error.message);
          alert('Error fetching orders: ' + error.message);
        } else {
          console.error('Unexpected error:', error);
          alert('Error fetching orders: An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleComplete = async (orderId: string) => {
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete order');
      }
      // Remove the deleted order from the state
      setOrders(orders.filter(order => order._id !== orderId));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error deleting order:', error.message);
        alert('Error deleting order: ' + error.message);
      } else {
        console.error('Unexpected error:', error);
        alert('Error deleting order: An unexpected error occurred');
      }
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start gap-y-10 px-24 bg-white">
      <p className="text-black text-4xl font-bold underline mt-5">ORDERS PAGE</p>
      {orders.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {orders.map((order) => (
            <div key={order._id} className="border border-gray-300 shadow-lg p-4 rounded bg-white text-black">
              <p><strong>Order ID:</strong> {order._id}</p>
              <p><strong>Products:</strong></p>
              <ul>
                {order.cart && Array.isArray(order.cart) && order.cart.length > 0 ? (
                  order.cart.map((item) => (
                    <li key={item._id}>
                      {item.name}: {item.count}
                    </li>
                  ))
                ) : (
                  <p>No products available.</p>
                )}
              </ul>
              <p><strong>Total Amount:</strong> ${order.total !== undefined ? order.total.toFixed(2) : 'N/A'}</p>
              {/* Add the completed button */}
              <button 
                onClick={() => handleComplete(order._id)}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Mark as Completed
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No orders found.</p>
      )}
    </main>
  );
}
