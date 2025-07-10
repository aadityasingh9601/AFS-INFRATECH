import React from 'react';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/logo.jpg" className="h-12 w-12 text-blue-300" />
            <div>
              <h1 className="text-xl font-bold">AFS INFRATECH</h1>
              <p className="text-blue-200 text-sm">Private Limited</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-blue-300" />
              <span>8393810666 / 7300577255</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-blue-300" />
              <span>afsinfratechprivatelimited@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;