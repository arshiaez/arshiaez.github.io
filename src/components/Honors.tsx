import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';

const Honors = () => {
  const awards = [
    {
      title: 'Ranked 1st',
      organization: 'Sampad School',
      description: 'Elite school for gifted students',
      icon: Trophy,
    },
    {
      title: 'Top 10',
      organization: "Master's Entrance Exam",
      description: 'AI & Machine Learning specialization',
      icon: Award,
    },
    {
      title: 'Top 1%',
      organization: 'National University Entrance Exam',
      description: 'Konkur',
      icon: Star,
    },
  ];

  return (
    <section id="honors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Honors & Awards</h2>
          <p className="mt-4 text-lg text-gray-600">
            Recognition of academic excellence and research achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <award.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h3>
              <div className="text-blue-600 font-medium mb-2">{award.organization}</div>
              <p className="text-gray-600">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Honors;