Création du dossier : 
mkdir BackEndTraining
cd BackEndTraining
npm init -y (initialise le projet)
npm install express

Création de l'application Express : 
Crée un fichier javascript pour contenir tout le code de l'application : index.js
Crée une application (app dans le fichier index.js) en appelant le module express : app
Crée une const pour stocker le numéro du port sur lequel le serveur sera dispo :const port = 5331;

Installer Nodemon : npm install nodemon --save-dev
Installer nodemon dans les dépendances de développement (package.json) : 
"main": "index.js",
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},

Désormais : npm run dev pour faire tourner l'application

