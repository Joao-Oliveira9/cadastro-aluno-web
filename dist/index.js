"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sql = require("mysql2");
const pool = sql.createPool({
    host: "localhost",
    user: "root",
    password: "terradelama9",
    database: "faculdade_db",
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
//# sourceMappingURL=index.js.map