import { useEffect, useRef, useState } from 'react';

export default function PlansSection() {
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-primary mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Planos e Investimento
          </h2>
          <p className={`text-xl text-gray-600 ${isVisible ? 'animate-slide-up delay-100' : 'opacity-0'}`}>
            Escolha o plano que melhor se adequa às suas necessidades
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plano Mensal */}
          <div className={`${isVisible ? 'animate-slide-in-left delay-200' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover h-full flex flex-col relative overflow-hidden">
              {/* Badge */}
              <div className="absolute top-0 right-0 bg-secondary text-primary px-4 py-2 rounded-bl-lg font-bold">
                Popular
              </div>

              <div className="mb-6 pt-4">
                <h3 className="text-3xl font-bold text-primary mb-2">PLANO MENSAL</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-primary">R$ 210</span>
                  <span className="text-gray-600">/mês</span>
                </div>
              </div>

              <div className="flex-grow mb-8">
                <p className="text-gray-600 mb-6 font-semibold">O que está incluído:</p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700"><strong>1 Consulta Inicial</strong> + <strong>1 Retorno</strong></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700"><strong>Elaboração de Plano Individual</strong> personalizado</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700"><strong>Suporte Semanal</strong> para dúvidas e orientações</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6 p-4 bg-secondary/10 rounded-lg">
                <p className="text-sm text-gray-700 mb-2"><strong>Formas de Pagamento:</strong></p>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>PIX:</strong> R$ 199,50 <span className="text-secondary font-bold">(5% de desconto)</span></p>
                  <p className="text-gray-700"><strong>Cartão à Vista:</strong> R$ 210,00</p>
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className="btn-primary w-full text-lg py-3"
              >
                Quero este Plano
              </button>
            </div>
          </div>

          {/* Plano Trimestral */}
          <div className={`${isVisible ? 'animate-slide-in-right delay-200' : 'opacity-0'}`}>
            <div className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-2xl p-8 shadow-lg card-hover h-full flex flex-col relative overflow-hidden">
              {/* Badge */}
              <div className="absolute top-0 right-0 bg-secondary text-primary px-4 py-2 rounded-bl-lg font-bold">
                Melhor Valor
              </div>

              <div className="mb-6 pt-4">
                <h3 className="text-3xl font-bold mb-2">PLANO TRIMESTRAL</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">R$ 600</span>
                  <span className="text-primary-foreground/80">/3 meses</span>
                </div>
              </div>

              <div className="flex-grow mb-8">
                <p className="text-primary-foreground/90 mb-6 font-semibold">O que está incluído:</p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-primary-foreground"><strong>1 Consulta Inicial</strong> + <strong>2 Consultas</strong> dentro de 90 dias</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-primary-foreground"><strong>Elaboração de Plano Individual</strong> completo e detalhado</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-primary-foreground"><strong>Suporte Duas Vezes por Semana</strong> para máximo acompanhamento</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6 p-4 bg-primary-foreground/10 rounded-lg border border-secondary/30">
                <p className="text-sm text-primary-foreground/90 mb-2"><strong>Formas de Pagamento:</strong></p>
                <div className="space-y-2">
                  <p className="text-primary-foreground"><strong>PIX:</strong> R$ 570,00 <span className="text-secondary font-bold">(5% de desconto)</span></p>
                  <p className="text-primary-foreground/90"><strong>Cartão à Vista:</strong> R$ 600,00</p>
                  <p className="text-primary-foreground/80 text-sm mt-2"><em>* Parcelamento disponível com ajuste de preço. Consulte-nos!</em></p>
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className="btn-secondary w-full text-lg py-3 text-primary font-semibold hover:bg-primary-foreground hover:text-primary"
              >
                Quero este Plano
              </button>
            </div>
          </div>
        </div>

        {/* Informação Adicional */}
        <div className={`mt-12 p-6 bg-white rounded-lg shadow-md border-l-4 border-secondary max-w-2xl mx-auto ${isVisible ? 'animate-slide-up delay-300' : 'opacity-0'}`}>
          <p className="text-gray-700 text-center">
            <strong className="text-primary">Dúvidas sobre qual plano escolher?</strong> Entre em contato conosco e vamos ajudá-lo a encontrar a melhor opção para suas necessidades e objetivos de saúde.
          </p>
        </div>
      </div>
    </section>
  );
}

