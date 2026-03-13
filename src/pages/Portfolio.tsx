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
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Portfolio = () => {
  const main = useRef<HTMLDivElement>(null);
  const smoother = useRef<ScrollSmoother | null>(null);

  useGSAP(() => {
    // create the smooth scroller
    smoother.current = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
    });

    return () => {
      smoother.current?.kill();
    };
  }, { scope: main });

  return (
    <div ref={main} id="smooth-wrapper" className="min-h-screen overflow-x-hidden">
      <div id="smooth-content">
        <Header />
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
  );
};

export default Portfolio;