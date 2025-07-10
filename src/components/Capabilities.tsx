import React from 'react';
import { Search, PenTool, Shield, Users } from 'lucide-react';

const Capabilities = () => {
  const capabilities = [
    {
      icon: <Search className="h-12 w-12" />,
      title: "Survey",
      description: "Our pool of well-trained engineers conduct onsite surveys to capture minute details such as soil test, route feasibility, and site analysis.",
      details: "Each engineer carries standardized check-sheets and questionnaires to meet designers' requirements."
    },
    {
      icon: <PenTool className="h-12 w-12" />,
      title: "Designing",
      description: "Site details are converted into smart data for optimized design solutions with dedicated teams from Civil and Telecom fields.",
      details: "Our engineers prepare comprehensive designs and BOQs for efficient project execution."
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Quality & Standardization",
      description: "Well-established quality checkpoints ensure workmanship standards with regular monitoring and assessment.",
      details: "We maintain strict quality control protocols throughout the project lifecycle."
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Project Management",
      description: "Experienced project managers ensure timely delivery with effective coordination between teams and stakeholders.",
      details: "Complete project oversight from initiation to successful completion."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Engineering Capabilities</h2>
            <p className="text-xl text-gray-600">
              Our comprehensive approach ensures successful project delivery from conception to completion
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-600 p-3 rounded-lg text-white flex-shrink-0">
                    {capability.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{capability.description}</p>
                    <p className="text-sm text-gray-600 italic">{capability.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Why Choose AFS Infratech?</h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">1+</div>
                  <div className="text-blue-200">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-blue-200">Quality Assurance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-blue-200">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;