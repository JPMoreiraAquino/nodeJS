const{ 
    deepEqual,
    ok
} = require('assert')

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}


describe('Suites de manipulação de Herois', () => {

    it ('deve pesquisar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR

        ok(null, expected)
    })

    // it('Deve cadastrar um heroi, usando arquivos', async () => {
    //     const expected = DEFAULT_ITEM_CADASTRAR

    //     ok(null, expected)



    // })


})
