"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
        quote: "This music school transformed my passion into a career. The instructors are truly inspiring!",
        name: "Alice Johnson",
        title: "Professional Pianist"
    },
    {
        quote: "The vocal training program helped me improve my voice control and confidence on stage.",
        name: "Michael Smith",
        title: "Singer & Songwriter"
    },
    {
        quote: "Learning music production here was a game-changer. I now produce tracks professionally!",
        name: "David Lee",
        title: "Music Producer"
    },
    {
        quote: "The instrument mastery course gave me the skills I needed to perform in a band.",
        name: "Sophia Martinez",
        title: "Guitarist"
    },
    {
        quote: "Studying film scoring opened doors for me in the entertainment industry. Highly recommended!",
        name: "James Wilson",
        title: "Film Composer"
    },
    {
        quote: "The electronic music and DJing course helped me create my own unique sound as a DJ.",
        name: "Emma Brown",
        title: "DJ & Electronic Music Producer"
    }
];

const MusicSchoolTestimonial = () => {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-center my-5 text-3xl font-semibold">Hear our Harmony: Voices of success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    );
};

export default MusicSchoolTestimonial;