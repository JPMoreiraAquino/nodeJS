const BaseRoute = require('./base/baseRoute')
const Joi = require('joi')
const Boom = require('boom')
const Jwt = require('jsonwebtoken')

const failAction = (request, headersm, erro) => {
    throw erro;
}

const USER = {
    username: 'xuxaDaSilva',
    password: '12345'
}

class AuthRoutes extends BaseRoute {

    constructor (secret) {
        super()
        this.secret = secret
    }



    login () {
        return {
            path: '/login',
            methid: 'POST', 
            config: {
                tags: ['api'],
                description: 'Obter token',
                notes: 'faz login com user a senha do banco',

                validate: {
                    payload: {
                        username: Joi.string().required(),
                        password: Joi.string().required(),
                    }

                }

            },
            handler: async (request) => {

                const {username, password} = request.payload

                if(username.toLowerCase() !== USER.username || password !== USER.password){

                    return Boom.unauthorized();
                }
                const token = Jwt.sign ({
                    username: username,
                    id: 1
                }, this.secret)
                return {
                    token
                }

        }


    }
    }
}