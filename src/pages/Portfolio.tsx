import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Services from '@/components/Services';
import VCNITIExperience from '@/components/VCNITIExperience';
import Experience from '@/components/Experience';

import Work from '@/components/Work';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Portfolio = () => {
  const main = useRef<HTMLDivElement>(null);
  const smoother = useRef<ScrollSmoother | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  useGSAP(() => {
    if (!isLoading) {
      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
      });
    }

    return () => {
      smoother.current?.kill();
    };
  }, { scope: main, dependencies: [isLoading] });

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      <div ref={main} className={`min-h-screen overflow-x-hidden ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        <Header />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <Hero />

              <VCNITIExperience />
              <About />
              <TechStack />
              <Experience />
              <Services />
              <Work />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;