const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('yargs').argv

console.clear() // limpia la consola

// const[, , arg3] = process.argv
// const[, base = 5] = arg3.split('=')
// console.log(process.argv);


// const base = 4;
// console.log(base);


// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo))
//     .catch(err => console.log(err))

console.log(argv);
console.log('Base: yargs', argv.base);