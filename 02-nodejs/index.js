


const util = require("util")

const obterEndereco = util.promisify(obterEndereco)

function obterUsuario(callback) {
    return new Promise(function resolverPromise(resolve, reject) {
        
        setTimeout(function () {
            // return reject(new Error('Deu Ruim ne mano'))
            return resolve({
                id: 1,
                nome: "JP",
                dataNacimento: new Date()
            })
    
        }, 1000)
    })
}

function obterTelefone(idUsuario, ) {
    return new Promise(function resolverPromise(resolve, reject) {

        setTimeout(() => {
            return callback(null, {
                telefone: '123443432',
                ddd: 55
            }) 
        }, 2000)
    })

}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: "dos Bobos",
            numero: 0
        })
    }, 2000)

}  

main()

async function main() {
    try {
        const usuario = await obterUsuario()
        const telefone = await obterTelefone(usuario.id)
        const endereco = await obterEnderecoAsync(usuario.id)

        console.log(` 
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            Endereço: ${endereco.rua}, ${endereco.numero}
        `)        
    }
    catch (erro) {
        console.log("deu ruim ne mano", erro)
    }
}



// const usuarioPromise = obterUsuario()



// usuarioPromise
//     .then(function (usuario) {
//         return obterUsuario(usuario.id)
//         .then(function resolveTelefone(result) {
//             return {
//                 usuario: {
//                     nome: usuario.nome,
//                     id: usuario.id,

//                 },
//                 telefone: result

//             }
//         })
//     })

//     .then(function (resultado) {
//         console.log("Resultado", resultado)
    
// })
//     .catch(function (erro) {
//         console.error("Deu Ruim né mano", erro)
// })

// obterUsuario(function resolverUsuario(error, usuario) {
//     if (error) {
//         console.log("Deu ruim em usuario", error)
//         return;
//     }
//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//     if (error) {
//         console.log("Deu ruim em Telefone", error)
//         return;
//         }  
//     obterEndereco (usuario.id, function resolverendereco(error2, endereco) {
//         if (error) {
//             console.log("Deu ruim em endereço", error)
//             return;
//         }

//         console.log(`
//         Nome: ${usuario.nome},
//         Endereço: ${endereco.rua}, ${endereco.numero}
//         Telefone: (${telefone.ddd}) ${telefone.telefone}`)
//     })
//     })
// })