"use client";

import React, { useState } from "react";
import { DeveloperCard } from "./DeveloperCard";

const developers = [
    {
        id: 1,
        name: "Nimesh Piyumantha",
        role: "Senior Mobile Engineer",
        img: "/images/nimesh.jpg",
        username: "@nimma",
        bio: "Engineer passionate about elegant code, performance, and scalable mobile systems. Expert in architecting high-performing Flutter applications.",
        specialization: "Mobile Development (Flutter)",
        experience: "3+ Years",
        companies: ["Kingteza", "Fcode Labs"],
        degree: "B.Eng (Hons) Software Engineering"
    },

    {
        id: 2,
        name: "Sandun Induranga",
        role: "Software Engineer",
        img: "/images/sadun.jpg",
        username: "@sadun",
        bio: "Flutter & TypeScript-focused engineer building cross-platform mobile apps, web applications, and Python-powered automation systems.",
        specialization: "Mobile & Web Development",
        experience: "3+ Years",
        companies: ["Fcode Labs (Pvt) Ltd"],
        degree: "B.Eng (Hons) Software Engineering"
    },
    {
        id: 3,
        name: "Maneesha Gunawardhana",
        role: "Full-Stack Developer",
        img: "/images/testimonial-07.jpg",
        username: "@mgunawardhana",
        bio: "Full-stack engineer specializing in React, Next.js, and enterprise-grade backend systems with Spring Boot & Python.",
        specialization: "Full Stack",
        experience: "3+ Years",
        companies: ["Dialog Axiata", "ZinCat Technologies"],
        degree: "BSc (Hons) Software Engineering"
    }
];


export default function DevelopersSlider() {
    const [currentSlide, setCurrentSlide] = useState(1);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % developers.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + developers.length) % developers.length);
    };

    const centerIndex = currentSlide;
    const prevIndex = (currentSlide - 1 + developers.length) % developers.length;
    const nextIndex = (currentSlide + 1) % developers.length;

    const visibleIndexes = [prevIndex, centerIndex, nextIndex];

    const getCardPositionStyle = (index: number): React.CSSProperties => {
        if (index === centerIndex) {
            // Mobile and Desktop: Centered
            return { left: '50%', transform: 'translateX(-50%)' };
        }
        if (index === prevIndex) {
            // Desktop Only: Offset left (Mobile cards are hidden via CSS in DeveloperCard)
            return { left: '0%', transform: 'translateX(-200px)' };
        }
        if (index === nextIndex) {
            // Desktop Only: Offset right
            return { right: '0%', transform: 'translateX(200px)' };
        }
        return { display: 'none' };
    };

    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="pb-12 md:pb-20">
                    <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-center pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                        Meet Our Elite Team
                    </h2>
                    <p className="text-center text-lg text-indigo-200/65 mb-16">
                        Explore the profiles of our specialized engineers and their core competencies.
                    </p>

                    {/* Slider Container: Height is responsive to fit the largest card on mobile and desktop */}
                    <div className="relative mx-auto max-w-full h-[550px] md:h-[600px] flex justify-center items-center">

                        {developers.map((dev, index) => {
                            const isVisible = visibleIndexes.includes(index);
                            if (!isVisible) return null;

                            return (
                                <DeveloperCard
                                    key={dev.id}
                                    developer={dev}
                                    isCenter={index === centerIndex}
                                    style={getCardPositionStyle(index)}
                                />
                            );
                        })}

                        {/* Navigation Buttons */}
                        <button
                            onClick={handlePrev}
                            // Adjusted position to be slightly outside the visible card area
                            className="absolute left-0 top-1/2 -translate-y-1/2 ml-4 md:-ml-12 p-4 rounded-full bg-gray-800/80 text-white hover:bg-indigo-600 transition-all z-20"
                            aria-label="Previous Developer"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        </button>
                        <button
                            onClick={handleNext}
                            // Adjusted position to be slightly outside the visible card area
                            className="absolute right-0 top-1/2 -translate-y-1/2 mr-4 md:-mr-12 p-4 rounded-full bg-gray-800/80 text-white hover:bg-indigo-600 transition-all z-20"
                            aria-label="Next Developer"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}