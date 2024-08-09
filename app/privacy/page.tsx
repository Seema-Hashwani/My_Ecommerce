import Image from "next/image";
import React from "react";
import Menu from "./../components/Menu";
import Navbar from "./../components/Navbar";
import Services from "./../components/Services";
import Footer from "./../components/Footer";
import Link from "next/link";
import Bar from "./../components/Bar";


export default function PrivacyPage() {
    return (
        <main className="flex min-h-screen w-screen flex-col items-center justify-start gap-y-4 px-4 bg-white">
            <Navbar />
            <Menu />

            <div className="h-auto w-screen flex flex-col gap-y-5">
                <div className="flex w-screen h-60 bg-red-800 text-white text-3xl font-bold justify-center items-center">Privacy Policies</div>

                <div className="px-24 flex flex-col gap-y-3 my-5">
                    <p className="text-black font-bold text-lg">What And How Your Information Is Collected And Will Be Used By Us?</p>
                    <p className="text-gray-600 ">We may collect your name, company name, email, telephone and address for technical support, marketing & remarketing purposes with CellPartsHub.com and our affiliated third party companies. This website uses remarketing services, such as Google AdWords, to advertise on third party websites (including Google) to previous visitors to our site. It could mean that we advertise to previous visitors who haven&apos;t completed a task on our site, for example using the contact form to make an inquiry. This could be in the form of an advertisement on the Google search results page, or a site in the Google Display Network.</p>
                    <p className="text-black font-bold text-lg">How Do You Edit And Delete Your Information, And Opt Out Of Future Communications With Us?
                    </p>
                    <p className="text-gray-600 ">You can edit and/or delete any personal information by logging in to My Account page, or opt out of any of our affiliated third party services using the links below. To opt out of Google Adwords, you can use Google Ad Preferences page. To opt out of AdRoll, you can visit this page.

                    </p>
                    <p className="text-black font-bold text-lg">How Do We Protect Your Information?</p>
                    <p className="text-gray-600 ">We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.

                    </p>
                    <p className="text-black font-bold text-lg">Do We Use Cookies?</p>
                    <p className="text-gray-600 ">Yes (Cookies are small files that a site or its service provider transfers to your computers hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information. Third-party vendors, including Google, use cookies to serve ads based on you past visits to this website, and show our ads on sites across the Internet. Of course, any data collected will be used in accordance with our own privacy policy and Google&apos;s privacy policy.

                    </p>
                    <p className="text-black font-bold text-lg">Do We Disclose Any Information To Outside Parties?
                    </p>
                    <p className="text-gray-600 ">We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.

                    </p>
                    <p className="text-black font-bold text-lg">Third Party Links
                    </p>
                    <p className="text-gray-600 ">Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.

                    </p>
                    <p className="text-black font-bold text-lg">Online Privacy Policy Only
                    </p>
                    <p className="text-gray-600 ">This online privacy policy applies only to information collected through our website and not to information collected offline.

                    </p>

                    <p className="text-black font-bold text-lg">Your Consent
                    </p>
                    <p className="text-gray-600 ">By using our site, you consent to our websites privacy policy.

                    </p>
                    <p className="text-black font-bold text-lg">Changes To Our Privacy Policy
                    </p>
                    <p className="text-gray-600 ">If we decide to change our privacy policy, we will post those changes on this page.

                    </p>
                </div>

            </div>

            <Services />
            <Footer />
            <Bar/>
        </main>
    );
}
