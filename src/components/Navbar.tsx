"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
// import { a } from "motion/react-client";

const Navbar = ({ className }: { className?: string }) => {

    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href="/">
                    <MenuItem setActive={setActive} active={active} item="Home">
                        testr
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Our Courses">

                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses">All Courses</HoveredLink>
                        <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/courses">Advanced Composition</HoveredLink>
                        <HoveredLink href="/courses">Song Writtint</HoveredLink>
                        <HoveredLink href="/courses">Music Production</HoveredLink>
                    </div>
                </MenuItem>
                <Link href="/courses">
                    <MenuItem setActive={setActive} active={active} item="Contact Us">

                    </MenuItem>
                </Link>
            </Menu>
        </div>
    );
};

export default Navbar;