import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text">
                AI & Machine Learning Researcher
              </h1>
              <p className="text-xl text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Exploring the frontiers of AI & Machine Learning – Reinforcement Learning, Quantum ML, and beyond!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white gradient-bg hover:opacity-90 transition-opacity"
              >
                Connect with Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 gradient-border text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                View Projects
              </a>
            </div>

            <div className="flex items-center gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/University_of_Tehran_logo.svg/1200px-University_of_Tehran_logo.svg.png"
                alt="University of Tehran"
                className="h-16 w-auto animate-float"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/MCI_Logo.svg/2560px-MCI_Logo.svg.png"
                alt="MCI"
                className="h-12 w-auto animate-float"
                style={{ animationDelay: '0.2s' }}
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 gradient-bg opacity-10 rounded-full animate-rotate-in"></div>
            <img
              src="YOUR_PERSONAL_IMAGE_URL"
              alt="Arshia Eftekharizadeh"
              className="rounded-full w-64 h-64 mx-auto object-cover shadow-xl animate-scale-in"
            />
            <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-2xl font-bold text-gray-900">Arshia Eftekharizadeh</h2>
              <p className="text-gray-600">University of Tehran</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;