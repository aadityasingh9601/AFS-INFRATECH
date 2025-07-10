import React from 'react';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Building2 className="h-8 w-8 text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold">AFS INFRATECH</h3>
                  <p className="text-gray-400 text-sm">Private Limited</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted partner in infrastructure development with expertise in engineering 
                and development services. We deliver quality solutions with timely execution.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">GSTIN:</span>
                  <span className="text-gray-400">05ABBCA2881J1ZP</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">CIN:</span>
                  <span className="text-gray-400">U43299UT2024PTC017901</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a></li>
                <li><a href="#documents" className="hover:text-white transition-colors">Documents</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span>8393810666 / 7300577255</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 text-blue-400 mt-0.5" />
                  <span className="text-sm">afsinfratechprivatelimited@gmail.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                  <span className="text-sm">
                    Near Chatri wala kuan, Gram Jagjeetpur,<br />
                    Jawalapur, Haridwar, Uttarakhand - 249407
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AFS Infratech Private Limited. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;