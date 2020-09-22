const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const jsonParser = bodyParser.json();
app.use(jsonParser);

// arrial function é anônima: () => {}
//se 1 parâmetro tira até os parenteses
//request, response = req, res

//endpoint - consultar no postmam GET: localhost:3000/
app.get('/', (req, res) => {
    res.send('GET Hello World!');
})

//[[ Endpoints ]] de envios de mensagens
//CRUD -> create, read(read all e read single), update and delete
// crud criar, ler(ler tudo e ler individualmente), atualizar e remover

const mensagens =[
    "Essa é uma mensagem",
    "Essa é outra mensagem"
];

//READ ALL
//endpoint - consultar no postmam GET: localhost:3000/mensagens
app.get('/mensagens', (req, res) => {
    res.json(mensagens);
})



//Create
//endpoint - consultar no postmam POST: localhost:3000/mensagens
app.post('/mensagens', (req, res) => {

    const mensagem = req.body.mensagem;
    mensagens.push(mensagem);

    const id = mensagens.length - 1;

    res.send(`Mensagem criada ID: ${id}.`);
})

//Read single
////endpoint - consultar no postmam GET: localhost:3000/mensagens/1 ou 2 
app.get('/mensagens/:id', (req, res) => {
    res.send('Exibe uma mensagem selecionada pelo ID que foi informado');
})

//Update
//endpoint - consultar no postmam PUT: localhost:3000/mensagens/1 ou 2
app.put('/mensagens/:id', (req, res) => {
    res.send('Atualiza uma mensagem selecionada pelo ID que foi informado');
})

//Delete
//endpoint - consultar no postmam DELETE: localhost:3000/mensagens/1 ou 2
app.delete('/mensagens/:id', (req, res) => {
    res.send('Remove uma mensagem selecionada pelo ID que foi informado');
})

//COMUNICAÇÃO com a porta 
app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`);
} )