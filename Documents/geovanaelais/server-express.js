
// importação da biblioteca Express
// para instalar rodo o comando: npm install express
const express = require('express');

// criação de um app Express
const app = express();

// importação das rotas
const clientesRotas = require('./routes/clientes');
const veiculosRotas = require('./routes/veiculos');

// definição de parâmetros do servidor
const hostname = '127.0.0.1';
const port = 8080;

app.get('/', (req, res) => {
  res.send('Esta é a raiz do servidor.')
})

// utilizar as rotas
app.use('/clientes', clientesRotas);
app.use('/veiculos', veiculosRotas);


// rodar a aplicação
app.listen(port, hostname, console.log('Servidor rodando...'));
