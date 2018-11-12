const fs = require('fs')

fs.writeFile('creado.txt','content',error => {
    if(error) return console.log('Error : ' ,error)
    console.log('archivo creado')
})