import { Code2, Database, Globe, Smartphone, ArrowRight } from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: 'Full-Stack Development',
      description: 'Building end-to-end web applications with Node.js and React.',
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: 'Database Architecture',
      description: 'Designing scalable schemas for SQL (PostgreSQL) and NoSQL (MongoDB) databases.',
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: 'Frontend Engineering',
      description: 'Creating responsive, pixel-perfect interfaces with Tailwind CSS and Next.js.',
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: 'App Integration',
      description: 'Connecting third-party services and APIs for comprehensive solutions.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/20">
      <div className="container mx-auto container-padding">
        <div className="text-center md:text-left mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <ScrollAnimation direction="right">
            <div className="max-w-xl">
              <span className="text-sm font-bold tracking-widest text-primary uppercase">Services</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2">
                How I can help you <br /> build your next product.
              </h2>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="left" delay={0.2}>
            <a href="#contact" className="hidden md:flex items-center text-primary font-medium hover:underline underline-offset-4">
              Let's discuss your project <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 0.1}>
              <div
                className="p-6 rounded-2xl bg-background border border-white/5 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold font-display text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
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