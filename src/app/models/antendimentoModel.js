const moment = require('moment')
const conexao = require('../infra/conexao')

class Atendimento {
    async adiciona(atendimento){
        const sql = 'INSERT INTO Atendimentos SET ?'
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = {...atendimento, dataCriacao, data}

        await conexao.query(sql, atendimentoDatado, (erro, resultado) => {
            if(erro) {
                return erro
            }else {
                return resultado
            }
        })
    }
}

module.exports =  new Atendimento;