import { useState } from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
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
    <section id="work" className="section-padding bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-5" />
      <div className="container mx-auto container-padding relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <ScrollAnimation direction="up">
            <div>
              <span className="font-anton text-sm uppercase tracking-[0.3em] text-golden/70 mb-4 block">Portfolio</span>
              <h2 className="font-anton text-4xl md:text-6xl lg:text-7xl uppercase text-white leading-[0.9]">
                Selected<br />
                <span className="text-golden">Works</span>
              </h2>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="left" delay={0.2}>
            <a href="https://github.com/Gangadhara2003" target="_blank" rel="noopener noreferrer" className="font-satoshi text-sage/60 hover:text-golden transition-colors flex items-center gap-2">
              View GitHub <Github className="w-4 h-4" />
            </a>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 0.1}>
              <ProjectCard project={project} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: any }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="group bg-dark-gray border border-white/5 overflow-hidden hover:border-golden/30 transition-all duration-500 card-transition">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        {!isImageLoaded && <Skeleton className="absolute inset-0 bg-white/5" />}
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsImageLoaded(true)}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-charcoal/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-golden text-charcoal hover:scale-110 transition-transform">
              <ArrowUpRight size={20} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 text-white border border-white/20 hover:bg-white hover:text-charcoal transition-all">
              <Github size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className="text-xs font-satoshi font-medium text-golden uppercase tracking-wider mb-1 block">{project.category}</span>
            <h3 className="font-anton text-xl md:text-2xl uppercase text-white">{project.title}</h3>
          </div>
        </div>
        <p className="font-satoshi text-sage/60 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <span key={tech} className="text-xs font-satoshi px-3 py-1 bg-white/5 border border-white/10 text-white/60">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
