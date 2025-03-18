import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import CaseStudies from '@/components/CaseStudies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { SignupForm } from '@/components/ui/signup-form';

const Index: React.FC = () => {
  useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
        
    return () => {
      // Clean up event listeners
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, []);

  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <div id="services" className="pt-16">
          <Services />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="case-studies">
          <CaseStudies />
        </div>
        <div id="contact">
          <Contact />
        </div>
        
        {/* Signup Form Section */}
        <section className="section-padding relative">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <span className="text-white text-sm uppercase tracking-wider font-serif">Newsletter</span>
              <h2 className="text-3xl md:text-5xl font-serif mt-2">Join Our Community</h2>
              <p className="text-slate mt-4 max-w-2xl mx-auto font-serif">
                Stay updated with the latest insights and trends in AI strategy and consulting.
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <SignupForm />
            </div>
            <div className="mt-8 text-center">
              <a 
                href="#"
                className="px-6 py-3 font-serif rounded-md bg-slate-800/50 border border-white/20 text-white hover:bg-white/10 transition duration-300 inline-block text-sm tracking-wide shadow-sm"
              >
                Subscribe Now
              </a>
            </div>
          </div>
          
          {/* Floating gradient */}
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-white/5 rounded-full blur-[100px] opacity-20" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
