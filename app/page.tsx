import CTASection from "@/components/sections/CTASection";
import DiningSection from "@/components/sections/DiningSection";
import EntertainmentSection from "@/components/sections/EntertainmentSection";
import EventsSection from "@/components/sections/EventsSection";
import HeroSection from "@/components/sections/HeroSection";
import LuxurySection from "@/components/sections/LuxurySection";
import RetailSection from "@/components/sections/RetailSection";
import StatsSection from "@/components/sections/StatsSection";
import DeckRail from "@/components/ui/DeckRail";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <DeckRail />
      <main>
        <HeroSection />
        <StatsSection />
        <RetailSection />
        <LuxurySection />
        <DiningSection />
        <EntertainmentSection />
        <EventsSection />
        <CTASection />
      </main>
    </>
  );
}
