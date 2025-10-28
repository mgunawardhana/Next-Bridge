import Services from "@/app/(default)/services/page";
import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export const metadata = {
    title: "Home - Open PRO", description: "Page description",
};

export default function Home() {
    return (<>
            <PageIllustration/>
            <Hero/>
            <Workflows/>
            <Features/>
            <Testimonials/>
            <Services/>
            <Cta/>
        </>);
}
