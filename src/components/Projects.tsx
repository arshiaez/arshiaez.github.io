import React from 'react';
import { Brain, Cpu, MessageSquare, Image } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Reinforcement Learning for Localization',
      description: 'AI-driven solutions for accurate location tracking using advanced reinforcement learning algorithms.',
      icon: Brain,
      link: '#',
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Researching quantum-based ML models for optimization and enhanced computational capabilities.',
      icon: Cpu,
      link: '#',
    },
    {
      title: 'NLP & Voice Processing',
      description: 'Enhancing voice recognition and natural language processing applications for better human-AI interaction.',
      icon: MessageSquare,
      link: '#',
    },
    {
      title: 'Image Processing & Model Pruning',
      description: 'Improving efficiency in AI models through advanced image processing techniques and model optimization.',
      icon: Image,
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold gradient-text sm:text-4xl">Research & Projects</h2>
          <p className="mt-4 text-lg text-gray-600">
            Exploring cutting-edge technologies in AI and Machine Learning through innovative research projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in gradient-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                  <project.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="gradient-text font-medium inline-flex items-center"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;