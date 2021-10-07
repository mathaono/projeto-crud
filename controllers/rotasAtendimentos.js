//PASTA C/ MÓDULOS(ARQUIVOS) DE ROTAS DE ACESSO HTTP

module.exports = app => {

    app.get('/', (req, res) => {
        res.send('Tela inicial')
    })

    app.get('/atendimentos', (req, res) => {
        res.send('Tela atendimentos com GET')
    })

    app.post('/atendimentos', (req, res) => {
        const atend = req.body
        res.send('Tela atendimentos com POST')
    })
}