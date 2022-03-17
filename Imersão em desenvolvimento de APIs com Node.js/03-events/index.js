const EventEmitter = require("events");
class MyEmissor extends EventEmitter {
    
}

const myEmissor = new MyEmissor()

const nomeEvento = "usuario:click"
myEmissor.on(nomeEvento, function (click){
    console.log('um usuario clicou', click)
})

const stdin = process.openStdin()

function main() {
    return new Promise((resolve, reject) => {
        stdin.addListener('data', function (value) {
            // console.log(`Voce digitou: ${value.toString().trim()}`)
            return resolve(value)
        })
    })
}

main().then(function (resultado) {
    console.log("resultado", resultado.toString())
})

// stdin.addListener('data', function (value) {
//     console.log(`Voce digitou: ${value.toString().trim()}`)

// })



// myEmissor.emit(nomeEvento, "na barra de rolagem")
// myEmissor.emit(nomeEvento, "no OK!")
// let count = 0

// setInterval(function () {
//     myEmissor.emit(nomeEvento, "no ok" + (count++))
// }, 10000)