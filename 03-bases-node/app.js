const {crearArchivo} = require('./helpers/multiplicar')

console.clear() // limpia la consola
const base = 4;

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err))