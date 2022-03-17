//npm i hapi
const Hapi = require('hapi')
const Context = require('./src/db/strategies/base/contextStrategy')
const MongoDb = require('./src/db/strategies/mongodb/mongoDbStrategy')
const heroSchema = require('./src/db/strategies/mongodb/schemas/heroSchema')
const HeroiSchema = require('./src/db/strategies/mongodb/schemas/heroSchema')
const HeroRoute = require('./src/routes/heroRoutes')

const app = new Hapi.Server({
    port: 5000
})
function mapRoutes(instance, methods) {
    return methods.map(method => instance[method]())
}

async function main() {
    const connection = MongoDb.connect()
    const context = new Context(new MongoDb(connection, HeroiSchema))

    app.route([
        ...mapRoutes(new HeroRoute(context), HeroRoute.methods())

    ])


    await app.start()
    console.log('Servidor rodando na porta', app.info.port)

    return app

}


module.exports = main()