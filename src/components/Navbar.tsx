
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/moving-border';

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
          <span className="text-xl md:text-2xl font-serif text-white">Strategic Matter</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate hover:text-white link-underline text-sm tracking-wide font-serif"
            >
              {link.name}
            </a>
          ))}
          <Button 
            as="a"
            href="#contact" 
            className="bg-black text-white border-white/20 font-serif h-10 w-auto px-4"
            containerClassName="h-10 w-auto"
          >
            Get in Touch
          </Button>
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
              className="text-xl text-white hover:text-gray-300 transition-colors font-serif"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
          <Button 
            as="a"
            href="#contact" 
            className="bg-black text-white border-white/20 font-serif"
            onClick={toggleMenu}
          >
            Get in Touch
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
