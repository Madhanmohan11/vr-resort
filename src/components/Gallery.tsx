import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Res from '../assets/images/Resort pool.jpeg';
import Dining from '../assets/images/Dining.jpeg';
import Living from '../assets/images/Living.jpeg';
import luxury from '../assets/images/Luxury suit.jpeg';
import Garnden from '../assets/images/Garden.jpeg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: Res,
      alt: 'Resort Pool Area',
      category: 'Pool & Recreation',
    },
    {
      src: luxury,
      alt: 'Luxury Suite',
      category: 'Accommodations',
    },
    {
      src: Dining,
      alt: 'Resort Restaurant',
      category: 'Dining',
    },
    {
      src: Garnden,
      alt: 'Garden View',
      category: 'Gardens',
    },
    {
      src:  Living,
      alt: 'Tv Room', 
      category: 'Living',
    },
    {
      src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Event Spaces',
      category: 'Events',
    },
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Gallery &{' '}
              <span className="bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">
                Moments
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our stunning facilities and beautiful spaces through our curated photo gallery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{image.alt}</p>
                  <p className="text-sm text-gray-200">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />

            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
              onClick={prevImage}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
              onClick={nextImage}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-semibold text-lg">{images[selectedImage].alt}</p>
              <p className="text-gray-300">{images[selectedImage].category}</p>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 text-white bg-black/50 px-3 py-1 rounded-full">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;




// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Res from '../assets/images/Resort Pool Area.jpeg'

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
//   const images = [
//     {
//       src:  Res,
//       alt: 'Resort Pool Area',
//       category: 'Pool & Recreation'
//     },
//     {
//       src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       alt: 'Luxury Suite',
//       category: 'Accommodations'
//     },
//     {
//       src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       alt: 'Resort Restaurant',
//       category: 'Dining'
//     },
//     {
//       src: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       alt: 'Garden View',
//       category: 'Gardens'
//     },
//     {
//       src: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       alt: 'Spa & Wellness',
//       category: 'Wellness'
//     },
//     {
//       src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       alt: 'Event Spaces',
//       category: 'Events'
//     }
//   ];

//   const nextImage = () => {
//     if (selectedImage !== null) {
//       setSelectedImage((selectedImage + 1) % images.length);
//     }
//   };

//   const prevImage = () => {
//     if (selectedImage !== null) {
//       setSelectedImage((selectedImage - 1 + images.length) % images.length);
//     }
//   };

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//               Gallery & <span className="bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">Moments</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Explore our stunning facilities and beautiful spaces through our curated photo gallery
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {images.map((image, index) => (
//               <div 
//                 key={index}
//                 className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
//                 onClick={() => setSelectedImage(index)}
//               >
//                 <img 
//                   src={image.src}
//                   alt={image.alt}
//                   className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
//                   <p className="font-semibold">{image.alt}</p>
//                   <p className="text-sm text-gray-200">{image.category}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
      
//       {/* Lightbox Modal */}
//       {selectedImage !== null && (
//         <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
//           <div className="relative max-w-4xl w-full">
//             <img 
//               src={images[selectedImage].src}
//               alt={images[selectedImage].alt}
//               className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
//             />
            
//             {/* Close Button */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="absolute top-4 right-4 text-white hover:bg-white/20"
//               onClick={() => setSelectedImage(null)}
//             >
//               <X className="w-6 h-6" />
//             </Button>
            
//             {/* Navigation Buttons */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
//               onClick={prevImage}
//             >
//               <ChevronLeft className="w-8 h-8" />
//             </Button>
            
//             <Button
//               variant="ghost"
//               size="icon"
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
//               onClick={nextImage}
//             >
//               <ChevronRight className="w-8 h-8" />
//             </Button>
            
//             {/* Image Info */}
//             <div className="absolute bottom-4 left-4 text-white">
//               <p className="font-semibold text-lg">{images[selectedImage].alt}</p>
//               <p className="text-gray-300">{images[selectedImage].category}</p>
//             </div>
            
//             {/* Image Counter */}
//             <div className="absolute bottom-4 right-4 text-white bg-black/50 px-3 py-1 rounded-full">
//               {selectedImage + 1} / {images.length}
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Gallery;
