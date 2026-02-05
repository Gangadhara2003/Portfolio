import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none opacity-40" />

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in space-y-8 text-center lg:text-left">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/50 border border-white/5 text-sm font-medium text-accent mb-6">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Available for opportunities
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-tight mb-6">
                Building Scalable <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Digital Solutions
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed mx-auto lg:mx-0">
                Full-Stack Developer specializing in modern web architecture.
                I craft high-performance applications using Next.js, Node.js, and React.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact">
                <Button size="lg" className="rounded-full px-8 btn-primary h-12 text-base">
                  <Mail className="mr-2" size={18} />
                  Get In Touch
                </Button>
              </a>
              <a href="#work">
                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-white/10 hover:bg-white/5">
                  View Projects
                  <ArrowDown className="ml-2" size={18} />
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
              <span className="text-sm font-medium text-muted-foreground mr-2">Core Stack:</span>
              <div className="flex gap-4 opacity-70">
                {/* Simple styling for stack icons or text if actual icons aren't imported */}
                <span className="text-sm font-semibold">React</span>
                <span className="w-1 h-1 bg-white/20 rounded-full self-center" />
                <span className="text-sm font-semibold">Next.js</span>
                <span className="w-1 h-1 bg-white/20 rounded-full self-center" />
                <span className="text-sm font-semibold">Tailwind CSS</span>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-5 pt-4 border-t border-white/5 max-w-md mx-auto lg:mx-0">
              <a
                href="https://github.com/Gangadhara2003"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/gangadhara-k-s-563142286"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:gangadharaks2003@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image - Simplified & Professional */}
          <div className="relative animate-scale-in flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              {/* Decorative Circle Behind */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-[40px]" />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full border border-white/10 p-2 glass-panel">
                <div className="w-full h-full rounded-full overflow-hidden bg-background relative">
                  {/* Clean Image */}
                  <img
                    src={profileImage}
                    alt="Gangadhara K S"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;