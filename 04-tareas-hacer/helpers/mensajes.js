require('colors')

const mostrarMenu = () => {

    return new Promise((resolve, reject) => {
        console.clear()
        console.log('========================================================='.green.bold);
        console.log('===============Seleccione una Opcion====================='.green.bold);
        console.log('========================================================='.green.bold);
    
        console.log(`${'1.'.green} Crear una nueva tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tareas`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir \n`);
    
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question('Seleccione una opcion: ', (opcion) => {
            readline.close()
            resolve(opcion)
        })
    })
}

const pausa = () => {
    return new Promise((resolve, reject) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`Presione ${'ENTER'.green} para continuar...\n`, (opcion) => {
            readline.close()
            resolve()
        })
    })
}

module.exports = {
    mostrarMenu,
    pausa
}
