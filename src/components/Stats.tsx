import { Award, BookOpen, Calendar, Code } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <Calendar className="text-accent" size={32} />,
      number: '4+',
      label: 'Years of Study',
      description: 'Electronics & Communication Engineering',
    },
    {
      icon: <Code className="text-accent" size={32} />,
      number: '3+',
      label: 'Major Projects',
      description: 'Full-stack applications built',
    },
    {
      icon: <Award className="text-accent" size={32} />,
      number: '2',
      label: 'Certifications',
      description: 'NPTEL certified courses completed',
    },
    {
      icon: <BookOpen className="text-accent" size={32} />,
      number: '7.5',
      label: 'CGPA',
      description: 'Academic excellence maintained',
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            Quick Stats
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A snapshot of my journey and achievements in technology and academics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="portfolio-card rounded-xl p-8 text-center hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-accent-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;