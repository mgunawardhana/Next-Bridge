// app/custom-quote/page.tsx
"use client";

import React, { useState } from "react";

const countries = [
    "United States", "United Kingdom", "Canada", "Australia", "Germany", "France",
    "India", "China", "Japan", "Brazil", "Mexico", "South Africa", "Italy", "Spain",
    "Netherlands", "Sweden", "Norway", "Denmark", "Finland", "Switzerland", "Austria",
    "Belgium", "Ireland", "New Zealand", "Singapore", "Malaysia", "Thailand", "Indonesia",
    "Philippines", "Vietnam", "South Korea", "Pakistan", "Bangladesh", "Egypt", "Nigeria",
    "Kenya", "Ghana", "United Arab Emirates", "Saudi Arabia", "Turkey", "Russia", "Poland",
    "Czech Republic", "Portugal", "Greece", "Argentina", "Chile", "Colombia", "Peru",
    "Venezuela", "Sri Lanka", "Other"
];

export default function CustomQuotePage() {
    const [formData, setFormData] = useState({
        name: "",
        whatsapp: "",
        email: "",
        country: "",
        projectDesc: "",
        businessType: "",
        studentLevel: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here
        alert("Quote request submitted successfully!");
    };

    return (
        <div className="min-h-screen bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Request a Custom Quote
                    </h1>
                    <p className="text-lg text-gray-400">
                        Tell us about your project and we'll create a tailored solution for you
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 space-y-6">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                            placeholder="John Doe"
                        />
                    </div>

                    {/* WhatsApp */}
                    <div>
                        <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-2">
                            WhatsApp Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="whatsapp"
                            name="whatsapp"
                            required
                            value={formData.whatsapp}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                            placeholder="+1 234 567 8900"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                            placeholder="john@example.com"
                        />
                    </div>

                    {/* Country - DROPDOWN */}
                    <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-2">
                            Country <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="country"
                            name="country"
                            required
                            value={formData.country}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                        >
                            <option value="">Select your country</option>
                            {countries.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Business Type - Radio Buttons */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                            Business Type <span className="text-red-500">*</span>
                        </label>
                        <div className="space-y-3">
                            <label className="flex items-center p-4 bg-gray-800/30 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-800/50 transition">
                                <input
                                    type="radio"
                                    name="businessType"
                                    value="sme"
                                    checked={formData.businessType === "sme"}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-indigo-500 focus:ring-indigo-500 focus:ring-2"
                                />
                                <span className="ml-3 text-gray-300">SME Business</span>
                            </label>

                            <label className="flex items-center p-4 bg-gray-800/30 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-800/50 transition">
                                <input
                                    type="radio"
                                    name="businessType"
                                    value="enterprise"
                                    checked={formData.businessType === "enterprise"}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-indigo-500 focus:ring-indigo-500 focus:ring-2"
                                />
                                <span className="ml-3 text-gray-300">Enterprise</span>
                            </label>

                            <label className="flex items-center p-4 bg-gray-800/30 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-800/50 transition group">
                                <input
                                    type="radio"
                                    name="businessType"
                                    value="student"
                                    checked={formData.businessType === "student"}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-indigo-500 focus:ring-indigo-500 focus:ring-2"
                                />
                                <div className="ml-3 flex-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-300">Student</span>
                                        <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-400 text-xs font-semibold rounded-full">
                                            Special Offers Available
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Students get exclusive discounts and flexible payment options
                                    </p>
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Student Level Dropdown - Conditional */}
                    {formData.businessType === "student" && (
                        <div className="animate-fadeIn">
                            <label htmlFor="studentLevel" className="block text-sm font-medium text-gray-300 mb-2">
                                Education Level <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="studentLevel"
                                name="studentLevel"
                                required
                                value={formData.studentLevel}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                            >
                                <option value="">Select your education level</option>
                                <option value="pending-diploma">Pending Diploma</option>
                                <option value="diploma">Diploma</option>
                                <option value="pending-degree">Pending Degree</option>
                                <option value="degree">Degree</option>
                                <option value="pending-msc">Pending MSc</option>
                                <option value="msc">MSc</option>
                                <option value="pending-phd">Pending PhD</option>
                                <option value="phd">PhD</option>
                            </select>

                            {/* Student Special Offer Notice */}
                            <div className="mt-3 p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-lg">
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <h4 className="text-sm font-semibold text-indigo-300 mb-1">
                                            🎓 Student Special Offer
                                        </h4>
                                        <ul className="text-xs text-gray-400 space-y-1">
                                            <li>• Up to 25% discount on all packages</li>
                                            <li>• Flexible payment plans available</li>
                                            <li>• Free mentorship sessions included</li>
                                            <li>• Extended support period</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Project Description */}
                    <div>
                        <label htmlFor="projectDesc" className="block text-sm font-medium text-gray-300 mb-2">
                            Project Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="projectDesc"
                            name="projectDesc"
                            required
                            value={formData.projectDesc}
                            onChange={handleInputChange}
                            rows={6}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
                            placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-lg hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-950"
                        >
                            Submit Quote Request
                        </button>
                    </div>

                    {/* Helper Text */}
                    <p className="text-sm text-gray-500 text-center pt-2">
                        We'll get back to you within 24 hours with a custom quote
                    </p>
                </form>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-in-out;
                }
            `}</style>
        </div>
    );
}