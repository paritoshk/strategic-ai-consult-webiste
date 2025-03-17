
import React from 'react';
import { CheckCircle, Zap, LineChart, BarChart3, Brain, Award } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Zap className="w-10 h-10 text-green" />,
      title: "AI Strategy Development",
      description: "Comprehensive strategies to integrate AI solutions aligned with your business objectives and industry challenges."
    },
    {
      icon: <LineChart className="w-10 h-10 text-green" />,
      title: "Portfolio Growth Analytics",
      description: "Data-driven insights to optimize your investment portfolio and identify growth opportunities using advanced analytics."
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-green" />,
      title: "Due Diligence as a Service",
      description: "Thorough technical and market assessment for potential investments, leveraging AI to uncover hidden opportunities and risks."
    },
    {
      icon: <Brain className="w-10 h-10 text-green" />,
      title: "Tech & AI Advisory",
      description: "Expert guidance on emerging technologies, AI implementation, and technical roadmap development for your organization."
    },
    {
      icon: <Award className="w-10 h-10 text-green" />,
      title: "Fractional CTO Services",
      description: "On-demand technical leadership to guide your organization's technology strategy and implementation."
    }
  ];

  const features = [
    "Network optimization & partnership identification",
    "Portfolio monitoring and growth analysis",
    "Competitive landscape intelligence",
    "Deal flow insight extraction",
    "Market trend anticipation",
    "Due diligence expertise"
  ];

  return (
    <section id="services" className="section-padding relative">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-green text-sm uppercase tracking-wider font-medium">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-2">AI-Powered Solutions</h2>
          <p className="text-slate mt-4 max-w-2xl mx-auto">
            Strategic services designed specifically for VCs, portfolio companies, and organizations looking to leverage AI for competitive advantage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-slate-light">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 glass-card rounded-xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-serif">
                AI solutions that enable VCs to excel
              </h3>
              <p className="text-slate mt-4">
                Our AI-powered solutions provide venture capital firms with the insights and tools they need to make data-driven decisions and maximize investment potential.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green shrink-0 mt-0.5" />
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 bg-navy-dark/50 rounded-lg p-6 border border-white/10">
              <h4 className="text-xl font-medium mb-4">Our AI-Powered Approach</h4>
              <p className="text-slate-light mb-4">
                We combine deep industry knowledge with cutting-edge AI technologies to deliver actionable insights and strategic guidance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green"></span>
                  <span>Proprietary AI algorithms for investment analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green"></span>
                  <span>Natural language processing for market intelligence</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green"></span>
                  <span>Machine learning models for trend prediction</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green"></span>
                  <span>Custom dashboards for portfolio monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-green/10 rounded-full blur-[100px] opacity-30" />
    </section>
  );
};

export default Services;
