// app/page.tsx
import type { Metadata } from "next";
import Services from "@/app/(default)/services/page";
import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import DevelopersSlider from "@/components/DevelopersSlider";
import Script from "next/script";

export const metadata: Metadata = {
    title:
        "Enterprise Consultation, Software Development & Real-Time Transparency",
    description:
        "Enterprise consultation and software development with unrivaled transparency: real-time Git access, milestone dashboards, budget tracking, CI/CD visibility, and zero-downtime deployments. Agile + DevSecOps methodology delivers scalable, secure platforms with full audit trails and proactive risk management.",
    openGraph: {
        title:
            "Enterprise Consultation, Software Development & Real-Time Transparency",
        description:
            "Real-time code, budget, and risk visibility from day one. Zero-downtime deployments, 24/7 observability, and full audit trails.",
        type: "website",
        locale: "en_US",
        url: "https://yourdomain.com",
        siteName: "YourCompany",
    },
    twitter: {
        card: "summary_large_image",
        title:
            "Expert Consultation, Software Development & Real-Time Transparency",
        description:
            "Live Git, CI/CD, budget dashboards & zero-downtime releases.",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Transparent Enterprise Software Development",
    applicationCategory: "DeveloperApplication",
    offers: {
        "@type": "Offer",
        price: "Custom",
        priceCurrency: "USD",
    },
    featureList: [
        "Real-time Git & CI/CD visibility",
        "Live milestone & budget dashboards",
        "Zero-downtime blue-green deployments",
        "DevSecOps & automated pentests",
        "24/7 observability & L3 support",
    ],
};

export default function Home() {
    return (
        <>
            {/* JSON-LD injected via NextScript */}
            <Script
                id="json-ld-software"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <PageIllustration />
            <Hero />
            <Workflows />
            <DevelopersSlider />
            <Features />
            <Testimonials />
            <Services />
            <Cta />
        </>
    );
}