import { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import foodDeliveryMockup from '@/assets/food-delivery-mockup.jpg';
import vcnitiMockup from '@/assets/vcniti.png';
import emailclassifierMockup from '@/assets/email-classifier-mockup.jpg';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

const Work = () => {
  const projects = [
    {
      title: 'VCNITI Platform',
      category: 'Headless Commerce',
      description: 'A high-performance construction materials platform built with Next.js and Shopify Headless architecture. Features native Android integration and optimized checkout flow.',
      image: vcnitiMockup,
      technologies: ['Next.js', 'Shopify', 'Node.js', 'Firebase'],
      liveUrl: 'https://www.vcniti.com/',
    },
    {
      title: 'AI Email Classifier',
      category: 'Artificial Intelligence',
      description: 'Intelligent email organization tool powered by Google Gemini AI. Connects via OAuth to categorize and summarize emails automatically.',
      image: emailclassifierMockup,
      technologies: ['Next.js', 'Gemini AI', 'OAuth', 'TypeScript'],
      githubUrl: 'https://github.com/Gangadhara2003/email_classifier',
      liveUrl: 'https://email-classifier-chi.vercel.app',
    },
    {
      title: 'Food Delivery App',
      category: 'Full Stack App',
      description: 'Robust food delivery solution with Java Spring Boot backend. Handles complex order flows, restaurant management, and user sessions.',
      image: foodDeliveryMockup,
      technologies: ['Java Spring Boot', 'MySQL', 'Hibernate', 'JSP'],
      githubUrl: 'https://github.com/Gangadhara2003/food-delivery-webapp',
    },
  ];

  return (
    <section id="work" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <ScrollAnimation direction="up">
            <div>
              <span className="text-sm font-bold tracking-widest text-primary uppercase">Portfolio</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2">
                Selected Works
              </h2>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="left" delay={0.2}>
            <a href="https://github.com/Gangadhara2003" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
              View GitHub <Github className="ml-2 w-4 h-4" />
            </a>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 0.1}>
              <ProjectCard project={project} index={index} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="group rounded-2xl bg-card border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
      {/* Image View */}
      <div className="relative aspect-video overflow-hidden">
        {!isImageLoaded && <Skeleton className="absolute inset-0 bg-secondary/50" />}
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsImageLoaded(true)}
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
              <ArrowUpRight size={20} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 text-white border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
              <Github size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className="text-xs font-medium text-primary mb-1 block">{project.category}</span>
            <h3 className="text-xl font-bold font-display text-foreground">{project.title}</h3>
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <span key={tech} className="text-xs px-2 py-1 rounded-md bg-secondary/50 border border-white/5 text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work;
