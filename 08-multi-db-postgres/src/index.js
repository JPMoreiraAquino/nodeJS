
const ContextStrategy = require('./db/strategies/base/contextStrategy')

const Postgres = require('./db/strategies/postgres')

const MongoDB = require('./db/strategies/mongoDB')

const contextMongo = new ContextStrategy(new MongoDB())
contextMongo.create()

const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create()