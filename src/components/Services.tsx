import { Code2, Database, Globe, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code2 className="text-accent" size={40} />,
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using Java, Spring Boot, React, and modern frameworks.',
      technologies: ['Java', 'Spring Boot', 'React', 'JavaScript'],
    },
    {
      icon: <Database className="text-accent" size={40} />,
      title: 'Backend Development',
      description: 'Scalable server-side solutions with RESTful APIs, database design, and system architecture.',
      technologies: ['MySQL', 'MongoDB', 'Hibernate', 'JPA'],
    },
    {
      icon: <Globe className="text-accent" size={40} />,
      title: 'Frontend Development',
      description: 'Modern, responsive user interfaces with React, JavaScript, and contemporary design principles.',
      technologies: ['React', 'HTML5', 'CSS3', 'Responsive Design'],
    },
    {
      icon: <Smartphone className="text-accent" size={40} />,
      title: 'API Integration',
      description: 'Third-party service integration, API development, and real-time data processing solutions.',
      technologies: ['REST APIs', 'Google APIs', 'JSON', 'AJAX'],
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            What I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your digital vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="portfolio-card rounded-xl p-8 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;