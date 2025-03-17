
import React from 'react';
import { LinkedinIcon, GithubIcon, MailIcon } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    "AI Strategy",
    "Investment Analysis",
    "Due Diligence",
    "Technical Advisory",
    "Market Research",
    "ML Operations",
    "Data Science",
    "Angel Investing",
    "Portfolio Management",
    "Strategic Planning"
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          <div className="md:w-1/2">
            <span className="text-green text-sm uppercase tracking-wider font-medium">About Me</span>
            <h2 className="text-3xl md:text-5xl font-serif mt-2 mb-6">Paritosh Kulkarni</h2>
            
            <p className="text-slate mb-4">
              As an AI & Strategy Consultant, I specialize in empowering venture capital firms and their portfolio companies to make data-driven decisions and maximize the potential of their investments in Human-Computer Interaction, Deeptech B2B SaaS, Techbio, Vertical-enabled AI, Devtools, and Climate Tech.
            </p>
            <p className="text-slate mb-4">
              I have helped pre-seed stage founders raise over 1M+ funding via the power of my investor network and funds I am scouting for as a venture partner. As an angel investor, my investments include Assort Health and IOTian Technologies. I am also an LP in DayDream Ventures.
            </p>
            
            <div className="mt-8 flex gap-4">
              <a 
                href="https://www.linkedin.com/in/paritoshkul/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-navy-light hover:bg-navy-light/80 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://github.com/paritoshk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-navy-light hover:bg-navy-light/80 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5 text-white" />
              </a>
              <a 
                href="mailto:pari2798@gmail.com" 
                className="p-3 bg-navy-light hover:bg-navy-light/80 rounded-full transition-colors"
                aria-label="Email"
              >
                <MailIcon className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="glass-card rounded-xl p-6 md:p-8 h-full">
              <h3 className="text-xl font-medium mb-5">Experience & Expertise</h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-3">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-navy-dark rounded-full text-sm text-white border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3">Professional Experience</h4>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-white/10">
                    <div className="flex justify-between items-start">
                      <h5 className="font-medium">VP of AI Research and Technology</h5>
                      <span className="text-green text-sm">2023-2024</span>
                    </div>
                    <p className="text-slate-light text-sm">Teal Omics, Inc., San Francisco, CA</p>
                  </div>
                  
                  <div className="pb-4 border-b border-white/10">
                    <div className="flex justify-between items-start">
                      <h5 className="font-medium">Data Science Associate / Algorithm Engineer</h5>
                      <span className="text-green text-sm">2022</span>
                    </div>
                    <p className="text-slate-light text-sm">Pivotal Life Sciences, San Francisco, CA</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-start">
                      <h5 className="font-medium">Senior Data Scientist</h5>
                      <span className="text-green text-sm">2020-2022</span>
                    </div>
                    <p className="text-slate-light text-sm">Columbia University Irving Medical Center, New York, NY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] opacity-20" />
    </section>
  );
};

export default About;
