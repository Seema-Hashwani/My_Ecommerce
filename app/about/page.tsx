'use client';

import Image from "next/image";
import React, { useState } from "react";
import Menu from "./../components/Menu";
import Navbar from "./../components/Navbar";
import Services from "./../components/Services";
import Footer from "./../components/Footer";
import Link from "next/link";
import About from '@public/images/About-Us.jpg';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import reviews from '@public/images/reviews.jpg';
import Bar from "./../components/Bar";



export default function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [transitionClass, setTransitionClass] = useState('opacity-100'); // Control transition effect
    const images = [reviews, reviews, reviews, reviews]; // Updated with new images
reviews
    const goToPrevious = () => {
        setTransitionClass('opacity-0'); // Disable transition
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
            setTransitionClass('opacity-100'); // Enable transition
        }, 300); // Match this duration with the transition duration
    };

    const goToNext = () => {
        setTransitionClass('opacity-0'); // Disable transition
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
            setTransitionClass('opacity-100'); // Enable transition
        }, 300); // Match this duration with the transition duration
    };

  
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start gap-y-4 px-4 bg-white">
      <Navbar />
      <Menu />

      <div className="flex flex-col w-screen h-auto px-24 py-5 gap-y-14">
        <div className="flex flex-row w-auto h-auto">
            <div className="w-1/2 flex flex-col gap-y-2 justify-center items-start">
            <p className="text-black text-3xl font-bold">Get to Know Cell Parts Hub</p>
            <p className="text-black w-3/4">Cell Parts Hub is a reputable and reliable supplier of high-quality cell phone parts and accessories. With a mission to provide the best customer experience possible, the brand offers a wide range of products that cater to various phone models and brands. They are committed to ensuring that their customers receive the best service possible by providing fast shipping, competitive prices, and excellent customer service. With a dedicated team of experts, Cell Parts Hub is a trusted brand that guarantees to deliver exceptional quality products to its customers. Whether you need a new screen, battery, charger, or any other phone accessory, Cell Parts Hub is the go-to brand that you can count on. </p>
            </div>
            <Image src={About} alt="about image" className="w-1/2"/>
        </div>

        <div className="flex flex-row w-auto h-auto ">
        <div className="relative flex flex-col h-72 w-1/2 items-center justify-center">
            <div className="justify-center relative w-full h-full overflow-hidden">
                <div
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${transitionClass}`}
                >
                    <Image
                        src={images[currentImageIndex]}
                        alt={`slider ${currentImageIndex + 1}`}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <IoIosArrowBack
                    className="absolute top-1/2 left-10 transform -translate-y-1/2 text-black text-3xl cursor-pointer z-10"
                    onClick={goToPrevious}
                />
                <IoIosArrowForward
                    className="absolute top-1/2 right-10 transform -translate-y-1/2 text-black text-3xl cursor-pointer z-10"
                    onClick={goToNext}
                />
            </div>
        </div>
           
           
            <div className="w-1/2 flex flex-col gap-y-2 justify-center items-start">
            <p className="text-black text-3xl font-bold">What We Do</p>
            <p className="text-black w-3/4">Our primary focus is to offer a wide selection of products that cater to various phone models and brands, providing their customers with the convenience of having everything they need in one place. They source their products from trusted suppliers, ensuring that their inventory is of the highest quality.<br/><br/>Cell Parts Hub also offers fast shipping and excellent customer service, providing their customers with a seamless shopping experience. They strive to stay up-to-date with the latest trends and advancements in the industry, ensuring that they offer the most current and innovative products to their customers. Cell Parts Hub is committed to providing their customers with exceptional value, making them the go-to destination for all cell phone repair needs.</p>
            </div>
        </div>

        <div className="flex flex-row w-auto h-auto">
            <div className="w-1/2 flex flex-col gap-y-2 justify-start items-start">
            <p className="text-black text-3xl font-bold">Who We Serve</p>
            <p className="text-black w-3/4">Cell Parts Hub is a reputable and reliable supplier of high-quality cell phone parts and Cell Parts Hub serves a wide range of customers who are in need of high-quality cell phone parts and accessories. Their customers include individuals who are looking to repair their own cell phones, as well as professional repair shops and businesses that require bulk orders.<br/><br/>Cell Parts Hub provides solutions for a variety of cell phone models and brands, including Apple, Samsung, Huawei, LG, and more. They cater to customers from all over the world and are committed to delivering fast and reliable shipping options to ensure their customers receive their orders on time. Cell Parts Hub&apos;ss extensive inventory and dedication to customer service make them a reliable and trustworthy source for all cell phone parts needs. </p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-2 justify-start items-start">
            <p className="text-black text-3xl font-bold">Our Vision</p>
            <p className="text-black w-3/4">Cell Parts Hub&apos;s vision is to not only meet but exceed their customers&apos;s expectations by continuously improving their processes and product offerings. They are committed to staying up-to-date with the latest advancements in the cell phone repair industry, ensuring that they offer their customers the most innovative and high-quality products available.<br/><br/>Additionally, Cell Parts Hub&apos;ss vision includes promoting sustainability and reducing their environmental impact by utilizing eco-friendly packaging and minimizing waste. They also aim to give back to the community by supporting local charities and initiatives that align with their values. Overall, Cell Parts Hub&apos;ss vision is centered around providing their customers with an exceptional experience while simultaneously striving to make a positive impact on society and the environment.</p>
            </div>
        </div>

      </div>


      <Services />
      <Footer />
      <Bar/>
    </main>
  );
}
