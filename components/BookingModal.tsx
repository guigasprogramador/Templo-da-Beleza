
import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2 } from 'lucide-react';
import { SERVICES, WHATSAPP_LINK } from '../constants';
import { appointmentService } from '../services/appointmentService';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceId?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedServiceId }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceId: selectedServiceId || SERVICES[0].id,
    date: '',
    time: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const selectedService = SERVICES.find(s => s.id === formData.serviceId);
    
    try {
      await appointmentService.create({
        clientName: formData.name,
        clientPhone: formData.phone,
        serviceId: formData.serviceId,
        serviceTitle: selectedService?.title || 'Serviço Geral',
        date: formData.date,
        time: formData.time
      });
      setStep('success');
    } catch (error) {
      alert('Erro ao agendar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden relative animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-charcoal transition-colors"
        >
          <X size={24} />
        </button>

        {step === 'form' ? (
          <div className="p-8">
            <h3 className="font-serif text-3xl text-charcoal mb-2">Agendar Horário</h3>
            <p className="text-gray-500 mb-8 font-light">Escolha o melhor momento para sua transformação.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-500" size={18} />
                <input
                  required
                  type="text"
                  placeholder="Seu Nome Completo"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-gold-500 transition-all"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-500" size={18} />
                <input
                  required
                  type="tel"
                  placeholder="WhatsApp (ex: 61 99999-9999)"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-gold-500 transition-all"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-500" size={18} />
                  <input
                    required
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-gold-500 transition-all"
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-500" size={18} />
                  <select
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-gold-500 transition-all appearance-none"
                    value={formData.time}
                    onChange={e => setFormData({...formData, time: e.target.value})}
                  >
                    <option value="">Horário</option>
                    {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00'].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Serviço</label>
                <select
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-gold-500 transition-all appearance-none"
                  value={formData.serviceId}
                  onChange={e => setFormData({...formData, serviceId: e.target.value})}
                >
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-metallic-gold text-white py-4 rounded-xl font-bold uppercase tracking-[0.2em] shadow-lg shadow-gold-200 hover:shadow-gold-300 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:transform-none"
              >
                {loading ? 'Processando...' : 'Confirmar Agendamento'}
              </button>
            </form>
          </div>
        ) : (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={48} />
            </div>
            <h3 className="font-serif text-3xl text-charcoal mb-4">Agendamento Realizado!</h3>
            <p className="text-gray-600 mb-8">
              Obrigado, {formData.name.split(' ')[0]}! Seu horário para {SERVICES.find(s => s.id === formData.serviceId)?.title} foi pré-reservado para o dia {formData.date} às {formData.time}.
            </p>
            <div className="space-y-3">
              <a
                href={`${WHATSAPP_LINK}?text=Olá! Acabei de agendar um(a) ${SERVICES.find(s => s.id === formData.serviceId)?.title} para o dia ${formData.date} às ${formData.time}. Gostaria de confirmar!`}
                target="_blank"
                className="block w-full bg-[#25D366] text-white py-3 rounded-xl font-bold uppercase"
              >
                Confirmar no WhatsApp
              </a>
              <button
                onClick={() => { setStep('form'); onClose(); }}
                className="block w-full text-gray-400 font-medium py-2"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
