const { 
    get
} = require("axios")

const URL = `https://swapi.dev/api/people`

async function obterpessoas(nome) {
    const url = `${URL}?search=${nome}&format=json`
    const response = await get(url)
    return response.data
   
}

module.exports = {
    obterpessoas
}