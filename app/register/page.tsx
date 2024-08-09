// app/register/page.tsx

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './../components/Navbar';
import Menu from './../components/Menu';
import Services from './../components/Services';
import Footer from './../components/Footer';
import Bar from './../components/Bar';

export default function RegisterPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    companyName: '',
    streetAddress: '',
    townCity: '',
    postcodeZip: '',
    phoneNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate input
    const { username, password, email, firstName, lastName, streetAddress, townCity, postcodeZip, phoneNumber } = user;
    if (!username || !password || !email || !firstName || !lastName || !streetAddress || !townCity || !postcodeZip || !phoneNumber) {
      alert('All required fields must be filled out.');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format.');
      return;
    }

    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (data.success) {
        alert('Registration successful!');
        router.push('/login'); // Redirect to login or another page
      } else {
        console.error('Error registering user:', data.error);
        alert('Error registering user: ' + data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred');
    }
  };

  const handleLoginClick = () => {
    router.push('/login'); // Navigate to the login page
  };

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start gap-y-4 px-4 bg-white">
      <Navbar />
      <Menu />

      <div className="flex flex-row justify-center w-full max-w-screen-lg h-auto">
        <div className="flex w-full md:w-1/2 flex-col p-10 justify-center items-start border-r-2 gap-y-2 border-gray-300">
          <p className="text-xl font-bold text-black mb-6">REGISTER</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 w-full">
            <label className="flex flex-col text-gray-700">
              Email address:
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="text-black border border-red-800 rounded-md focus:border-red-900 focus:outline-none focus:border-2 p-2 w-full mb-2"
                required
              />
            </label>
            <label className="flex flex-col text-gray-700">
              Username:
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                className="text-black border border-red-800 rounded-md focus:border-red-900 focus:outline-none focus:border-2 p-2 w-full mb-2"
                required
              />
            </label>
            <label className="flex flex-col text-gray-700">
              Password:
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                className="text-black border border-red-800 rounded-md focus:border-red-900 focus:outline-none focus:border-2 p-2 w-full mb-4"
                required
              />
            </label>
            <label className="flex flex-col text-gray-700">
              First Name:
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                className="text-black border border-red-800 rounded-md focus:border-red-900 focus:outline-none focus:border-2 p-2 w-full mb-2"
                required
              />
            </label>
            <label className="flex flex-col text-gray-700">
              Last Name:
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                className="text-black border border-red-800 rounded-md focus:border-red-900 focus:outline-none focus:border-2 p-2 w-full mb-2"
                required
              />
            </label>
            <label className="flex flex-col text-gray-700">
              Company Name:
              <input
                type="text"
                name="companyName"
                value={user.companyName}
                onChange={handleChange}
                className="text-black border border-red-800 rounded-md focus:border-red-900 focus:outline-none focus:border-2 p-2 w-full mb-2"
              />
            </label>
            <label className="flex flex-col text-gray-700">
              Street Address:
              <input
                type="text"
                name="streetAddress"
                value={user.streetAddress}
                onChange={handleChange}
                className="text-black border border-red-800 rounded-md focus:border-red-900 focus:outline-none focus:border-2 p-2 w-full mb-2"
                required
              />
            </label>
            <label className="flex flex-col text-gray-700">
              Town/City:
              <input
                type="text"
                name="townCity"
                value={user.townCity}
                onChange={handleChange}
                className="text-black border border-red-800 rounded-md focus:border-red-900 focus:outline-none focus:border-2 p-2 w-full mb-2"
                required
              />
            </label>
            <label className="flex flex-col text-gray-700">
              Postcode/Zip:
              <input
                type="text"
                name="postcodeZip"
                value={user.postcodeZip}
                onChange={handleChange}
                className="text-black border border-red-800 rounded-md focus:border-red-900 focus:outline-none focus:border-2 p-2 w-full mb-2"
                required
              />
            </label>
            <label className="flex flex-col text-gray-700">
              Phone Number:
              <input
                type="text"
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={handleChange}
                className="text-black border border-red-800 rounded-md focus:border-red-900 focus:outline-none focus:border-2 p-2 w-full mb-2"
                required
              />
            </label>
            <button type="submit" className="bg-red-900 text-white p-2 w-full rounded-md hover:bg-red-950">
              Register
            </button>
          </form>
        </div>

        <div className="flex w-full md:w-1/2 flex-col p-10 justify-start items-center gap-y-2">
          <p className="text-xl font-bold text-black mb-8">LOGIN</p>
          <p className="text-black text-center">
            Registering for this site allows you to access your order status and history. Just fill in the fields below, and we will get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.
          </p>
          <button onClick={handleLoginClick} className="bg-red-900 text-white p-2 w-28 rounded-md mt-6 hover:bg-red-950">
            Log in
          </button>
        </div>
      </div>

      <Services />
      <Footer />
      <Bar />
    </main>
  );
}
