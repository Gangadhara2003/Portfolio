import { Calendar, Briefcase, ExternalLink } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: 'VCNITI',
            role: 'Tech, AI, & Platform Development Intern',
            period: 'Nov 2025 - Present',
            description: 'Working on Tech, AI, & Platform Development.',
            type: 'Internship',
            link: 'https://vcniti.com'
        },
        {
            company: 'TAP Academy',
            role: 'Java Development Intern',
            period: 'Previous',
            description: 'Specialized in Java, Spring Boot, React, and modern database technologies.',
            type: 'Internship'
        }
    ];

    return (
        <section id="experience" className="section-padding">
            <div className="container mx-auto container-padding">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">
                        Experience
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        My professional journey and industry experience
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="relative pl-8 md:pl-0"
                            >
                                {/* Timeline Line (Desktop) */}
                                <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border transform -translate-x-1/2"></div>

                                <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                                    {/* Timeline Dot (Desktop) */}
                                    <div className="hidden md:block absolute left-[50%] w-4 h-4 bg-background border-2 border-accent rounded-full transform -translate-x-1/2 group-hover:bg-accent transition-colors duration-300"></div>

                                    {/* Content Card */}
                                    <div className="md:w-[45%] mb-8 md:mb-0">
                                        <div className="portfolio-card p-6 rounded-xl hover-lift animate-fade-in relative z-10">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-2 text-accent">
                                                    <Briefcase size={18} />
                                                    <span className="text-sm font-medium">{exp.type}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                                    <Calendar size={14} />
                                                    <span>{exp.period}</span>
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-foreground mb-1">
                                                {exp.role}
                                            </h3>
                                            {/* @ts-ignore */}
                                            {exp.link ? (
                                                <a
                                                    href={exp.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-lg font-medium text-accent mb-3 hover:underline"
                                                >
                                                    {exp.company}
                                                    <ExternalLink size={14} className="ml-1" />
                                                </a>
                                            ) : (
                                                <h4 className="text-lg font-medium text-accent mb-3">
                                                    {exp.company}
                                                </h4>
                                            )}
                                            <p className="text-muted-foreground">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Empty space for the other side */}
                                    <div className="md:w-[45%]"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
