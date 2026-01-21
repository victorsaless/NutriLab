import { useEffect, useRef, useState } from 'react';

export default function ContactSection() {
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

  const contactInfo = [
    {
      icon: '/gmail.png',
      title: 'Email',
      value: 'laisaestevaonutri@gmail.com',
      link: 'mailto:laisaestevaonutri@gmail.com',
      delay: 'delay-100'
    },
    {
      icon: '/whatsapp.png',
      title: 'WhatsApp',
      value: '(88) 99250-9052',
      link: 'https://wa.me/5588992509052?text=Olá%20Laisa!%20Gostaria%20de%20agendar%20uma%20consulta.',
      delay: 'delay-200'
    },
    {
      icon: '/instagram.png',
      title: 'Instagram',
      value: '@laisaestevaonutri',
      link: 'https://instagram.com/laisaestevaonutri',
      delay: 'delay-300'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Entre em Contato
          </h2>
          <p className={`text-xl text-primary-foreground/90 ${isVisible ? 'animate-slide-up delay-100' : 'opacity-0'}`}>
            Estou pronta para ajudá-lo a transformar sua relação com a alimentação
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Foto de Contato */}
          <div className={`${isVisible ? 'animate-slide-in-left delay-200' : 'opacity-0'} flex justify-center order-2 md:order-1`}>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-2xl"></div>
              <img
                src="/contact-laisa.jpeg"
                alt="Laisa Estevão - Nutricionista"
                className="relative w-full max-w-sm h-auto rounded-2xl shadow-2xl object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Informações de Contato */}
          <div className={`${isVisible ? 'animate-slide-in-right delay-200' : 'opacity-0'} order-1 md:order-2`}>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`block p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl hover:bg-primary-foreground/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-secondary/30 ${isVisible ? `animate-slide-up ${info.delay}` : 'opacity-0'}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex-shrink-0">
                      {info.icon.startsWith('/') ? (
                        <img
                          src={info.icon}
                          alt={info.title}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="text-4xl">{info.icon}</span>
                      )}</div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                      <p className="text-primary-foreground/90 font-semibold text-lg hover:text-secondary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA Final */}
            <div className={`mt-8 p-6 bg-secondary/20 rounded-xl border-2 border-secondary ${isVisible ? 'animate-slide-up delay-400' : 'opacity-0'}`}>
              <p className="text-center text-lg">
                <strong>Pronto para começar sua jornada?</strong>
              </p>
              <p className="text-center text-primary-foreground/90 mt-2">
                Clique em qualquer uma das opções acima para entrar em contato comigo. Estou aqui para ajudá-lo!
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-16 pt-8 border-t border-secondary/30 text-center ${isVisible ? 'animate-fade-in delay-500' : 'opacity-0'}`}>
          <p className="text-primary-foreground/80">
            © 2025 Laisa Estevão - Nutricionista. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/70 text-sm mt-2">
            Desenvolvido com ❤️ para sua saúde e bem-estar
          </p>
        </div>
      </div>
    </section>
  );
}

