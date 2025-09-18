"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./Navlink";
import { motion } from 'framer-motion';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [displayedName, setDisplayedName] = useState("");
    const [displayedTitle, setDisplayedTitle] = useState("");
    const fullName = "I\u0027m Shubham Maurya";
    const fullTitle = "Software Developer";

    // Character-by-character animation effect
    useEffect(() => {
        const nameInterval = setInterval(() => {
            setDisplayedName((prev) => {
                const next = fullName.slice(0, prev.length + 1);
                return next;
            });
        }, 100);

        const titleInterval = setInterval(() => {
            setDisplayedTitle((prev) => {
                const next = fullTitle.slice(0, prev.length + 1);
                return next;
            });
        }, 100);

        return () => {
            clearInterval(nameInterval);
            clearInterval(titleInterval);
        };
    }, []);

    const blurEffect = "backdrop-blur-[2px]";

    return (
        <nav className={`w-full top-0 left-0 z-50 ${blurEffect} bg-opacity-50 bg-[var(--nav-background)]`} tabIndex={0} onBlur={() => setIsOpen(false)}>
            <div className="flex items-center justify-between px-4 py-2 h-20 transition-all ease-in-out duration-500">
                <Link href="/" className="flex-shrink-0 relative left-2 md:left-5">
                    <div className="relative font-logo text-5xl text-[var(--brown)] hover:text-[var(--dark-brown)] transition-all duration-300 transform hover:scale-105">
                        Shubham
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6 lg:space-x-5 items-center pr-4 md:pr-6 lg:pr-6">
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <NavLink href="/" >Home</NavLink>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <NavLink href="/about" >About</NavLink>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <NavLink href="/project" >Project</NavLink>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <NavLink href="/assets/Shubham_CV.pdf" >Resume</NavLink>
                    </motion.li>
                </ul>

                {/* Hamburger Menu */}
                <button
                    className="md:hidden flex flex-col justify-center items-center space-y-2 p-2 z-20 relative"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <motion.div
                        className="w-8 h-1 bg-[var(--brown)] rounded-full"
                        animate={isOpen ? { rotate: 45, y: 12 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        className="bg-[var(--brown)] rounded-full"
                        animate={isOpen ? { opacity: 0, width: 0 } : { width: 32, height: 4 }}
                        initial={false}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        className="w-8 h-1 bg-[var(--brown)] rounded-full"
                        animate={isOpen ? { rotate: -45, y: -12 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </button>
            </div>

            {/* Hero Section with Text and Image */}
            <div className=" flex flex-col md:flex-row justify-between items-center px-6 py-6 md:py-12">
                {/* Text Content */}
                <motion.div
                    className="flex flex-col space-y-3 md:w-1/2 md:ml-8 lg:ml-16"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-[var(--brown)]">
                        {displayedName}<span className="animate-pulse">|</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-[var(--brown)] mb-2">
                        {displayedTitle}<span className={displayedName.length === fullName.length ? "animate-pulse" : "opacity-0"}>|</span>
                    </h2>
                    <p className="text-lg text-[var(--brown)]">I&apos;m a software developer with a passion for creating innovative solutions.</p>
                    <p className="text-lg text-[var(--brown)] max-w-md">Welcome to my portfolio!</p>
                    <div className="flex space-x-4 mt-2">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-1.5 bg-[var(--brown)] text-white text-sm rounded-md shadow-md hover:bg-[var(--dark-brown)] transition duration-300"
                        >
                            <Link href="/project">View My Work</Link>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-1.5 bg-[var(--brown)] text-white text-sm rounded-md shadow-md hover:bg-[var(--dark-brown)] transition duration-300"
                        >
                            <Link href="/contact">Contact Me</Link>
                        </motion.button>
                    </div>
                    <motion.ul className="flex space-x-4 mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <li>
                            <Link href="https://github.com/Shubhamprogrammar/" target="_blank" rel="noopener noreferrer">
                                <motion.i
                                    className="fab fa-github text-[var(--brown)] text-2xl hover:text-3xl transition-all duration-300"
                                    whileHover={{ scale: 1.2 }}
                                ></motion.i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/shubham-maurya-9932a3268/" target="_blank" rel="noopener noreferrer">
                                <motion.i
                                    className="fab fa-linkedin text-[var(--brown)] text-2xl hover:text-3xl transition-all duration-300"
                                    whileHover={{ scale: 1.2 }}
                                ></motion.i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.hackerrank.com/profile/mauryashubham121" target="_blank" rel="noopener noreferrer">
                                <motion.i
                                    className="fab fa-hackerrank text-[var(--brown)] text-2xl hover:text-3xl transition-all duration-300"
                                    whileHover={{ scale: 1.2 }}
                                ></motion.i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.fiverr.com/pyexpertise" target="_blank" rel="noopener noreferrer">
                                <motion.i
                                    className="fas fa-globe text-[var(--brown)] text-2xl hover:text-3xl transition-all duration-300"
                                    whileHover={{ scale: 1.2 }} 
                                ></motion.i>
                            </Link>
                        </li>
                    </motion.ul>
                </motion.div>

                {/* Image - Fixed positioning */}
                <motion.div
                    className="hidden md:block mt-6 md:mt-0 md:mr-18 lg:mr-36 xl:mr-48"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <Image
                        src='/assets/shaan.jpg'
                        alt='Shubham'
                        width={250}
                        height={250}
                        className="rounded-lg shadow-lg transform hover:scale-110 transition-all duration-300 "
                        style={{
                            animation: "float 4s ease-in-out infinite"
                        }}
                    />
                </motion.div>
            </div>

            {/* Mobile Navigation with smooth animation */}
            <motion.div
                className={`absolute left-0 w-full bg-[#CFE5FF80] ${blurEffect} bg-opacity-50 md:hidden`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ top: "80px" }}
            >
                <motion.ul
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        listStyle: "none",
                        position: "relative",
                        margin: 0,
                        paddingLeft: "20px",
                        width: "100%"
                    }}
                    initial={{ height: "20px" }}
                    animate={{
                        height: isOpen ? "220px" : "0px",
                        paddingTop: isOpen ? "10px" : 0
                    }}
                    transition={{
                        duration: 0.25,
                        ease: [0.175, 0.885, 0.32, 1.275]
                    }}
                >
                    {/* Mobile menu items with animation */}
                    <motion.li
                        className="px-3 text-xl"
                        style={{ width: "min-content" }}
                        initial={{ opacity: 0, y: -15, pointerEvents: "none" }}
                        animate={{
                            opacity: isOpen ? 1 : 0,
                            y: isOpen ? 0 : -15,
                            pointerEvents: isOpen ? "all" : "none"
                        }}
                        transition={{ duration: 0.1 }}
                    >
                        <NavLink href="/" >Home</NavLink>
                    </motion.li>
                    <motion.li
                        className="px-3 text-xl"
                        style={{ width: "min-content" }}
                        initial={{ opacity: 0, y: -15, pointerEvents: "none" }}
                        animate={{
                            opacity: isOpen ? 1 : 0,
                            y: isOpen ? 0 : -15,
                            pointerEvents: isOpen ? "all" : "none"
                        }}
                        transition={{ duration: 0.1 }}
                    >
                        <NavLink href="/about" >About</NavLink>
                    </motion.li>
                    <motion.li
                        className="px-3 text-xl"
                        style={{ width: "min-content" }}
                        initial={{ opacity: 0, y: -15, pointerEvents: "none" }}
                        animate={{
                            opacity: isOpen ? 1 : 0,
                            y: isOpen ? 0 : -15,
                            pointerEvents: isOpen ? "all" : "none"
                        }}
                        transition={{ duration: 0.1 }}
                    >
                        <NavLink href="/project" >Project</NavLink>
                    </motion.li>
                    <motion.li
                        className="px-3 text-xl"
                        style={{ width: "min-content" }}
                        initial={{ opacity: 0, y: -15, pointerEvents: "none" }}
                        animate={{
                            opacity: isOpen ? 1 : 0,
                            y: isOpen ? 0 : -15,
                            pointerEvents: isOpen ? "all" : "none"
                        }}
                        transition={{ duration: 0.1 }}
                    >
                        <NavLink href="/assets/Shubham_CV.pdf" >Resume</NavLink>
                    </motion.li>
                    <div className="flex justify-center w-full">
                        <motion.hr
                            style={{
                                margin: "0 auto",
                                transform: "translateY(-15px)"
                            }}
                            initial={{
                                width: 0
                            }}
                            animate={{
                                width: isOpen ? "25%" : 0,
                                borderWidth: isOpen ? "3px" : 0,
                                borderStyle: "solid",
                                borderColor: "var(--dark-brown)",
                                borderRadius: "20px",
                                opacity: isOpen ? "20%" : 1
                            }}
                            transition={{
                                duration: 0.1
                            }}
                        />
                    </div>
                </motion.ul>
            </motion.div>
        </nav>
    );
}