
import { Appointment } from '../types';

const STORAGE_KEY = 'templo_da_beleza_appointments';

export const appointmentService = {
  // Simula o findMany do Prisma
  async getAll(): Promise<Appointment[]> {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  // Simula o create do Prisma
  async create(appointment: Omit<Appointment, 'id' | 'createdAt'>): Promise<Appointment> {
    const appointments = await this.getAll();
    const newAppointment: Appointment = {
      ...appointment,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
    };
    
    appointments.push(newAppointment);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
    
    // Simula latência de rede
    await new Promise(resolve => setTimeout(resolve, 800));
    return newAppointment;
  },

  // Simula o delete do Prisma
  async delete(id: string): Promise<void> {
    const appointments = await this.getAll();
    const filtered = appointments.filter(a => a.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  }
};
