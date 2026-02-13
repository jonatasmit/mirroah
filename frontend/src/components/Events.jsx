import React from 'react';
import { Calendar, Clock, Music2, ExternalLink } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 0,
      day: 'SEX 13/02',
      time: '12h',
      title: 'ELETRÔNICO',
      subtitle: 'Carnaval Mirroah - Abertura',
      djs: 'NAGA • DENER • ANNALÚ • ZUNTO',
      description: 'Abertura do carnaval com música eletrônica de qualidade',
      image: 'https://customer-assets.emergentagent.com/job_carnival-rio-vibes/artifacts/45e7k4l9_carnaval%20mirroah%20deck%20bar%20dia%2013.png',
      color: 'from-purple-500 to-orange-500'
    },
    {
      id: 1,
      day: 'SÁB 14/02',
      time: '12h',
      title: 'SAMBINHA ALLAN COELHO',
      subtitle: 'Eletrônico',
      djs: 'SCARLATELLI • ANDRADI • DON SUAREZ',
      description: 'Samba e eletrônico numa combinação explosiva',
      image: 'https://customer-assets.emergentagent.com/job_carnival-rio-vibes/artifacts/pjm4j0kc_carnaval%20mirroah%20deck%20bar%20dia%2014.png',
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 2,
      day: 'DOM 15/02',
      time: '12h',
      title: 'SAMBINHA IGOR BRANTE',
      subtitle: 'Eletrônico',
      djs: 'RAY COSTA • LAURA KELLER • FINÃO',
      description: 'Domingo de carnaval com samba e muita energia',
      image: 'https://customer-assets.emergentagent.com/job_carnival-rio-vibes/artifacts/aqijhmz8_carnaval%20mirroah%20deck%20bar%20dia%2015.png',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 3,
      day: 'SEG 16/02',
      time: '12h',
      title: 'SAMBINHA GRUPO PAGODAR',
      subtitle: 'Eletrônico',
      djs: 'VERLICHT • LOHAN • DON SUAREZ • KIBE',
      description: 'Carnaval continua com o melhor do pagode eletrônico',
      image: 'https://customer-assets.emergentagent.com/job_carnival-rio-vibes/artifacts/t45b7rxw_carnaval%20mirroah%20deck%20bar%20dia%2016.png',
      color: 'from-pink-500 to-fuchsia-600'
    },
    {
      id: 4,
      day: 'TER 17/02',
      time: '12h',
      title: 'SAMBINHA HANAYA',
      subtitle: 'Eletrônico',
      djs: 'BRUNA STRAIT • ZUNTO B2B DÉEAZ • VICK',
      description: 'Encerramento épico do carnaval com muita festa',
      image: 'https://customer-assets.emergentagent.com/job_carnival-rio-vibes/artifacts/mr0rvzv2_carnaval%20mirroah%20deck%20bar%20dia%2017.png',
      color: 'from-yellow-400 to-amber-500'
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os eventos de carnaval no Mirroah Deck Bar! 🎉');
    window.open(`https://wa.me/5521972232170?text=${message}`, '_blank');
  };

  return (
    <section id="eventos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"></div>
            <Calendar className="w-8 h-8 text-pink-500" />
            <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
          </div>
          <h2 className="font-righteous text-4xl md:text-6xl text-gray-900 mb-4">
            CARNAVAL 2025
          </h2>
          <p className="font-poppins text-xl text-gray-600 max-w-2xl mx-auto">
            5 dias de muita festa, música eletrônica e samba no melhor beach club do Rio!
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Event Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-pink-500" />
                    <span className="font-poppins font-bold text-gray-900">{event.day}</span>
                  </div>
                </div>

                {/* Time Badge */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="font-poppins font-semibold text-white">{event.time}</span>
                  </div>
                </div>
              </div>

              {/* Event Info */}
              <div className="p-6">
                <h3 className="font-righteous text-2xl text-gray-900 mb-2 leading-tight">
                  {event.title}
                </h3>
                
                {event.subtitle && (
                  <p className="font-poppins text-sm text-gray-500 mb-3 uppercase tracking-wide">
                    {event.subtitle}
                  </p>
                )}
                
                {event.description && (
                  <p className="font-poppins text-sm text-gray-600 mb-3 italic">
                    {event.description}
                  </p>
                )}
                
                <div className="flex items-start space-x-3 mb-4">
                  <Music2 className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                  <p className="font-poppins text-gray-700 leading-relaxed font-medium">
                    {event.djs}
                  </p>
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-poppins font-semibold py-3 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Reservar pelo WhatsApp</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${event.color} opacity-10 rounded-bl-full`}></div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-yellow-400 via-pink-500 to-orange-500 rounded-3xl p-8 md:p-12 shadow-xl">
          <h3 className="font-righteous text-3xl md:text-4xl text-white mb-4">
            Não Perca o Carnaval 2025!
          </h3>
          <p className="font-poppins text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            5 dias de festa com os melhores DJs do Rio! Samba, eletrônico, drinks e muita energia. Reserve agora!
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-white text-gray-900 font-poppins font-bold px-8 py-4 rounded-full hover:scale-110 hover:shadow-2xl transition-all duration-300"
          >
            Reservar pelo WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
