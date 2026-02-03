import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="text-accent text-lg font-medium mb-4">
              Hello, I'm
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gradient">
              Gangadhara K S
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6">
              Full-Stack Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Passionate about building scalable applications with Java, Spring Boot, React, and modern web technologies.
              Ready to contribute to innovative projects in the IT sector.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact">
                <Button size="lg" className="btn-primary hover-glow">
                  <Mail className="mr-2" size={20} />
                  Get In Touch
                </Button>
              </a>
              <a href="#work">
                <Button variant="outline" size="lg" className="btn-secondary">
                  View My Work
                  <ArrowDown className="ml-2" size={20} />
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/Gangadhara2003"
                className="text-muted-foreground hover:text-accent transition-colors duration-200 hover-lift"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/gangadhara-k-s-563142286"
                className="text-muted-foreground hover:text-accent transition-colors duration-200 hover-lift"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:gangadharaks2003@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors duration-200 hover-lift"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative portfolio-card rounded-full p-8 hover-lift">
                <img
                  src={profileImage}
                  alt="Gangadhara K S - Full-Stack Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 portfolio-card rounded-lg p-4 animate-slide-up">
              <div className="text-accent font-bold text-xl">7.5</div>
              <div className="text-sm text-muted-foreground">CGPA</div>
            </div>

            <div className="absolute -bottom-4 -left-4 portfolio-card rounded-lg p-4 animate-slide-up">
              <div className="text-accent font-bold text-sm md:text-xl">Next.js and Context API</div>
              <div className="text-sm text-muted-foreground">Expert</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;