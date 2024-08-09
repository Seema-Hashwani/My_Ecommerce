'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

// Define the Product type with _id
interface Product {
  _id: number;  // Make sure this matches your MongoDB schema
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Fetch products from the API
async function fetchProducts(): Promise<Product[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error('API URL is not defined in environment variables.');
  }

  console.log('API URL:', apiUrl); // Debugging line

  const response = await fetch(`${apiUrl}/api/products`);
  const data = await response.json();

  if (!data.success) {
    throw new Error(data.error || 'Failed to fetch products');
  }

  return data.products;
}

// Delete a product from the database
async function deleteProduct(productId: number) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error('API URL is not defined in environment variables.');
  }

  const response = await fetch(`${apiUrl}/api/products/${productId}`, {
    method: 'DELETE',
  });

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.error || 'Failed to delete product');
  }

  return data.success;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]); // Set the type for products state

  useEffect(() => {
    // Fetch products on component mount
    fetchProducts()
      .then(products => setProducts(products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleDelete = async (productId: number) => {
    try {
      const success = await deleteProduct(productId);
      if (success) {
        // Update the local state to remove the deleted product
        setProducts(products.filter(product => product._id !== productId));
        alert('Product deleted successfully.');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete the product.');
    }
  };

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start gap-y-10 px-24 bg-white text-black">
      <p className="text-black text-4xl font-bold underline mt-5">PRODUCTS PAGE</p>
      <Link href={'/admin/products/new'}>
        <button className="bg-red-800 hover:bg-red-900 text-white w-40 p-2 rounded-md">Add Product</button>
      </Link>

      <div className="mt-8 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="p-4 border border-gray-300 rounded flex flex-col items-center">
              <Image src={product.image} alt={product.name} width={200} height={200} />
              <h2 className="text-xl font-bold mt-2">{product.name}</h2>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Quantity: {product.quantity}</p>
              <div className="mt-4 w-full flex justify-between gap-4">
                <Link href={`/admin/products/edit/${product._id}`}>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white w-24 p-2 rounded">
                    Edit
                  </button>
                </Link>
                <button 
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-600 hover:bg-red-700 text-white w-24 p-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </main>
  );
}
