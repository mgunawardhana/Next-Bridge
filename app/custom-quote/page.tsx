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

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Prepare the data to match the API format
            const apiData = {
                name: formData.name,
                whatsappNumber: formData.whatsapp,
                email: formData.email,
                country: formData.country,
                businessType: formData.businessType === "student"
                    ? `Student - ${formData.studentLevel}`
                    : formData.businessType,
                projectDescription: formData.projectDesc
            };

            console.log("Submitting data:", apiData);

            const response = await fetch('http://31.97.70.39:3005/api/spi', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(apiData)
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Failed to submit: ${response.statusText} - ${errorText}`);
            }

            const result = await response.json();
            console.log("Form submitted successfully:", result);

            setSubmitStatus({
                type: 'success',
                message: 'Quote request submitted successfully! We\'ll get back to you within 24 hours.'
            });

            // Reset form after successful submission
            setFormData({
                name: "",
                whatsapp: "",
                email: "",
                country: "",
                projectDesc: "",
                businessType: "",
                studentLevel: ""
            });

        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus({
                type: 'error',
                message: error instanceof Error ? error.message : 'Failed to submit quote request. Please try again or contact support.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
                >
                    <svg
                        className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Back</span>
                </button>

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Request a Custom Quote
                    </h1>
                    <p className="text-lg text-gray-400">
                        Tell us about your project and we'll create a tailored solution for you
                    </p>
                </div>

                {/* Status Message */}
                {submitStatus && (
                    <div className={`mb-6 p-4 rounded-lg ${
                        submitStatus.type === 'success'
                            ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                            : 'bg-red-500/10 border border-red-500/30 text-red-400'
                    }`}>
                        <div className="flex items-center gap-3">
                            {submitStatus.type === 'success' ? (
                                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                            )}
                            <p>{submitStatus.message}</p>
                        </div>
                    </div>
                )}

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
                            disabled={isSubmitting}
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
                            disabled={isSubmitting}
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
                            disabled={isSubmitting}
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
                            disabled={isSubmitting}
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
                                    disabled={isSubmitting}
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
                                    disabled={isSubmitting}
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
                                    disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                            disabled={isSubmitting}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-lg hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-950 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
                            ) : (
                                'Submit Quote Request'
                            )}
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