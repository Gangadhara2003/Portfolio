import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import foodDeliveryMockup from '@/assets/food-delivery-mockup.jpg';
import vcnitiMockup from '@/assets/vcniti.png';
import emailclassifierMockup from '@/assets/email-classifier-mockup.jpg';
const Work = () => {
  const projects = [
    {
      title: 'VCNITI - Smart Construction Platform',
      description: 'A smart platform enabling ultra-fast delivery of construction and interior materials. Simplifies procurement through real-time tracking, verified manufacturers, and instant order fulfillment.',
      image: vcnitiMockup,
      technologies: ['Next.js', 'Node.js', 'Shopify', 'Firebase', 'Android WebView', 'Razorpay'],
      features: [
        'Next.js frontend with Framer Motion',
        'Node.js backend with Shopify bridge',
        'Native Android payments & deep linking',
        'Secure Firebase authentication'
      ],
      liveUrl: 'https://www.vcniti.com/',
      category: 'Full-Stack Platform'
    },
    {
      title: 'Food Delivery Web Application',
      description: 'A comprehensive full-stack food delivery platform built with Java Spring Boot backend and JSP frontend. Features include user authentication, restaurant browsing, cart management, and secure order processing.',
      image: foodDeliveryMockup,
      technologies: ['Java', 'Hibernate', 'MySQL', 'JSP', 'HTML/CSS'],
      features: [
        'User registration and login system',
        'Restaurant and menu browsing',
        'Shopping cart functionality',
        'Secure session management',
        'Order tracking and history'
      ],
      githubUrl: 'https://github.com/Gangadhara2003/food-delivery-webapp',
      // liveUrl: 'https://github.com/Gangadhara2003/food-delivery-webapp',
      category: 'Full-Stack Application'
    },
    {
      title: 'Email Classifier',
      description: 'A full-stack AI email classifier built with Next.js and TypeScript. It connects to Gmail using OAuth, fetches messages, and uses Gemini AI to categorize emails with a clean UI. For testing, you can send an email to gangadharaks2003@gmail.com',
      image: emailclassifierMockup,
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Google OAuth', 'Gemini AI'],
      features: [
        'Secure Google login',
        'Fetch and display recent Gmail messages',
        'AI-based email classification',
        'Structured and accurate AI responses',
        'Clean and responsive UI',
        'For testing, send an email to: gangadharaks2003@gmail.com'
      ],
      githubUrl: 'https://github.com/Gangadhara2003/email_classifier',
      liveUrl: 'https://email-classifier-chi.vercel.app',
      category: 'Full-Stack Application'
    }
  ];

  return (
    <section id="work" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my latest projects that demonstrate full-stack development skills and modern technologies
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div
      className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
        }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Project Image */}
      <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
        <div className="portfolio-card rounded-xl overflow-hidden hover-lift">
          {!isImageLoaded && <Skeleton className="w-full h-[300px] mb-4" />}
          <div className={!isImageLoaded ? 'hidden' : ''}>
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover"
              onLoad={() => setIsImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex space-x-4">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="btn-primary">
                      <ExternalLink size={16} className="mr-2" />
                      View Live
                    </Button>
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="btn-secondary">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
        <div className="text-accent text-sm font-medium mb-2">
          {project.category}
        </div>
        <h3 className="text-3xl font-bold text-foreground mb-4">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {project.features.map((feature: any, featureIndex: number) => (
              <li key={featureIndex} className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: any, techIndex: number) => (
              <span
                key={techIndex}
                className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary hover-glow">
                <ExternalLink size={16} className="mr-2" />
                View Live Project
              </Button>
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="btn-secondary">
                <Github size={16} className="mr-2" />
                View Source Code
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
