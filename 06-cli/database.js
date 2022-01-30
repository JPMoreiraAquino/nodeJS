const {
    readFile
} = require('fs')

const {
    promisify
} = require('util')

const readFileaAsync = promisify(readFile)

let a;



class Database {
    constructor() {
        this.NOME_ARQUIVO = 'herois.json'
    }
    async obterDadosArquivos() {
        const arquivos = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivos.toString())
        
    }
    escreverArquivos() {

    }
    listar() {
        return null
    }
}

module.exports = new Database()

