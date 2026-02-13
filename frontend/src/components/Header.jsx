import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Eventos', href: '#eventos', isWhatsApp: true },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato', isWhatsApp: true }
  ];

  const handleWhatsAppClick = (type) => {
    const messages = {
      eventos: 'Olá! Gostaria de saber mais sobre os eventos de carnaval no Mirroah Deck Bar! 🎉',
      contato: 'Olá! Gostaria de mais informações sobre o Mirroah Deck Bar! 🏖️'
    };
    const message = encodeURIComponent(messages[type]);
    window.open(`https://wa.me/5521972232170?text=${message}`, '_blank');
  };

  const handleMenuClick = (item, e) => {
    if (item.isWhatsApp) {
      e.preventDefault();
      const type = item.label.toLowerCase();
      handleWhatsAppClick(type);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <a href="#inicio" className="group">
            <span className={`font-righteous text-3xl transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
            }`}>
              MIRROAH
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleMenuClick(item, e)}
                className={`font-poppins font-medium transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-pink-600' 
                    : 'text-white hover:text-yellow-300 drop-shadow-md'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp CTA Button - Desktop */}
          <button
            onClick={() => handleWhatsAppClick('contato')}
            className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-poppins font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-xl">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleMenuClick(item, e)}
                className="block py-2 px-4 text-gray-800 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-500 hover:text-white rounded-lg font-poppins font-medium transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                handleWhatsAppClick('contato');
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-poppins font-semibold hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
