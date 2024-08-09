'use client';

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import logo from './../../public/images/logo.jpg';
import { LuUser2 } from "react-icons/lu";
import { CgShoppingCart } from "react-icons/cg";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [username, setUsername] = useState<string | null>(null);
  const [showLogout, setShowLogout] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Retrieve username from local storage only on the client side
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername); // Directly set the retrieved username
  }, []);

  useEffect(() => {
    // Close the dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
        userRef.current && !userRef.current.contains(event.target as Node)
      ) {
        setShowLogout(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername(null); // Update state to reflect logout
    setShowLogout(false); // Hide logout dropdown
    
  };

  const handleUserClick = () => {
    if (username) {
      setShowLogout(!showLogout); // Toggle the visibility of the logout menu
    } else {
      router.push('/login'); // Redirect to login page
    }
  };

  return (
    <nav className="flex flex-row h-20 w-screen justify-between items-center px-24 relative">
      <Image src={logo} alt="logo" width={100} />

      <div className="flex flex-row">
        <input
          type="search"
          placeholder="Search for products"
          className="w-[500px] h-12 text-black p-2 border focus:outline-none focus:border-red-900 focus:border-2 border-black"
        />
        <button className="border border-black text-black w-20 hover:font-bold hover:text-red-900">Search</button>
      </div>

      <div className="flex flex-row gap-x-5 items-center relative">
        <div ref={userRef} className="relative">
          <LuUser2
            className="h-8 w-8 text-black hover:text-red-900 cursor-pointer"
            onClick={handleUserClick}
          />
          {username && showLogout && (
            <div ref={dropdownRef} className="absolute right-0 top-full mt-2 bg-white border border-gray-300 shadow-lg p-2 rounded z-20 opacity-90">
              <button onClick={handleLogout} className="text-red-600 hover:underline">Logout</button>
            </div>
          )}
        </div>
        {username && <p className="text-black text-lg">{username}</p>}
        <p className="text-black text-xl">|</p>
        <div className="relative">
          <Link href={'/cart'}>
            <button className="text-black flex justify-center items-center gap-x-2">
              <CgShoppingCart className="h-8 w-8 hover:text-red-800" />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
