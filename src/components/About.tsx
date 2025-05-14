"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

export default function About() {
    const underlineControls = useAnimation();
    const imageControls = useAnimation();

    useEffect(() => {
        const timer = setTimeout(() => {
            underlineControls.start({ width: "100%" });
            imageControls.start({ opacity: 1, x: 0 });
        }, 500); // 0.5s delay

        return () => clearTimeout(timer);
    }, [underlineControls, imageControls]);

    return (
        <div className="flex flex-col items-center justify-center px-6 py-16 md:px-16 md:mt-[-50px]">
            {/* Heading with animated underline */}
            <div className="relative mb-10">
                <h1 className="text-4xl font-bold text-center text-[var(--brown)]">About Me</h1>
                <motion.div
                    className="absolute left-0 bottom-[-5px] h-[3px] bg-[var(--brown)] rounded-full"
                    initial={{ width: 0 }}
                    animate={underlineControls}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row gap-16 md:gap-28 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={imageControls}
                    transition={{ duration: 1 }}
                    className="rounded-lg border border-[var(--brown)] mt-7 shadow-lg lg:rotate-[-5deg]"
                >
                    <Image
                        src="/assets/shubham.jpg"
                        alt="Shubham"
                        width={350}
                        height={350}
                        className="rounded-lg object-cover"
                    />
                </motion.div>

                <div className="space-y-5 md:space-y-6 md:mt-0 text-center md:text-left">
                    <h2 className="text-2xl font-semibold">Software Developer</h2>
                    <p className="text-[14px] max-w-2xl text-justify font-lato">
                        I started my journey in Computer Science in 2022 and have since gained expertise in various languages, technologies, and frameworks.
                    </p>
                    <p className="text-[14px] max-w-2xl text-justify font-lato">
                        I have a strong foundation in Python and Java, and I am proficient in web development using HTML, CSS, and JavaScript. I&apos;ve also worked with frameworks like React.js and Node.js to build dynamic web applications.
                    </p>
                    <p className="text-[14px] max-w-2xl text-justify font-lato">
                        I have experience with version control systems like Git and GitHub, allowing me to collaborate effectively and manage code efficiently. I&apos;m also familiar with database systems like MySQL and MongoDB.
                    </p>
                    <ul className="list-inside text-lg grid grid-cols-1 md:grid-cols-3 gap-4">
                        <li className="flex items-center">🧩 Problem Solver</li>
                        <li className="flex items-center">⚙️ API Management</li>
                        <li className="flex items-center">🧠 Bug Fixing</li>
                    </ul>
                    <hr className="hidden md:block" />
                    <div className="hidden md:flex flex-col md:flex-row md:space-x-6 gap-8">
                        <div><p>Phone</p><p><Link href='https://wa.me/+918850093749'>+91 8850093749</Link></p></div>
                        <div><p>Email</p><p><Link href='mailto:mauryashubham12349@gmail.com'>mauryashubham12349@gmail.com</Link></p></div>
                        <div><p>LinkedIn</p><p><Link href='https://www.linkedin.com/in/shubham-maurya-12349/'>Shubham Maurya</Link></p></div>
                    </div>
                    <div className="flex space-x-6 mt-4 justify-center md:justify-start">
                        <motion.button
                            className="px-4 py-3 bg-[var(--brown)] text-white text-sm rounded-md shadow-lg hover:bg-[var(--dark-brown)] transition duration-300 font-lato"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Link href="/contact" className="flex items-center">
                                Get In Touch
                                <motion.span
                                    animate={{ x: [0, 8, 0] }}
                                    transition={{ repeat: Infinity, repeatDelay: 1.5, duration: 0.8 }}
                                    className="ml-2"
                                >
                                    →
                                </motion.span>
                            </Link>
                        </motion.button>
                        <motion.button
                            className="px-6 py-3 bg-[var(--brown)] text-white text-sm rounded-md shadow-lg hover:bg-[var(--dark-brown)] transition duration-300 font-lato"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Link href="/assets/Shubham_CV.pdf" target="_blank" className="flex items-center">
                                View Resume
                                <motion.span
                                    className="ml-1"
                                    animate={{ y: [0, -3, 0] }}
                                    transition={{ repeat: Infinity, repeatDelay: 1.5, duration: 0.6 }}
                                >
                                    📄
                                </motion.span>
                            </Link>
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
}
