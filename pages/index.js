import AboutSection from '@/components/About/AboutSection';
import BusinessInformationSection from '@/components/BusinessInformation/BusinessInformationSection';
import ClientsSection from '@/components/Clients/ClientsSection';
import GiftsSection from '@/components/Gifts/GiftsSection';
import HeroSection from '@/components/Hero/HeroSection';
import IncentivesSection from '@/components/Incentives/IncentivesSection';
import PromotionalSection from '@/components/Promotional/PromotionalSection';
import QuienesSomos from '@/components/QuienesSomos/QuienesSomos';
import ShowcaseSection from '@/components/Showcase/ShowcaseSection';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import DoubleCarousel from '@/components/DoubleCarousel/DoubleCarousel';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (!router.query.scroll) {
      return;
    }
    window.scrollTo(0, router.query.scroll);
    router.push('/', undefined, { shallow: true });
  }, [router]);
  return (
    <div>
      <HeroSection />
      {/*<AboutSection />*/}
      {/*<QuienesSomos />*/}
      {/* <BusinessInformationSection /> */}
      {/* <ShowcaseSection /> */}
      <DoubleCarousel />
      <IncentivesSection />
      <PromotionalSection />
      <GiftsSection />
      <ClientsSection />
    </div>
  );
}
