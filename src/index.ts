const sql = require("mysql2");
const express = require("express");

const app = express();
const port = 3000;

app.get()

/* Conexão com o banco de dados */
const pool = sql.createPool({
  host: "localhost",
  user: "root",
  password: "terradelama9",
  database: "faculdade_db",
});

pool.getConnection((err, connetion) => {
  if (err) {
    console.log("erro ao tentar conectar o banco");
  } else {
    console.log("Banco de dados conectado");
    connetion.release();
  }
});

pool.query("Describe alunos", (err, results) => {
  if (err) {
    console.log("erro ao tentar consultar o banco de dados");
    return;
  }
  console.log("Estrutura da tabela:   ");
  results.forEach((column) => {
    console.log(`Nome: ${column.Field}`);
  });
});
