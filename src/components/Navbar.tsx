
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? 'py-3 bg-black/90 backdrop-blur-md shadow-md' : 'py-5 bg-transparent'
    )}>
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-xl md:text-2xl font-serif font-bold text-white">Strategic Matter</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate hover:text-white link-underline text-sm tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-4 py-2 rounded-md border border-white text-white hover:bg-white/10 transition-colors text-sm"
          >
            Get in Touch
          </a>
        </nav>
        
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 bg-black/95 flex flex-col justify-center items-center transition-all duration-300 ease-in-out z-40 md:hidden",
        isMenuOpen ? "opacity-100 top-0" : "opacity-0 top-[-100%] pointer-events-none"
      )}>
        <nav className="flex flex-col items-center space-y-8 p-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xl text-white hover:text-gray-300 transition-colors"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-md border border-white text-white hover:bg-white/10 transition-colors"
            onClick={toggleMenu}
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
