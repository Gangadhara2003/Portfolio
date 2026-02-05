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
    <section className="py-12 border-y border-white/5 bg-secondary/20">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center md:text-left space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold font-display text-primary tracking-tight">
                {stat.number}
              </div>
              <div>
                <div className="font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;