const Atendimento = require('../models/antendimentoModel')
module.exports = app => {
    app.get('/antendimentos', function(req, res) {res.send('Você está na rota atendimentos')})
    app.post('/atendimentos', 
        function(req, res){
            const atendimento = req.body
            Atendimento.adiciona(atendimento)
            res.send('Você está realizando um novo atendimento')
        })

}