import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto e Informações */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'} space-y-6`}>
            <img
              src="/logonutri.png"
              alt="Laisa Estevão em seu consultório"
              className="relative w-48 h-auto rounded-2xl object-cover  transition-transform duration-500 ml-18"
            />
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Laisa Estevão
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-secondary">
                Nutricionista
              </p>
              <p className="text-lg text-primary-foreground/90 font-medium">
                CRN 11 - 22469/P
              </p>
            </div>

            <div className="bg-primary/40 backdrop-blur-sm p-6 rounded-lg border border-secondary/30">
              <p className="text-lg leading-relaxed">
                Minha missão é <span className="text-secondary font-semibold">ajudar você a construir uma relação mais leve com a comida, sem culpa e sem complicações</span>. 
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Acredito que a alimentação é um <span className="text-secondary font-semibold">caminho para mais saúde, prazer e equilíbrio</span> em sua vida.
              </p>
            </div>

            <button
              onClick={scrollToContact}
              className="btn-secondary w-full md:w-auto text-lg py-4 px-8 animate-pulse-glow"
            >
              Agende sua Consulta
            </button>
          </div>

          {/* Foto */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'} flex justify-center`}>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-3xl blur-3xl"></div>
              <img
                src="/hero-laisa.jpeg"
                alt="Laisa Estevão - Nutricionista"
                className="relative w-full max-w-md h-auto rounded-3xl shadow-2xl object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

