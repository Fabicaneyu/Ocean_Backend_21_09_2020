const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

//Garante que todas as requisiçõesj á sejam json 
const jsonParser = bodyParser.json();
app.use(jsonParser);

// arrial function é anônima: () => {}
//se 1 parâmetro tira até os parenteses
//request, response = req, res

//endpoint - consultar no postmam GET: localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello World!');
})

//[[ Endpoints ]] de envios de mensagens
//CRUD -> create, read(read all e read single), update and delete
// crud criar, ler(ler tudo e ler individualmente), atualizar e remover

const mensagens =[
    {
        id:0,
        texto: "Essa é uma mensagem",
    },
    {
        id:1,
        texto: "Essa é outra mensagem"
    },
];

//READ ALL
//endpoint - consultar no postmam GET: localhost:3000/mensagens
//eu filtro e esse boolean só passa o que tiver informação, se null ñ passa 
app.get('/mensagens', (req, res) => {
    res.json(mensagens.filter(Boolean));
});

//Create
//endpoint - consultar no postmam POST: localhost:3000/mensagens
app.post('/mensagens', (req, res) => {
    const mensagem = req.body;
    const id = mensagens.length; //pega o length antes de dar o push 
    mensagem.id = id;
    mensagens.push(mensagem);
    res.send(`A mensagem com o texto '${mensagem.texto}' foi criada com sucesso. ID: ${id}.`);
});

//Read single
////endpoint - consultar no postmam GET: localhost:3000/mensagens/1 ou 2 
app.get('/mensagens/:id', (req, res) => {

    const id = req.params.id;
    const mensagem = mensagens[id]
    res.json(mensagem);
});

//Update
//endpoint - consultar no postmam PUT: localhost:3000/mensagens/1 ou 2
app.put('/mensagens/:id', (req, res) => {

    const id = req.params.id;
    const novoTexto = req.body.texto;
    mensagens[id].texto = novoTexto;
    res.send(`Mensagem com o ID ${id} foi atualizada com sucesso`);
});

//Delete
//endpoint - consultar no postmam DELETE: localhost:3000/mensagens/1 ou 2
app.delete('/mensagens/:id', (req, res) => {
    const id = req.params.id;

    delete mensagens[id];
    
    res.send(`Mensagem com o ID ${id} foi removida com sucesso`);
})

//COMUNICAÇÃO com a porta 
app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`);
} )