import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Waves } from '@/components/ui/waves';
import { GlobeDemo } from '@/components/ui/GlobeDemo';

const Hero: React.FC = () => {
  return (
    <div className="w-full bg-black overflow-hidden">
      {/* Globe Demo section */}
      <div className="flex justify-center items-center py-16">
        <GlobeDemo />
      </div>
      
      {/* Content section below the globe */}
      <section className="relative bg-black py-16 px-6 md:px-8">
        <div className="absolute inset-0 grid-background opacity-100 z-0" />
        
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
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight opacity-0 animate-fadeInDelay2">
              End-to-End AI Strategy & <span className="text-gradient"> Consulting</span>
            </h2>
            <p className="text-slate text-lg md:text-xl mt-6 max-w-2xl opacity-0 animate-fadeInDelay3 font-serif">
              Enabling AI in your firm, supporting founders to scale and raise. 
              Fractional CTO, Strategic Advisor, and Angel Investor.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start items-center opacity-0 animate-fadeInDelay4">
              <a
                href="#contact"
                className="px-6 py-3 font-serif rounded-md bg-slate-800/50 border border-white/20 text-white hover:bg-white/10 transition duration-300 text-sm tracking-wide shadow-sm"
              >
                Work with us
              </a>
              <a
                href="#services"
                className="px-6 py-3 font-serif rounded-md bg-black/80 border border-white/20 text-white hover:bg-white/5 transition duration-300 text-sm tracking-wide shadow-sm"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-[120px] opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-[120px] opacity-20" />
      </section>
    </div>
  );
};

export default Hero;
