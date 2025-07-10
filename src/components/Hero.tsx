import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            AFS INFRATECH PRIVATE LIMITED
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Your trusted partner in infrastructure development with expertise in STEEL/HDPE/MDPE pipe laying, 
            optical fiber installation, and comprehensive engineering solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Quality Assured</span>
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Timely Delivery</span>
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Expert Team</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToServices}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>View Services</span>
              <ArrowRight className="h-5 w-5" />
            </button>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;