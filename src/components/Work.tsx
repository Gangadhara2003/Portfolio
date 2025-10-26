import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import foodDeliveryMockup from '@/assets/food-delivery-mockup.jpg';
import geminiCloneMockup from '@/assets/gemini-clone-mockup.jpg';

const Work = () => {
  const projects = [
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
      liveUrl: 'https://github.com/Gangadhara2003/food-delivery-webapp',
      category: 'Full-Stack Application'
    },
    {
      title: 'Gemini Clone - AI Chat Application',
      description: 'An intelligent chat application powered by Google Gemini API, featuring real-time conversations, chat history, user profiles, and help sessions. Built with modern React and Node.js architecture.',
      image: geminiCloneMockup,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Google Gemini API', 'JavaScript'],
      features: [
        'Real-time AI-powered responses',
        'User authentication system',
        'Chat history and persistence',
        'Profile management',
        'Help and support sessions'
      ],
      githubUrl: 'https://github.com/Gangadhara2003/Gemini_clone_frontend',
      liveUrl: 'https://gemini-clone-frontend-five.vercel.app/',
      category: 'AI Application'
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
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="portfolio-card rounded-xl overflow-hidden hover-lift">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="btn-primary">
                          <ExternalLink size={16} className="mr-2" />
                          View Live
                        </Button>
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="btn-secondary">
                          <Github size={16} className="mr-2" />
                          Code
                        </Button>
                      </a>
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
                    {project.features.map((feature, featureIndex) => (
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
                    {project.technologies.map((tech, techIndex) => (
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
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="btn-primary hover-glow">
                      <ExternalLink size={16} className="mr-2" />
                      View Live Project
                    </Button>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="btn-secondary">
                      <Github size={16} className="mr-2" />
                      View Source Code
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
