const express = require('express')
const app = express()
const port = 3000

var listaProdutos = [];

function initMemDB() {
    listaProdutos.push({codigo: 1, quantidade: 10, descricao: 'caneta'});
    listaProdutos.push({codigo: 2, quantidade: 20, descricao: 'borracha'});
    listaProdutos.push({codigo: 3, quantidade: 5, descricao: 'caderno'});
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/produtos/', (req, res) => {
    res.send(listaProdutos);
})

app.get('/produtos/:codigo', (req, res) => {
    var result = listaProdutos.filter((x) => x.codigo == req.params.codigo);

    if (result.length == 0) {
        res.statusCode = 404
        res.send("")
    }
    else 
        res.send(result[0]);
})

app.listen(port, () => {
  initMemDB();
  console.log(`Example app listening at http://localhost:${port}`)
})
