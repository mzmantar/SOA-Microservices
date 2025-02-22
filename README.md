# 📌 API de Gestion des Personnes avec Keycloak

## 📖 Description
Cette API permet de gérer un registre de personnes en utilisant **Node.js**, **Express** et **SQLite**.
L'accès aux routes est sécurisé avec **Keycloak**.

## 🚀 Installation

### 📂 1. Cloner le dépôt
```sh
git clone https://github.com/mzmantar/SOA-Microservices.git
cd TP2
```

### 🛠 2. Installer les dépendances
```sh
npm install
```

### 🗄 3. Configurer la base de données SQLite
Créer un fichier `database.js` avec le code suivant :
```js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) console.error(err.message);
  else console.log('Connecté à la base de données SQLite.');
});

module.exports = db;
```
Créer la table :
```sh
sqlite3 database.sqlite "CREATE TABLE personnes (id INTEGER PRIMARY KEY, nom TEXT, adresse TEXT);"
```

## 🔐 Configuration de Keycloak

1. Démarrer Keycloak et créer un **Realm**
2. Ajouter un **Client** avec :
   - `Client ID`: `api-client`
   - `Access Type`: `confidential`
3. Ajouter un **utilisateur** et lui attribuer un mot de passe
4. Récupérer le fichier `keycloak-config.json` et l'ajouter à la racine du projet.

Exemple de `keycloak-config.json` :
```json
{
  "realm": "MonRealm",
  "auth-server-url": "http://localhost:8080/auth",
  "ssl-required": "external",
  "resource": "api-client",
  "credentials": {
    "secret": "votre_secret"
  }
}
```

## 🎯 Lancer le serveur
```sh
node index.js
```
Le serveur tourne sur `http://localhost:3000`.

## 📡 Exemples d'utilisation avec Postman

### 1️⃣ Obtenir un Token JWT
**Requête `POST`** :
```
http://localhost:8080/realms/MonRealm/protocol/openid-connect/token
```
**Body (x-www-form-urlencoded) :**
```
grant_type=password&client_id=api-client&client_secret=votre_secret&username=utilisateur&password=mot_de_passe
```

### 2️⃣ Lister toutes les personnes
**Requête `GET`** :
```
http://localhost:3000/personnes
```
**Headers :**
```
Authorization: Bearer {ton_token}
```

### 3️⃣ Ajouter une nouvelle personne
**Requête `POST`** :
```
http://localhost:3000/personnes
```
**Headers :**
```
Authorization: Bearer {ton_token}
Content-Type: application/json
```
**Body :**
```json
{
  "nom": "Jean Dupont",
  "adresse": "10 rue de Paris"
}
```

### 4️⃣ Modifier une personne
**Requête `PUT`** :
```
http://localhost:3000/personnes/1
```
**Body :**
```json
{
  "nom": "Jean Dupont",
  "adresse": "20 avenue des Champs"
}
```

### 5️⃣ Supprimer une personne
**Requête `DELETE`** :
```
http://localhost:3000/personnes/1
```

## 🛠 Problèmes courants
| Erreur | Solution |
|--------|---------|
| `401 Unauthorized` | Vérifie que le token est bien ajouté dans l'en-tête Authorization. |
| `403 Forbidden` | Assure-toi que l'utilisateur a les rôles/permissions nécessaires. |
| `500 Internal Server Error` | Vérifie que Keycloak et le serveur Node.js sont bien lancés. |
