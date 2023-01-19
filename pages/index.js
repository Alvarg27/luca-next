import AboutSection from "@/components/About/AboutSection";
import BusinessInformationSection from "@/components/BusinessInformation/BusinessInformationSection";
import ClientsSection from "@/components/Clients/ClientsSection";
import HeroSection from "@/components/Hero/HeroSection";
import ShowcaseSection from "@/components/Showcase/ShowcaseSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <BusinessInformationSection />
      <ClientsSection />
      <ShowcaseSection />
    </div>
  );
}
