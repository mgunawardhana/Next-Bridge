export const metadata = {
    title: "Service Packages - Open PRO",
    description: "Select from our basic, professional, enterprise, or custom software development packages.",
};

import ServicePackages from "@/components/ServicePackages";
import PageIllustration from "@/components/page-illustration";

export default function PackagesPage() {
    return (
        <>
            <PageIllustration />
            <ServicePackages />
        </>
    );
}