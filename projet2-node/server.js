const http = require('http');
const express = require('express');

const app = express();
const port = 5000;

// Route pour la page d'accueil
app.get('/user', (req, res) => {
  res.sendFile('/home/ec2-user/webApp/admin.html')
  console.log('Tout fonctionne normalement');
});

// Route par défaut (tout le reste)
app.get('*', (req, res) => {
  res.status(404).send('Désolé, cette page n\'existe pas.');
  console.error('Rrreur 404 du site node js 1 port 5000 ');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});