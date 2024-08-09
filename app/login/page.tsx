'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const username = localStorage.getItem('username');
      setIsLoggedIn(!!username);
      if (username) {
        // Redirect to home if already logged in
        router.push('/');
      }
    };

    checkLoginStatus();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.success) {
        localStorage.setItem('username', data.username); // Store username
        alert('Login successful!');
        router.push('/'); // Redirect to home
      } else {
        console.error('Error logging in:', data.error);
        alert('Error logging in: ' + data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred');
    }
  };

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start gap-y-4 px-4 bg-white">
      <Navbar />
      <div className="flex flex-row justify-center w-full max-w-screen-lg h-96">
        {isLoggedIn ? (
          <div className="flex w-full flex-col p-10 justify-center items-center border-gray-300">
            <p className="text-xl font-bold text-black mb-6">You are already logged in</p>
          </div>
        ) : (
          <>
            <div className="flex w-full md:w-1/2 flex-col p-10 justify-center items-start border-r-2 gap-y-2 border-gray-300">
              <p className="text-xl font-bold text-black mb-6">LOGIN</p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 w-full">
                <label className="text-gray-700">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-black border border-red-800 rounded-md focus:border-red-900 focus:outline-none focus:border-2 p-2 w-full mb-2"
                  required
                />
                <label className="text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-black border border-red-800 rounded-md focus:border-red-900 focus:outline-none focus:border-2 p-2 w-full mb-4"
                  required
                />
                <button type="submit" className="bg-red-900 text-white p-2 w-full rounded-md hover:bg-red-950">
                  Login
                </button>
                <div className="text-black w-full flex flex-row justify-between items-center">
                  <label className="cursor-pointer">
                    <input type="checkbox" /> Remember Me
                  </label>
                  <button className="text-red-800 hover:text-red-600">Lost your password?</button>
                </div>
              </form>
            </div>

            <div className="flex w-full md:w-1/2 flex-col p-10 justify-start items-center gap-y-2">
              <p className="text-xl font-bold text-black mb-6">REGISTER</p>
              <p className="text-black text-center">
                Registering for this site allows you to access your order status and history. Just fill in the fields below, and we will get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.
              </p>
              <Link href="/register">
                <button className="bg-red-900 text-white p-2 w-28 rounded-md mt-3 hover:bg-red-950">Register</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
