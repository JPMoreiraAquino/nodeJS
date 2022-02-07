// npm install mongoose

const Mongoose = require('mongoose')

Mongoose.connect('mongodb://JPMoreira:batata123@localhost:27017/herois', {useNewUrlParser: true}, (err) => {
    if(!err) return ; 
    console.log('Falha na conexão!', err)

})

const connection = Mongoose.connection

// function nomeFuncao() {

// }

// const minhaFuncao = function() {

// }

// const minhaFuncaoArrow = (params) => {
    
// }

connection.once('open', () =>  {console.log('Database Rodando!!!')})
// setTimeout(() => {
    // const state = connection.readyState
    // console.log('state', state)

// }, 1000)

/*
0: Disconectado
1: Conectado
2: Conectando
3: Disconectand0
*/

const heroiSchema = new Mongoose.Schema({
    nome: {
        type: String,
        required: true

    },
    poder: {
        type: String,
        required: true

    },

    insertedAt: {
        type: Date,
        default: new Date()
    }
    
})

const model = Mongoose.model('herois', heroiSchema)

async function main()  {
    const resultCadastrar = await model.create({
        nome: 'Batman',
        poder: 'Dinheiro'
    })
    console.log('result cafastrar', resultCadastrar)

    const listItens = await model.find()
        console.log('itens', listItens)
    
}

main()