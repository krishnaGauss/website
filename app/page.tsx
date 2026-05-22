import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import HeroBlock from "@/components/ui/hero_block";
import FeatureSection from "@/components/FeatureSection";
import IndustriesSection from "@/components/IndustriesSection";
import LocationsSection from "@/components/LocationsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="hidden md:block relative z-10 md:-mt-16 md:-mb-16 px-4 sm:px-6 lg:px-16">
        <div
          style={{
            boxShadow:
              "0 10px 40px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.08)",
          }}
          className="rounded-2xl"
        >
          <HeroBlock />
        </div>
      </div>
      <ServiceSection />
      <FeatureSection />
      <IndustriesSection />
      <LocationsSection />
      <ProcessSection />
      <ContactUs />
    </>
  );
}
