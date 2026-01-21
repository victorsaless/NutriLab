# Guia de Instalação - Landing Page Laisa Estevão Nutricionista

## 📋 Índice
1. [Requisitos do Sistema](#requisitos-do-sistema)
2. [Instalação Passo a Passo](#instalação-passo-a-passo)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Executando o Projeto](#executando-o-projeto)
5. [Personalizações](#personalizações)
6. [Troubleshooting](#troubleshooting)
7. [Build para Produção](#build-para-produção)

---

## 🖥️ Requisitos do Sistema

Antes de começar, certifique-se de ter os seguintes programas instalados em seu computador:

| Requisito | Versão Mínima | Download |
|-----------|---------------|----------|
| **Node.js** | 18.0.0 ou superior | [nodejs.org](https://nodejs.org) |
| **npm** ou **pnpm** | 9.0.0 ou superior | Incluído com Node.js ou [pnpm.io](https://pnpm.io) |
| **Git** (opcional) | Qualquer versão | [git-scm.com](https://git-scm.com) |
| **Visual Studio Code** | Qualquer versão | [code.visualstudio.com](https://code.visualstudio.com) |

### Verificar Instalação

Para verificar se você tem Node.js e npm instalados, abra o Terminal (ou Prompt de Comando no Windows) e execute:

```bash
node --version
npm --version
```

Se ambos retornarem números de versão, você está pronto para continuar!

---

## 📦 Instalação Passo a Passo

### Passo 1: Extrair o Arquivo ZIP

1. Baixe o arquivo `landingpage-nutri.zip` fornecido
2. Clique com o botão direito no arquivo e selecione **"Extrair Aqui"** (Windows) ou **"Extrair"** (Mac/Linux)
3. Uma pasta chamada `landingpage-nutri` será criada

### Passo 2: Abrir a Pasta no Visual Studio Code

1. Abra o **Visual Studio Code**
2. Clique em **File** → **Open Folder** (ou use o atalho `Ctrl+K Ctrl+O`)
3. Navegue até a pasta `landingpage-nutri` e clique em **Selecionar Pasta**
4. A pasta será aberta no VSCode

### Passo 3: Abrir o Terminal Integrado

1. No VSCode, pressione **Ctrl + `** (backtick) para abrir o terminal integrado
2. Alternativamente, vá em **View** → **Terminal**
3. Certifique-se de que você está na pasta raiz do projeto (deve mostrar algo como `~/landingpage-nutri>`)

### Passo 4: Instalar as Dependências

No terminal, execute o seguinte comando:

```bash
npm install
```

Ou, se você preferir usar **pnpm** (mais rápido):

```bash
pnpm install
```

Este comando baixará e instalará todas as dependências necessárias (React, Tailwind CSS, etc.). **Este processo pode levar alguns minutos na primeira execução.**

### Passo 5: Iniciar o Servidor de Desenvolvimento

Após a instalação ser concluída, execute:

```bash
npm run dev
```

Ou com pnpm:

```bash
pnpm dev
```

Você verá uma mensagem similar a esta:

```
  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.x.x:3000/
```

### Passo 6: Acessar a Landing Page

1. Abra seu navegador web (Chrome, Firefox, Safari, Edge, etc.)
2. Digite na barra de endereço: **http://localhost:3000**
3. Pressione **Enter**
4. A landing page da Laisa Estevão será carregada! 🎉

---

## 📁 Estrutura do Projeto

```
landingpage-nutri/
├── client/                          # Código frontend React
│   ├── public/                      # Arquivos estáticos
│   │   ├── hero-laisa.jpeg         # Foto para seção Hero
│   │   ├── consult-laisa.jpeg      # Foto para seção de Consultas
│   │   └── contact-laisa.jpeg      # Foto para seção de Contato
│   ├── src/
│   │   ├── components/              # Componentes React reutilizáveis
│   │   │   ├── HeroSection.tsx      # Seção de apresentação pessoal
│   │   │   ├── ConsultationSection.tsx # Seção sobre consultas
│   │   │   ├── PlansSection.tsx     # Seção de planos e preços
│   │   │   └── ContactSection.tsx   # Seção de contato e rodapé
│   │   ├── pages/
│   │   │   └── Home.tsx             # Página principal
│   │   ├── App.tsx                  # Componente raiz
│   │   ├── main.tsx                 # Ponto de entrada
│   │   └── index.css                # Estilos globais e animações
│   ├── index.html                   # Arquivo HTML principal
│   └── package.json                 # Dependências do projeto
├── GUIA_INSTALACAO.md              # Este arquivo
└── README.md                        # Documentação do projeto
```

---

## ▶️ Executando o Projeto

### Modo Desenvolvimento

Para executar o projeto em modo desenvolvimento (com hot reload):

```bash
npm run dev
```

O servidor estará disponível em **http://localhost:3000**. Qualquer mudança que você fizer nos arquivos será refletida automaticamente no navegador.

### Parar o Servidor

Para parar o servidor de desenvolvimento, pressione **Ctrl + C** no terminal.

---

## 🎨 Personalizações

### Alterar as Fotos

As fotos estão localizadas em `client/public/`:

- **`hero-laisa.jpeg`** → Foto para a seção Hero (apresentação pessoal)
- **`consult-laisa.jpeg`** → Foto para a seção de Consultas
- **`contact-laisa.jpeg`** → Foto para a seção de Contato

Para substituir uma foto:

1. Prepare uma nova imagem (recomendado: formato JPEG ou PNG)
2. Copie a imagem para a pasta `client/public/`
3. Renomeie o arquivo com o mesmo nome da foto anterior
4. O servidor de desenvolvimento recarregará automaticamente

### Alterar Cores

A paleta de cores está definida em `client/src/index.css`. As cores principais são:

```css
--primary: #871c27;        /* Vermelho escuro - fundos */
--secondary: #a6d49f;      /* Verde claro - destaques */
--foreground: #f4f6fc;     /* Quase branco - texto */
```

Para alterar uma cor, edite o valor hexadecimal no arquivo `index.css`.

### Alterar Informações de Contato

As informações de contato estão em `client/src/components/ContactSection.tsx`. Procure pela seção `contactInfo` e atualize:

- **Email:** `laisaestevaonutri@gmail.com`
- **Telefone:** `(88) 99250-9052`
- **Instagram:** `@laisaestevaonutri`

### Alterar Textos

Todos os textos da landing page estão nos componentes React:

- **Seção Hero:** `client/src/components/HeroSection.tsx`
- **Seção de Consultas:** `client/src/components/ConsultationSection.tsx`
- **Seção de Planos:** `client/src/components/PlansSection.tsx`
- **Seção de Contato:** `client/src/components/ContactSection.tsx`

Abra o arquivo desejado e edite o texto diretamente no código.

---

## 🔧 Troubleshooting

### Problema: "npm: command not found"

**Solução:** Node.js não está instalado ou não está no PATH do sistema. Baixe e instale a versão LTS de [nodejs.org](https://nodejs.org).

### Problema: "Port 3000 is already in use"

**Solução:** Outra aplicação está usando a porta 3000. Você pode:

1. Fechar a aplicação que está usando a porta 3000
2. Usar uma porta diferente:
   ```bash
   npm run dev -- --port 3001
   ```

### Problema: As imagens não aparecem

**Solução:** Certifique-se de que as imagens estão na pasta `client/public/` com os nomes corretos:
- `hero-laisa.jpeg`
- `consult-laisa.jpeg`
- `contact-laisa.jpeg`

### Problema: Estilos CSS não aparecem corretamente

**Solução:** Limpe o cache do navegador:
1. Pressione **Ctrl + Shift + Delete** (Windows/Linux) ou **Cmd + Shift + Delete** (Mac)
2. Selecione **Cached images and files**
3. Clique em **Clear**
4. Recarregue a página

### Problema: Erros ao executar `npm install`

**Solução:** Tente limpar o cache do npm:
```bash
npm cache clean --force
npm install
```

---

## 🚀 Build para Produção

Quando estiver pronto para publicar a landing page, crie uma versão otimizada para produção:

```bash
npm run build
```

Este comando criará uma pasta `dist/` com os arquivos otimizados. O tamanho será muito menor e o desempenho será melhor.

### Arquivos Gerados

Após executar `npm run build`, você terá:

- **`dist/index.html`** → Arquivo HTML principal
- **`dist/assets/`** → Arquivos CSS, JavaScript e imagens otimizados

Estes arquivos podem ser enviados para um servidor web ou plataforma de hospedagem como Vercel, Netlify, GitHub Pages, etc.

---

## 📚 Recursos Adicionais

### Documentação Oficial

- **React:** [react.dev](https://react.dev)
- **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com)
- **Vite:** [vitejs.dev](https://vitejs.dev)

### Dicas Úteis

1. **Hot Module Replacement (HMR):** O servidor de desenvolvimento recarrega automaticamente quando você salva um arquivo. Não é necessário recarregar manualmente o navegador.

2. **DevTools do Navegador:** Pressione **F12** para abrir as ferramentas de desenvolvedor e inspecionar elementos, verificar estilos, etc.

3. **Atalhos Úteis no VSCode:**
   - `Ctrl + S` → Salvar arquivo
   - `Ctrl + Shift + P` → Paleta de comandos
   - `Ctrl + /` → Comentar/descomentar linha
   - `Alt + Up/Down` → Mover linha para cima/baixo

---

## 💡 Próximos Passos

Após instalar e executar a landing page:

1. **Personalize:** Altere as fotos, cores e textos conforme necessário
2. **Teste:** Verifique se todos os links e botões funcionam corretamente
3. **Deploy:** Quando estiver satisfeito, faça o build para produção e hospede em um servidor
4. **Manutenção:** Atualize as informações de contato e preços conforme necessário

---

## 📞 Suporte

Se encontrar problemas ou tiver dúvidas sobre a instalação, consulte:

1. Este guia (seção Troubleshooting)
2. A documentação oficial das tecnologias utilizadas
3. Comunidades online como Stack Overflow, Reddit, ou fóruns de React

---

**Desenvolvido com ❤️ para Laisa Estevão Nutricionista**

Última atualização: Outubro de 2025

