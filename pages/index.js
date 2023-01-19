import AboutSection from "@/components/About/AboutSection";
import BusinessInformationSection from "@/components/BusinessInformation/BusinessInformationSection";
import ClientsSection from "@/components/Clients/ClientsSection";
import HeroSection from "@/components/Hero/HeroSection";
import ShowcaseSection from "@/components/Showcase/ShowcaseSection";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (!router.query.scroll) {
      return;
    }
    window.scrollTo(0, router.query.scroll);
    router.push("/", undefined, { shallow: true });
  }, [router]);
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
