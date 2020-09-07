const customExpress = require('./src/config/customExpress')
const conexao = require('./src/app/infra/conexao')
const Tabelas = require('./src/app/infra/tabelas')

conexao.connect(err => {
    if(err) {
        console.log(err)
    } else {
        console.log('conectado com sucesso')
        Tabelas.init(conexao)
        const app = customExpress()
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
})


