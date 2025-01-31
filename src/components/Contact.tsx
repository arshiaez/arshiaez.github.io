import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold gradient-text sm:text-4xl animate-fade-in">Let's Connect</h2>
          <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Interested in collaboration or have questions about my research? Get in touch!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6 animate-slide-in">
              <div className="gradient-border p-6 rounded-lg bg-white hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:arshiaeftekhari@ut.ac.ir"
                    className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>arshiaeftekhari@ut.ac.ir</span>
                  </a>
                  <a
                    href="mailto:arshiaeftekharizadeh@gmail.com"
                    className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>arshiaeftekharizadeh@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="gradient-border p-6 rounded-lg bg-white hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Social Links</h3>
                <div className="space-y-4">
                  <a
                    href="https://www.linkedin.com/in/arshia-eftekhari-zadeh-572693289/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <a
                    href="https://github.com/arshiaez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;