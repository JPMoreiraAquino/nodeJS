
const BaseRoute = require('./base/baseRoutes')
const Joi = require('joi')
class HeroRoutes extends BaseRoute {
    constructor(db) {
        super()
        this.db = db

    }

    
    list() {
        return {
            path: '/herois',
            method: 'GET',
            config: {
                validate: {
                    
                    failAction: (request, headers, erro) => {
                        throw erro;

                    },
                    query: {
                        skip: Joi.number().integer().default(0),
                        limit: Joi.number().integer().default(10),
                        nome: Joi.string().min(3).max(100)


                    }
                }
            },
            handler: (request, headers) => {
                try {
                    const {skip, limit, nome} = request.query

                    let query = {}
                    if (nome) {
                        query.nome = nome
                    }
                    console.log('limit', limit)

                    if(isNaN(skip) )  {
                        throw Error('O tipo do skip e string')
                    }
                    if (isNaN(limit)) {
                        throw Error('O tipo do limit é incorreto')
                    }


                    return this.db.read(query, parseInt(skip), parseInt(limit))
                }
                catch(error) {
                    console.log('Deu ruim', console.error())
                    return "Erro Interno no servidor"
                }
            }
        }
    }
}

module.exports = HeroRoutes