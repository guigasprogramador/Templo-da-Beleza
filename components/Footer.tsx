
import React from 'react';
import { ArrowUp, Instagram, Facebook } from 'lucide-react';
import { ViewType } from '../App';

interface FooterProps {
  onViewChange: (view: ViewType) => void;
}

const Footer: React.FC<FooterProps> = ({ onViewChange }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks: { name: string; view: ViewType }[] = [
    { name: 'Início', view: 'home' },
    { name: 'Serviços', view: 'services' },
    { name: 'Sobre Nós', view: 'about' },
    { name: 'Depoimentos', view: 'testimonials' },
    { name: 'Localização', view: 'contact' },
  ];

  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h4 className="font-serif text-2xl font-bold tracking-wider text-charcoal mb-6">
              TEMPLO DA <span className="text-gold-500">BELEZA</span>
            </h4>
            <p className="text-gray-600 max-w-sm font-light leading-relaxed">
              O seu salão de beleza premium em Samambaia Norte. Elevando sua autoestima com tratamentos exclusivos e profissionais de elite.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full border border-gold-200 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold-200 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-charcoal uppercase tracking-widest text-sm mb-6">Links Rápidos</h5>
            <ul className="space-y-4 text-gray-600 font-light">
              {navLinks.map(link => (
                <li key={link.view}>
                  <button 
                    onClick={() => onViewChange(link.view)} 
                    className="hover:text-gold-500 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-end justify-start">
            <button 
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-2 text-gold-500 uppercase tracking-widest text-xs font-bold"
            >
              <div className="w-12 h-12 border border-gold-500 rounded-full flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-all">
                <ArrowUp size={20} />
              </div>
              Voltar ao topo
            </button>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-200 text-center text-gray-500 text-sm font-light">
          <p>© {new Date().getFullYear()} Templo da Beleza. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
