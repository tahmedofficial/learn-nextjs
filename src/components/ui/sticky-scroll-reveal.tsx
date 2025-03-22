"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ContentItem {
    title: string;
    description: string;
    content?: React.ReactNode;
}

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: ContentItem[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });

    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                return distance < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
            },
            0,
        );
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = ["#0f172a", "#000000", "#171717"];

    const linearGradients = useMemo(
        () => [
            "linear-gradient(to bottom right, #06b6d4, #10b981)", // Cyan-500 to Emerald-500
            "linear-gradient(to bottom right, #ec4899, #6366f1)", // Pink-500 to Indigo-500
            "linear-gradient(to bottom right, #f97316, #eab308)", // Orange-500 to Yellow-500
        ],
        [],
    );

    const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard, linearGradients]);

    return (
        <motion.div
            animate={{ backgroundColor: backgroundColors[activeCard % backgroundColors.length] }}
            className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
            ref={ref}
        >
            <div className="relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-2xl font-bold text-slate-100"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-lg mt-10 max-w-sm text-slate-300"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <div
                style={{ background: backgroundGradient }}
                className={cn(
                    "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
                    contentClassName,
                )}
            >
                {content[activeCard]?.content ?? null}
            </div>
        </motion.div>
    );
};
