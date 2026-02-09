import { Calendar, Briefcase, ExternalLink, ArrowRight } from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

const Experience = () => {
    const experiences = [
        {
            company: 'VCNITI',
            role: 'Tech, AI, & Platform Development Intern',
            period: 'Nov 2025 - Present',
            description: 'Leading the migration to a Headless Commerce architecture. Implementing AI-driven features and optimizing platform performance for scale.',
            type: 'Internship',
            link: 'https://vcniti.com'
        },
        {
            company: 'TAP Academy',
            role: 'Full Stack Web Development Intern',
            period: 'Aug 2024 - Oct 2025',
            description: 'Mastered Full Stack development specializing in the MERN stack. Built robust applications with React, Node.js, and MongoDB with a focus on clean code.',
            type: 'Internship'
        }
    ];

    return (
        <section id="experience" className="section-padding bg-background relative overflow-hidden">
            <div className="container mx-auto container-padding max-w-4xl">
                <ScrollAnimation direction="up">
                    <div className="mb-12">
                        <span className="text-sm font-bold tracking-widest text-primary uppercase">Career Path</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2">
                            Professional Journey
                        </h2>
                    </div>
                </ScrollAnimation>

                <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12 pb-12">
                    {experiences.map((exp, index) => (
                        <ScrollAnimation key={index} direction="left" delay={index * 0.2}>
                            <div className="relative pl-8 md:pl-12 group">
                                {/* Timeline Dot */}
                                <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-secondary border border-white/10 group-hover:bg-primary group-hover:scale-125 transition-all duration-300"></div>

                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                    <h3 className="text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors">
                                        {exp.role}
                                    </h3>
                                    <span className="text-sm font-mono text-muted-foreground self-start sm:self-auto mt-1 sm:mt-0">
                                        {exp.period}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    {exp.link ? (
                                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-foreground hover:underline underline-offset-4 flex items-center">
                                            {exp.company} <ArrowRight className="ml-1 w-3 h-3 -rotate-45" />
                                        </a>
                                    ) : (
                                        <span className="text-base font-semibold text-foreground">{exp.company}</span>
                                    )}
                                    <span className="hidden sm:inline-block mx-2 text-muted-foreground/30">•</span>
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-white/5">
                                        {exp.type}
                                    </span>
                                </div>

                                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                                    {exp.description}
                                </p>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
