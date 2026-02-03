import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import ExperienceCTA from "@/components/ExperienceCTA";
import WhyChooseUs from "@/components/WhyChooseUs";
import PopularPackages from "@/components/PopularPackages";
import Testimonials from "@/components/Testimonials";
import TourBuilderCTA from "@/components/TourBuilderCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedDestinations />
        <ExperienceCTA />
        <WhyChooseUs />
        <PopularPackages />
        <TourBuilderCTA />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
