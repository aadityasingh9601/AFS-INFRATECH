import { Target, Users, Award } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About AFS Infratech
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are experts in infrastructure development with good experience
              and strong liaison with all authorities, delivering technology
              solutions that make organizations more efficient.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-2">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To help businesses achieve immense benefits from technology with
                outstanding implementation and proper solutions.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Our Team
              </h3>
              <p className="text-gray-600">
                Well-trained engineers and dedicated teams from Civil and
                Telecom fields ensuring quality workmanship.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Our Values
              </h3>
              <p className="text-gray-600">
                Customer service with satisfaction, quality of work, and timely
                delivery are our core principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
