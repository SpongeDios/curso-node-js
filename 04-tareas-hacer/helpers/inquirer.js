require('colors')

const inquirer = require('inquirer');
const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear una nueva tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tareas'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
]
const presioneEnter = [
    {
        type: 'input',
        name: 'opcion',
        message: `Presione ${'ENTER'.green} para continuar...\n\n`
    }


]

const inquirerMenu = async () => {
    console.clear();

    console.log('========================================================='.green.bold);
    console.log('===============Seleccione una Opcion====================='.green.bold);
    console.log('========================================================='.green.bold);

    const {opcion} = await inquirer.prompt(preguntas)
    
    return opcion
}

const pausa = async () => {
    const {opcion} = await inquirer.prompt(presioneEnter);
    return opcion
}

module.exports = {
    inquirerMenu,
    pausa
}
