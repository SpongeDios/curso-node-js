const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear() // limpia la consola

const base = argv.base
const listar = argv.listar
const hasta = argv.hasta

crearArchivo(base, listar, hasta)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err))