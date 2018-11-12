const fs = require('fs');//archivos de sistema file system


fs.readdir('nuevodir',(error,files)=>{
    if(error) return console.error(error);
    files.forEach(file=>{
        fs.unlinkSync(`nuevodir/${file}`);  
    });
    fs.rmdir('nuevodir',(error)=>{
        if(error) return console.error(error);
        console.warn("carpeta Eliminada");
    });

    
})

// const fs = require ('fs')
// const contenidoDir = fs.readdirSync('./dirnuevo')
// const estavacio = !contenidoDir[0]

// if (!estavacio){
//   console.log('Voy a borrar archivos')
//   contenidoDir.forEach(file => fs.unlink(`./dirnuevo/${file}`))
// } else {
//   console.log('no voy a borrar archivos')
// }
// fs.rmdir('./dirnuevo/')