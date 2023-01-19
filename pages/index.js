import AboutSection from "@/components/About/AboutSection";
import BusinessInformationSection from "@/components/BusinessInformation/BusinessInformationSection";
import ClientsSection from "@/components/Clients/ClientsSection";
import HeroSection from "@/components/Hero/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <BusinessInformationSection />
      <ClientsSection />
    </div>
  );
}
