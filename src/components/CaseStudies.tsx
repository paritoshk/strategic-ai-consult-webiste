
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: "Empowering an Italian Firm's US Expansion",
      description: "Conducted in-depth due diligence for a firm's ongoing investments, providing strategic support to US-based General Partners focusing on biotech and future energy.",
      impact: [
        "Portfolio company raised an additional $100M from a top-tier fund",
        "Successful channeling of funds led to a 20x return on new private valuation",
        "Provided due diligence on multiple $5M investment deals"
      ],
      companies: ["Rubedo Life Sciences", "Liberate Bio", "Nuclidium"]
    },
    {
      title: "Accelerating a Brazilian Firm's Longevity Investments",
      description: "Conducted due diligence on over five deals within a week, filtering opportunities in the longevity space and providing comprehensive reports and recommendations.",
      impact: [
        "Provided in-depth analysis of key players in the longevity space",
        "Enabled effective resource allocation for the most promising opportunities",
        "Accelerated investment decision-making process"
      ],
      companies: ["Oviva Therapeutics", "Oisin Bio", "Repair Bio", "Cyclarity Tx"]
    },
    {
      title: "Redefining Solo GP's Success Strategy",
      description: "Supported a solo GP with $150M AUM preparing to raise another fund, developing network leveraging solutions and conducting targeted due diligence.",
      impact: [
        "Portfolio companies found valuable network connections",
        "Helped portfolio companies raise further funding rounds",
        "Improved GP operations with optimized deal filtering and technical analysis"
      ],
      companies: []
    }
  ];

  return (
    <section id="case-studies" className="section-padding relative">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-green text-sm uppercase tracking-wider font-medium">Case Studies</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-2">Success Stories</h2>
          <p className="text-slate mt-4 max-w-2xl mx-auto">
            Real-world examples of how our strategic consulting has driven measurable results for venture capital firms and their portfolio companies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 flex flex-col h-full group opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium">{study.title}</h3>
                  <span className="p-2 rounded-full bg-navy-dark group-hover:bg-green/20 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-green" />
                  </span>
                </div>
                <p className="text-slate-light mb-6">{study.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-2">Impact:</h4>
                  <ul className="space-y-2">
                    {study.impact.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green mt-1.5"></span>
                        <span className="text-slate-light text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {study.companies.length > 0 && (
                  <div>
                    <h4 className="text-white font-medium mb-2">Companies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.companies.map((company, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 bg-navy-dark rounded text-xs text-slate-light"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="px-6 py-3 border border-green text-green hover:bg-green/10 transition-colors inline-flex items-center gap-2 rounded-md"
          >
            Discuss Your Project
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green/10 rounded-full blur-[120px] opacity-20" />
    </section>
  );
};

export default CaseStudies;
