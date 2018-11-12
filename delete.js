const fs = require('fs')


fs.unlink('creado.txt',error=>{
    if(error) return console.log('Error:',error)
    console.log('borrado')
})