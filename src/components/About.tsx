import { Terminal, Database, Cpu, Globe, Lightbulb, Target } from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

const About = () => {
  const expertises = [
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Backend Development",
      description: "Building scalable APIs with Node.js and Express.",
      skills: ["Node.js", "Express", "REST APIs", "GraphQL"],
      span: "md:col-span-2",
      bg: "bg-[#f8f9fa] text-charcoal",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Frontend Engineering",
      description: "Crafting responsive UIs with React and modern CSS.",
      skills: ["React", "TypeScript", "Tailwind", "Next.js"],
      span: "",
      bg: "bg-charcoal text-white border border-white/10",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Architecture",
      description: "Designing efficient schemas and data pipelines.",
      skills: ["MongoDB", "PostgreSQL", "Firebase", "Redis"],
      span: "",
      bg: "bg-charcoal text-white border border-white/10",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Critical Thinking",
      description: "Analyzing complex systems and making informed technical decisions.",
      skills: ["Root Cause Analysis", "Trade off Evaluation", "Code Review", "Debugging"],
      span: "",
      bg: "bg-charcoal text-white border border-white/10",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Breaking down complex challenges into actionable, efficient solutions.",
      skills: ["Optimization", "Design Patterns", "Agile Methodology", "Testing"],
      span: "",
      bg: "bg-[#f8f9fa] text-charcoal",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "System Design",
      description: "Applying engineering principles to software architecture.",
      skills: ["Data Structures", "Algorithms", "System Design", "AWS"],
      span: "md:col-span-3",
      bg: "bg-dark-gray text-white border border-white/10",
    },
  ];

  return (
    <section id="about" className="section-padding section-light relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.03]" />
      <div className="container mx-auto container-padding relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <ScrollAnimation direction="right">
            <div>
              <span className="font-anton text-sm uppercase tracking-[0.3em] text-golden mb-4 block" style={{ color: '#171e19', opacity: 0.4 }}>About Me</span>
              <h2 className="font-anton text-4xl md:text-6xl lg:text-7xl uppercase text-charcoal leading-[0.9]">
                Building<br />
                <span className="relative inline-block">
                  <span className="relative z-10">Scalable</span>
                  <span className="absolute inset-y-0 -inset-x-2 bg-golden/30 -rotate-1 z-0" style={{ top: '15%', bottom: '10%' }}></span>
                </span>{' '}
                Software
              </h2>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="left" delay={0.1}>
            <div className="flex flex-col justify-end">
              <div className="space-y-4 font-satoshi text-lg leading-relaxed" style={{ color: 'rgba(23, 30, 25, 0.6)' }}>
                <p>
                  My journey in full-stack development is driven by a passion for solving complex problems with clean, efficient code. I focus on engineering disciplined, bug-free applications that deliver exceptional user experiences.
                </p>
                <p>
                  Currently interning at VCNITI, I apply these principles daily to build AI-driven platforms and optimize performance for scale.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-5 [&>*]:min-h-[280px]">
          {expertises.map((item, idx) => (
            <ScrollAnimation key={idx} direction="up" delay={idx * 0.1} className="h-full">
              <div className={`p-8 ${item.span} ${item.bg} card-transition group h-full flex flex-col`}>
                <div className="flex items-start justify-between mb-6">
                  <div className={`h-12 w-12 flex items-center justify-center border ${item.bg.includes('f8f9fa') ? 'border-charcoal/10 text-charcoal' : 'border-golden/20 text-golden'}`}>
                    {item.icon}
                  </div>
                  {/* Animated pulse block */}
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-8 ${item.bg.includes('f8f9fa') ? 'bg-charcoal/10' : 'bg-golden/20'} animate-pulse-glow`}
                        style={{ animationDelay: `${i * 300}ms` }}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="font-anton text-2xl md:text-3xl uppercase mb-3">{item.title}</h3>
                <p className={`font-satoshi text-sm mb-6 ${item.bg.includes('f8f9fa') ? 'text-charcoal/50' : 'text-sage/60'}`}>
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.skills.map(skill => (
                    <span
                      key={skill}
                      className={`text-xs font-satoshi font-medium px-3 py-1 ${item.bg.includes('f8f9fa')
                        ? 'bg-charcoal/5 text-charcoal/70 border border-charcoal/10'
                        : 'bg-white/5 text-white/70 border border-white/10'
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;