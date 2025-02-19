# 🌤️ API Météo avec Node.js

Ce projet permet de récupérer les données météorologiques de la ville de **Sousse** en utilisant l'API **OpenWeatherMap**. Il illustre trois méthodes différentes pour effectuer des requêtes API en **JavaScript** avec **Node.js** :

## 📌 Prérequis

- Avoir **Node.js** installé sur votre machine.
- S'inscrire sur **[OpenWeatherMap](https://openweathermap.org/api)** et récupérer une **clé API**.
- Installer les dépendances nécessaires avec `npm`.

## 🚀 Installation

1. **Cloner le projet**

```sh
git clone https://github.com/ton-repo/meteo-nodejs.git
cd meteo-nodejs
```

2. **Installer les dépendances**

```sh
npm install request axios node-fetch
```

3. **Remplacer** `"votre_clé_api"` par **votre clé API réelle** dans les fichiers `.js`.

## 📜 Utilisation

### Exécuter avec `request`

```sh
node index.js

## 📊 Résultat attendu (exemple)

```sh
Météo à Sousse :
🌤️ Description : ciel dégagé
🌡️ Température : 22.5°C
💧 Humidité : 60%
```

## 🔗 Autres APIs à tester

Tu peux également tester ces APIs RESTful :

- 📚 **Open Library API** : [https://openlibrary.org/developers/api](https://openlibrary.org/developers/api)
- 🚀 **NASA API** : [https://api.nasa.gov/](https://api.nasa.gov/)
- 🧑‍🎨 **RandomUser API** : [https://randomuser.me/](https://randomuser.me/)
