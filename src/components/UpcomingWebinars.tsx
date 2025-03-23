"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinars = () => {

    const featuredWebinars = [
        {
            title: "Stripe",
            description: "A technology company that builds economic infrastructure for the internet.",
            link: "https://stripe.com",
            slug: "stripe"
        },
        {
            title: "Netflix",
            description: "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
            link: "https://netflix.com",
            slug: "netflix"
        },
        {
            title: "Google",
            description: "A multinational technology company that specializes in Internet-related services and products.",
            link: "https://google.com",
            slug: "google"
        },
        {
            title: "Meta",
            description: "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
            link: "https://meta.com",
            slug: "meta"
        },
        {
            title: "Amazon",
            description: "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
            link: "https://amazon.com",
            slug: "amazon"
        },
        {
            title: "Microsoft",
            description: "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
            link: "https://microsoft.com",
            slug: "microsoft"
        }
    ];


    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide">FEATURED WEBINARS</h2>
                    <p className="text-3xl font-bold mt-2 tracking-tight">Enhance your Musical Journey</p>
                </div>

                <div className="mt-10">
                    <HoverEffect items={featuredWebinars}></HoverEffect>
                </div>

                <div className="mt-10 text-center">
                    <Link href="/webinars" className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                        View All courses
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UpcomingWebinars;