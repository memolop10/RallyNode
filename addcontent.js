const fs = require('fs')

fs.appendFile('creado.txt', 'charles dame totis',error =>{
    if (error) return console.log('no se añadio',error)
    console.log('se añadio')
});
