// components/ServiceCard.tsx
import React from "react";

export interface Feature {
    name: string;
    isAvailable: boolean;
}

export interface ServicePackage {
    id: number;
    name: string;
    tagline: string;
    price: string;
    pricePer: string;
    features: Feature[];
    className: string;
    buttonText: string;
    buttonClass: string;
}

const packageData: ServicePackage[] = [
    {
        id: 1,
        name: "Starter",
        tagline: "Perfect for small projects and MVPs",
        price: "$229",
        pricePer: "/project",
        features: [
            { name: "Frontend Development (React/Next.js)", isAvailable: true },
            { name: "Responsive Design", isAvailable: true },
            { name: "Up to 5 Pages/Components", isAvailable: true },
            { name: "Basic State Management", isAvailable: true },
            { name: "Mobile Optimization", isAvailable: true },
            { name: "1 Month Support", isAvailable: true },
            { name: "Basic Documentation", isAvailable: true },
            { name: "Full-Stack Development", isAvailable: false },
            { name: "Custom Backend API", isAvailable: false },
            { name: "Microservices Architecture", isAvailable: false },
        ],
        className: "bg-gray-900/50 border border-gray-700/50",
        buttonText: "Get Started Now",
        buttonClass: "bg-gradient-to-b from-gray-800 to-gray-800/60 text-gray-300 hover:from-gray-700 hover:to-gray-700/60",
    },
    {
        id: 2,
        name: "Full-Stack",
        tagline: "Complete solution for growing businesses",
        price: "$549",
        pricePer: "/project",
        features: [
            { name: "Frontend Development (React/Next.js)", isAvailable: true },
            { name: "Responsive Design", isAvailable: true },
            { name: "Up to 5 Pages/Components", isAvailable: true },
            { name: "Basic State Management", isAvailable: true },
            { name: "Mobile Optimization", isAvailable: true },
            { name: "Full-Stack Development", isAvailable: true },
            { name: "Custom Backend API (Spring Boot/Node.js)", isAvailable: true },
            { name: "Database Design & Integration", isAvailable: true },
            { name: "Authentication & Authorization", isAvailable: true },
            { name: "RESTful/GraphQL APIs", isAvailable: true },
            { name: "Cloud Deployment (AWS/Vercel)", isAvailable: true },
            { name: "3 Months Support", isAvailable: true },
            { name: "CI/CD Pipeline Setup", isAvailable: true },
            { name: "Comprehensive Documentation", isAvailable: true },
            { name: "Microservices Architecture", isAvailable: false },
        ],
        className: "bg-black/90 border-2 border-indigo-500 ring-2 ring-indigo-500/40 shadow-xl shadow-indigo-500/20",
        buttonText: "Get Started Now",
        buttonClass: "bg-gradient-to-t from-indigo-600 to-indigo-500 text-white shadow-lg hover:from-indigo-500 hover:to-indigo-400",
    },
    {
        id: 3,
        name: "Enterprise",
        tagline: "Advanced solutions for complex systems",
        price: "$2599",
        pricePer: "/project",
        features: [
            { name: "Frontend Development (React/Next.js)", isAvailable: true },
            { name: "Responsive Design", isAvailable: true },
            { name: "Up to 5 Pages/Components", isAvailable: true },
            { name: "Basic State Management", isAvailable: true },
            { name: "Mobile Optimization", isAvailable: true },
            { name: "Full-Stack Development", isAvailable: true },
            { name: "Custom Backend API", isAvailable: true },
            { name: "Microservices Architecture", isAvailable: true },
            { name: "Advanced Backend Systems", isAvailable: true },
            { name: "Multi-Database Integration", isAvailable: true },
            { name: "Performance Optimization", isAvailable: true },
            { name: "DevOps & Infrastructure", isAvailable: true },
            { name: "Security Auditing", isAvailable: true },
            { name: "6 Months Support", isAvailable: true },
            { name: "Team Training Sessions", isAvailable: true },
            { name: "Architecture Consulting", isAvailable: true },
            { name: "Priority Support", isAvailable: true },
        ],
        className: "bg-gray-900/50 border border-gray-700/50",
        buttonText: "Get Started Now",
        buttonClass: "bg-gradient-to-b from-gray-800 to-gray-800/60 text-gray-300 hover:from-gray-700 hover:to-gray-700/60",
    },
];

export function ServiceCard({ pkg }: { pkg: ServicePackage }) {
    return (
        <div
            className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${pkg.className} overflow-hidden`}
        >
            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{pkg.tagline}</p>
                <div>
                    <span className="text-5xl font-bold text-white">{pkg.price}</span>
                    <span className="text-indigo-400 font-semibold">{pkg.pricePer}</span>
                </div>
            </div>

            {/* Button */}
            <button
                className={`w-full px-6 py-3 rounded-lg font-medium mb-6 transition-all duration-300 ${pkg.buttonClass}`}
            >
                {pkg.buttonText}
            </button>

            {/* Features List - CONTAINED WITHIN CARD */}
            <div className="flex-grow overflow-y-auto">
                <ul className="space-y-2.5">
                    {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-sm">
                            <svg
                                className={`mt-0.5 h-4 w-4 flex-shrink-0 ${feature.isAvailable ? "fill-indigo-500" : "fill-gray-600"}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                            </svg>
                            <span className={`leading-tight ${feature.isAvailable ? "text-gray-300" : "text-gray-600 line-through"}`}>
                                {feature.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default packageData;