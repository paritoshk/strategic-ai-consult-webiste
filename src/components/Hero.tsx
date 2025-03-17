
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Waves } from '@/components/ui/waves';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-background opacity-100 z-0" />
      
      {/* Waves background */}
      <div className="absolute inset-0 z-10 opacity-60">
        <Waves 
          lineColor="rgba(255, 255, 255, 0.1)"
          backgroundColor="transparent"
          waveSpeedX={0.0125}
          waveSpeedY={0.005}
          waveAmpX={24}
          waveAmpY={12}
          xGap={15}
          yGap={40}
          friction={0.925}
          tension={0.005}
          maxCursorMove={80}
        />
      </div>
      
      <div className="container mx-auto relative z-20">
        <div className="flex flex-col max-w-4xl mx-auto">
          <span className="text-white font-serif text-sm mb-5 opacity-0 animate-fadeInDelay1">
            AI Strategy for Future-Focused Organizations
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight opacity-0 animate-fadeInDelay2">
            End-to-End AI Strategy & <span className="text-gradient">Strategic Consulting</span>
          </h1>
          <p className="text-slate text-lg md:text-xl mt-6 max-w-2xl opacity-0 animate-fadeInDelay3 font-serif">
            Enabling AI in your firm, supporting founders to scale and raise. 
            Fractional CTO, Strategic Advisor, and Angel Investor.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 opacity-0 animate-fadeInDelay4">
            <a 
              href="#services" 
              className="px-6 py-3 bg-white hover:bg-white/90 text-black font-serif rounded-none transition-colors flex items-center justify-center gap-2 group"
            >
              Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#case-studies" 
              className="px-6 py-3 border border-white/20 hover:border-white/40 text-white font-serif rounded-none transition-colors flex items-center justify-center"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating gradient - changed to grayscale */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-[120px] opacity-30" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-[120px] opacity-20" />
    </section>
  );
};

export default Hero;
