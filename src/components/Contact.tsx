
import React, { useState } from 'react';
import { Send, Mail, Phone, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-green text-sm uppercase tracking-wider font-medium">Contact</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-2">Get in Touch</h2>
          <p className="text-slate mt-4 max-w-2xl mx-auto">
            Ready to transform your approach to AI strategy and investment? Let's connect and discuss how I can help you achieve your goals.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card rounded-xl p-6 flex flex-col items-center text-center opacity-0 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-green" />
              </div>
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <a 
                href="mailto:pari2798@gmail.com" 
                className="text-slate hover:text-white transition-colors"
              >
                pari2798@gmail.com
              </a>
            </div>
            
            <div className="glass-card rounded-xl p-6 flex flex-col items-center text-center opacity-0 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-green" />
              </div>
              <h3 className="text-lg font-medium mb-2">Phone</h3>
              <a 
                href="tel:+16463212902" 
                className="text-slate hover:text-white transition-colors"
              >
                (646) 321-2902
              </a>
            </div>
            
            <div className="glass-card rounded-xl p-6 flex flex-col items-center text-center opacity-0 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center mb-4">
                <AlertCircle className="w-5 h-5 text-green" />
              </div>
              <h3 className="text-lg font-medium mb-2">Consultation</h3>
              <p className="text-slate">
                Email to book a consultation call on demand
              </p>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-navy-dark border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-navy-dark border-white/10 text-white"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can I help you?"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-navy-dark border-white/10 text-white"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-navy-dark border-white/10 text-white resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-green hover:bg-green/90 text-navy-dark"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px] opacity-20" />
    </section>
  );
};

export default Contact;
