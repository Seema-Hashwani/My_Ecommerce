import Image from "next/image";
import React from "react";
import Menu from "./../components/Menu";
import Navbar from "./../components/Navbar";
import Services from "./../components/Services";
import Footer from "./../components/Footer";
import Link from "next/link";
import Bar from "./../components/Bar";

export default function TermsPage() {
    return (
        <main className="flex min-h-screen w-screen flex-col items-center justify-start gap-y-4 px-4 bg-white">
            <Navbar />
            <Menu />

            <div className="h-auto w-screen flex flex-col gap-y-5">
                <div className="flex w-screen h-60 bg-red-800 text-white text-3xl font-bold justify-center items-center">Terms & Conditions</div>
                <div className="px-24 flex flex-col gap-y-3 my-5">
                    <p className="text-gray-600 ">An Account application is required to process your order. This application must be completed in full in order to be processed. Please fax this document to 832-242-7868 or mail to Cell Parts Hub, 7111 Harwin Dr Ste 136, Houston, TX 77036. If purchase is subject to resale, please complete and enclose a resale certificate with this application.<br /><br />Our office is open Monday thru Friday, 10am - 6:30pm CST. Orders are not processed on weekends.</p>
                    <p className="text-black font-bold text-lg">Order Acceptance
                    </p>
                    <ul className="list-none p-0">
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                            All orders are subject to final approval and acceptance by Cell Parts Hub.
                        </li>
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                        All orders remain the property of Cell Parts Hub unless the customer pays the items in full.
                        </li>
                    </ul>
                    <p className="text-black font-bold text-lg">Product Inspection
                    </p>
                    <ul className="list-none p-0">
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                            Inspection of all items purchased from Cell Parts Hub, is the sole responsibility of the customer, this inspection must be made within three (3) business days of invoice date.

                        </li>
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                            Cell Parts Hub is not responsible for missing items after three (3) business days of invoice date, regardless of error of fault.

                        </li>
                    </ul>
                    <p className="text-black font-bold text-lg">Returns</p>
                    <ul className="list-none p-0">
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                            All returns must have a return merchandise authorization from sales representative.
                        </li>
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                            Only return the specific quantities and the products damaged on the road.
                        </li>

                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                            The customer pays “In-bound” freight and “Out-bound” freight is paid by Cell Parts Hub.
                        </li>
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                            Defective items are exchanged for the same title only.
                        </li>
                    </ul>
                    <p className="text-black font-bold text-lg">Refused shipments
                    </p>
                    <ul className="list-none p-0">
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                            All claims for incorrect shipment must be received within seven (7) days from the invoice date.

                        </li>
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                            Freight damage claims should be filed directly with carrier.

                        </li>
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                            If the purchaser refuses to accept shipment for any reason, Cell Parts Hub is entitled to a thirty five (35) percent restocking fee from the total of the purchase.

                        </li>
                    </ul>
                    <p className="text-black font-bold text-lg">Shipping
                    </p>
                    <ul className="list-none p-0">
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                            Cell Parts Hub will make every effort to ship the merchandise as soon as possible.

                        </li>
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                            We are not responsible for orders not shipped out on the date of order.
                        </li>
                    </ul>
                    <p className="text-black font-bold text-lg">Payment
                    </p>
                    <ul className="list-none p-0">
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                            Discover, MasterCard, Visa and American Express credit cards are accepted. In addition, Cell Parts Hub offers flexible payment options via Behalf.com.
                        </li>
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                            All orders must be paid in full prior to shipping.
                        </li>
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                            No Cash ON Delivery (C.O.D.)
                        </li>
                        <li className="text-gray-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-black before:font-bold">
                            No Checks accepted.
                        </li>
                    </ul>
                    <p className="text-black font-bold text-lg">Cancellations and Refunds
                    </p>
                    <p className="text-gray-600 ">This online privacy policy applies only to information collected through our website and not to information collected offline.
                    </p>
                    <p className="text-black font-bold text-lg">Your Consent
                    </p>
                    <p className="text-gray-600 ">Cell Parts Hub reserves the right to cancel an account at any time with or without notice. Violations of the Terms of Service will waive the refund policy.
                    </p>
                    <p className="text-black font-bold text-lg">Changes To Our Privacy Policy
                    </p>
                    <p className="text-gray-600 ">Cell Parts Hub shall not be responsible for any damages your business may suffer. Cell Parts Hub makes no warranties of any kind, expressed or implied for services we provide. Cell Parts Hub disclaims any warranty or merchantability or fitness for a particular purpose. This includes loss of data resulting from delays, no deliveries, wrong delivery, and any and all service interruptions caused by Cell Parts Hub and its employees.
                    </p>
                </div>
            </div>

            <Services />
            <Footer />
            <Bar/>
        </main>
    );
}
