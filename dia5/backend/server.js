const express = require('express')
const cors = require('cors')
const { Pool, types } = require('pg')

types.setTypeParser(1082, function(value) { //date
    return value;
});
types.setTypeParser(1700, function(val) { // numeric
    return parseFloat(val);
});

const app = express()

app.use(cors())
app.use(express.json());

const port = 3000

const pool = new Pool({
    connectionString: "postgres://postgres:Abc123@winhost:5433/loja"
});

pool.on('connect', () => {
    console.log("Base de dados conectada com sucesso")
})

// Retorna todos os movimentos
app.get('/movimentos/', async(req, res) => {
    const result = await pool.query("SELECT id, data_mov, descricao, categoria, valor FROM movimentos");
    res.status(200).send(result.rows);
})

// IMPORTANTE: A ordem importa. Não pode ser declarado depois da rota '/movimentos/:id'
app.get('/movimentos/by-categoria/', async(req, res) => {
    const result = await pool.query("SELECT categoria as categoria, SUM(valor) as valor FROM movimentos GROUP BY categoria ORDER BY categoria");
    res.status(200).send(result.rows);
})

// IMPORTANTE: A ordem importa. Não pode ser declarado depois da rota '/movimentos/:id'
app.get('/movimentos/by-month/', async(req, res) => {
    const result = await pool.query("SELECT TO_CHAR(data_mov, 'YYYY-MM') as mes, SUM(valor) as valor FROM movimentos GROUP BY TO_CHAR(data_mov, 'YYYY-MM') ORDER BY TO_CHAR(data_mov, 'YYYY-MM')");
    res.status(200).send(result.rows);
})

// Retorna o movimento com o id informado
app.get('/movimentos/:id', async(req, res) => {
    const result = await pool.query("SELECT id, data_mov, descricao, categoria, valor FROM movimentos WHERE id = $1", [req.params.id]);

    if (result.rowCount == 0) {
        res.status(404).send("Non existent id")
    } else
        res.send(result.rows[0]);
})

app.delete('/movimentos/:id', async(req, res) => {
    var result = await pool.query("DELETE FROM movimentos WHERE id = $1", [req.params.id]);

    if (result.rowCount == 0) {
        res.statusCode = 404
        res.status(404).send("Cannot delete non existent id");
    } else {
        res.send("Deleted");
    }
})


app.put('/movimentos/:id', async(req, res) => {
    const resource = await pool.query("SELECT id FROM movimentos WHERE id = $1", [req.params.id]);
    var newObj = req.body;
    //Verifica se o código da URl existe
    if (resource.rowCount == 0) {
        res.status(404).send("Cannot update non existent id");
    } else {
        var elementoAtual = resource.rows[0];

        // Verifica se está tentando mudar o id. Se sim, retorna que não é permitido
        if (newObj.id && elementoAtual.id != newObj.id) {
            res.status(400).send("Change id is not allowed");
            return;
        }

        const updated = await pool.query("UPDATE movimentos SET data_mov = $1, descricao = $2, categoria = $3, valor = $4 WHERE id = $5 RETURNING *", [newObj.data_mov, newObj.descricao, newObj.categoria, newObj.valor, req.params.id]);
        res.send(updated.rows[0]);
    }
})

app.post('/movimentos', async(req, res) => {
    var newObj = req.body;

    const inserted = await pool.query("INSERT INTO movimentos (data_mov, descricao, categoria, valor) VALUES ($1, $2, $3, $4) RETURNING *", [newObj.data_mov, newObj.descricao, newObj.categoria, newObj.valor]);
    // Definir cõdigo de retorno status 201 (created)
    // Retornar o objeto inserido (nâo a lista)
    res.status(201).send(inserted.rows[0]);
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})