
import { Camera } from 'lucide-react';

const Gallery = () => {
  // Images will be loaded from public/images folder
  const workImages = [
    { id: 1, url: '/images/project2.jpg' },
    { id: 2, url: '/images/project3.jpg' },
    { id: 3, url: '/images/project4.jpg' },
    { id: 4, url: '/images/project5.jpg' },
    { id: 5, url: '/images/project6.jpg' },
    { id: 6, url: '/images/project7.jpg' },
    { id: 7, url: '/images/project8.jpg' },
    { id: 8, url: '/images/project9.jpg' },
    { id: 9, url: '/images/project10.jpg' },
    { id: 10, url: '/images/project11.jpg' },
    { id: 11, url: '/images/project12.jpg' },
    { id: 12, url: '/images/project13.jpg' },
    { id: 13, url: '/images/project14.jpg' },
    { id: 14, url: '/images/project15.jpg' },
    { id: 15, url: '/images/project16.jpg' },
    { id: 16, url: '/images/project17.jpg' },
    { id: 17, url: '/images/project18.jpg' },
    { id: 18, url: '/images/project19.jpg' },
    { id: 19, url: '/images/project20.jpg' },
    { id: 20, url: '/images/project21.jpg' },
    { id: 21, url: '/images/project22.jpg' },
    { id: 22, url: '/images/project23.jpg' },
    { id: 23, url: '/images/project24.jpg' },
    { id: 24, url: '/images/project25.jpg' },
    { id: 25, url: '/images/project26.jpg' },
    { id: 26, url: '/images/project27.jpg' },
    { id: 27, url: '/images/project28.jpg' },
    { id: 28, url: '/images/project29.jpg' },
    { id: 29, url: '/images/project30.jpg' },
    { id: 30, url: '/images/project31.jpg' },
    { id: 31, url: '/images/project32.jpg' },
    { id: 32, url: '/images/project33.jpg' },
    { id: 33, url: '/images/project34.jpg' },
    { id: 34, url: '/images/project35.jpg' },
    { id: 35, url: '/images/project36.jpg' },
    { id: 36, url: '/images/project37.jpg' },
    { id: 37, url: '/images/project38.jpg' },
    { id: 38, url: '/images/project39.jpg' },
    { id: 39, url: '/images/project40.jpg' },
    { id: 40, url: '/images/project41.jpg' },
    { id: 41, url: '/images/project42.jpg' },
    { id: 42, url: '/images/project43.jpg' },
    { id: 43, url: '/images/project44.jpg' },
    { id: 44, url: '/images/project45.jpg' },
    { id: 45, url: '/images/project46.jpg' },
    { id: 46, url: '/images/project47.jpg' },
    { id: 47, url: '/images/project48.jpg' },
    { id: 48, url: '/images/project49.jpg' },
    { id: 49, url: '/images/project50.jpg' },
    { id: 50, url: '/images/1673101875187.jpg' }
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Camera className="h-8 w-8 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">Live Work Gallery</h2>
            </div>
            <p className="text-xl text-gray-600">
              Showcasing our expertise through real project implementations
            </p>
          </div>

          <div className="relative">
            {/* Sliding container */}
            <div className="flex space-x-6 animate-slide">
              {/* First set of images */}
              {workImages.map((image) => (
                <div
                  key={`first-${image.id}`}
                  className="flex-shrink-0 w-[560px] rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={image.url}
                    alt="Live work project"
                    className="w-full h-80 object-cover"
                  />
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {workImages.map((image) => (
                <div
                  key={`second-${image.id}`}
                  className="flex-shrink-0 w-[560px] rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={image.url}
                    alt="Live work project"
                    className="w-full h-80 object-cover"
                  />
                </div>
              ))}

              
            </div>
          </div>

          
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-slide {
          animation: slide 12s linear infinite;
        }
        
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Gallery;