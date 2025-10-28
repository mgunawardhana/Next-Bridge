"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import Spotlight from "@/components/spotlight";

// Testimonial Images (Kept for user avatars)
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
import TestimonialImg06 from "@/public/images/testimonial-06.jpg";
import TestimonialImg07 from "@/public/images/testimonial-07.jpg";
import TestimonialImg08 from "@/public/images/testimonial-08.jpg";
import TestimonialImg09 from "@/public/images/testimonial-09.jpg";
import TestimonialImg10 from "@/public/images/testimonial-01.jpg";
import TestimonialImg11 from "@/public/images/testimonial-02.jpg";
import TestimonialImg12 from "@/public/images/testimonial-03.jpg";

const testimonials = [
    {
        img: TestimonialImg01,
        name: "Alex P.",
        company: "CTO, FinTech Startup",
        content:
            "The clarity in their Phase 1 Discovery was unmatched. We didn't just get requirements; we got a fully validated MVP scope tied to clear KPIs. It cut our initial development risk by half and secured investor confidence immediately.",
        categories: [1, 3, 5],
    },
    {
        img: TestimonialImg02,
        name: "Sarah K.",
        company: "Head of Product, E-Commerce",
        content:
            "Their approach to Requirements Engineering saved us months of rework. Using Gherkin-style Acceptance Criteria meant there was zero ambiguity. We knew exactly what 'done' looked like before the sprint even started.",
        categories: [1, 2, 4],
    },
    {
        img: TestimonialImg03,
        name: "Mark D.",
        company: "Lead Engineer, Logistics",
        content:
            "The focus on Infrastructure as Code (IaC) and the CI/CD pipeline was game-changing. Our deployment process is now fully automated and auditable, giving our operations team true confidence in every release.",
        categories: [1, 2, 5],
    },
    {
        img: TestimonialImg04,
        name: "Dr. Evelyn M.",
        company: "CEO, HealthTech Venture",
        content:
            "We needed absolute assurance on security and compliance. Their DevSecOps workflow, including the independent Penetration Test Report, provided the rigorous validation required for our regulated industry.",
        categories: [1, 4],
    },
    {
        img: TestimonialImg05,
        name: "Brian E.",
        company: "Director of Operations, SaaS",
        content:
            "The live financial reporting and velocity charts were instrumental. It provided the ultimate transparency into budget burn and project speed, allowing us to make proactive decisions instead of reacting to overruns.",
        categories: [1, 3, 5],
    },
    {
        img: TestimonialImg06,
        name: "Jessica V.",
        company: "Product Owner, Real Estate",
        content:
            "The modular architecture they designed was exactly what we needed for long-term growth. It's scalable, maintainable, and built on Domain-Driven Design principles, truly future-proofing our platform.",
        categories: [1, 2, 3],
    },
    {
        img: TestimonialImg07,
        name: "Liam L.",
        company: "Founder, B2B Platform",
        content:
            "The dedicated L3 Support post-launch has been invaluable. Their 24/7 Observability Stack caught a performance issue before it became an outage. That level of proactive service protects our reputation.",
        categories: [1, 4, 5],
    },
    {
        img: TestimonialImg08,
        name: "David K.",
        company: "Project Manager, Media",
        content:
            "We demanded real-time insight into the codebase. Their seamless integration with our version control system provided full code transparency and auditability, establishing immediate trust with our technical team.",
        categories: [1, 3],
    },
    {
        img: TestimonialImg09,
        name: "Maria P.",
        company: "Head of Strategy, Retail",
        content:
            "Their data-driven approach to product evolution ensured our new features were always high-impact. The A/B testing and quarterly value reviews kept us focused on true business value and ROI, not vanity features.",
        categories: [1, 5],
    },
    {
        img: TestimonialImg10,
        name: "Robert M.",
        company: "CTO, Manufacturing",
        content:
            "When they said 'zero-downtime deployment,' they meant it. The final go-live was the smoothest in our company history, thanks to their robust automation and clear rollback procedures.",
        categories: [1, 2, 4],
    },
    {
        img: TestimonialImg11,
        name: "Jenny S.",
        company: "VP of Engineering, EdTech",
        content:
            "The most valuable part of the partnership was the Risk Register. Knowing the mitigation plan for every potential project threat allowed our board to sign off with absolute confidence.",
        categories: [1, 3, 4],
    },
    {
        img: TestimonialImg12,
        name: "Felipe G.",
        company: "Founder, Consulting Firm",
        content:
            "We were concerned about technical debt, but their Test-Driven Development (TDD) practice ensured the codebase was clean and highly maintainable, minimizing our long-term support costs dramatically.",
        categories: [1, 4, 5],
    },
];

