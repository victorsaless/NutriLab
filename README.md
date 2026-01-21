# Landing Page - Laisa Estevão Nutricionista

Uma landing page moderna, responsiva e interativa para a nutricionista **Laisa Estevão**, desenvolvida com **React 19**, **Tailwind CSS 4** e **Vite**.

## 🌟 Características

✨ **Design Profissional e Moderno**
- Paleta de cores customizada (Vermelho escuro, Verde claro, Branco)
- Layout responsivo que funciona em todos os dispositivos
- Tipografia elegante com fontes Google (Poppins e Playfair Display)

🎬 **Animações Interativas**
- Transições suaves ao entrar na página
- Efeitos hover nos cards e botões
- Animações em cascata ao rolar a página
- Scroll suave entre seções

📱 **Seções Completas**
1. **Hero Section** - Apresentação pessoal com foto e CTA
2. **Seção de Consultas** - Informações sobre consultas presenciais e online
3. **Seção de Planos** - Cards com planos mensal e trimestral
4. **Seção de Contato** - Informações de contato e redes sociais

🔗 **Integração com Redes Sociais**
- Links diretos para WhatsApp, Email e Instagram
- Botões de CTA que levam para a seção de contato

📊 **Otimizado para Conversão**
- Múltiplos CTAs estrategicamente posicionados
- Informações claras sobre serviços e preços
- Design que destaca os benefícios dos planos

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React** | 19 | Framework JavaScript para UI |
| **Tailwind CSS** | 4 | Utilitários CSS para estilização |
| **Vite** | 7 | Build tool e dev server |
| **TypeScript** | 5 | Tipagem estática para JavaScript |
| **Wouter** | 2 | Roteamento leve para React |

## 📋 Requisitos

- Node.js 18.0.0 ou superior
- npm 9.0.0 ou pnpm 8.0.0 ou superior

## 🚀 Quick Start

### 1. Instalar Dependências

```bash
npm install
```

### 2. Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

### 3. Acessar a Landing Page

Abra seu navegador e acesse: **http://localhost:3000**

## 📁 Estrutura do Projeto

```
landingpage-nutri/
├── client/
│   ├── public/                      # Arquivos estáticos
│   │   ├── hero-laisa.jpeg         # Foto Hero
│   │   ├── consult-laisa.jpeg      # Foto Consultas
│   │   └── contact-laisa.jpeg      # Foto Contato
│   ├── src/
│   │   ├── components/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ConsultationSection.tsx
│   │   │   ├── PlansSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css                # Estilos globais
│   ├── index.html
│   └── package.json
├── GUIA_INSTALACAO.md              # Guia detalhado
└── README.md                        # Este arquivo
```

## 🎨 Paleta de Cores

| Cor | Código Hex | Uso |
|-----|-----------|-----|
| Vermelho Escuro | `#871c27` | Fundos principais, texto em destaque |
| Verde Claro | `#a6d49f` | Detalhes, destaques, botões |
| Quase Branco | `#f4f6fc` | Texto principal, fundos secundários |

## 📝 Customizações

### Alterar Fotos

Substitua os arquivos em `client/public/`:
- `hero-laisa.jpeg` → Seção Hero
- `consult-laisa.jpeg` → Seção Consultas
- `contact-laisa.jpeg` → Seção Contato

### Alterar Cores

Edite as variáveis CSS em `client/src/index.css`:

```css
--primary: #871c27;        /* Vermelho escuro */
--secondary: #a6d49f;      /* Verde claro */
--foreground: #f4f6fc;     /* Quase branco */
```

### Alterar Textos

Edite os componentes em `client/src/components/`:
- `HeroSection.tsx` - Apresentação pessoal
- `ConsultationSection.tsx` - Informações de consultas
- `PlansSection.tsx` - Planos e preços
- `ContactSection.tsx` - Contato e redes sociais

### Alterar Informações de Contato

Em `client/src/components/ContactSection.tsx`, atualize:

```typescript
const contactInfo = [
  {
    icon: '📧',
    title: 'Email',
    value: 'seu-email@exemplo.com',
    link: 'mailto:seu-email@exemplo.com',
  },
  // ... outros contatos
];
```

## 🔨 Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Linting (verificar código)
npm run lint

# Formatar código
npm run format
```

## 📦 Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos otimizados estarão em `dist/`. Você pode hospedar estes arquivos em qualquer servidor web ou plataforma de hospedagem como:

- **Vercel** - https://vercel.com
- **Netlify** - https://netlify.com
- **GitHub Pages** - https://pages.github.com
- **AWS S3** - https://aws.amazon.com/s3/

## 🎯 Funcionalidades Principais

### Seção Hero
- Apresentação profissional com foto
- Nome, título e CRN da nutricionista
- Missão e visão pessoal
- Botão CTA "Agende sua Consulta"

### Seção de Consultas
- Informações detalhadas sobre consultas presenciais
- Descrição de consultas online
- Foto profissional em ambiente de consultório
- Benefícios e processo de cada tipo de consulta

### Seção de Planos
- **Plano Mensal:** R$ 210/mês com 1 consulta + 1 retorno
- **Plano Trimestral:** R$ 600/3 meses com 1 consulta inicial + 2 consultas
- Informações sobre formas de pagamento (PIX com desconto, cartão)
- Botões CTA para cada plano

### Seção de Contato
- Email profissional
- Link direto para WhatsApp
- Link para Instagram
- Foto profissional
- Footer com informações de copyright

## 🌐 Responsividade

A landing page é totalmente responsiva e funciona perfeitamente em:

- 📱 Smartphones (320px e acima)
- 📱 Tablets (768px e acima)
- 💻 Desktops (1024px e acima)

## ♿ Acessibilidade

- Contraste adequado entre texto e fundo
- Links com texto descritivo
- Imagens com atributos alt
- Navegação por teclado
- Estrutura semântica HTML

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Acesse https://vercel.com
3. Clique em "New Project"
4. Selecione seu repositório
5. Clique em "Deploy"

### Netlify

1. Faça push do código para GitHub
2. Acesse https://netlify.com
3. Clique em "New site from Git"
4. Selecione seu repositório
5. Configure e clique em "Deploy"

## 📚 Documentação Adicional

- [Guia de Instalação Detalhado](./GUIA_INSTALACAO.md)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)

## 💡 Dicas de Otimização

1. **Imagens:** Comprima as imagens antes de usar (use ferramentas como TinyPNG)
2. **Performance:** O Vite já otimiza automaticamente o build
3. **SEO:** Adicione meta tags em `client/index.html` para melhor SEO
4. **Analytics:** Integre Google Analytics ou Plausible para rastrear visitantes

## 🤝 Contribuições

Este é um projeto customizado para Laisa Estevão Nutricionista. Para sugestões ou melhorias, entre em contato.

## 📄 Licença

Este projeto é propriedade de Laisa Estevão Nutricionista. Todos os direitos reservados.

## 📞 Contato

- **Email:** laisaestevaonutri@gmail.com
- **WhatsApp:** (88) 99250-9052
- **Instagram:** @laisaestevaonutri

---

**Desenvolvido com ❤️ para Laisa Estevão Nutricionista**

Última atualização: Outubro de 2025

