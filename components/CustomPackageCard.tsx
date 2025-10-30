"use client";

import React, { useState, useMemo } from 'react';

// Define the structure for custom features and their prices
interface CustomFeature {
    id: number;
    name: string;
    price: number; // Mock price per feature for calculation
    category: string;
    description: string;
}

const customFeatures: CustomFeature[] = [
    { id: 1, name: "Microservices Architecture", price: 1000, category: "Architecture", description: "Decoupled system for maximum scalability." },
    { id: 2, name: "Advanced Real-time Analytics", price: 800, category: "Data", description: "Integration with a custom analytics stack (e.g., Kafka, Spark)." },
    { id: 3, name: "Custom Payment Gateway Integration", price: 600, category: "Integrations", description: "Secure integration with a non-standard payment provider." },
    { id: 4, name: "AI/ML Integration (Prototype)", price: 1200, category: "AI/ML", description: "Prototype for a machine learning feature (e.g., recommendation engine)." },
    { id: 5, name: "Dedicated 12-Month SLA Support", price: 1500, category: "Support", description: "Guaranteed incident response times and 24/7 monitoring." },
];

export function CustomPackageCard() {
    const [selectedFeatures, setSelectedFeatures] = useState<number[]>([]);
    const basePrice = 500; // Starting cost for a custom project setup

    const toggleFeature = (id: number) => {
        setSelectedFeatures(prev =>
            prev.includes(id) ? prev.filter(featureId => featureId !== id) : [...prev, id]
        );
    };

    const calculatedPrice = useMemo(() => {
        const featureCost = customFeatures
            .filter(feature => selectedFeatures.includes(feature.id))
            .reduce((sum, feature) => sum + feature.price, 0);
        return basePrice + featureCost;
    }, [selectedFeatures]);

    const priceDisplay = calculatedPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    return (
        <div className="relative flex flex-col p-6 sm:p-8 rounded-xl h-full bg-gray-900/90 border border-indigo-500/80 shadow-2xl shadow-indigo-900/20">
            <div className="flex flex-col items-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-200 mb-1">Custom Request</h3>
                <p className="text-sm text-indigo-200/65 text-center mb-4">
                    Build your project from the ground up by selecting your required advanced features.
                </p>
                <div className="text-center">
                    <span className="font-nacelle text-4xl font-bold text-gray-50">{priceDisplay}</span>
                    <span className="text-indigo-400 font-semibold"> (Estimate)</span>
                </div>
            </div>

            <a
                className="btn group w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] mb-6"
                href="#contact"
            >
                Request Custom Quote
            </a>

            <div className="w-full text-left flex-grow">
                <h4 className="text-sm font-semibold uppercase text-indigo-400 mb-3">Select Advanced Modules:</h4>
                <ul className="space-y-3">
                    {customFeatures.map(feature => (
                        <li
                            key={feature.id}
                            className={`flex items-start gap-3 p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                                selectedFeatures.includes(feature.id)
                                    ? 'bg-indigo-500/20 ring-1 ring-indigo-500'
                                    : 'bg-gray-800/50 hover:bg-gray-700/50'
                            }`}
                            onClick={() => toggleFeature(feature.id)}
                        >
                            <svg
                                className={`mt-0.5 h-5 w-5 shrink-0 transition-colors ${
                                    selectedFeatures.includes(feature.id) ? "fill-indigo-400" : "fill-gray-600"
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                            </svg>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-200">{feature.name}</p>
                                <p className="text-xs text-indigo-200/65">{feature.description}</p>
                                <p className="text-xs font-semibold text-indigo-400/80 mt-1">
                                    +${feature.price}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
                <p className="mt-4 text-xs text-center text-gray-500 italic">
                    Note: Price is an instant estimate and requires final consultation.
                </p>
            </div>
        </div>
    );
}