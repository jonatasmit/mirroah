import React from 'react';
import { ExternalLink } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: 'https://customer-assets.emergentagent.com/job_cbf76acb-c35a-4eda-86d6-dc663817ebb5/artifacts/2617texp_rio%20beach%20club.png',
      alt: 'Mirroah Deck Bar - Vista aérea',
      span: 'md:col-span-2 md:row-span-2'
    },
    {
      id: 2,
      src: 'https://customer-assets.emergentagent.com/job_carnival-rio-vibes/artifacts/2vw0j8q0_mirroah%20deck%20bar%20sunset.png',
      alt: 'Pôr do sol no Mirroah',
      span: 'md:col-span-1'
    },
    {
      id: 3,
      src: 'https://customer-assets.emergentagent.com/job_carnival-rio-vibes/artifacts/bmm58ts9_faro%20beach%20club.jpg',
      alt: 'Aqui no Mirroah',
      span: 'md:col-span-1'
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-righteous text-4xl md:text-6xl text-gray-900 mb-4">
            GALERIA
          </h2>
          <p className="font-poppins text-xl text-gray-600 max-w-2xl mx-auto">
            Momentos incríveis registrados no melhor beach club do Rio de Janeiro
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`group relative ${image.span} h-64 md:h-80 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-poppins text-white font-semibold text-lg">
                  {image.alt}
                </p>
              </div>

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl p-8 md:p-12 shadow-xl">
          <h3 className="font-righteous text-3xl md:text-4xl text-white mb-4">
            Siga no Instagram!
          </h3>
          <p className="font-poppins text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Acompanhe nossos eventos, stories e novidades no Instagram. 
            Marque a gente nas suas fotos com #MirroahDeckBar
          </p>
          <a
            href="https://www.instagram.com/mirroahdeck/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-gray-900 font-poppins font-bold px-8 py-4 rounded-full hover:scale-110 hover:shadow-2xl transition-all duration-300"
          >
            <span>@mirroahdeck</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
