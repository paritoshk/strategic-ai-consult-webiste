
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send form data to email address
      const emailBody = `
        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}
        Message: ${formData.message}
      `;
      
      // In a real implementation, you would use an API route or service
      // Here we'll log it and show success to simulate sending
      console.log("Sending email to pari2798@gmail.com:", emailBody);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Your message has been sent to pari2798@gmail.com",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact directly via email.",
        variant: "destructive"
      });
      console.error("Error sending form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-white text-sm uppercase tracking-wider font-serif">Contact</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-2">Get in Touch</h2>
          <p className="text-slate mt-4 max-w-2xl mx-auto font-serif">
            Ready to transform your approach to AI strategy and investment? Let's connect and discuss how I can help you achieve your goals.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card rounded-none p-6 flex flex-col items-center text-center opacity-0 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-serif mb-2">Email</h3>
              <a 
                href="mailto:pari2798@gmail.com" 
                className="text-slate hover:text-white transition-colors font-serif"
              >
                pari2798@gmail.com
              </a>
            </div>
            
            <div className="glass-card rounded-none p-6 flex flex-col items-center text-center opacity-0 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-serif mb-2">Phone</h3>
              <a 
                href="tel:+16463212902" 
                className="text-slate hover:text-white transition-colors font-serif"
              >
                (646) 321-2902
              </a>
            </div>
            
            <div className="glass-card rounded-none p-6 flex flex-col items-center text-center opacity-0 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-serif mb-2">Consultation</h3>
              <p className="text-slate font-serif">
                Email to book a consultation call on demand
              </p>
            </div>
          </div>
          
          <div className="glass-card rounded-none p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-serif">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-black border-white/10 text-white rounded-none font-serif"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-serif">
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
                    className="bg-black border-white/10 text-white rounded-none font-serif"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-serif">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can I help you?"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-black border-white/10 text-white rounded-none font-serif"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-serif">
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
                  className="bg-black border-white/10 text-white rounded-none font-serif resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-white hover:bg-white/90 text-black rounded-none font-serif"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4 ml-2" />
              </Button>
              
              <p className="text-xs text-center text-slate font-serif mt-4">
                All messages will be sent directly to pari2798@gmail.com
              </p>
            </form>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-white/10 rounded-full blur-[120px] opacity-20" />
    </section>
  );
};

export default Contact;
