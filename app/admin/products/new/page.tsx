// app/admin/products/new/page.tsx

'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function New() {
  const router = useRouter();

  const [product, setProduct] = useState({
    name: '',
    price: 0,
    image: '',
    quantity: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === 'price' || name === 'quantity'
        ? value === '' ? 0 : parseFloat(value) // Handle empty values and NaN
        : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate input values
    if (isNaN(product.price) || isNaN(product.quantity) || product.price < 0 || product.quantity < 0) {
      alert('Please enter valid non-negative numbers for price and quantity.');
      return;
    }
    
    try {
      const response = await fetch('/api/products/new', {  // Ensure the URL matches your route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
  
      const data = await response.json();
      if (data.success) {
        alert('Product added successfully!');
        router.push('/admin/products');
      } else {
        console.error('Error adding product:', data.error);
        alert('Error adding product: ' + data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred');
    }
  };

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start gap-y-10 px-24 bg-white">
      <p className="text-black text-4xl font-bold underline mt-5">NEW PRODUCT PAGE</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 w-full max-w-md">
        <label className="flex flex-col text-black">
          Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded"
            required
          />
        </label>
        <label className="flex flex-col text-black">
          Price:
          <input
            type="number"
            name="price"
            value={product.price || ''}  // Ensure empty value for price is handled
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded"
            step="0.01"
            required
          />
        </label>
        <label className="flex flex-col text-black">
          Image URL:
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded"
            required
          />
        </label>
        <label className="flex flex-col text-black">
          Quantity:
          <input
            type="number"
            name="quantity"
            value={product.quantity || ''}  // Ensure empty value for quantity is handled
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded"
            required
          />
        </label>
        <button type="submit" className="mt-4 p-2 bg-red-800 hover:bg-red-900 text-white rounded">
          Add Product
        </button>
      </form>
    </main>
  );
}
