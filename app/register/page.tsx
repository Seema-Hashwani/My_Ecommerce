import Image from "next/image";
import React from "react";
import Menu from "@components/Menu";
import Navbar from "@components/Navbar";
import Services from "@components/Services";
import Footer from "@components/Footer";
import Bar from "@components/Bar";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start gap-y-4 px-4 bg-white">
      <Navbar />
      <Menu />

      <div className="flex flex-row justify-center w-full max-w-screen-lg h-auto">
        <div className="flex w-full md:w-1/2 flex-col p-10 justify-center items-start border-r-2 gap-y-2 border-gray-300">
          <p className="text-xl font-bold text-black mb-6">REGISTER</p>
          <p className="text-gray-700">Username or email address</p>
          <input
            type="text"
            className="text-black border border-red-800 rounded-md focus:border-red-900 focus:outline-none focus:border-2 p-2 w-full mb-2"
          />
          <p className="text-gray-700">Password</p>
          <input
            type="password"
            className="text-black border border-red-800 rounded-md focus:border-red-900 focus:outline-none focus:border-2 p-2 w-full mb-4"
          />
          <p className="text-gray-700">First Name</p>
          <input
            type="text"
            className="text-black border border-red-800 rounded-md focus:border-red-900 focus:outline-none focus:border-2 p-2 w-full mb-2"
          />
           <p className="text-gray-700">Last Name</p>
          <input
            type="text"
            className="text-black border border-red-800 rounded-md focus:border-red-900 focus:outline-none focus:border-2 p-2 w-full mb-2"
          />
           <p className="text-gray-700">Company Name</p>
          <input
            type="text"
            className="text-black border border-red-800 rounded-md focus:border-red-900 focus:outline-none focus:border-2 p-2 w-full mb-2"
          />
           <p className="text-gray-700">Street Address</p>
          <input
            type="text"
            className="text-black border border-red-800 rounded-md focus:border-red-900 focus:outline-none focus:border-2 p-2 w-full mb-2"
          />
           <p className="text-gray-700">Town/City</p>
          <input
            type="text"
            className="text-black border border-red-800 rounded-md focus:border-red-900 focus:outline-none focus:border-2 p-2 w-full mb-2"
          />
           <p className="text-gray-700">Postcode/Zip</p>
          <input
            type="text"
            className="text-black border border-red-800 rounded-md focus:border-red-900 focus:outline-none focus:border-2 p-2 w-full mb-2"
          />
           <p className="text-gray-700">Phone Number</p>
          <input
            type="text"
            className="text-black border border-red-800 rounded-md focus:border-red-900 focus:outline-none focus:border-2 p-2 w-full mb-2"
          />
          <p className="text-black">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>


          <button className="bg-red-900 text-white p-2 w-full rounded-md">Register</button>
        </div>

        <div className="flex w-full md:w-1/2 flex-col p-10 justify-start items-center gap-y-2">
          <p className="text-xl font-bold text-black mb-8">LOGIN</p>
          <p className="text-black text-center">
            Registering for this site allows you to access your order status and history. Just fill in the fields below, and we will get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.
          </p>
          <button className="bg-red-900 text-white p-2 w-28 rounded-md mt-2">Login</button>
        </div>
      </div>

      <Services />
      <Footer />
      <Bar/>
    </main>
  );
}
