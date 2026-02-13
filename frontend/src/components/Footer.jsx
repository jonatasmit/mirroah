import React from 'react';
import { Heart, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de mais informações sobre o Mirroah Deck Bar! 🏖️');
    window.open(`https://wa.me/5521972232170?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_cbf76acb-c35a-4eda-86d6-dc663817ebb5/artifacts/mpdv8di6_mirroah%20deck%20bar%20logo.png" 
                alt="Mirroah Deck Bar" 
                className="h-12 w-auto"
              />
              <span className="font-righteous text-2xl">MIRROAH</span>
            </div>
            <p className="font-poppins text-gray-400 leading-relaxed mb-4">
              O melhor beach club do Rio de Janeiro. Carnaval o ano todo, música eletrônica, 
              drinks tropicais e muita energia carioca!
            </p>
            <div className="flex items-center space-x-2 text-pink-400">
              <Heart className="w-5 h-5 fill-current" />
              <span className="font-poppins text-sm">Feito com amor no Rio</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-righteous text-xl mb-4">Links Rápidos</h3>
            <ul className="space-y-3 font-poppins">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Início
                </a>
              </li>
              <li>
                <a href="#eventos" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Eventos de Carnaval
                </a>
              </li>
              <li>
                <a href="#cardapio" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Cardápio
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-righteous text-xl mb-4">Contato</h3>
            <div className="space-y-4 font-poppins">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors duration-300 group"
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-green-500 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+55 (21) 97223-2170</span>
              </button>

              <a
                href="mailto:contato@mirroahdeckbar.com.br"
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>contato@mirroahdeckbar.com.br</span>
              </a>

              <a
                href="https://www.instagram.com/mirroahdeck/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-pink-400 transition-colors duration-300 group"
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <span>@mirroahdeck</span>
              </a>
            </div>

            {/* Social Media Buttons */}
            <div className="mt-6">
              <p className="font-poppins text-sm text-gray-400 mb-3">Siga nas redes sociais:</p>
              <a
                href="https://www.instagram.com/mirroahdeck/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-poppins font-semibold hover:scale-105 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="font-poppins text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Mirroah Deck Bar. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center space-x-4 font-poppins text-sm text-gray-400">
            <span>Feito para o melhor carnaval do Rio! 🎉</span>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse animation-delay-200"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse animation-delay-400"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
