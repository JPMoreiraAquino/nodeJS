const {
    readFile,
    writeFile
} = require('fs')

const {
    promisify
} = require('util')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database {
    constructor() {
        this.NOME_ARQUIVO = 'herois.json'
    }
    async obterDadosArquivos() {
        const arquivos = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivos.toString())
        
    }
    async escreverArquivos(dados) {
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true
        
    }
    async cadastrar(heroi) {
        const dados = await this.obterDadosArquivos()
        const id = heroi.id <= 2 ? heroi.id : Date.now();
        const heroidComId = {
            id, 
            ...heroi
        }
        
        const dadosFinal = [
            ...dados,
            heroidComId
        ]
        
        const resultado = await this.escreverArquivos(dadosFinal)
    }
    async listar(id) {
        const dados = await this.obterDadosArquivos()
        
        const dadosFiltados = dados.filter(item =>(id ? (item.id === id) : true))
        return dadosFiltados
    }
    async remover(id) {
        if (!id) {
            return await this.escreverArquivos([])
        }
        
        const dados = await this.obterDadosArquivos()

        const index = dados.findIndex(item => item.id === parseInt(id))
        if(index === -1) {
            throw Error("O usuario informado nao existe")
        }
        dados.splice(index, 1)
        
        return await this.escreverArquivos(dados)
    }

    async atualizar(id, modificacoes) {
        const dados = await this.obterDadosArquivos()
        const indice = dados.findIndex(item => item.id === parseInt(id))
        if (indice === -1) {
            throw Error('O heroi informado não existe')
        }
        const atual = dados[indice]
        const objectAtualizar = {
            ...atual, 
            ...modificacoes
        }
        dados.splice(indice, 1)

        return await this.escreverArquivos([
            ...dados,
            objectAtualizar
        ])        

        return false
    }
}

module.exports = new Database()

