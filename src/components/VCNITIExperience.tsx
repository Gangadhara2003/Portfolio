import { CheckCircle2, XCircle, Server, Smartphone, Layout } from "lucide-react";
import { motion } from "framer-motion";
import ScrollAnimation from '@/components/ui/ScrollAnimation';

const VCNITIExperience = () => {
  return (
    <section className="relative overflow-hidden" id="vcniti-experience">
      {/* Problem / Solution Contrast Section */}
      <div className="grid md:grid-cols-2 min-h-[600px]">
        {/* LEFT - The Problem (Old Way) */}
        <div className="bg-charcoal p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-5" />
          <div className="relative z-10">
            <ScrollAnimation direction="right">
              <span className="font-anton text-sm uppercase tracking-[0.3em] text-sage/50 mb-6 block">
                The Old Way
              </span>
              <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl uppercase text-white leading-[0.9] mb-8">
                Traditional<br />
                <span className="text-sage/60">Commerce</span>
              </h2>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <ul className="space-y-5">
                {[
                  "Monolithic architecture, slow page loads",
                  "Limited SEO, poor mobile experience",
                  "Rigid platform locked to templates",
                  "Manual order processing, no automation",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-sage/70 font-satoshi text-base">
                    <XCircle className="w-5 h-5 text-red-400/70 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
          </div>
        </div>

        {/* RIGHT - The Solution (VCNITI Way) */}
        <div className="bg-dark-gray p-10 md:p-16 flex flex-col justify-center relative overflow-hidden border-l-4 border-golden">
          <div className="absolute inset-0 grid-bg opacity-5" />
          <div className="relative z-10">
            <ScrollAnimation direction="left">
              <span className="font-anton text-sm uppercase tracking-[0.3em] text-golden/70 mb-6 block">
                The VCNITI Way
              </span>
              <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl uppercase text-white leading-[0.9] mb-8">
                Headless<br />
                <span className="text-golden">Commerce</span>
              </h2>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <ul className="space-y-5">
                {[
                  "Next.js for superior SEO & Performance",
                  "Node.js middleware for complex logic",
                  "Custom Shopify Data Bridge",
                  "Firebase Auth & Security Rules",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-white/90 font-satoshi text-base">
                    <CheckCircle2 className="w-5 h-5 text-golden shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* Architecture Cards */}
      <div className="section-padding bg-charcoal">
        <div className="container mx-auto container-padding">
          <ScrollAnimation direction="up">
            <div className="text-center mb-16">
              <span className="font-anton text-sm uppercase tracking-[0.3em] text-golden/70 mb-4 block">Current Focus</span>
              <h2 className="font-anton text-4xl md:text-6xl lg:text-7xl uppercase text-white leading-[0.9]">
                Revolutionizing<br />
                <span className="relative inline-block">
                  <span className="relative z-10">Construction</span>
                  <span className="absolute inset-y-0 -inset-x-3 bg-golden -rotate-1 z-0" style={{ top: '15%', bottom: '10%' }}></span>
                </span>{' '}
                with Tech
              </h2>
              <p className="font-satoshi text-lg text-sage/70 mt-6 max-w-2xl mx-auto">
                Leading the architectural transition to a high-performance headless commerce platform at{' '}
                <a href="https://vcniti.com" target="_blank" rel="noopener noreferrer" className="text-golden font-medium underline underline-offset-4 hover:text-golden/80 transition-colors">
                  VCNITI
                </a>.
              </p>
            </div>
          </ScrollAnimation>

          {/* 3-column architecture grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Frontend */}
            <ScrollAnimation direction="up" delay={0}>
              <div className="p-8 bg-white/5 border border-white/10 hover:border-golden/30 transition-all duration-300 card-transition group">
                <div className="h-14 w-14 flex items-center justify-center bg-blue-500/10 text-blue-400 mb-6 border border-blue-500/20">
                  <Layout className="w-7 h-7" />
                </div>
                <h3 className="font-anton text-2xl uppercase text-white mb-4">Frontend Architecture</h3>
                <ul className="space-y-4">
                  {[
                    "Next.js for superior SEO & Performance",
                    "Framer Motion for fluid interactions",
                    "Smart UX with dynamic lazy-loading"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-sage/70 font-satoshi">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>

            {/* Backend */}
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="p-8 bg-white/5 border border-white/10 hover:border-golden/30 transition-all duration-300 card-transition group">
                <div className="h-14 w-14 flex items-center justify-center bg-green-500/10 text-green-400 mb-6 border border-green-500/20">
                  <Server className="w-7 h-7" />
                </div>
                <h3 className="font-anton text-2xl uppercase text-white mb-4">Backend Logic</h3>
                <ul className="space-y-4">
                  {[
                    "Node.js middleware for complex logic",
                    "Custom Shopify Data Bridge",
                    "Firebase Auth & Security Rules"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-sage/70 font-satoshi">
                      <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>

            {/* Mobile */}
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="p-8 bg-white/5 border border-white/10 hover:border-golden/30 transition-all duration-300 card-transition group">
                <div className="h-14 w-14 flex items-center justify-center bg-purple-500/10 text-purple-400 mb-6 border border-purple-500/20">
                  <Smartphone className="w-7 h-7" />
                </div>
                <h3 className="font-anton text-2xl uppercase text-white mb-4">Native Integration</h3>
                <ul className="space-y-4">
                  {[
                    "Optimized Android WebView",
                    "Native Payment Gateway triggers",
                    "Deep linking & seamless nav"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-sage/70 font-satoshi">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          </div>

          {/* Tech Stack Strip */}
          <ScrollAnimation direction="up" delay={0.3}>
            <div className="pt-10 mt-10 border-t border-white/5 flex flex-wrap justify-center gap-3">
              {["Next.js", "React", "TypeScript", "Node.js", "Shopify Headless", "Firebase", "Razorpay"].map((tech) => (
                <span key={tech} className="px-4 py-1.5 text-xs font-satoshi font-medium uppercase tracking-wider border border-golden/20 text-golden/70 bg-golden/5">
                  {tech}
                </span>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default VCNITIExperience;
