"use client"

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaReact, FaNode, FaDatabase, FaJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiTailwindcss, SiGit, SiGithub, SiPostman } from 'react-icons/si';
import { motion, useAnimation } from "framer-motion";
import { FaSpider } from "react-icons/fa6";

export default function Skills() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const controls = useAnimation();
    const [inView, setInView] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    controls.start("visible");
                } else {
                    setInView(false);
                    controls.start("hidden");
                }
            },
            { threshold: 0.2 }
        );

        const currentRef = ref.current;

        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [controls]);


    const frontendSkills = [
        { name: "React", icon: <FaReact className="text-blue-500 text-3xl mr-2" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-3xl mr-2" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-3xl mr-2" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-3xl mr-2" /> },
        { name: "CSS3", icon: <FaCss3 className="text-blue-400 text-3xl mr-2" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-blue-500 text-3xl mr-2" /> },
    ];

    const backendSkills = [
        { name: "Node.js", icon: <FaNode className="text-green-600 text-3xl mr-2" /> },
        { name: "Express", icon: <SiExpress className="text-gray-600 text-3xl mr-2" /> },
        {
            name: "Python", icon: <svg viewBox="0 0 128 128" className="w-8 h-8">
                <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#5A9FD4"></stop><stop offset="1" stopColor="#306998"></stop></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B"></stop><stop offset="1" stopColor="#FFE873"></stop></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"></path><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"></path><radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#B8B8B8" stopOpacity=".498"></stop><stop offset="1" stopColor="#7F7F7F" stopOpacity="0"></stop></radialGradient><path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path>
            </svg>
        },
        {
            name: "Java", icon: <svg viewBox="0 0 128 128" className="w-8 h-8">
                <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"></path><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"></path><path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"></path><path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"></path><path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"></path>
            </svg>
        },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl mr-2" /> },
        { name: "SQL", icon: <FaDatabase className="text-blue-600 text-3xl mr-2" /> },
        {
            name: "MySQL", icon: <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="MySQL"
                width={35}
                height={25}
            />
        },
        { name: "Web Scraping", icon: <FaSpider className="text-purple-600 text-3xl mr-2" /> },
    ];
    const tools = [
        {
            name: "VS Code", icon:

                <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                    alt="VS Code icon"
                    width={40}
                    height={30}
                />
        },
        { name: "Git", icon: <SiGit className="text-orange-600 text-3xl mr-2" /> },
        { name: "GitHub", icon: <SiGithub className="text-black text-3xl mr-2" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500 text-3xl mr-2" /> },
         {
            name: "Power BI", icon: <Image
                src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.2.0/powerbi.svg"
                alt="Power BI"
                width={35}
                height={25}
            />
        },
    ];

    // Animation utility function
    const getAnimationDelay = (index: number) => {
        return `${index * 100}ms`;
    };

    return (
        <div
            ref={ref}
            className="flex flex-col w-[90%] sm:w-[90%] md:w-[85%] lg:max-w-5xl px-4 py-5 mt-5 mb-5 bg-gray-50 rounded-xl shadow-md mx-auto"
        >
            <div className="relative mb-8 text-center">
                <h1 className="text-4xl font-bold text-[var(--brown)]">Skills</h1>
                <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] h-1 bg-[var(--brown)] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: inView ? "5rem" : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: inView ? 0.2 : 0 }}
                />
            </div>

            <h2 className="text-2xl font-semibold mb-6 text-stone-700 text-center">Frontend</h2>
            <div className="flex overflow-x-auto space-x-4 px-2 py-4">
                {frontendSkills.map(({ name, icon }, index) => (
                    <div
                        key={name}
                        className={`flex flex-col items-center p-4 bg-white hover:bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 w-full ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            transitionDelay: getAnimationDelay(index),
                            transitionProperty: 'transform, opacity, box-shadow',
                            transitionDuration: '300ms'
                        }}
                    >
                        <div className="flex flex-col items-center">
                            <div className="mb-2">{icon}</div>
                            <span className="text-lg font-medium text-gray-700">{name}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full border-t border-gray-200 my-6"></div>

            <h2 className="text-2xl font-semibold mb-6 text-stone-700 text-center">Backend</h2>
            <div className="flex overflow-x-auto space-x-4 px-2 py-4">
                {backendSkills.map(({ name, icon }, index) => (
                    <div
                        key={name}
                        className={`flex flex-col items-center p-4 bg-white hover:bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 w-full ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            transitionDelay: getAnimationDelay(index + frontendSkills.length),
                            transitionProperty: 'transform, opacity, box-shadow',
                            transitionDuration: '300ms'
                        }}
                    >
                        <div className="flex flex-col items-center">
                            <div className="mb-2">{icon}</div>
                            <span className="text-lg font-medium text-gray-700 text-center">{name}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full border-t border-gray-200 my-6"></div>

            <h2 className="text-2xl font-semibold mb-6 text-stone-700 text-center">Tools and Technologies</h2>
            <div className="flex overflow-x-auto space-x-4 px-2 py-4">
                {tools.map(({ name, icon }, index) => (
                    <div
                        key={name}
                        className={`flex flex-col items-center p-4 bg-white hover:bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 w-full ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            transitionDelay: getAnimationDelay(index + frontendSkills.length),
                            transitionProperty: 'transform, opacity, box-shadow',
                            transitionDuration: '300ms'
                        }}
                    >
                        <div className="flex flex-col items-center">
                            <div className="mb-2">{icon}</div>
                            <span className="text-lg font-medium text-gray-700">{name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}