"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sql = require("mysql2");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
/* Quando alguem mandar um post request pra essa url, eu vou ter ação de uma callback function */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.post("/", (req, res) => {
    const queryInsert = "INSERT INTO clientes(nome) VALUES (?)";
    console.log("passei por aqui");
    //res.send("Resposta do servidor");
    console.log(req.body.name);
    const arr = [req.body.name];
    const teste = pool.execute(queryInsert, arr, (err, results) => {
        if (err) {
            console.error("Erro ao inserir dados:", err);
            return;
        }
        else {
            console.log("salve");
        }
    });
    console.log(teste);
    pool.query("SELECT * FROM clientes ", (err, rows, fields) => {
        if (err instanceof Error) {
            console.log(err);
            return;
        }
        console.log(rows);
        /*    console.log(fields); */
    });
    /*
    const [rows, fields] = pool.query(`SELECT * FROM alunos`);
    console.log(rows);
    console.log(fields); */
    res.send("Dado recebido");
});
/* escutando na porta 8000 */
app.listen(port, () => {
    console.log("Servidor rodando na porta 8000");
});
/* Conexão com o banco de dados */
const pool = sql.createPool({
    host: "localhost",
    user: "root",
    password: "terradelama9",
    database: "mydb",
});
pool.getConnection((err, connetion) => {
    if (err) {
        console.log("erro ao tentar conectar o banco");
    }
    else {
        console.log("Banco de dados conectado");
        connetion.release();
    }
});
pool.query("Describe clientes ", (err, results) => {
    if (err) {
        console.log("erro ao tentar consultar o banco de dados");
        return;
    }
    console.log("Estrutura da tabela:   ");
    results.forEach((column) => {
        console.log(`Nome: ${column.Field}`);
    });
});
//# sourceMappingURL=index.js.map