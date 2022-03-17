/*
docker ps

docker exec -it 9128f0e009a1 mongo -u JPMoreira -p batata123 -authenticationDatabase herois

// databases
show dbs

// Mundando o contexto para um database
use herois

//mostra tables (colecoes)
show collections 
*/

db.herois.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento: '2000-02-23'
})

db.herois.find()
db.herois.find().pretty()

for(let i =0; i <= 50000; i++) {
    db.herois.insert({
        nome: `Clone-${i}`,
        poder: 'Velocidade',
        dataNascimento: '2000-10-01'
    })
}

db.herois.count()
db.herois.findOne()
db.herois.find().limit(1000).sort({nome: 1})
db.herois.find({}, {poder: 1, _id: 0})

//create
db.herois.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento: '2000-02-23'
})

//read
db.herois.find()

//update

db.herois.update({_id: ObjectId("61fe0ab1bec2e7e131a73a3f")},
                {nome: 'Iron Man'})

db.herois.update({poder: 'Velocidade'},
                { $set: {poder: 'Super força'}})

//delete

db.herois.remove({nome: 'Mulher Maravilha'})

db.herois.find({nome: 'Flash'})