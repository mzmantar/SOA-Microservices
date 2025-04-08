# 📡 gRPC WebSocket Chat Proxy

## 🧠 Objectif

Ce projet implémente un service de **chat simplifié** basé sur :

- Un **serveur gRPC** qui gère les utilisateurs et le chat (streaming bidirectionnel),
- Un **reverse proxy WebSocket** qui relaye les messages entre un client Web et le serveur gRPC.

Il permet également de :

- Récupérer les messages précédents via une fonction **d’historique**,
- Se connecter via une **interface Web** et échanger des messages en temps réel.

---

## 📁 Structure du projet

```
grpc-ws-reverse-proxy/
│
├── chat.proto             # Définition du service gRPC
├── server.js              # Serveur gRPC (Node.js)
├── proxy.js               # Reverse proxy WebSocket
├── client.html            # Interface client Web
├── README.md              # Ce fichier
└── package.json           # Dépendances Node.js
```

---

## ⚙️ Installation

1. Cloner le projet :

```bash
git clone https://github.com/mzmantar/SOA-Microservices.git
cd TP5
```

2. Installer les dépendances :

```bash
npm install @grpc/grpc-js @grpc/proto-loader ws
```

---

## 🚀 Lancement

1. Démarrer le serveur gRPC :

```bash
node server.js
```

2. Démarrer le reverse proxy WebSocket :

```bash
node proxy.js
```

3. Ouvrir le client Web dans un navigateur :

```bash
# depuis un explorateur de fichiers
double-cliquez sur client.html
```

---

## 🧪 Test via Postman (optionnel)

- Connectez-vous à `ws://localhost:8080` en WebSocket
- Exemple de message JSON à envoyer :

```json
{
  "chat_message": {
    "id": "msg1",
    "room_id": "room1",
    "sender_id": "client1",
    "content": "Hello World!"
  }
}
```

---

## 🛠️ Fonctionnalités Bonus

✅ **Historique des messages**  
→ accessible via `GetChatHistory` dans le service gRPC.

✅ **Client Web**  
→ interface HTML minimaliste qui permet d’envoyer/recevoir des messages.

---

## 💬 Exemple de message affiché

```
Message reçu de client1: Hello World!
Message envoyé par Grpc_Admin: received at 2025-04-08T16:00:00.000Z
```
