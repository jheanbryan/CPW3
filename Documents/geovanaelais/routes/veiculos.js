//importando as bibliotecas
const express = require('express');

//função para manipulação de rotas
const rotas = express.Router();

// rota get para veiculos
rotas.get('/', (req, res) => {
    res.send('Você está na rota get para veiculos.');
  });

// rota put para veiculos
rotas.put('/', (req, res) => {
    res.send('Você está na rota put para veiculos.');
  });

// rota post para veiculos
rotas.post('/', (req, res) => {
    res.send('Você está na rota post para veiculos.');
  });

// rota delete para veiculos
rotas.delete('/', (req, res) => {
    res.send('Você está na rota delete para veiculos.');
  });

module.exports = rotas;