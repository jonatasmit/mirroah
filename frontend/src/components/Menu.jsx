import React from 'react';
import { Wine, Coffee, Utensils } from 'lucide-react';

const Menu = () => {
  const menuCategories = [
    {
      icon: <Wine className="w-12 h-12" />,
      title: 'Drinks & Coquetéis',
      description: 'Drinks tropicais exclusivos, coquetéis autorais e as melhores cervejas geladas',
      color: 'from-orange-400 to-pink-500',
      items: ['Caipirinha Tropical', 'Mojito de Frutas', 'Margarita Spicy', 'Cerveja Gelada']
    },
    {
      icon: <Utensils className="w-12 h-12" />,
      title: 'Petiscos',
      description: 'Porções deliciosas e petiscos perfeitos para compartilhar com os amigos',
      color: 'from-yellow-400 to-orange-500',
      items: ['Fritas Especiais', 'Ceviche', 'Pastéis', 'Tábua de Frios']
    },
    {
      icon: <Coffee className="w-12 h-12" />,
      title: 'Pratos Principais',
      description: 'Refeições completas com frutos do mar frescos e pratos executivos',
      color: 'from-pink-500 to-rose-600',
      items: ['Peixe Grelhado', 'Moqueca', 'Risoto de Camarão', 'Saladas']
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre o cardápio do Mirroah Deck Bar! 🍹');
    window.open(`https://wa.me/5521972232170?text=${message}`, '_blank');
  };

  return (
    <section id="cardapio" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-righteous text-4xl md:text-6xl text-gray-900 mb-4">
            CARDÁPIO
          </h2>
          <p className="font-poppins text-xl text-gray-600 max-w-2xl mx-auto">
            Sabores tropicais e drinks refrescantes para completar sua experiência na praia
          </p>
        </div>

        {/* Menu Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {menuCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.color} text-white mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="font-righteous text-2xl text-gray-900 mb-3">
                {category.title}
              </h3>

              {/* Description */}
              <p className="font-poppins text-gray-600 mb-6">
                {category.description}
              </p>

              {/* Sample Items */}
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2 font-poppins text-gray-700">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Coming Soon Banner */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 md:p-12 border-2 border-dashed border-gray-300 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-righteous text-3xl md:text-4xl text-gray-900 mb-4">
              Cardápio Completo em Breve!
            </h3>
            <p className="font-poppins text-lg text-gray-600 mb-6">
              Estamos preparando nosso cardápio completo com todos os detalhes dos nossos pratos, 
              drinks e preços. Enquanto isso, entre em contato para mais informações!
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white font-poppins font-bold px-8 py-4 rounded-full hover:scale-110 hover:shadow-xl transition-all duration-300"
            >
              Consultar Cardápio pelo WhatsApp
            </button>
          </div>
        </div>

        {/* Special Items Highlight */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 text-white">
            <h4 className="font-righteous text-2xl mb-2">🍹 Happy Hour</h4>
            <p className="font-poppins">Drinks com preços especiais todos os dias!</p>
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-6 text-white">
            <h4 className="font-righteous text-2xl mb-2">🎉 Eventos Especiais</h4>
            <p className="font-poppins">Cardápio exclusivo durante os eventos de carnaval!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
