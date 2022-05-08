require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

console.clear()

const main = async () => {
    console.log('Hello World'.green);

    let opt = ''
    const tareas = new Tareas()
    const tareasDB = leerDB()

    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB)
    }
    
    do {
        opt = await inquirerMenu()

        switch (opt) {
            case '1':
                const desc = await leerInput('Ingrese una descripcion: ')
                const tarea = new Tarea(desc)
                tareas.ingresarTarea(tarea)
                break
            case '2':
                tareas.listadoCompleto()
                break
            case '3':
                tareas.listarCompletadas()
                break
            case '4':
                tareas.listarPendientes()
                break
            case '5':
                const ids = await mostrarListadoChecklist(tareas.listadoArr)
                tareas.toggleCompletadas(ids)
                break
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr)

                if (id === '0') {
                    break
                }

                const hasDelete = await confirmar(`Desea borrar la tarea ${id}?`)
                if(hasDelete){
                    tareas.borrarTarea(id)
                    console.log("Tarea borrada".green);
                }
                break
        }

        guardarDB(tareas.listadoArr)

        await pausa()
    } while (opt !== '0');



}


main()