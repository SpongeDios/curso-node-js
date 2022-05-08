require('colors');

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

    cargarTareasFromArray(tareas = []){
        tareas.forEach(tarea => {
            this.ingresarTarea(tarea)
        })
    }

    listadoCompleto(){
        console.log()
        let contador = 1
        this.listadoArr.forEach(tarea => {
            console.log(`${(contador+'.-').green.bold} ${tarea.desc} :: ${tarea.completadoEn ? 'Completada'.green.bold : 'Pendiente'.red.bold}`);
            contador++
        })
    }

    listarCompletadas(){
        let contador = 1
        this.listadoArr.forEach(tarea => {
            if(tarea.completadoEn){
                console.log(`${(contador+'.-').green.bold} ${tarea.desc} :: ${tarea.completadoEn.green.bold}`)
                contador++
            }
        })
    }

    borrarTarea(id){
        if (this._listado[id]) {
            delete this._listado[id]
        }
    }

    listarPendientes(){
        let contador = 1
        this.listadoArr.forEach(tarea => {
            if(!tarea.completadoEn){
                console.log(`${(contador+'.-').green.bold} ${tarea.desc} :: ${tarea.completadoEn ? 'Completada'.green.bold : 'Pendiente'.red.bold}`); 
                contador++
            }
        })
    }

    toggleCompletadas (ids = []){
        ids.forEach(id => {
            const tarea = this._listado[id]
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString()
            }
        })

        this.listadoArr.forEach(tarea => {

            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null
            }

        })
    }
        
}

module.exports = Tareas