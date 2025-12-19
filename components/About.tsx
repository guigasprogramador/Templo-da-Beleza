
import React from 'react';
import { Star, ShieldCheck, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gold-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop" 
                alt="Interior do Templo da Beleza" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative boxes */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold-200 rounded-2xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-charcoal/5 rounded-2xl -z-10"></div>
          </div>

          {/* Text Side */}
          <div className="lg:w-1/2">
            <h2 className="text-gold-500 font-medium uppercase tracking-[0.3em] text-sm mb-4">Sobre o Templo</h2>
            <h3 className="font-serif text-3xl md:text-5xl text-charcoal mb-6 leading-tight">
              Excelência em Cada Detalhe
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light italic">
              "Um refúgio de bem-estar onde a sua satisfação é a nossa prioridade absoluta."
            </p>
            <p className="text-gray-700 leading-relaxed mb-10">
              No Templo da Beleza, combinamos organização impecável com uma gerência de excelência. Nossa equipe é composta por profissionais altamente capacitados, dedicados a proporcionar uma experiência transformadora.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm">
                <Star className="text-gold-500 mb-2 fill-gold-500" size={24} />
                <span className="text-xl font-bold text-charcoal">4.6</span>
                <span className="text-xs text-gray-500 uppercase tracking-tighter">Avaliação Google</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm">
                <ShieldCheck className="text-gold-500 mb-2" size={24} />
                <span className="text-xl font-bold text-charcoal">100%</span>
                <span className="text-xs text-gray-500 uppercase tracking-tighter">Qualidade</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm">
                <Users className="text-gold-500 mb-2" size={24} />
                <span className="text-xl font-bold text-charcoal">+5k</span>
                <span className="text-xs text-gray-500 uppercase tracking-tighter">Clientes Felizes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
