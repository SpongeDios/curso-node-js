require('colors')

const inquirer = require('inquirer');
const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1'.cyan.bold}. Buscar ciudad`
            },
            {
                value: 2,
                name: `${'2'.cyan.bold}. Historial`
            },
            {
                value: 0,
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


const listadoTareasBorrar = async (tareas =[]) => {

    const choices = tareas.map((tarea, index) => {
        return {
            value: tarea.id,
            name: `${index+1}.`.green + `${tarea.desc}`
        }
    })

    choices.unshift({
        value: '0',
        name: `${'0'.green}.Volver`
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione una tarea para borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas)
    return id
}

const mostrarListadoChecklist = async (tareas =[]) => {

    const choices = tareas.map((tarea, index) => {
        return {
            value: tarea.id,
            name: `${index+1}.`.green + `${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    })

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(pregunta)
    return ids
}





const confirmar = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const {ok} = await inquirer.prompt(question) 
    return ok
}


module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
}
