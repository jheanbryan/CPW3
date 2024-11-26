//importando as bibliotecas
const express = require('express');

//função para manipulação de rotas
const rotas = express.Router();

// rota get para clientes
rotas.get('/', (req, res) => {
    res.send('Você está na rota get para clientes.');
  });

// rota put para clientes
rotas.put('/', (req, res) => {
    res.send('Você está na rota put para clientes.');
  });

// rota post para clientes
rotas.post('/', (req, res) => {
    res.send('Você está na rota post para clientes.');
  });

// rota delete para clientes
rotas.delete('/', (req, res) => {
    res.send('Você está na rota delete para clientes.');
  });

module.exports = rotas;