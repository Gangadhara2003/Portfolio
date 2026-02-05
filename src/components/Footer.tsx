import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={18} />,
      href: 'https://github.com/Gangadhara2003',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={18} />,
      href: 'https://www.linkedin.com/in/gangadhara-k-s-563142286',
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={18} />,
      href: 'mailto:gangadharaks2003@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="border-t border-white/5 bg-background py-8">
      <div className="container mx-auto container-padding flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground text-center md:text-left">
          © {currentYear} Gangadhara K S.
        </div>

        <div className="flex space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;