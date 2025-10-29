import Image from "next/image";
import { StaticImageData } from "next/image";

import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg07 from "@/public/images/testimonial-07.jpg";
import TestimonialImg06 from "@/public/images/testimonial-06.jpg";

interface Developer {
    id: number;
    name: string;
    role: string;
    img: string;
    username: string;
    bio: string;
    specialization: string;
    experience: string;
    companies: string[];
    degree: string;
}

export function getDeveloperImage(imgPath: string): StaticImageData {
    switch (imgPath) {
        case "/images/testimonial-01.jpg":
            return TestimonialImg01;
        case "/images/testimonial-02.jpg":
            return TestimonialImg02;
        case "/images/testimonial-07.jpg":
            return TestimonialImg07;
        case "/images/testimonial-06.jpg":
            return TestimonialImg06;
        default:
            return TestimonialImg01;
    }
}

const DetailRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between items-center text-sm">
        <span className="text-xs font-semibold uppercase text-gray-500">{label}</span>
        <span className="text-gray-300 font-medium text-xs sm:text-sm">{value}</span>
    </div>
);

export function DeveloperCard({
                                  developer,
                                  isCenter,
                                  style,
                              }: {
    developer: Developer;
    isCenter: boolean;
    style?: React.CSSProperties;
}) {
    const imageSource = getDeveloperImage(developer.img);

    return (
        <div
            style={style}
            className={`
        absolute transition-all duration-700 ease-in-out rounded-2xl shadow-2xl backdrop-blur-sm 
        flex flex-col border border-gray-700/50 text-center

        /* Mobile: Responsive width */
        ${isCenter ? "w-[90%] max-w-[340px] sm:max-w-sm" : "w-[85%] max-w-[320px] sm:max-w-sm"}

        /* Fixed height with internal flex growth */
        h-[560px] md:h-auto md:min-h-[520px] md:max-h-[560px]

        /* Responsive padding */
        p-4 sm:p-5 md:p-6

        /* Desktop styles */
        ${
                isCenter
                    ? "md:w-[380px] lg:w-[420px] md:scale-105 bg-gray-900/90"
                    : "md:w-[320px] lg:w-[340px] md:scale-90 bg-gray-950/80 grayscale md:opacity-70 md:blur-sm"
            }

        /* Hide side cards on mobile */
        ${!isCenter ? "hidden md:flex" : "flex"}
      `}
        >
            {/* Profile Photo */}
            <div className="flex justify-center items-center mb-3 md:mb-4 relative">
                <div className="flex-shrink-0">
                    <Image
                        className="rounded-full border-4 border-indigo-500/50"
                        src={imageSource}
                        width={isCenter ? 100 : 80}
                        height={isCenter ? 100 : 80}
                        alt={developer.name}
                        priority={isCenter}
                    />
                </div>

                {isCenter && (
                    <div className="absolute right-0 top-0 flex space-x-2 text-indigo-400">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c0 3.866-2.686 7-6 7s-6-3.134-6-7" />
                        </svg>
                    </div>
                )}
            </div>

            {/* Main Content - Takes available space */}
            <div className="flex flex-col items-center flex-grow justify-center space-y-1 md:space-y-2">
                <h3
                    className={`font-nacelle font-semibold text-gray-200 ${
                        isCenter ? "text-xl sm:text-2xl md:text-3xl" : "text-lg sm:text-xl"
                    }`}
                >
                    {developer.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400">{developer.username}</p>

                <p
                    className={`text-center text-indigo-200/65 line-clamp-3 ${
                        isCenter ? "text-sm sm:text-base" : "text-xs sm:text-sm"
                    }`}
                >
                    {developer.bio}
                </p>

                <p className="mt-2 text-xs sm:text-sm font-medium text-indigo-500/80">
                    {developer.role}
                </p>
            </div>

            {/* Center Card Details */}
            {isCenter && (
                <div className="mt-4 space-y-2 border-t border-gray-700/50 pt-3 text-left">
                    <DetailRow label="Specializes In" value={developer.specialization} />
                    <DetailRow label="Experience" value={developer.experience} />
                    <DetailRow label="Degree" value={developer.degree} />

                    <div className="pt-2">
            <span className="text-xs font-semibold uppercase text-gray-500 mb-1 block">
              Previous Companies
            </span>
                        <div className="flex flex-wrap gap-1.5">
                            {developer.companies.map((company, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-0.5 text-xs rounded-full bg-indigo-500/20 text-indigo-200 font-medium"
                                >
                  {company}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}