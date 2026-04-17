import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-20">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-charcoal to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-charcoal to-transparent z-[1]" />

      <div className="container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <ScrollAnimation direction="down">
              <div className="inline-flex items-center px-4 py-2 border border-white/10 text-xs font-satoshi font-medium uppercase tracking-[0.2em] text-sage">
                <span className="relative flex h-2 w-2 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-golden opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-golden"></span>
                </span>
                Available for opportunities
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.1}>
              <h1 className="font-anton text-5xl md:text-7xl lg:text-8xl xl:text-9xl uppercase leading-[0.9] tracking-tight text-white">
                Building<br />
                Scalable<br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-charcoal">Digital</span>
                  <span className="absolute inset-y-0 -inset-x-3 bg-golden -rotate-1 z-0" style={{ top: '10%', bottom: '5%' }}></span>
                </span>{' '}
                <span className="text-golden">Solutions</span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <p className="font-satoshi text-lg text-white/60 max-w-xl leading-relaxed mx-auto lg:mx-0">
                Full Stack Developer specializing in modern web architecture.
                I craft high performance applications using Next.js, Node.js, and React.
              </p>
            </ScrollAnimation>

            {/* CTA Buttons */}
            <ScrollAnimation direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-golden text-charcoal font-anton text-xl uppercase tracking-wide hover:bg-golden/90 transition-all duration-300 hover:scale-[1.02]">
                  <Mail size={20} />
                  Get In Touch
                </a>
                <a href="#work" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-satoshi font-medium hover:bg-white/5 transition-all duration-300">
                  View Projects
                  <ArrowDown size={18} />
                </a>
              </div>
            </ScrollAnimation>

            {/* Core Stack */}
            <ScrollAnimation direction="up" delay={0.4}>
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                <span className="text-xs font-satoshi font-medium text-white/40 uppercase tracking-wider">Core Stack</span>
                <div className="flex gap-3">
                  {['React', 'Next.js', 'Node.js', 'TypeScript'].map((tech) => (
                    <span key={tech} className="text-xs font-satoshi font-medium text-golden/80 px-3 py-1 border border-golden/20 bg-golden/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Social Links */}
            <ScrollAnimation direction="up" delay={0.5}>
              <div className="flex items-center justify-center lg:justify-start gap-5 pt-4 border-t border-white/5 max-w-md mx-auto lg:mx-0">
                <a
                  href="https://github.com/Gangadhara2003"
                  className="text-white/40 hover:text-golden transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gangadhara-k-s-563142286"
                  className="text-white/40 hover:text-golden transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:gangadharaks2003@gmail.com"
                  className="text-white/40 hover:text-golden transition-colors duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </ScrollAnimation>
          </div>

          {/* Profile Image */}
          <ScrollAnimation direction="left" delay={0.2} blur>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-golden/30" />
                <div className="absolute -bottom-4 -left-4 w-full h-full border border-sage/20" />

                {/* Image Container */}
                <div className="relative w-full h-full overflow-hidden bg-dark-gray">
                  <img
                    src={profileImage}
                    alt="Gangadhara K S"
                    className="w-full h-full object-cover transition-all duration-500 hover:grayscale-0"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                </div>

                {/* Name label - brutalist style */}
                <div className="absolute -bottom-6 left-0 right-0 flex justify-center">
                  <div className="bg-golden text-charcoal px-6 py-2 font-anton text-sm uppercase tracking-wider">
                    Gangadhara K S
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;