// Define custom categories
const categories = [
    { id: 1, name: "View All", iconPath: "M.062 10.003a1 1 0 0 1 1.947.455c-.019.08.01.152.078.19l5.83 3.333c.052.03.115.03.168 0l5.83-3.333a.163.163 0 0 0 .078-.188 1 1 0 0 1 1.947-.459 2.161 2.161 0 0 1-1.032 2.384l-5.83 3.331a2.168 2.168 0 0 1-2.154 0l-5.83-3.331a2.162 2.162 0 0 1-1.032-2.382Zm7.854-7.981-5.83 3.332a.17.17 0 0 0 0 .295l5.828 3.33c.054.031.118.031.17.002l5.83-3.333a.17.17 0 0 0 0-.294L8.085 2.023a.172.172 0 0 0-.17-.001ZM9.076.285l5.83 3.332c1.458.833 1.458 2.935 0 3.768l-5.83 3.333c-.667.38-1.485.38-2.153-.001l-5.83-3.332c-1.457-.833-1.457-2.935 0-3.767L6.925.285a2.173 2.173 0 0 1 2.15 0Z" },
    { id: 2, name: "Scalability & Architecture", iconPath: "M6.5 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM9 6.855A3.502 3.502 0 0 0 8 0a3.5 3.5 0 0 0-1 6.855v1.656L5.534 9.65a3.5 3.5 0 1 0 1.229 1.578L8 10.267l1.238.962a3.5 3.5 0 1 0 1.229-1.578L9 8.511V6.855ZM11.303 11.595c.005-.005.01-.01.013-.016l.012-.016a1.5 1.5 0 1 1-.025.032ZM3.5 11A1.497 1.497 0 0 1 5 12.5 1.5 1.5 0 1 1 3.5 11Z" },
    { id: 3, name: "Process Transparency", iconPath: "M2.428 10c.665-1.815 1.98-3.604 3.44-4.802-.6-1.807-1.443-3.079-2.29-3.18-1.91-.227-2.246 2.04-.174 2.962a1 1 0 1 1-.813 1.827C-1.407 5.028-.589-.491 3.815.032c1.605.191 2.925 1.811 3.79 4.07.979-.427 1.937-.51 2.735-.092.818.429 1.143 1.123 1.294 2.148.015.1.022.149.043.32.542-.537 1.003-.797 1.693-.622.64.162.894.493 1.195 1.147l.018.04a1 1 0 0 1 1.133 1.61c-.46.47-1.12.574-1.744.398a1.661 1.661 0 0 1-.87-.592 2.127 2.127 0 0 1-.224-.349 3.225 3.225 0 0 1-.55.477c-.377.253-.8.368-1.259.267-.993-.218-1.21-.779-1.367-2.05-.027-.22-.033-.262-.046-.353-.067-.452-.144-.617-.244-.67-.225-.118-.665-.013-1.206.278.297 1.243.475 2.587.516 3.941H15a1 1 0 0 1 0 2H8.68l-.025.285c-.173 1.918-.906 3.381-2.654 3.668-1.5.246-3.013-.47-3.677-1.858-.29-.637-.39-1.35-.342-2.095H1a1 1 0 0 1 0-2h1.428Zm2.11 0h2.175a18.602 18.602 0 0 0-.284-2.577c-.205.202-.408.42-.606.654A9.596 9.596 0 0 0 4.537 10Zm2.135 2H3.942c-.032.465.03.888.194 1.25.258.538.89.836 1.54.73.546-.09.888-.772.988-1.875L6.673 12Z" },
    { id: 4, name: "Quality & Assurance", iconPath: "M3.757 3.758a6 6 0 0 1 8.485 8.485 5.992 5.992 0 0 1-5.301 1.664 1 1 0 1 0-.351 1.969 8 8 0 1 0-4.247-2.218 1 1 0 0 0 1.415-.001L9.12 8.294v1.827a1 1 0 1 0 2 0v-4.2a.997.997 0 0 0-1-1.042H5.879a1 1 0 1 0 0 2h1.829l-4.599 4.598a6 6 0 0 1 .648-7.719Z" },
    { id: 5, name: "Agile & Product Dev", iconPath: "M13.95.879a3 3 0 0 0-4.243 0L1.293 9.293a1 1 0 0 0-.274.51l-1 5a1 1 0 0 0 1.177 1.177l5-1a1 1 0 0 0 .511-.273l1.16-1.16a1 1 0 0 0-1.414-1.414l-.946.946-3.232.646.646-3.232 8.2-8.2a1 1 0 0 1 1.414 0l1.172 1.172a1 1 0 0 1 0 1.414l-.55.549a1 1 0 0 0 1.415 1.414l.55-.55a3 3 0 0 0 0-4.241L13.948.879ZM3.25 4.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm11.474 6.029-1.521-.752-.752-1.521c-.168-.341-.73-.341-.896 0l-.752 1.52-1.521.753a.498.498 0 0 0 0 .896l1.52.752.753 1.52a.5.5 0 0 0 .896 0l.752-1.52 1.52-.752a.498.498 0 0 0 0-.896Z" },
];

