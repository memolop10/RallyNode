const fs = require('fs')

fs.mkdir('./dirnuevo',error => {
if(error) return console.log('Error:',error)
    console.log('creado sin problemas')
});
