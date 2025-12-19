
import React, { useEffect, useState } from 'react';
import { appointmentService } from '../services/appointmentService';
import { Appointment } from '../types';
import { Trash2, Calendar, User, Phone } from 'lucide-react';

const AdminPanel: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const load = async () => {
    const data = await appointmentService.getAll();
    setAppointments(data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
  };

  useEffect(() => {
    if (isVisible) load();
  }, [isVisible]);

  const handleDelete = async (id: string) => {
    if (confirm('Deseja excluir este agendamento?')) {
      await appointmentService.delete(id);
      load();
    }
  };

  if (!isVisible) {
    return (
      <button 
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 z-[60] bg-charcoal/20 text-charcoal/40 p-2 rounded text-[10px] hover:bg-charcoal hover:text-white transition-all uppercase tracking-widest"
      >
        Admin Console
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[200] bg-white overflow-y-auto p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h2 className="font-serif text-3xl">Painel de Gerência</h2>
          <button onClick={() => setIsVisible(false)} className="bg-charcoal text-white px-4 py-2 rounded">Fechar</button>
        </div>

        {appointments.length === 0 ? (
          <p className="text-gray-400 italic">Nenhum agendamento encontrado.</p>
        ) : (
          <div className="grid gap-4">
            {appointments.map(app => (
              <div key={app.id} className="border rounded-xl p-4 flex justify-between items-center bg-gray-50">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 items-center w-full">
                  <div className="flex items-center gap-3">
                    <User className="text-gold-500" size={18} />
                    <div>
                      <p className="font-bold text-sm">{app.clientName}</p>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Phone size={10} /> {app.clientPhone}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-gray-400">Serviço</p>
                    <p className="text-sm">{app.serviceTitle}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="text-gray-400" size={14} />
                    <p className="text-sm font-medium">{app.date} às {app.time}</p>
                  </div>
                  <div className="flex justify-end">
                    <button 
                      onClick={() => handleDelete(app.id)}
                      className="text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-lg transition-all"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
