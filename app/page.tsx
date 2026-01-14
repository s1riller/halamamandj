import Navbar from "@/components/ui/Navbar"
import HeroSection from "@/components/ui/HeroSection"
// import Footer from "@/components/Footer"
import BuryatPatternBackground from "@/components/ui/BuryatPatternBackground";
import Advantages from "@/components/ui/Advantages";
import BookingForm from "@/components/ui/BookingForm";
import Testimonials from "@/components/ui/Testimonials";
import Gallery from "@/components/ui/Gallery";
import FAQ from "@/components/ui/FAQ";
import FinalCTA from "@/components/ui/FinalCTA";
export default function HomePage() {
    return (
        <>

            <HeroSection backgroundImage="/imgs/page/1.jpg" />

            <Advantages />
            <Testimonials />
            <Gallery />

            <FAQ />
            <FinalCTA />
            <BuryatPatternBackground />
        </>
    )
}
