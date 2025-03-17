
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
            <span className="text-white text-sm uppercase tracking-wider font-serif">About Me</span>
            <h2 className="text-3xl md:text-5xl font-serif mt-2 mb-6">Paritosh Kulkarni</h2>
            
            <p className="text-slate mb-4 font-serif">
              As an AI & Strategy Consultant, I specialize in empowering venture capital firms and their portfolio companies to make data-driven decisions and maximize the potential of their investments in Human-Computer Interaction, Deeptech B2B SaaS, Techbio, Vertical-enabled AI, Devtools, and Climate Tech.
            </p>
            <p className="text-slate mb-4 font-serif">
              I have helped pre-seed stage founders raise over 1M+ funding via the power of my investor network and funds I am scouting for as a venture partner. As an angel investor, my investments include Assort Health and IOTian Technologies. I am also an LP in DayDream Ventures.
            </p>
            
            <div className="mt-8 flex gap-4">
              <a 
                href="https://www.linkedin.com/in/paritoshkul/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-black hover:bg-black/80 rounded-none transition-colors border border-white/10"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://github.com/paritoshk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-black hover:bg-black/80 rounded-none transition-colors border border-white/10"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5 text-white" />
              </a>
              <a 
                href="mailto:pari2798@gmail.com" 
                className="p-3 bg-black hover:bg-black/80 rounded-none transition-colors border border-white/10"
                aria-label="Email"
              >
                <MailIcon className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="glass-card rounded-none p-6 md:p-8 h-full">
              <h3 className="text-xl font-serif mb-5">Experience & Expertise</h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-serif mb-3">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-black rounded-none text-sm text-white border border-white/10 font-serif"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-serif mb-3">Professional Experience</h4>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-white/10">
                    <div className="flex justify-between items-start">
                      <h5 className="font-serif">VP of AI Research and Technology</h5>
                      <span className="text-white text-sm font-serif">2023-2024</span>
                    </div>
                    <p className="text-slate-light text-sm font-serif">Teal Omics, Inc., San Francisco, CA</p>
                  </div>
                  
                  <div className="pb-4 border-b border-white/10">
                    <div className="flex justify-between items-start">
                      <h5 className="font-serif">Data Science Associate / Algorithm Engineer</h5>
                      <span className="text-white text-sm font-serif">2022</span>
                    </div>
                    <p className="text-slate-light text-sm font-serif">Pivotal Life Sciences, San Francisco, CA</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-start">
                      <h5 className="font-serif">Senior Data Scientist</h5>
                      <span className="text-white text-sm font-serif">2020-2022</span>
                    </div>
                    <p className="text-slate-light text-sm font-serif">Columbia University Irving Medical Center, New York, NY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] opacity-20" />
    </section>
  );
};

export default About;
