const assert = require('assert')

const nock = require('nock')

const { 
    obterPessoas 
} = require('./service')


describe("Star Wars Tests ", function () {
    this.beforeAll(() => {
        const response = {
            
        }
    })
    it('deve buscar o r2d2 com o formato correto', async () => {
        const expected = [{ 
            nome: 'R2-D2', 
            height: '96'
         }]
        const nomeBase = `R2-D2`
        const resultado = await obterPessoas(nomeBase)
        assert.deepEqual(resultado, expected)
    })
})

