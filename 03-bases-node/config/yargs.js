const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Lista los resultados de la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Hasta que numero quiere la tabla de multiplicar'
    })
    .check((argv) => {
        if (isNaN(argv.base)) {
            throw new Error('El valor tiene que ser un numero')
        }

        if (argv.hasta <= 0) {
            throw new Error('El parametro hasta tiene que ser mayor que 0')
        }
        return true
    })
    .argv

module.exports = argv