import { Code2, Database, Globe, Smartphone } from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-7 h-7" />,
      title: 'Full-Stack Development',
      description: 'Building end-to-end web applications with Node.js and React.',
      bg: 'bg-[#f8f9fa]',
      textColor: 'text-charcoal',
      subColor: 'text-charcoal/50',
      iconBg: 'bg-charcoal/5 border-charcoal/10 text-charcoal',
    },
    {
      icon: <Database className="w-7 h-7" />,
      title: 'Database Architecture',
      description: 'Designing scalable schemas for SQL (PostgreSQL) and NoSQL (MongoDB) databases.',
      bg: 'bg-charcoal',
      textColor: 'text-white',
      subColor: 'text-sage/60',
      iconBg: 'bg-golden/10 border-golden/20 text-golden',
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: 'Frontend Engineering',
      description: 'Creating responsive, pixel-perfect interfaces with Tailwind CSS and Next.js.',
      bg: 'bg-dark-gray',
      textColor: 'text-white',
      subColor: 'text-sage/60',
      iconBg: 'bg-golden/10 border-golden/20 text-golden',
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: 'App Integration',
      description: 'Connecting third-party services and APIs for comprehensive solutions.',
      bg: 'bg-[#f8f9fa]',
      textColor: 'text-charcoal',
      subColor: 'text-charcoal/50',
      iconBg: 'bg-charcoal/5 border-charcoal/10 text-charcoal',
    },
  ];

  return (
    <section id="services" className="section-padding section-light relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.03]" />
      <div className="container mx-auto container-padding relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <ScrollAnimation direction="right">
            <div className="max-w-xl">
              <span className="font-anton text-sm uppercase tracking-[0.3em] mb-4 block" style={{ color: 'rgba(23,30,25,0.4)' }}>Services</span>
              <h2 className="font-anton text-4xl md:text-6xl lg:text-7xl uppercase text-charcoal leading-[0.9]">
                How I can<br />
                help you{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">build</span>
                  <span className="absolute inset-y-0 -inset-x-2 bg-golden/30 -rotate-1 z-0" style={{ top: '15%', bottom: '10%' }}></span>
                </span>
              </h2>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="left" delay={0.2}>
            <a href="#contact" className="font-satoshi font-medium text-charcoal/60 hover:text-charcoal transition-colors flex items-center gap-2 group">
              Let's discuss your project
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 0.1}>
              <div className={`p-8 ${service.bg} card-transition group min-h-[280px] flex flex-col border border-transparent hover:border-golden/20`}>
                <div className={`h-14 w-14 flex items-center justify-center border ${service.iconBg} mb-8`}>
                  {service.icon}
                </div>
                <h3 className={`font-anton text-xl md:text-2xl uppercase ${service.textColor} mb-4`}>
                  {service.title}
                </h3>
                <p className={`font-satoshi text-sm leading-relaxed ${service.subColor} mt-auto`}>
                  {service.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;