const assert = require('assert')
const MongoDB = require('../db/strategies/mongodb')
const ConText = require('../db/strategies/base/contextStrategy')

const context = new ConText(new MongoDB())

describe('MongoDB Suito de test', function()  {
    this.beforeAll(async () => { 
        await context.connect()
    })
    it.only('verificar conexao', async () => {
        const result = await context.isConnected()
        console.log('result', result)
        const expected = 'Conectado'

        assert.deepEqual(result, expected)
    } )
})