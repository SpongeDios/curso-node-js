const fileSystem = require('fs')
const colors = require('../config/colors')

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    console.log(colors.cyan('====================').bold);
    console.log(colors.green('Tabla de multiplicar').bold);
    console.log(colors.cyan('====================').bold);

    let salida = ''

    for (let index = 1; index <= hasta; index++) {
        salida += `${base} x ${index} = ${index*base} \n`   
    }

    if (listar) {
        console.log(colors.rainbow(salida).underline.bold);
    }


    fileSystem.writeFileSync('./salida/tabla-'+base+'.txt', salida)
    console.log("Archivo tabla-"+base+".txt creada");
    return 'tabla-'.america+base+'.txt'.america
}

module.exports = {
    crearArchivo: crearArchivo
}