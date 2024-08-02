import Image from "next/image";
import React from "react";
import Navbar from "./components/Navbar";
import Menu from "@components/Menu";
import Carousel from "@components/Carousel";
import Banner from "@components/Banner";
import Featured from "@components/Featured";
import Services from "@components/Services";
import Footer from "@components/Footer";
import BestSelling from "@components/BestSelling";


export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start gap-y-4 bg-white">
      <Navbar/>
      <Menu/>
      <Carousel/>
      <Banner/>
      <div className="flex flex-col h-auto items-center justify-start gap-y-10">
      <Featured/>
      <Banner/>
      <BestSelling/>
      <Services/>
      <Footer/>
      </div>
    </main>
  );
}
