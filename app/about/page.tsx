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
            <p className="text-black text-3xl font-bold">Get to Know Our Business</p>
            <p className="text-black w-3/4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis itaque tempora quisquam nulla accusamus quis vitae doloribus, ex veritatis error impedit laboriosam numquam voluptatem maiores at. Numquam sed quod a! Iste, aut praesentium. Minus odio libero sed quae vero esse, obcaecati voluptas excepturi ullam, atque cumque hic nam corporis tempora! Facilis cumque recusandae quo assumenda possimus quam itaque placeat, eligendi culpa earum in, veniam repellat quisquam. Laborum possimus repellendus magnam minima porro quia exercitationem nam explicabo, aut, at eos ratione voluptatum sed officiis, consequatur voluptas necessitatibus soluta. Deleniti, praesentium ipsa! Quam sequi consectetur debitis sit, adipisci numquam aspernatur mollitia perspiciatis. </p>
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
            <p className="text-black w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, excepturi iusto cumque iste nemo quaerat porro, quam omnis odio unde, perferendis eos! Facilis, sunt quod? In veniam, fuga ipsum itaque facilis praesentium ratione, alias excepturi modi numquam iusto illo quas odio soluta vitae ipsa dolores explicabo tempore dicta quia dolorem labore deleniti voluptas consequatur. Ullam amet corporis nostrum maiores a est quae quas? At beatae consectetur odit, a labore quas iste adipisci maxime? Autem, consectetur! Odio, ipsum? Blanditiis sit voluptas cumque nobis. Quo nisi vero aliquam? Vitae nihil accusantium beatae ipsum, excepturi totam rem dignissimos quia perspiciatis assumenda quasi expedita?</p>
            </div>
        </div>

        <div className="flex flex-row w-auto h-auto">
            <div className="w-1/2 flex flex-col gap-y-2 justify-start items-start">
            <p className="text-black text-3xl font-bold">Who We Serve</p>
            <p className="text-black w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in delectus voluptatum hic, recusandae animi velit quae reiciendis a! Sunt deleniti beatae quasi, temporibus animi blanditiis a libero eius? Cumque asperiores ipsum recusandae temporibus autem repudiandae nisi maxime. Labore eligendi velit asperiores inventore id atque dolore quisquam accusamus repellendus alias aperiam est libero maiores modi, dolores dicta? Provident doloribus soluta minus quia cupiditate, exercitationem eos culpa odio dolorum, ex optio error iusto veniam? Quasi, labore iure. Neque in quisquam quod odit excepturi facilis optio ipsum culpa, cumque odio harum, inventore molestiae? Nobis voluptatibus dolores a ratione est similique fugit animi?</p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-2 justify-start items-start">
            <p className="text-black text-3xl font-bold">Our Vision</p>
            <p className="text-black w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eveniet perferendis nesciunt obcaecati sint consequatur ut ipsam incidunt delectus, neque, repellat similique tempora quo nisi voluptatibus quasi dolor nostrum nam provident voluptatem fugit! Esse, quo? Excepturi accusantium in nostrum quis officiis nam id, distinctio eum aut quia corporis blanditiis maxime sapiente debitis eius. Dolores velit voluptates aspernatur at, a incidunt architecto laudantium doloribus error laborum ea alias repellat ex eaque deleniti repellendus ratione nam corporis vero aliquid. Voluptatem fugiat cumque deleniti at tempora nesciunt minus asperiores aliquid libero obcaecati quisquam, expedita distinctio alias aliquam animi unde consequatur molestiae! Quia qui quos architecto, nesciunt, consequatur ad commodi culpa eveniet quidem iusto dignissimos distinctio nisi inventore illo porro repellat optio et labore!</p>
            </div>
        </div>

      </div>


      <Services />
      <Footer />
      <Bar/>
    </main>
  );
}
