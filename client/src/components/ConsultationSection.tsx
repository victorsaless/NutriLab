import { useEffect, useRef, useState } from 'react';

export default function ConsultationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-primary mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Sobre a Consulta
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          {/* Consulta Presencial */}
          <div className={`${isVisible ? 'animate-slide-in-left delay-200' : 'opacity-0'} order-2 md:order-1`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-2xl text-secondary mr-4">
                  🏥
                </div>
                <h3 className="text-2xl font-bold text-primary">Consulta Presencial</h3>
              </div>

              <div className="space-y-4 text-gray-700">
                <div className="flex gap-3">
                  <span className="text-secondary font-bold text-xl">✓</span>
                  <p><strong>Escuta Ativa:</strong> Compreendo seus hábitos alimentares, histórico de saúde e objetivos pessoais.</p>
                </div>

                <div className="flex gap-3">
                  <span className="text-secondary font-bold text-xl">✓</span>
                  <p><strong>Avaliação Física Completa:</strong> Realizamos medições de dobras cutâneas e circunferências corporais para análise detalhada da composição corporal.</p>
                </div>

                <div className="flex gap-3">
                  <span className="text-secondary font-bold text-xl">✓</span>
                  <p><strong>Plano Personalizado:</strong> Elaboro um plano alimentar exclusivo, adaptado às suas necessidades e preferências.</p>
                </div>

                <div className="flex gap-3">
                  <span className="text-secondary font-bold text-xl">✓</span>
                  <p><strong>Acompanhamento Contínuo:</strong> Retornos periódicos para acompanhar sua evolução e ajustar o plano conforme necessário.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Foto Consulta */}
          <div className={`${isVisible ? 'animate-slide-in-right delay-200' : 'opacity-0'} order-1 md:order-2 flex justify-center`}>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-2xl"></div>
              <img
                src="/consult-laisa.jpeg"
                alt="Laisa Estevão em seu consultório"
                className="relative w-full max-w-sm h-auto rounded-2xl shadow-xl object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Consulta Online */}
        <div className={`${isVisible ? 'animate-slide-up delay-300' : 'opacity-0'}`}>
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border-2 border-secondary/30">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center text-2xl text-primary mr-4">
                💻
              </div>
              <h3 className="text-2xl font-bold text-primary">Consulta Online</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-primary">Flexibilidade e Comodidade:</strong> Atendo você de qualquer lugar, no conforto de sua casa, através de uma plataforma de videochamada segura e de fácil acesso.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-primary">Avaliação Adaptada:</strong> Realizamos a avaliação através das medidas das principais circunferências do seu corpo, que você pode fazer em casa com orientação minha.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-primary">Plano Personalizado:</strong> Você recebe um plano alimentar completo, adaptado às suas necessidades e realidade.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-primary">Acompanhamento Contínuo:</strong> Mantemos contato regular para acompanhar sua evolução e fazer ajustes no plano sempre que necessário.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-secondary/20 rounded-lg border-l-4 border-secondary">
              <p className="text-primary font-semibold">
                ℹ️ A consulta online é agendada conforme sua disponibilidade e realizada através de uma plataforma de chamadas de vídeo a ser combinada conosco.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

