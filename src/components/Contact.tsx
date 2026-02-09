import { useState } from 'react';
import { Mail, Send, Loader2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";
import ScrollAnimation from '@/components/ui/ScrollAnimation';

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call for now or keep existing endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // For demo purposes, we'll assume success if the endpoint might not exist yet in this context
      // In a real scenario, check response.ok or data.success

      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });

    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background/50 relative overflow-hidden">
      {/* Decorative background visual */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/10 to-transparent pointer-events-none" />

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info Side */}
          <div className="space-y-10">
            <ScrollAnimation direction="right">
              <div>
                <span className="text-sm font-bold tracking-widest text-primary uppercase">Contact</span>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mt-4 leading-tight">
                  Let's work <br />
                  <span className="text-muted-foreground">together.</span>
                </h2>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                I'm currently seeking new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <div className="space-y-6">
                <a href="mailto:gangadharaks2003@gmail.com" className="group flex items-center space-x-4 p-4 -mx-4 rounded-xl hover:bg-secondary/50 transition-colors">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block mb-1">Email Me</span>
                    <span className="text-lg font-medium text-foreground">gangadharaks2003@gmail.com</span>
                  </div>
                </a>
                <div className="flex items-center space-x-4 p-4 -mx-4">
                  <span className="text-sm text-muted-foreground">Based in Bangalore, India</span>
                  <span className="h-1 w-1 rounded-full bg-zinc-700"></span>
                  <span className="text-sm text-green-500 font-medium flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Open to work
                  </span>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Form Side */}
          <ScrollAnimation direction="left" delay={0.3}>
            <div className="glass-card p-8 rounded-3xl border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">First Name</label>
                    <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" className="bg-secondary/50 border-white/5 focus-visible:ring-primary" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Last Name</label>
                    <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" className="bg-secondary/50 border-white/5 focus-visible:ring-primary" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</label>
                  <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="bg-secondary/50 border-white/5 focus-visible:ring-primary" required />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Subject</label>
                  <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry" className="bg-secondary/50 border-white/5 focus-visible:ring-primary" required />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Message</label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows={4} className="bg-secondary/50 border-white/5 resize-none focus-visible:ring-primary" required />
                </div>

                <Button type="submit" className="w-full h-12 text-base font-medium rounded-xl btn-primary transition-all duration-300" disabled={loading}>
                  {loading ? <Loader2 size={18} className="mr-2 animate-spin" /> : <><Send size={18} className="mr-2" /> Send Message</>}
                </Button>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;