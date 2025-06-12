
import { Helmet } from 'react-helmet-async';
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import ImpactStats from "@/components/ImpactStats";
import TestimonialsSection from "@/components/TestimonialsSection";
import LatestNews from "@/components/LatestNews";
import Honour from '@/components/Honour';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Narmadalaya Charitable Trust - Serving Humanity Through Education & Community Development</title>
        <meta name="description" content="Narmadalaya Charitable Trust is dedicated to serving humanity through education, healthcare, and community development. Join us in making a difference in the lives of those who need it most." />
        <meta name="keywords" content="charity, NGO, education, community development, donation, Narmadalaya, charitable trust" />
        <meta property="og:title" content="Narmadalaya Charitable Trust - Serving Humanity" />
        <meta property="og:description" content="Dedicated to serving humanity through education, healthcare, and community development." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://narmadalaya.org/" />
      </Helmet>

      <div className="min-h-screen">
        <HeroSlider />
        <AboutSection />
        <ProgramsSection />
        <ImpactStats />
        <Honour />
        {/* <TestimonialsSection /> */}
        <LatestNews />
      </div>
    </>
  );
};

export default Home;
