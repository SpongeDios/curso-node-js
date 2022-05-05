const fileSystem = require('fs')

// fileSystem.writeFile('tabla-'+base+'.txt', salida, (err) => {
//     if (err) throw err
    
//     console.log("Archivo tabla-"+base+".txt creada");
// })

const crearArchivo = async (base = 5) => {
    console.log('====================');
    console.log('Tabla de multiplicar');
    console.log('====================');

    let salida = ''

    for (let index = 1; index <= 10; index++) {
        salida += `${base} x ${index} = ${index*base} \n`   
    }
    console.log(salida);

    fileSystem.writeFileSync('tabla-'+base+'.txt', salida)
    console.log("Archivo tabla-"+base+".txt creada");
    return 'tabla-'+base+'.txt'
}

module.exports = {
    crearArchivo: crearArchivo
}