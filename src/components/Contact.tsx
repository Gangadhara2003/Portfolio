import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-accent" size={24} />,
      label: 'Email',
      value: 'gangadharaks2003@gmail.com',
      href: 'mailto:gangadharaks2003@gmail.com',
    },
    {
      icon: <Phone className="text-accent" size={24} />,
      label: 'Phone',
      value: '+91 9686231591',
      href: 'tel:+919686231591',
    },
    {
      icon: <MapPin className="text-accent" size={24} />,
      label: 'Location',
      value: 'Bangalore, India',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Get In Touch
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm currently seeking opportunities as a Full-Stack Developer where I can contribute 
              to innovative projects and continue growing my skills. Whether you're looking for 
              a dedicated team member or have a project in mind, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 portfolio-card rounded-lg hover-lift transition-all duration-200 group"
                >
                  <div className="flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {info.label}
                    </div>
                    <div className="font-medium text-foreground group-hover:text-accent transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-6 portfolio-card rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">
                Availability
              </h4>
              <p className="text-muted-foreground text-sm">
                Currently completed my Java Development Internship and actively seeking 
                full-time opportunities starting September 2025.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in">
            <div className="portfolio-card rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="Your first name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Your last name"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    placeholder="What's this about?"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>
                
                <Button className="w-full btn-primary hover-glow">
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;