export default function Testimonials() {
    const masonryContainer = useMasonry();
    const [category, setCategory] = useState<number>(1);

    return (
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
                {/* Section header */}
                <div className="mx-auto max-w-3xl pb-12 text-center">
                    <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                        Our Clients Trust Our Process
                    </h2>
                    <p className="text-lg text-indigo-200/65">
                        Hear directly from CTOs, Product Owners, and Engineers on how our transparent process and technical expertise deliver predictable results and exceptional value.
                    </p>
                </div>

                <div>
                    {/* Buttons */}
                    <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
                        <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${cat.id === category ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                                    aria-pressed={cat.id === category}
                                    onClick={() => setCategory(cat.id)}
                                >
                                    <svg
                                        className={`fill-current ${cat.id === category ? "text-indigo-500" : "text-gray-600"}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height={16}
                                    >
                                        <path d={cat.iconPath} />
                                    </svg>
                                    <span>{cat.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Cards - WRAPPED IN SPOTLIGHT */}
                    <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="group">
                                <Testimonial testimonial={testimonial} category={category}>
                                    {testimonial.content}
                                </Testimonial>
                            </div>
                        ))}
                    </Spotlight>
                </div>
            </div>
        </div>
    );
}

export function Testimonial({
                                testimonial,
                                category,
                                children,
                            }: {
    testimonial: {
        img: StaticImageData;
        name: string;
        company: string;
        content: string;
        categories: number[];
    };
    category: number;
    children: React.ReactNode;
}) {
    return (
        <article
            className={`
        group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px
        
        // Spotlight glow effect (REDUCED OPACITY)
        before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-[24rem] before:w-[24rem] 
        before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/60 
        before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 
        
        // Subtle outer glow (REDUCED OPACITY)
        after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-[28rem] after:w-[28rem]
        after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 
        after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 
        
        // Hover effects: Show glow and lift the card slightly (slow move)
        hover:after:opacity-20 group-hover/card:before:opacity-100 hover:-translate-y-1 transition-all duration-300 ease-in-out
        ${!testimonial.categories.includes(category) ? "opacity-30" : ""}
      `}
        >
            {/* --- Inner Content Wrapper (This masks the spotlight from the center) --- */}
            <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">

                {/* Content */}
                <div className="p-5">
                    <p className="text-indigo-200/65 before:content-['“'] after:content-['”']">
                        {children}
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                        <Image
                            className="inline-flex shrink-0 rounded-full"
                            src={testimonial.img}
                            width={36}
                            height={36}
                            alt={testimonial.name}
                        />
                        <div className="text-sm font-medium text-gray-200">
                            <span>{testimonial.name}</span>
                            <span className="text-gray-700"> - </span>
                            <span
                                className="text-indigo-200/65"
                            >
                  {testimonial.company}
                </span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}