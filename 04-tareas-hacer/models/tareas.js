class Tareas {

    _listado

    get listadoArr() {
        const listado = []
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]
            listado.push(this._listado[key])
        })

        return listado;
    }

    constructor() {
        this._listado = {}
    }

    ingresarTarea(tarea){
        this._listado[tarea.id] = tarea
        console.info(`${'Tarea ingresada'.green} ${tarea.id.blue} `)
    }

}

module.exports = Tareas