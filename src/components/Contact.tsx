import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">
              Ready to start your infrastructure project? Contact us for professional engineering services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">8393810666 / 7300577255</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">afsinfratechprivatelimited@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Registered Office</h4>
                    <p className="text-gray-600">
                      Near Chatri wala kuan, Gram Jagjeetpur<br />
                      Jawalapur, Haridwar<br />
                      Uttarakhand - 249407
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
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