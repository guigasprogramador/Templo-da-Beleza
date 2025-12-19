
import { Scissors, Sparkles, User, Palette, Eraser, Instagram, Facebook } from 'lucide-react';
import React from 'react';

export const WHATSAPP_NUMBER = '556133585858';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const SERVICES = [
  {
    id: '1',
    title: 'Cortes & Mechas Criativas',
    description: 'Design personalizado para destacar sua beleza única com técnicas modernas de coloração.',
    icon: <Scissors className="w-8 h-8" />
  },
  {
    id: '2',
    title: 'Terapia Capilar & Cronograma',
    description: 'Tratamentos intensivos para saúde do couro cabeludo e fios revitalizados.',
    icon: <Sparkles className="w-8 h-8" />
  },
  {
    id: '3',
    title: 'Especialista em Cachos',
    description: 'Corte e finalização específicos para valorizar a curvatura natural dos seus fios.',
    icon: <User className="w-8 h-8" />
  },
  {
    id: '4',
    title: 'Manicure & Spa dos Pés',
    description: 'Cuidado completo para suas mãos e pés com produtos de alta qualidade.',
    icon: <Palette className="w-8 h-8" />
  },
  {
    id: '5',
    title: 'Designer de Sobrancelhas',
    description: 'Alinhamento e design para emoldurar seu olhar com perfeição.',
    icon: <Eraser className="w-8 h-8" />
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    author: 'Cynthia Mesquita',
    text: 'Perfeição demais esse ambiente! Profissional Drielly é a melhor.',
    rating: 5
  },
  {
    id: '2',
    author: 'Rildo Cunha',
    text: 'Organização, boa gerência e profissionais competentes.',
    rating: 5
  },
  {
    id: '3',
    author: 'Mariana Silva',
    text: 'O melhor spa dos pés que já fiz em Brasília. Recomendo muito!',
    rating: 5
  }
];

export const SOCIAL_LINKS = [
  { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, url: '#' },
  { name: 'Facebook', icon: <Facebook className="w-6 h-6" />, url: '#' }
];
