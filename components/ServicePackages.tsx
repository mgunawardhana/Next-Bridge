// components/ServicePackages.tsx
import React from "react";
import { ServiceCard } from "./ServiceCard";
import packageData from "./ServiceCard";
import Link from "next/link";

export default function ServicePackages() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950">
            <div className="max-w-7xl mx-auto">
                {/* Custom Solution Section - First */}
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Build Your Custom Solution
                    </h3>
                    <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                        Need something unique? Let's discuss your specific requirements and create a tailored package that perfectly fits your business needs.
                    </p>
                    <Link href="/custom-quote">
                        <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-lg hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                            Contact Us for Custom Quote
                        </button>
                    </Link>
                </div>

                {/* Divider */}
                <div className="relative my-16">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-800"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-gray-950 text-gray-500 font-medium">OR</span>
                    </div>
                </div>

                {/* Package Selection Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Choose Your Package
                    </h2>
                    <p className="text-lg text-gray-400">
                        Select the perfect plan for your project needs
                    </p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {packageData.map((pkg) => (
                        <ServiceCard key={pkg.id} pkg={pkg} />
                    ))}
                </div>
            </div>
        </section>
    );
}