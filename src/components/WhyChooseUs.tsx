"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
        title: "Introduction to Music",
        description: "Learn the basics of music theory, including notes, scales, and rhythm."
    },
    {
        title: "Instrument Mastery",
        description: "Develop your skills in playing various musical instruments such as piano, guitar, and violin."
    },
    {
        title: "Vocal Training",
        description: "Enhance your singing abilities with vocal exercises, pitch training, and breath control techniques."
    },
    {
        title: "Music Composition",
        description: "Understand how to compose your own music by learning chord progressions, melodies, and songwriting techniques."
    },
    {
        title: "Music Production",
        description: "Explore the world of music production, recording, and mixing using professional software."
    },
    {
        title: "Live Performance Techniques",
        description: "Gain confidence in performing live on stage with techniques to improve stage presence and audience engagement."
    },
    {
        title: "History of Music",
        description: "Discover the evolution of music across different cultures and historical periods."
    },
    {
        title: "Electronic Music & DJing",
        description: "Learn the fundamentals of electronic music production and DJing techniques."
    },
    {
        title: "Film Scoring & Sound Design",
        description: "Dive into the world of film music and sound effects to create immersive audio experiences."
    },
    {
        title: "Advanced Music Theory",
        description: "Deepen your understanding of complex music theories, harmony, and counterpoint."
    }
];


const WhyChooseUs = () => {
    return (
        <div>
            <StickyScroll content={musicSchoolContent}></StickyScroll>
        </div>
    );
};

export default WhyChooseUs;