//PASTA C/ MODULOS DE CONFIGS DE CONEXÕES AO BANCO DE DADOS - CONEXÃO COM O BANCO
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'adv17667',
    database: 'projeto-crud'
})

module.exports = connection