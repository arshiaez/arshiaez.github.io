import React from 'react';
import { Briefcase, Users, School } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'AI Researcher',
      company: 'MCI',
      period: 'Present',
      description: 'Conducting research in AI, Reinforcement Learning, and Localization. Received a research grant for AI advancements.',
      icon: Briefcase,
    },
    {
      title: 'Chairman (Upcoming)',
      company: 'AI Student Club, University of Tehran',
      period: 'Upcoming',
      description: 'Leading AI student initiatives, workshops, and research collaborations under ACM.',
      icon: Users,
    },
    {
      title: "Master's Student",
      company: 'University of Tehran',
      period: 'Present',
      description: 'Pursuing advanced research in AI and Machine Learning, focusing on Quantum ML and Reinforcement Learning.',
      icon: School,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold gradient-text sm:text-4xl">Experience</h2>
          <p className="mt-4 text-lg text-gray-600">
            A journey through research, leadership, and innovation in AI.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 gradient-bg opacity-20"></div>
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div 
                  key={index} 
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 gradient-bg rounded-full flex items-center justify-center z-10">
                      <experience.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-grow ml-4 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 gradient-border">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-lg font-semibold text-gray-900">{experience.title}</h3>
                        <span className="text-sm text-gray-500">{experience.period}</span>
                      </div>
                      <div className="text-sm gradient-text mb-2">{experience.company}</div>
                      <p className="text-gray-600">{experience.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;