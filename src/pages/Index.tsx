
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
    
    // Add intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.glass-card').forEach(card => {
      if (!card.classList.contains('animate-fadeIn')) {
        observer.observe(card);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <CaseStudies />
        <Contact />
        
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
