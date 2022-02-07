const assert = require('assert')
const MongoDB = require('../db/strategies/mongodb')
const ConText = require('../db/strategies/base/contextStrategy')

const context = new ConText(new MongoDB())

const MOCK_HEROI_CADASTRAR = {
    nome: 'Mulher Maravilha',
    poder: 'Laço'
}
const MOCK_HEROI_DEFAULT = {
nome: `Homem Aranha-${Date.now()}`,
    poder: 'Super teia'
}
const MOCK_HEROI_ATUALIZAR = {
    nome: `José Pão de Queijo-${Date.now()}`,
        poder: 'Pão de Queijo'
}
let MOCK_HEROI_ID = ""

describe('MongoDB Suito de test', function()  {
    this.beforeAll(async () => { 
        await context.connect()
        await context.create(MOCK_HEROI_DEFAULT)
        const result = await context.create(MOCK_HEROI_ATUALIZAR)
        MOCK_HEROI_ID = result._id
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

    it('Listar', async () => {
        const [{nome, poder}] = await context.read({nome: MOCK_HEROI_DEFAULT.nome})

        const result = {
            nome, poder
        }
        assert.deepEqual(result, MOCK_HEROI_DEFAULT )
    })

    it('atualizar', async () => {
        const result = await context.update(MOCK_HEROI_ID, {
            nome: 'Pernalonga'
        })        
        assert.deepEqual(result.modifiedCount, 1)
    })
    it('remover'), async () => { 
        const result = await context.delete(MOCK_HEROI_ID)
        assert.deepEqual(result.n, 1)
    }
})