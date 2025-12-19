
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ViewType } from '../App';

interface NavbarProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
  onBookClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange, onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; view: ViewType }[] = [
    { name: 'Início', view: 'home' },
    { name: 'Serviços', view: 'services' },
    { name: 'Sobre', view: 'about' },
    { name: 'Depoimentos', view: 'testimonials' },
    { name: 'Localização', view: 'contact' },
  ];

  const handleNavClick = (view: ViewType) => {
    onViewChange(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled || currentView !== 'home' ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavClick('home')} 
              className={`font-serif text-2xl font-bold tracking-wider transition-colors ${
                isScrolled || currentView !== 'home' ? 'text-charcoal' : 'text-white'
              }`}
            >
              TEMPLO DA <span className="text-gold-500">BELEZA</span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.view}
                onClick={() => handleNavClick(link.view)}
                className={`text-sm font-medium uppercase tracking-widest hover:text-gold-500 transition-colors ${
                  currentView === link.view ? 'text-gold-500' : (isScrolled || currentView !== 'home' ? 'text-charcoal' : 'text-white')
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={onBookClick}
              className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-widest transition-all transform hover:scale-105"
            >
              Agendar
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled || currentView !== 'home' ? 'text-charcoal' : 'text-white'}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-fade-in-down">
          <div className="px-4 py-6 space-y-4 text-center">
            {navLinks.map((link) => (
              <button
                key={link.view}
                onClick={() => handleNavClick(link.view)}
                className={`block w-full py-2 text-lg font-medium border-b border-gray-100 last:border-none ${
                  currentView === link.view ? 'text-gold-500' : 'text-charcoal'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => { setIsMobileMenuOpen(false); onBookClick(); }}
              className="block w-full bg-gold-500 text-white py-3 rounded-lg font-bold uppercase"
            >
              Agendar Agora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
