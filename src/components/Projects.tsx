"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const projects = [
  {
    title: "Deja Brew Website",
    description:
      "A modern and responsive website for a premium coffee shop, offering a seamless browsing experience for customers.",
    tech: ["HTML", "Tailwind CSS", "TypeScript", "CT3A", "React.js"],
    image: "/assets/deja.png",
    link:"https://dejabrew-website.vercel.app/"
  },
  {
    title: "Sarvavyapi - The Real Estate",
    description:
      "A full-stack real estate platform where users can browse, list, and inquire about properties with ease.",
    tech: [
      "HTML",
      "Bootstrap",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    image: "/assets/sarvavyapi.png",
    link:"https://sarvavyapi.vercel.app/"
  },
  {
    title: "Open Your Hearts",
    description:
      "A donation management platform designed to connect donors with NGOs in need across various categories.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    image: "/assets/hearts.png",
    link:"https://openyourhearts.vercel.app/",
  },
  {
    title: "NewsApp",
    description:
      "A dynamic news application that fetches the latest headlines in real-time from NewsAPI with category filters.",
    tech: ["React.js", "NewsAPI", "HTML", "CSS3", "Bootstrap"],
    image: "/assets/news.png",
    link:"https://github.com/Shubhamprogrammar/newsapp",
  },
  {
    title: "TextUtils",
    description:
      "A utility web app for performing common text manipulations like case conversion, word counting, and more.",
    tech: ["React.js", "HTML", "CSS3", "Bootstrap"],
    image: "/assets/textutils.png",
    link:"https://github.com/Shubhamprogrammar/textutils",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2, once: true });

  return (
    <section
      className="flex flex-col items-center justify-center px-4 py-16 space-y-12"
      ref={ref}
      id="projects-section"
    >
      {/* Section Header */}
      <div className="relative mb-8 text-center">
        <h1 className="text-4xl font-bold text-[var(--brown)]">My Projects</h1>
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] h-1 bg-[var(--brown)] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: inView ? "8rem" : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>

      {/* Projects */}
      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          whileHover={{ scale: 1.03 }}
          className="w-full max-w-5xl"
        >
          <Card className="flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 mt-5">
            <div className="flex flex-col md:flex-row w-full">
              {/* Image */}
              <div className="w-full md:w-3/5 md:order-last p-4 flex justify-center items-center">
                <div className="relative w-full h-full max-h-96">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={400}
                    className="rounded-xl border border-[var(--brown)] shadow-md object-cover w-full h-full"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-2/5 md:order-first p-6 space-y-4">
                <CardHeader className="p-0">
                  <CardTitle className="text-2xl font-semibold text-[var(--brown)]">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-500 mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-2">
                  <h3 className="text-sm font-semibold text-gray-700">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((techItem, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="px-2 py-1 text-xs rounded-full bg-[var(--brown)] text-white font-medium"
                      >
                        {techItem}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-0">
                  <Button className="mt-2 bg-[var(--brown)] hover:bg-[var(--dark-brown)] transition">
                   <Link href={project.link} target="_blank"> Visit Project</Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </section>
  );
}
