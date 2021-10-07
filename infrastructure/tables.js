//CRIAÇÃO DE TABELAS NO BANCO DE DADOS
class Tables {
    init(connection){
        this.connection = connection
        this.criarAtendimento()
    }

    criarAtendimento(){
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(100) NOT NULL, cpf varchar(20) NOT NULL, produto varchar(30) NOT NULL, quantidade int, status varchar(20), observacoes text, PRIMARY KEY(id))'
    
        this.connection.query(sql, (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Tabela criada com sucesso');
            }
        })
    }
}

module.exports = new Tables