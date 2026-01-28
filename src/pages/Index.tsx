import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HeritageSection from "@/components/HeritageSection";
import JourneySection from "@/components/JourneySection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HeritageSection />
      <JourneySection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
