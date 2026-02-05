import { Terminal, Database, Cpu, Globe } from 'lucide-react';

const About = () => {
  const expertises = [
    {
      icon: <Terminal className="w-5 h-5 mb-2 text-primary" />,
      title: "Backend Development",
      description: "Building scalable APIs with Node.js and Express.",
      skills: ["Node.js", "Express", "REST APIs", "GraphQL"]
    },
    {
      icon: <Globe className="w-5 h-5 mb-2 text-primary" />,
      title: "Frontend Engineering",
      description: "Crafting responsive UIs with React and modern CSS.",
      skills: ["React", "TypeScript", "Tailwind", "Next.js"]
    },
    {
      icon: <Database className="w-5 h-5 mb-2 text-primary" />,
      title: "Database Architecture",
      description: "Designing efficient schemas and data pipelines.",
      skills: ["MongoDB", "PostgreSQL", "Firebase", "Redis"]
    },
    {
      icon: <Cpu className="w-5 h-5 mb-2 text-primary" />,
      title: "System Design",
      description: "Applying engineering principles to software architecture.",
      skills: ["Data Structures", "Algorithms", "System Design", "AWS"]
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Bio Column */}
          <div className="space-y-6">
            <span className="text-sm font-bold tracking-widest text-primary uppercase">About Me</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
              Building scalable, high-performance software solutions.
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                My journey in full-stack development is driven by a passion for solving complex problems with clean, efficient code. I focus on engineering disciplined, bug-free applications that deliver exceptional user experiences.
              </p>
              <p>
                Currently interning at VCNITI, I apply these principles daily to build AI-driven platforms and optimize performance for scale.
              </p>
            </div>
          </div>

          {/* Expertise Column */}
          <div className="grid gap-6">
            <h3 className="text-xl font-bold font-display mb-2">Technical Expertise</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {expertises.map((item, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-card border border-white/5 hover:border-primary/20 transition-colors group">
                  {item.icon}
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4 h-10">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map(skill => (
                      <span key={skill} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground border border-white/5">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;