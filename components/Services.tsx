
import React from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onBookClick: (serviceId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onBookClick }) => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold-500 font-medium uppercase tracking-[0.3em] text-sm mb-4">Especialidades</h2>
          <h3 className="font-serif text-3xl md:text-5xl text-charcoal">Serviços Exclusivos</h3>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="p-8 border border-gray-100 rounded-2xl hover:border-gold-200 transition-all duration-300 card-hover group flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-gold-50 rounded-xl flex items-center justify-center text-gold-500 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="font-serif text-xl text-charcoal mb-4 group-hover:text-gold-600 transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-600 leading-relaxed font-light mb-6 flex-grow">
                {service.description}
              </p>
              <div className="mt-auto">
                <button 
                  onClick={() => onBookClick(service.id)}
                  className="flex items-center text-gold-500 font-semibold text-sm uppercase tracking-wider group-hover:underline"
                >
                  Agendar este serviço
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
