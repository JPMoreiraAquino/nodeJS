const assert = require('assert')
const api = require('./../api')
let app = {}

describe.only('Suite de testes da API Heros', function () {
    this.beforeAll(async () => {
        app = await api
    })

    it('listar /herois', async () => {
        const result = await app.inject({
            method: 'GET',
            url: '/herois?skip=0&limit=10'
        })
        const dados = JSON.parse(result.payload)
        const statusCode = result.statusCode
        // console.log('result', result)
        assert.deepEqual(statusCode, 200)
        assert.ok(Array.isArray(dados))
    })
    
    it('listar / herois - deve retorna somente 3 registros', async () => {
        const TAMANHO_LIMITE = 10
        const result = await app.inject({
            method: 'GET', 
            url: `/herois?skip=0&limit=${TAMANHO_LIMITE}`
        })


        const dados = JSON.parse(result.payload)
        const statusCode = result.statusCode
        assert.deepEqual(statusCode, 200)
        assert.ok(dados.length === TAMANHO_LIMITE)


    })

    it('listar / herois - deve retorna um erro com limit incorreto', async () => {
        const TAMANHO_LIMITE = 'AEE'
        const result = await app.inject({
            method: 'GET', 
            url: `/herois?skip=0&limit=${TAMANHO_LIMITE}`
        })

        assert.deepEqual(result.payload, 'Erro Interno no servidor' )
        


    })





    it('listar / herois - deve filtar um item', async () => {
        const NAME ='Gaviao Negro'
        const result = await app.inject({
            method: 'GET', 
            url: `/herois?skip=0&limit=1000&nome=${NAME}`
        })


        const dados = JSON.parse(result.payload)
        const statusCode = result.statusCode
        assert.deepEqual(statusCode, 200)
        assert.deepEqual(dados[0].nome, NAME)
        


    })

})