const customExpress = require('./config/customExpress')
const connection = require('./infrastructure/connection')
const tables = require('./infrastructure/tables')

connection.connect((error) => {
    if (error) {
        console.log(error);
    } else {
    const app = customExpress()
    app.listen(4000, console.log('Servidor rodando na porta 4000'))

    tables.init(connection)
    console.log('Conexão com o banco de dados realizada com sucesso')
    }
})