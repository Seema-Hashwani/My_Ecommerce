'use client';
import React, { useState } from "react";
import Image from "next/image";
import slider1 from "./../../public/images/slider1.jpg";
import slider2 from "./../../public/images/slider2.jpg";
import slider3 from "./../../public/images/slider3.jpg";
import slider4 from "./../../public/images/slider4.jpg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Carousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [transitionClass, setTransitionClass] = useState('opacity-100'); // Control transition effect
    const images = [slider1, slider2, slider3, slider4]; // Updated with new images

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
        <div className="relative flex h-96 w-screen px-24 items-center justify-center">
            <div className="relative w-full h-full overflow-hidden">
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
    );
}
