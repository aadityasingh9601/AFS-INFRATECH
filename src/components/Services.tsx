import React from 'react';
import { Wrench, Zap, Droplets, Network, Settings, Cable, HardHat } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Pipe Laying Services",
      description: "Expert installation of STEEL/HDPE/MDPE pipes, optical fiber cables, and splicing/termination work.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Fusion & Testing",
      description: "Professional fusion, flushing, and testing services for MDPE pipe systems.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Installation Services",
      description: "Complete installation of GI PIPE and HDPE pipe for IBD work and plumbing applications.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Infrastructure Supply",
      description: "Supply and installation of hand holes, manholes, and route markers for network infrastructure.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Cable className="h-8 w-8" />,
      title: "Cable Installation",
      description: "Specialized blowing of optical fiber cables and laying of copper cables for various applications.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Utility Services",
      description: "Water/sewer/gas pipeline installation and pipe replacement through pipe-bursting methods.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <HardHat className="h-8 w-8" />,
      title: "Construction Services",
      description: "Complete construction solutions including civil works, structural development, and project execution.",
      color: "from-gray-500 to-gray-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive engineering and development services for all your infrastructure needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Services</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Overhead cabling work for small cell projects</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Sewer/Water pipe replacement through Pipe-Bursting Method</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Network infrastructure planning and implementation</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Quality assurance and project management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;