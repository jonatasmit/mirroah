import React from 'react';
import { Palmtree, Sun, Waves, Music, Coffee, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Sun className="w-8 h-8" />,
      title: 'Pôr do Sol Inesquecível',
      description: 'Vista privilegiada para as praias mais bonitas do Rio',
      color: 'text-orange-500'
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: 'Música Eletrônica',
      description: 'Os melhores DJs e som de qualidade profissional',
      color: 'text-pink-500'
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: 'Deck à Beira-Mar',
      description: 'Estrutura completa com os pés na areia',
      color: 'text-blue-500'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Drinks Tropicais',
      description: 'Cardápio exclusivo de drinks e petiscos',
      color: 'text-yellow-500'
    },
    {
      icon: <Palmtree className="w-8 h-8" />,
      title: 'Clima Tropical',
      description: 'Ambiente descontraído e cheio de energia carioca',
      color: 'text-green-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Vibe Carnaval',
      description: 'Festa o ano inteiro com o espírito do carnaval',
      color: 'text-rose-500'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-righteous text-4xl md:text-6xl text-gray-900 mb-4">
            SOBRE O <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-orange-500">MIRROAH</span>
          </h2>
          <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mais do que um beach club, o Mirroah Deck Bar é o point perfeito para quem quer viver 
            a energia do Rio de Janeiro em um ambiente único, com carnaval o ano todo!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://customer-assets.emergentagent.com/job_carnival-rio-vibes/artifacts/2vw0j8q0_mirroah%20deck%20bar%20sunset.png"
                alt="Mirroah Deck Bar Sunset"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-70 blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-70 blur-xl"></div>
          </div>

          {/* Text Content */}
          <div>
            <h3 className="font-righteous text-3xl text-gray-900 mb-6">
              A Melhor Experiência de Beach Club do Rio
            </h3>
            <p className="font-poppins text-lg text-gray-700 mb-6 leading-relaxed">
              Localizado na zona sul do Rio de Janeiro, o Mirroah Deck Bar é o point perfeito para curtir o carnaval 
              o ano todo! Nossa estrutura completa à beira-mar oferece eventos com os melhores DJs, drinks exclusivos e 
              uma atmosfera única que combina samba com música eletrônica.
            </p>
            <p className="font-poppins text-lg text-gray-700 mb-6 leading-relaxed">
              Venha viver momentos inesquecíveis com vista privilegiada para o mar, som de qualidade e o melhor do 
              carnaval carioca em cada evento!
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="font-poppins font-semibold text-gray-800">Vista para o Mar</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-rose-100 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                <span className="font-poppins font-semibold text-gray-800">Música Ao Vivo</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-cyan-100 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="font-poppins font-semibold text-gray-800">Drinks Exclusivos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-pink-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`${feature.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h4 className="font-poppins font-bold text-xl text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="font-poppins text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 text-center">
          <blockquote className="font-righteous text-2xl md:text-3xl text-gray-800 italic">
            "Onde o carnaval nunca acaba e cada dia é uma festa!"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
