require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {inquirerMenu, pausa, leerInput} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

console.clear()

const main = async () => {
    console.log('Hello World'.green);

    let opt = ''
    const tareas = new Tareas()
    const tareasDB = leerDB()

    if(tareasDB){
        //TODO: cargar tareas de la base de datos
    }

    await pausa()
    
    do {
        opt = await inquirerMenu()

        switch (opt) {
            case '1':
                const desc = await leerInput('Ingrese una descripcion: ')
                const tarea = new Tarea(desc)
                tareas.ingresarTarea(tarea)
                break
            case '2':
                console.log(tareas.listadoArr)
                break
        }

        // guardarDB(tareas.listadoArr)

        await pausa()
    } while (opt !== '0');



}


main()