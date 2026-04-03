import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
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
    <footer className="border-t border-white/5 bg-charcoal py-10">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Name */}
          <div className="flex items-center gap-4">
            <span className="font-anton text-2xl text-white tracking-tight">
              Gangadhara K S<span className="text-golden">.</span>
            </span>
          </div>

          {/* Middle text */}
          <div className="font-satoshi text-sm text-sage/40">
            Built with passion & precision
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage/40 hover:text-golden transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;