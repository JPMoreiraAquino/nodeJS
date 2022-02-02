const fs = require('fs')

console.log(1)

fs.readFile('./index1.txt', (err, contents) => {
    fs.readFile('./index2.txt', (err2, contents2) => {
        console.log(err, String(contents))
        console.log(err, String(contents2))
    
        
    })
})

console.log(2)

console.log(3)