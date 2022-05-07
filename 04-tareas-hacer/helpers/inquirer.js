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
                name: `${'1'.cyan.bold}. Crear una nueva tarea`
            },
            {
                value: '2',
                name: `${'2'.cyan.bold}. Listar tareas`
            },
            {
                value: '3',
                name: `${'3'.cyan.bold}. Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4'.cyan.bold}. Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5'.cyan.bold}. Completar tareas`
            },
            {
                value: '6',
                name: `${'6'.cyan.bold}. Borrar tarea`
            },
            {
                value: '0',
                name: `${'0'.cyan.bold}. Salir`
            }
        ]
    }
]

const inquirerMenu = async () => {
    console.clear()

    console.log('========================================================='.green.bold);
    console.log('                  Seleccione una Opcion                  '.white.bold);
    console.log('========================================================='.green.bold);

    const {opcion} = await inquirer.prompt(preguntas)
    
    return opcion
}

const leerInput = async (mensaje) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: mensaje,
            validate: (value) => {
                if (value.length === 0) {
                    return 'Debe ingresar un valor'
                }
                return true
            }
        }
    ]

    const {desc} = await inquirer.prompt(question)
    return desc
}

const pausa = async() => {
    
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'enter'.green } para continuar`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}
