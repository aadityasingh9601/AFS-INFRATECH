import React from 'react';
import { FileText, Download, Shield, Building, Receipt, Award } from 'lucide-react';

const Documents = () => {
  const documents = [
    
    {
      icon: <Receipt className="h-8 w-8" />,
      title: "GST Registration Certificate",
      description: "Official GST registration certificate from tax authorities",
      
      downloadUrl: "/documents/GST_RC_AFS.pdf"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certificate of Incorporation",
      description: "Official certificate of incorporation from MCA",
      
      downloadUrl: "/documents/Certificate of Incorporation.pdf"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Company Documents</h2>
            <p className="text-xl text-gray-600">
              Download our company profile and project documentation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12 justify-center place-items-center">
            {documents.map((doc, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {doc.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{doc.title}</h3>
                <p className="text-gray-600 mb-4">{doc.description}</p>
                <div className="flex items-center justify-between">
                 
                  <a 
                    href={doc.downloadUrl || '#'} 
                    download={doc.downloadUrl ? true : false}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Registration Details</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">GSTIN Number</h4>
                <p className="text-gray-600 font-mono bg-gray-50 p-2 rounded">05ABBCA2881J1ZP</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">CIN Number</h4>
                <p className="text-gray-600 font-mono bg-gray-50 p-2 rounded">U43299UT2024PTC017901</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;