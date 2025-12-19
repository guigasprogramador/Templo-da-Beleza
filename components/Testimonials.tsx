
import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="py-24 bg-charcoal text-white relative overflow-hidden">
      {/* Decorative BG element */}
      <Quote className="absolute top-10 left-10 w-64 h-64 text-white/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-gold-400 font-medium uppercase tracking-[0.3em] text-sm mb-4">Experiências</h2>
          <h3 className="font-serif text-3xl md:text-5xl">O Que Dizem Nossas Clientes</h3>
        </div>

        <div className="relative min-h-[300px]">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={testimonial.id}
              className={`transition-all duration-700 absolute inset-0 flex flex-col items-center text-center ${
                idx === current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'
              }`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-8">
                "{testimonial.text}"
              </p>
              <h4 className="font-serif text-gold-400 text-lg uppercase tracking-widest">
                — {testimonial.author}
              </h4>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <button 
            onClick={prev}
            className="p-3 border border-white/20 rounded-full hover:bg-gold-500 hover:border-gold-500 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="p-3 border border-white/20 rounded-full hover:bg-gold-500 hover:border-gold-500 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
