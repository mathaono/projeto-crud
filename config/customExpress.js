// PASTA C/ MÓDULOS(ARQUIVOS) DAS CONFIGS DO SERVIDOR - EXPORTANDO BIBLIOTECAS EXTERNAS
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

//EXPORTANDO MODULO DE CONFIG DO SERVIDOR
module.exports = () => {
    //GUARDANDO O MÉTODO EXPRESS EM UMA CONSTANTE
    const app = express()

    //CHAMANDO MÉTODOS DA BIBLIOTECA EXPRESS ATRAVÉS DA CONSTANTE
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    consign()
        .include('controllers')
        .into(app)

    return app
}