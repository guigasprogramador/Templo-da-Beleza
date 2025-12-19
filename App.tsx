
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AIAssistant from './components/AIAssistant';
import BookingModal from './components/BookingModal';
import AdminPanel from './components/AdminPanel';

export type ViewType = 'home' | 'services' | 'about' | 'testimonials' | 'contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  // Scroll para o topo sempre que a view mudar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const openBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const renderView = () => {
    switch (currentView) {
      case 'services':
        return (
          <div className="pt-20 animate-fade-in">
            <div className="bg-charcoal py-20 text-center">
              <h1 className="font-serif text-5xl text-white">Nossos Serviços</h1>
              <p className="text-gold-400 mt-4 uppercase tracking-widest">Excelência em cada detalhe</p>
            </div>
            <Services onBookClick={(id) => openBooking(id)} />
          </div>
        );
      case 'about':
        return (
          <div className="pt-20 animate-fade-in">
            <div className="bg-charcoal py-20 text-center">
              <h1 className="font-serif text-5xl text-white">Sobre o Templo</h1>
              <p className="text-gold-400 mt-4 uppercase tracking-widest">Nossa História e Valores</p>
            </div>
            <About />
          </div>
        );
      case 'testimonials':
        return (
          <div className="pt-20 animate-fade-in">
             <div className="bg-charcoal py-20 text-center">
              <h1 className="font-serif text-5xl text-white">Depoimentos</h1>
              <p className="text-gold-400 mt-4 uppercase tracking-widest">A voz de quem confia em nós</p>
            </div>
            <Testimonials />
          </div>
        );
      case 'contact':
        return (
          <div className="pt-20 animate-fade-in">
            <div className="bg-charcoal py-20 text-center">
              <h1 className="font-serif text-5xl text-white">Localização</h1>
              <p className="text-gold-400 mt-4 uppercase tracking-widest">Onde nos encontrar</p>
            </div>
            <Contact />
          </div>
        );
      default:
        return (
          <div className="animate-fade-in">
            <Hero onBookClick={() => openBooking()} />
            <Services onBookClick={(id) => openBooking(id)} />
            <About />
            <Testimonials />
            <Contact />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        currentView={currentView} 
        onViewChange={setCurrentView} 
        onBookClick={() => openBooking()} 
      />
      
      <main>
        {renderView()}
      </main>

      <Footer onViewChange={setCurrentView} />
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        selectedServiceId={selectedServiceId}
      />
      <AdminPanel />
      <FloatingWhatsApp />
      <AIAssistant />

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bounceSlow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        .animate-fade-in-down { animation: fadeInDown 0.5s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-bounce-slow { animation: bounceSlow 3s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default App;
