import { useState } from 'react';
import { Mail, Send, Loader2 } from 'lucide-react';
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || 'Server error');
      }

      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error?.message || "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Golden CTA Section */}
      <div className="bg-golden relative py-24 md:py-32">
        {/* Background decorative text */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <span className="absolute top-8 left-0 font-anton text-[12rem] md:text-[20rem] uppercase text-charcoal/[0.04] leading-none whitespace-nowrap">
            LET'S TALK
          </span>
          <span className="absolute bottom-0 right-0 font-anton text-[8rem] md:text-[14rem] uppercase text-charcoal/[0.04] leading-none whitespace-nowrap">
            CONTACT
          </span>
        </div>

        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <ScrollAnimation direction="up">
              <div className="text-center mb-12">
                <h2 className="font-anton text-5xl md:text-7xl lg:text-8xl uppercase text-charcoal leading-[0.9] mb-6">
                  Let's Work<br />
                  Together<span className="text-white">.</span>
                </h2>
                <p className="font-satoshi text-xl md:text-2xl text-charcoal/60 max-w-2xl mx-auto">
                  I'm currently seeking new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>
            </ScrollAnimation>

            {/* Contact Info */}
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <a href="mailto:gangadharaks2003@gmail.com" className="group flex items-center gap-3 px-6 py-3 bg-charcoal/10 hover:bg-charcoal hover:text-golden transition-all duration-300">
                  <Mail size={18} />
                  <span className="font-satoshi font-medium">gangadharaks2003@gmail.com</span>
                </a>
                <div className="flex items-center gap-2 font-satoshi text-sm text-charcoal/60">
                  <span>Based in Bangalore, India</span>
                  <span className="h-1 w-1 rounded-full bg-charcoal/30"></span>
                  <span className="text-green-700 font-medium flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-700 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-700"></span>
                    </span>
                    Open to work
                  </span>
                </div>
              </div>
            </ScrollAnimation>

            {/* Form */}
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="bg-charcoal p-8 md:p-12 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-satoshi font-medium uppercase tracking-wider text-sage/50">First Name</label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Sujan"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-golden focus-visible:border-golden/30 rounded-none h-12 font-satoshi"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-satoshi font-medium uppercase tracking-wider text-sage/50">Last Name</label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="R K"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-golden focus-visible:border-golden/30 rounded-none h-12 font-satoshi"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-satoshi font-medium uppercase tracking-wider text-sage/50">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sujan@example.com"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-golden focus-visible:border-golden/30 rounded-none h-12 font-satoshi"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-satoshi font-medium uppercase tracking-wider text-sage/50">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-golden focus-visible:border-golden/30 rounded-none h-12 font-satoshi"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-satoshi font-medium uppercase tracking-wider text-sage/50">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={4}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/20 resize-none focus-visible:ring-golden focus-visible:border-golden/30 rounded-none font-satoshi"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 bg-golden text-charcoal font-anton text-xl uppercase tracking-wide hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <Loader2 size={20} className="animate-spin" />
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;