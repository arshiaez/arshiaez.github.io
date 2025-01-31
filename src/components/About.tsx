import React from 'react';
import { Brain, Code, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Me</h2>
          <p className="mt-4 text-lg text-gray-600">
            I am a passionate AI and Machine Learning researcher pursuing my Master's at the University of Tehran.
            My research focuses on Reinforcement Learning, Localization, and Quantum Machine Learning, alongside
            hands-on experience in NLP, Voice Processing, Image Processing, and AI Model Optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Research</h3>
            <p className="text-gray-600">
              Currently an AI Researcher at MCI, working on cutting-edge projects in Reinforcement Learning and Quantum ML.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Leadership</h3>
            <p className="text-gray-600">
              Upcoming Chairman of AI Student Club at the University of Tehran, fostering innovation and collaboration.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Achievements</h3>
            <p className="text-gray-600">
              Ranked in top percentiles consistently, awarded research grants, and recognized for academic excellence.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <blockquote className="text-2xl font-medium text-gray-900 italic">
            "Pushing the boundaries of AI to create innovative, intelligent solutions for the future."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;