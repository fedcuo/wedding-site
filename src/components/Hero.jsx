import React from 'react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-br from-cream to-[#F0EBE3]">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 animate-drift"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(212, 175, 55, 0.15) 1px, transparent 1px), radial-gradient(circle, rgba(196, 30, 58, 0.08) 1px, transparent 1px)`,
            backgroundSize: '50px 50px, 30px 30px',
            backgroundPosition: '0 0, 25px 25px'
          }}
        />
      </div>

      <div className="relative z-10 animate-fade-in-up">
        <div className="text-6xl text-gold mb-6 animate-fade-in">✦</div>
        
        <h1 className="font-serif font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-christmas-green mb-4 tracking-wide">
          Federico <span className="italic text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gold">&</span> Martina
        </h1>
        
        <div className="w-24 h-0.5 bg-gold mx-auto my-8 relative">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 text-gold text-sm">◆</span>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 text-gold text-sm">◆</span>
        </div>
        
        <div className="font-serif text-3xl sm:text-4xl md:text-5xl text-christmas-red font-normal">
          29 Dicembre 2025
        </div>
      </div>
    </section>
  );
};
