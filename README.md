# 🎮 Games for All - Reviewer

Aplicativo mobile para consulta e criação de reviews de jogos, desenvolvido com arquitetura Full Stack.

## 🛠️ Tecnologias

  * **Mobile:** React Native (Expo/CLI), React Navigation, Axios.
  * **Backend:** Node.js, Express API.
  * **Database:** MongoDB.

## 🚀 Como Rodar

Siga a ordem abaixo para iniciar o projeto localmente.

### 1\. Banco de Dados

Certifique-se de que o **MongoDB** está rodando na sua máquina e que o banco `gamesforall` existe.

### 2\. Backend (API)

Abra um terminal, acesse a pasta do servidor e inicie a API:

```bash
cd GamesforallServer
npm install
npm start
```

> O servidor rodará em `http://localhost:3000`.

### 3\. Frontend (App)

Abra um **novo terminal**, acesse a pasta do aplicativo e inicie no emulador:

```bash
cd GamesForAllReviewer
npm install
npx react-native run-android
```

## ⚠️ Configuração Importante

Para que o emulador Android se conecte ao backend local, o arquivo `src/services/ApiService.js` deve apontar para:

```javascript
const endereco = 'http://10.0.2.2:3000';
```

## 📱 Funcionalidades

  * Listagem de jogos cadastrados.
  * Detalhes técnicos e nota média.
  * Leitura de reviews da comunidade.
  * Criação e envio de novos reviews.
