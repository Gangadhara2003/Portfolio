import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/Gangadhara2003',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/gangadhara-k-s-563142286',
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:gangadharaks2003@gmail.com',
      label: 'Email',
    },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-accent">
              Gangadhara K S
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-Stack Developer passionate about creating innovative solutions 
              with modern technologies. Ready to contribute to your next project.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-200 text-muted-foreground hover-lift"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Get In Touch
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Email:</strong><br />
                gangadharaks2003@gmail.com
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Phone:</strong><br />
                +91 9686231591
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Location:</strong><br />
                Bangalore, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              © {currentYear} Gangadhara K S. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm text-center sm:text-right flex items-center">
              Made with using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;