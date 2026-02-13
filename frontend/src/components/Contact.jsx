import React from 'react';
import { Phone, Mail, Instagram, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = (type) => {
    const messages = {
      eventos: 'Olá! Gostaria de saber mais sobre os eventos de carnaval no Mirroah Deck Bar! 🎉',
      reserva: 'Olá! Gostaria de fazer uma reserva no Mirroah Deck Bar! 🏖️',
      info: 'Olá! Gostaria de mais informações sobre o Mirroah Deck Bar! ☀️'
    };
    const message = encodeURIComponent(messages[type]);
    window.open(`https://wa.me/5521972232170?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'WhatsApp',
      content: '+55 (21) 97223-2170',
      action: () => handleWhatsAppClick('info'),
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'E-mail',
      content: 'contato@mirroahdeckbar.com.br',
      action: () => window.location.href = 'mailto:contato@mirroahdeckbar.com.br',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: 'Instagram',
      content: '@mirroahdeck',
      action: () => window.open('https://www.instagram.com/mirroahdeck/', '_blank'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Localização',
      content: 'Rio de Janeiro, RJ',
      action: null,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-righteous text-4xl md:text-6xl text-gray-900 mb-4">
            ENTRE EM CONTATO
          </h2>
          <p className="font-poppins text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para receber você! Entre em contato e venha viver a melhor experiência de beach club do Rio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                onClick={info.action}
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  info.action ? 'cursor-pointer hover:-translate-y-1' : ''
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${info.color} text-white transform group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-poppins font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h3>
                    <p className="font-poppins text-gray-600">
                      {info.content}
                    </p>
                  </div>
                  {info.action && (
                    <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Opening Hours */}
            <div className="bg-gradient-to-br from-yellow-400 via-pink-500 to-orange-500 rounded-2xl p-6 text-white">
              <div className="flex items-start space-x-4">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins font-semibold text-white mb-2 text-lg">
                    Horário de Funcionamento
                  </h3>
                  <div className="space-y-1 font-poppins text-white/90">
                    <p>Quinta a Domingo: 12h às 02h</p>
                    <p>Eventos Especiais: Confira nossa programação</p>
                    <p className="text-sm mt-2 text-white/80">
                      * Horários podem variar durante o carnaval e eventos especiais
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="font-righteous text-3xl text-gray-900 mb-6">
                Fale Conosco
              </h3>
              
              <div className="space-y-4">
                <button
                  onClick={() => handleWhatsAppClick('eventos')}
                  className="w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-orange-500 text-white font-poppins font-bold py-4 px-6 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Consultar Eventos de Carnaval</span>
                </button>

                <button
                  onClick={() => handleWhatsAppClick('reserva')}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-poppins font-bold py-4 px-6 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Fazer Reserva pelo WhatsApp</span>
                </button>

                <a
                  href="https://www.instagram.com/mirroahdeck/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-poppins font-bold py-4 px-6 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Seguir no Instagram</span>
                </a>

                <a
                  href="mailto:contato@mirroahdeckbar.com.br"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-poppins font-bold py-4 px-6 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Enviar E-mail</span>
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
              <h4 className="font-righteous text-2xl mb-4">Vem pro Mirroah! 🎉</h4>
              <p className="font-poppins leading-relaxed mb-4">
                Seja para curtir nossos eventos de carnaval, aproveitar um happy hour à beira-mar 
                ou simplesmente relaxar com aquele pôr do sol incrível - o Mirroah Deck Bar é 
                o seu point no Rio!
              </p>
              <p className="font-poppins text-sm text-gray-300">
                Siga nossas redes sociais para ficar por dentro de todos os eventos e novidades!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
