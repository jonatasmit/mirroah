import React from 'react';
import { Calendar, Music, Waves } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os eventos de carnaval no Mirroah Deck Bar! 🎉');
    window.open(`https://wa.me/5521972232170?text=${message}`, '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://customer-assets.emergentagent.com/job_cbf76acb-c35a-4eda-86d6-dc663817ebb5/artifacts/2617texp_rio%20beach%20club.png"
          alt="Mirroah Deck Bar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Headline */}
        <h1 className="font-righteous text-5xl md:text-7xl lg:text-8xl text-white mb-6 animate-fade-in-up leading-tight">
          CARNAVAL
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-orange-500">
            O ANO TODO!
          </span>
        </h1>

        {/* Subheadline */}
        <p className="font-poppins text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          O melhor beach club do Rio de Janeiro com música eletrônica, drinks tropicais e o pôr do sol mais incrível da cidade!
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-up animation-delay-400">
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            <Music className="w-6 h-6 text-yellow-400" />
            <span className="font-poppins text-white font-medium">DJs Ao Vivo</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            <Waves className="w-6 h-6 text-blue-400" />
            <span className="font-poppins text-white font-medium">Vista para o Mar</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            <Calendar className="w-6 h-6 text-pink-400" />
            <span className="font-poppins text-white font-medium">Eventos Especiais</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
          <button
            onClick={handleWhatsAppClick}
            className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white font-poppins font-bold text-lg rounded-full hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50"
          >
            <span className="relative z-10">Ver Eventos de Carnaval</span>
            <div className="absolute inset-0 bg-white rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
          <a
            href="#sobre"
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-poppins font-semibold text-lg rounded-full border-2 border-white/50 hover:bg-white hover:text-gray-900 hover:scale-110 transition-all duration-300"
          >
            Conheça o Deck Bar
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
