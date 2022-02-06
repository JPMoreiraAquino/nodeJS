const assert = require('assert')
const MongoDB = require('../db/strategies/mongodb')
const ConText = require('../db/strategies/base/contextStrategy')

const context = new ConText(new MongoDB())

const MOCK_HEROI_CADASTRAR = {
    nome: 'Mulher Maravilha',
    poder: 'Laço'
}

describe('MongoDB Suito de test', function()  {
    this.beforeAll(async () => { 
        await context.connect()
    })
    it('verificar conexao', async () => {
        const result = await context.isConnected()
        console.log('result', result)
        const expected = 'Conectado'

        assert.deepEqual(result, expected)
    })

    it('cadastrar', async () => {
        const {nome, poder } = await context.create(MOCK_HEROI_CADASTRAR)
        assert.deepEqual({nome, poder}, MOCK_HEROI_CADASTRAR)

    })
})