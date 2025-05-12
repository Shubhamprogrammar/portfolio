"use client";

import { useForm } from "react-hook-form";
import React, { useRef } from "react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

export default function Contact() {
    const form = useForm({
        defaultValues: {
            username: "",
            email: "",
            message: "",
        },
    });
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.2, once: true });

    const onSubmit = (data: any) => {
        console.log("Form submitted:", data);
        // Handle form data submission (API call, email, etc.)
    };

    return (
        <div ref={ref} className="max-w-5xl mx-auto p-6 mt-10 mb-10">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative mb-8 ml-5 py-2">
                    <h1 className="text-3xl font-semibold text-[var(--brown)]">Send me a Message</h1>
                    <motion.div
                        className="absolute left-0 bottom-[-10px] h-1 bg-[var(--brown)] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: inView ? "15rem" : 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                </div>
                <div className="flex flex-col lg:flex-row">

                    {/* Left Column - Form and Social Icons */}
                    <div className="w-full p-6 lg:w-3/5">

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name<span className="text-red-500 ml-[-5px]">*</span></FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email<span className="text-red-500 ml-[-5px]">*</span></FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="you@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message/Feedback<span className="text-red-500 ml-[-5px]">*</span></FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Type your message here..." className="min-h-32" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="w-full bg-[var(--brown)] hover:bg-[var(--brown)]/90">Submit</Button>
                            </form>
                        </Form>

                        <hr className="my-6" />

                        <div className="flex justify-center space-x-6 text-3xl">
                            <a href="https://wa.me/+918850093749" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                                <FaWhatsapp className="text-[#25D366]" />
                            </a>
                            <a href="https://www.linkedin.com/in/shubham-maurya-9932a3268/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                                <FaLinkedin className="text-[#0077B5]" />
                            </a>
                            <a href="https://www.instagram.com/maurya_shubham29/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                                <FaInstagram className="text-[#E4405F]" />
                            </a>
                        </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="hidden lg:block w-px bg-gray-200 self-stretch"></div>

                    {/* Right Column - Developer Info (hidden on mobile) */}
                    <div className="hidden lg:flex w-full lg:w-2/5 p-6 flex-col">
                        <div className="space-y-2">
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-bold text-[var(--brown)]">Shubham Maurya</h3>
                                <p className="text-lg text-gray-600">Full Stack Developer</p>
                            </div>

                            <div className="space-y-3 mt-6">
                                <div className="flex items-center gap-3 text-gray-700">
                                    <FaEnvelope className="text-[var(--brown)]" />
                                    <span>shubhammaurya@example.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <FaPhone className="text-[var(--brown)]" />
                                    <span>+91 8850093749</span>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <p className="text-gray-600 italic">"Crafting elegant solutions to complex problems"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}