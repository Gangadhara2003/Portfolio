import { Calendar, ArrowRight } from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

const Experience = () => {
  const experiences = [
    {
      number: '01',
      company: 'VCNITI',
      role: 'Tech, AI, & Platform Development Intern',
      period: 'Nov 2025 - Apr 2026',
      description: 'Led the migration to a Headless Commerce architecture. Built the Admin Operations Command Center and Supplier Portal. Implemented AI-driven features, automated GST validation, real-time SLA tracking, and optimized platform performance for scale.',
      type: 'Internship',
      link: 'https://vcniti.com'
    },
    {
      number: '02',
      company: 'TAP Academy',
      role: 'Full Stack Web Development Intern',
      period: 'Aug 2024 - Oct 2025',
      description: 'Mastered Full Stack development specializing in the MERN stack. Built robust applications with React, Node.js, and MongoDB with a focus on clean code.',
      type: 'Internship'
    }
  ];

  return (
    <section id="experience" className="section-padding bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-5" />

      <div className="container mx-auto container-padding relative z-10">
        {/* Two-column layout: 1:2 ratio */}
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Left - Sticky Title */}
          <div className="lg:col-span-1">
            <ScrollAnimation direction="right">
              <div className="lg:sticky lg:top-32">
                <span className="font-anton text-sm uppercase tracking-[0.3em] text-golden/70 mb-4 block">Career Path</span>
                <h2 className="font-anton text-5xl md:text-6xl lg:text-7xl uppercase text-white leading-[0.9]">
                  Professional<br />
                  <span className="text-golden">Journey</span>
                </h2>
                <div className="w-16 h-1 bg-golden mt-6" />
              </div>
            </ScrollAnimation>
          </div>

          {/* Right - Experience Stack */}
          <div className="lg:col-span-2 space-y-0">
            {experiences.map((exp, index) => (
              <ScrollAnimation key={index} direction="left" delay={index * 0.2}>
                <div className="group relative py-12 border-b border-white/5 last:border-b-0">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Number */}
                    <div className="shrink-0">
                      <span className="font-anton text-7xl md:text-8xl text-golden/20 group-hover:text-golden/80 transition-colors duration-500 leading-none">
                        {exp.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                        <h3 className="font-anton text-2xl md:text-3xl uppercase text-white group-hover:text-golden transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <span className="font-satoshi text-sm text-sage/50 shrink-0">
                          {exp.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        {exp.link ? (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="font-satoshi text-base font-medium text-golden hover:underline underline-offset-4 flex items-center gap-1">
                            {exp.company} <ArrowRight className="w-3 h-3 -rotate-45" />
                          </a>
                        ) : (
                          <span className="font-satoshi text-base font-medium text-white/80">{exp.company}</span>
                        )}
                        <span className="text-xs px-3 py-1 font-satoshi font-medium uppercase tracking-wider border border-golden/20 text-golden/60 bg-golden/5">
                          {exp.type}
                        </span>
                      </div>

                      <p className="font-satoshi text-sage/60 leading-relaxed max-w-2xl">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
