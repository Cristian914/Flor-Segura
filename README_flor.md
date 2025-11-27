# 🌸 FlorSegura Frontend

## 💜 Visão Geral

O **FlorSegura Frontend** é a interface oficial do projeto FlorSegura — uma plataforma digital criada para acolher, informar e apoiar mulheres em situação de violência.  
O foco é oferecer uma experiência **segura, discreta, responsiva e emocionalmente acolhedora**.

Construído em **React + Vite**, com componentes reutilizáveis e design pensado para empatia e segurança.

---

## 🛠 Tecnologias Utilizadas

- **React**
- **Vite**
- **JavaScript**
- **React Router**
- **CSS Modules / Tailwind (dependendo do seu setup)**
- **Axios** (para chamadas à API)
- **Context API** (para autenticação, estado global e navegação segura)

---

## 📦 Instalação

### 1️⃣ Clonar o projeto
```bash
git clone https://github.com/SEU-USUARIO/FlorSegura-Frontend.git
cd FlorSegura-Frontend
```

### 2️⃣ Instalar dependências
```bash
npm install
```

### 3️⃣ Configurar variáveis de ambiente
Crie o arquivo **.env** na raiz:

```
VITE_API_URL=http://localhost:3001
```

---

## ▶️ Rodar o projeto

```bash
npm run dev
```

Acesse no navegador:

```
http://localhost:5173
```

---

## 🗂 Estrutura do Projeto

```
src/
 ├── assets/           # Imagens, ícones e ilustrações
 ├── components/       # Componentes reutilizáveis
 ├── pages/            # Telas do sistema (Home, Ajuda, Mapa, etc)
 ├── services/         # Comunicação com API
 ├── context/          # Contexto de autenticação e IA
 ├── styles/           # CSS global e estilos
 ├── App.jsx
 └── main.jsx
```

---

## 🌸 Telas Principais

### 🏠 Home
- Apresentação suave e acolhedora  
- Botão de saída rápida  
- Acesso às principais funcionalidades

### 🚨 Preciso de Ajuda Agora
- Ações instantâneas para risco iminente  
- Orientações de segurança  
- Rotas rápidas para apoio emocional e policial

### ❤️ Teste de Risco
- Perguntas sensíveis e objetivas  
- Retorno com orientação empática  
- Sugestões de próximos passos

### 📝 Anotações Seguras
- Armazena pensamentos e relatos
- Interface discreta
- Integra com backend

### 🤖 Assistente IA
- Chat anônimo  
- Linguagem acolhedora  
- Ajuda psicológica, informativa e preventiva

---

## 🎨 UI / Design System

### Paleta de Cores
| Cor | Hex | Significado |
|-----|------|-------------|
| Roxo | #6A1B9A | Força feminina |
| Lilás | #BA68C8 | Empatia |
| Rosa | #F8BBD0 | Acolhimento |
| Cinza | #555555 | Texto suave |
| Branco | #FFFFFF | Clareza |

### Tipografia
- Montserrat  
- Playfair Display  
- Open Sans / Lato / Poppins  

### Estilo
- Interface minimalista  
- Cantos arredondados  
- Ícones leves e sem gatilhos  
- Foco em segurança + conforto visual  

---

## 🔗 Integração com Backend

O frontend consome a API:

```
http://localhost:3001
```

Endpoints principais:
- `/auth/login`
- `/auth/register`
- `/notes/`
- `/api/chat`

---

## 💡 Funcionalidades Futuras

- Tema escuro automático  
- Dashboard de segurança  
- Espaço sigiloso para documentos  
- Integração com mapa real oficial  
- Perfil da usuária (criptografado)

---

## 🤝 Contribuição

Pull requests são bem-vindos!  
Se quiser contribuir com design, conteúdo ou tecnologia, o FlorSegura agradece 🌸

---

## 🛡 Segurança

Este projeto segue princípios de:
- **Discrição**  
- **Proteção da identidade**  
- **Prevenção de gatilhos**  
- **Navegação rápida de emergência**

---

## 🌸 FlorSegura — Frontend criado para acolher, informar e proteger.
