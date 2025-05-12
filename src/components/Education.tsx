"use client";
import React, { useEffect, useRef, useState } from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaSchool, FaArrowRight } from "react-icons/fa";

export default function Education() {
    const ref = useRef(null);
    const controls = useAnimation();
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    controls.start("visible");
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [controls]);

    const educationData = [
        {
            title: "SSC (Secondary School Certificate)",
            icon: <FaSchool className="text-3xl text-[var(--brown)] mb-2" />,
            college: "I.E.S. Navi Mumbai High School, Vashi, Navi Mumbai, Maharashtra",
            date: "June 2015 - Apr 2018",
        },
        {
            title: "HSC (Higher Secondary Certificate)",
            icon: <FaUniversity className="text-3xl text-[var(--brown)] mb-2" />,
            college: "Allen Swami Vivekananda Jr. College, Koparkhairane, Navi Mumbai, Maharashtra",
            date: "July 2018 - Apr 2020",
        },
        {
            title: "B.Sc. in Computer Science",
            icon: <FaGraduationCap className="text-3xl text-[var(--brown)] mb-2" />,
            college: "SIES (Nerul) College of Arts, Science and Commerce (Autonomous), Navi Mumbai, Maharashtra",
            date: "June 2022 - Apr 2025",
        }
    ];

    return (
        <div className="flex flex-col max-w-7xl px-4 mt-5 mx-auto" ref={ref}>
            {/* Header */}
            <div className="relative mb-8 text-center">
                <h1 className="text-4xl font-bold text-[var(--brown)]">Education</h1>
                <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] h-[3px] w-32 bg-[var(--brown)] rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: "8rem" } : { width: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                />
            </div>

            {/* Timeline with Cards and Arrows */}
            <div className="relative">
                {/* Desktop View (md and above) */}
                <div className="hidden md:flex items-center justify-center space-x-4">
                    {educationData.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <motion.div
                                className="w-full"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: idx * 0.2, duration: 0.5 }}
                            >
                                <Card className="hover:shadow-xl transition-shadow duration-300 h-full">
                                    <CardHeader className="flex flex-col items-center">
                                        {item.icon}
                                        <CardTitle className="text-lg font-lato font-semibold">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm text-justify font-lato">
                                        <p>{item.college}</p>
                                    </CardContent>
                                    <CardFooter className="text-xs font-lato text-gray-500">
                                        <p>{item.date}</p>
                                    </CardFooter>
                                </Card>
                            </motion.div>

                            {idx < educationData.length - 1 && (
                                <motion.div
                                    className="flex-shrink-0 flex items-center justify-center"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: idx * 0.2 + 0.3, duration: 0.5 }}
                                >
                                    <FaArrowRight className="text-2xl text-[var(--brown)]" />
                                </motion.div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Mobile View */}
                <div className="md:hidden space-y-24">
                    {educationData.map((item, idx) => (
                        <div key={idx} className="relative">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: idx * 0.2, duration: 0.5 }}
                            >
                                <Card className="hover:shadow-xl transition-shadow duration-300">
                                    <CardHeader className="flex flex-col items-center">
                                        {item.icon}
                                        <CardTitle className="text-lg font-lato font-semibold">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm text-justify font-lato">
                                        <p>{item.college}</p>
                                    </CardContent>
                                    <CardFooter className="text-xs font-lato text-gray-500">
                                        <p>{item.date}</p>
                                    </CardFooter>
                                </Card>
                            </motion.div>

                            {idx < educationData.length - 1 && (
                                <motion.div
                                    className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 z-10"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: idx * 0.2 + 0.3, duration: 0.5 }}
                                >
                                    <div className="rotate-90 p-1 mt-8">
                                        <FaArrowRight className="text-4xl text-[var(--brown)]" />
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}