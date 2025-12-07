# 🌸 Flor Segura - Plataforma de Apoio à Mulher

## 💜 Sobre o Projeto

**Flor Segura** é uma plataforma digital desenvolvida para acolher, informar e apoiar mulheres em situação de vulnerabilidade ou violência. O projeto oferece um ambiente seguro e discreto com recursos essenciais para busca de ajuda e apoio comunitário.

## 🛠 Tecnologias Utilizadas

- **React 19** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS 4.1.7** - Estilização
- **React Router DOM** - Navegação
- **Framer Motion** - Animações
- **React Leaflet** - Mapas interativos
- **React Icons** - Ícones
- **Axios** - Requisições HTTP
- **Context API** - Gerenciamento de estado

## 📦 Instalação e Execução

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/flor-segura.git
cd flor-segura
```

### 2️⃣ Instalar dependências
```bash
npm install
```

### 3️⃣ Configurar variáveis de ambiente
Crie o arquivo `.env` na raiz:
```env
VITE_API_URL=https://florsegura-backe.onrender.com
VITE_ENV=production
VITE_APP_NAME=Flor Segura
VITE_APP_VERSION=1.0.0
```

### 4️⃣ Executar o projeto
```bash
npm run dev
```

Acesse: `http://localhost:5173`

## 🗂 Estrutura do Projeto

```
src/
├── assets/           # Imagens e recursos estáticos
├── components/       # Componentes reutilizáveis
│   ├── navbar.jsx
│   ├── Loading.jsx
│   ├── ProtectedRoute.jsx
│   └── ApiErrorFallback.jsx
├── context/          # Contextos React
│   └── AuthContext.jsx
├── pages/            # Páginas da aplicação
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── PrecisoDeAjuda.jsx
│   ├── MapaDeApoio.jsx
│   ├── MeuEspacoSeguro.jsx
│   ├── Publico.jsx
│   ├── PublicoNota.jsx
│   ├── EntendaViolencia.jsx
│   └── Sobre.jsx
├── services/         # Serviços de API
│   └── api.js
└── utils/           # Utilitários
    ├── apiTest.js
    └── testCPF.js
```

## 🌸 Funcionalidades Principais

### 🏠 **Home**
- Página inicial acolhedora
- Números de emergência
- Acesso rápido às funcionalidades

### 🚨 **Preciso de Ajuda**
- Números de emergência destacados
- Opções de ajuda organizadas
- Informações sobre rede de apoio

### 🗺️ **Mapa de Apoio**
- Localização de delegacias, hospitais e centros de apoio
- Rotas para locais seguros
- Marcação de locais perigosos pela comunidade

### 📝 **Meu Espaço Seguro**
- Anotações privadas e seguras
- Sistema de backup local
- Interface discreta

### 👥 **Comunidade (Público)**
- Compartilhamento de experiências
- Sistema de comentários
- Ambiente de apoio mútuo

### 📚 **Entenda a Violência**
- Informações educativas sobre tipos de violência
- Sinais de alerta
- Recursos para buscar ajuda

### 👤 **Sistema de Autenticação**
- Registro com validação de CPF
- Login seguro
- Proteção de rotas privadas

## 🔐 Segurança e Privacidade

- **Validação CPF**: Registro exclusivo para mulheres
- **Autenticação JWT**: Tokens seguros para API
- **Fallback offline**: Funciona mesmo sem conexão
- **Saída rápida**: Botões de emergência para sair rapidamente
- **Interface discreta**: Design que não chama atenção

## 🌐 API Backend

O frontend consome a API hospedada em:
```
https://florsegura-backe.onrender.com
```

### Principais endpoints:
- `POST /auth/register` - Registro de usuário
- `POST /auth/login` - Login
- `GET /notes` - Listar anotações
- `POST /notes` - Criar anotação
- `GET /publications` - Listar publicações públicas
- `POST /publications` - Criar publicação

## 🚀 Deploy

O projeto está configurado para deploy automático no **Vercel**:

1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente:
   - `VITE_API_URL=https://florsegura-backe.onrender.com`
3. Deploy automático a cada push na main

## 🎨 Design System

### Paleta de Cores
- **Roxo Principal**: `#6A1B9A` - Força e empoderamento
- **Roxo Claro**: `#BA68C8` - Suavidade e acolhimento
- **Rosa**: `#F8BBD0` - Carinho e proteção
- **Cinza**: `#555555` - Texto neutro
- **Branco**: `#FFFFFF` - Clareza e paz

### Princípios de Design
- Interface minimalista e não intimidadora
- Cores suaves que transmitem segurança
- Navegação intuitiva e acessível
- Foco na experiência do usuário em situação vulnerável

## 📱 Responsividade

- **Mobile First**: Desenvolvido priorizando dispositivos móveis
- **Breakpoints**: Adaptado para tablets e desktops
- **Touch Friendly**: Botões e elementos otimizados para toque

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Equipe

- **Matheus** - Desenvolvedor
- **Nycolas** - Desenvolvedor  
- **Cristian** - Desenvolvedor

## 🆘 Números de Emergência

- **190** - Polícia Militar
- **180** - Central de Atendimento à Mulher
- **192** - SAMU (Emergência Médica)
- **100** - Direitos Humanos

---

**Flor Segura** - Desenvolvido com 💜 para acolher, proteger e empoderar mulheres.