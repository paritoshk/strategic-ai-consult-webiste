
import React from 'react';
import { ArrowUp, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-10 px-6 md:px-8 border-t border-white/10 relative">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-serif font-bold text-white mb-2">Strategic <span className="text-green">Matter</span></h2>
            <p className="text-slate text-sm max-w-xs">
              Empowering organizations with end-to-end AI strategy and consulting services.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.linkedin.com/in/paritoshkul/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-navy-light transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-slate hover:text-white transition-colors" />
              </a>
              <a 
                href="https://github.com/paritoshk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-navy-light transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-slate hover:text-white transition-colors" />
              </a>
              <a 
                href="mailto:pari2798@gmail.com" 
                className="p-2 rounded-full hover:bg-navy-light transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-slate hover:text-white transition-colors" />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="p-3 rounded-full bg-navy-light hover:bg-green/20 transition-colors group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-green group-hover:animate-pulse" />
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-light text-sm">
            &copy; {new Date().getFullYear()} Strategic Matter. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-slate text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
