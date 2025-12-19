
import React from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <div className="lg:w-1/2">
            <h2 className="text-gold-500 font-medium uppercase tracking-[0.3em] text-sm mb-4">Contato</h2>
            <h3 className="font-serif text-3xl md:text-5xl text-charcoal mb-8">Venha nos Visitar</h3>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-gold-50 rounded-full flex items-center justify-center text-gold-500 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal mb-1">Endereço</h4>
                  <p className="text-gray-600 font-light">Qr 406, lote 1 - Samambaia Norte, Brasília - DF.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-gold-50 rounded-full flex items-center justify-center text-gold-500 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal mb-1">Telefone</h4>
                  <p className="text-gray-600 font-light">(61) 3358-5858</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-gold-50 rounded-full flex items-center justify-center text-gold-500 flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal mb-1">Horário de Funcionamento</h4>
                  <p className="text-gray-600 font-light">Segunda à Sábado: 09:00 - 19:00</p>
                  <p className="text-gold-600 font-semibold text-sm mt-1">Aberto hoje até às 19:00</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-[#128C7E] transition-all transform hover:scale-105 shadow-xl shadow-green-200"
              >
                <MessageCircle size={24} />
                Agendar via WhatsApp
              </a>
            </div>
          </div>

          {/* Map Side */}
          <div className="lg:w-1/2 h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-gold-50">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.2917525389657!2d-48.1062973!3d-15.8675402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bd6f1165a6f23%3A0x6a059955776d655d!2sQr%20406%20Conjunto%201%20-%20Samambaia%20Nte.%2C%20Bras%C3%ADlia%20-%20DF!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Templo da Beleza"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
