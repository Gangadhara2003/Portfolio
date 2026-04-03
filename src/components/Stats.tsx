import ScrollAnimation from '@/components/ui/ScrollAnimation';

const Stats = () => {
  const stats = [
    {
      number: '4+',
      label: 'Years of Engineering',
      description: 'Electronics & Communication',
    },
    {
      number: '3+',
      label: 'Major Projects',
      description: 'Full-stack Architecture',
    },
    {
      number: '2',
      label: 'Certifications',
      description: 'Professional Development',
    },
    {
      number: '7.5',
      label: 'CGPA',
      description: 'Academic Excellence',
    },
  ];

  return (
    <section className="py-16 bg-charcoal border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-5" />
      <div className="container mx-auto container-padding relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 0.1}>
              <div className="text-center md:text-left space-y-2 group">
                <div className="font-anton text-5xl md:text-6xl text-golden tracking-tight group-hover:text-golden/80 transition-colors">
                  {stat.number}
                </div>
                <div>
                  <div className="font-satoshi font-bold text-white text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="font-satoshi text-sm text-sage/50 mt-1">
                    {stat.description}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;