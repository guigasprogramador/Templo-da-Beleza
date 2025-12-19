
import React from 'react';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-7xl text-white mb-6 leading-tight animate-fade-in-up">
          Realce sua essência no <br />
          <span className="text-gold-300 italic">Templo da Beleza</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Especialistas em cortes, terapia capilar e mechas criativas em Samambaia Norte. Onde a sofisticação encontra o cuidado que você merece.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <button
            onClick={onBookClick}
            className="bg-metallic-gold text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg hover:shadow-gold-500/50 transition-all transform hover:-translate-y-1"
          >
            Agendar Horário
          </button>
          <a
            href="#services"
            className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/20 transition-all"
          >
            Nossos Serviços
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-gold-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
