const Atendimento = require('../models/antendimentoModel')
module.exports = app => {
    app.get('/antendimentos', function(req, res) {res.send('Você está na rota atendimentos')})
    app.post('/atendimentos', 
        async function(req, res){
            const atendimento = req.body
            const resultado = await Atendimento.adiciona(atendimento)
            res.send(resultado)
        })

}