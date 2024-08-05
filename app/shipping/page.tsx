import Image from "next/image";
import React from "react";
import Menu from "@components/Menu";
import Navbar from "@components/Navbar";
import Services from "@components/Services";
import Footer from "@components/Footer";
import Link from "next/link";
import Bar from "@components/Bar";

export default function ShippingPage() {
    return (
        <main className="flex min-h-screen w-screen flex-col items-center justify-start gap-y-4 px-4 bg-white">
            <Navbar />
            <Menu />

            <div className="h-auto w-screen flex flex-col gap-y-5">
                <div className="flex w-screen h-60 bg-red-800 text-white text-3xl font-bold justify-center items-center">Terms & Conditions
                </div>
                <div className="px-24 flex flex-col gap-y-3 my-5">
                    <p className="text-black font-bold text-lg">Return Policy
                    </p>
                    <p className="text-gray-600 ">Cell Parts Hub offers a lifetime warranty on all parts and accessories purchased from our website. This warranty applies to all part defects. Part tampering and/or damage voids eligibility.<br/><br/>Examples of Part Tampering:</p>
                    <ul className="list-none p-0">
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                        Changing of any components.

                        </li>
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                        Removing of any components.
                        </li>
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                        Application of additional components.

                        </li>
                    </ul>
                    <p className="text-gray-600 ">Examples of Damages:</p>
                    <ul className="list-none p-0">
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                        Bent Flex Cables.

                        </li>
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                        Torn / Ripped Flex Cables.
                        </li>
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                        Pressure Marks.

                        </li>
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                        Physical Damage.

                        </li>
                    </ul>
                    <p className="text-black font-bold text-lg">Order Discrepancies</p>
                    <p className="text-gray-600 ">Customers must notify us of any order discrepancy or shipping damage within seven (7) days from the invoice date so that we may investigate and resolve the situation accordingly. A return merchandise authorization number (RMA#) may be required.</p>
                    <p className="text-black font-bold text-lg">Return Address
                    </p>
                    <p className="text-gray-600 ">Send your preapproved return items with RMA number to<br/><br/>Returns Department<br/>C/O<br/>Cell Parts Hub<br/>5755 Bonhomme Rd Ste 420<br/>Houston, TX - 77036<br/><br/>sales@cellpartshub.com.</p>
                    <p className="text-black font-bold text-lg">Policy Abuse
                    </p>
                    <p className="text-gray-600 ">Unfortunately, some customers abuse our generous return, warranty, and other policies. Accordingly, we will be forced to apply stricter policies to those abusive customers.</p>
                    <p className="text-black font-bold text-lg">Policy Changes</p>
                    <p className="text-gray-600 ">These policies are subject to change at any time and without notice.</p>
                </div>
            </div>

            <Services />
            <Footer />
            <Bar/>
        </main>
    );
}
