# 💈 Corte Certo

Um site moderno e intuitivo para **agendamento de serviços em barbearias**, desenvolvido com foco em **experiência do usuário e design mobile first**.  
Com o **Corte Certo**, o cliente pode agendar cortes de cabelo, barba, sobrancelha e muito mais, de forma prática e rápida.  

---

## 🚀 Tecnologias Utilizadas

- ⚛️ **React** — Interface moderna e reativa  
- 🧠 **NestJS** — API robusta e escalável no backend  
- 🎨 **Tailwind CSS** — Estilização rápida e responsiva  
- 🗄️ **PostgreSQL (Neon DB)** — Banco de dados em nuvem  
- 💾 **Prisma ORM** — Mapeamento de dados eficiente  
- 🔐 **Login com Google** — Autenticação prática e segura  
- 📱 **Mobile First Design** — Foco total na experiência mobile  

---

## ✂️ Funcionalidades

- 🔍 **Buscar barbearias** próximas  
- 🗓️ **Agendar serviços** como corte de cabelo, barba e sobrancelha  
- 💰 **Ver valores e detalhes** dos serviços  
- ❌ **Cancelar agendamentos** com facilidade  
- 👤 **Login com conta Google**  
- 📲 **Interface totalmente responsiva**  

---

## 🧭 Conceito

O **Corte Certo** nasceu com o objetivo de **modernizar o agendamento em barbearias**, oferecendo uma experiência fluida tanto para o cliente quanto para o barbeiro.  
Com um **design mobile first**, o sistema se adapta perfeitamente a qualquer dispositivo, mantendo desempenho e usabilidade impecáveis.  

---

## 🧑‍💻 Stack Técnica

| Camada | Tecnologia |
|:-------|:------------|
| Frontend | React + TypeScript + Tailwind |
| Backend | NestJS + Prisma |
| Banco de Dados | PostgreSQL (Neon DB) |
| Deploy | Vercel (Frontend) + Neon (Banco de Dados) |
| Autenticação | Google OAuth |

---

## ⚙️ Como Rodar o Projeto

### 🔧 Pré-requisitos
Antes de começar, certifique-se de ter instalado:
- **Node.js** (versão 18 ou superior)
- **npm**, **yarn** ou **pnpm**
- **PostgreSQL** (ou conexão com o **Neon DB**)
- **Conta no Google Cloud Console** (para o login OAuth)

---

### 🧩 Configuração do Frontend (React)

```bash
# Clone o repositório
git clone https://github.com/guilhermemiranda419/corte-certo.git

# Acesse a pasta do projeto
cd corte-certo

# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install

# Configure as variáveis de ambiente
crie um arquivo `.env.local` na raiz com:
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXTAUTH_SECRET=sua_chave_secreta
GOOGLE_CLIENT_ID=sua_google_client_id
GOOGLE_CLIENT_SECRET=sua_google_client_secret

# Inicie o servidor de desenvolvimento
npm run dev
