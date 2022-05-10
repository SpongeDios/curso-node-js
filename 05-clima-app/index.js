const {leerInput, inquirerMenu, pausa, listarLugares} = require('./helpers/inquirer.js');
const Busquedas = require('./models/busquedas.js');


console.log(process.env.MAPBOX_KEY);

const main = async() => {

    let opt = ''
    const busquedas = new Busquedas()

    do {

        opt = await inquirerMenu()

        switch (opt) {
            case 1:

                const ciudad = await leerInput('Ingrese la ciudad a buscar: ')
                const lugares = await busquedas.buscarCiudad(ciudad)
                const id = await listarLugares(lugares)

                if (id === '0') {
                    break
                }


                const lugarSeleccionado = lugares.find(lugar => lugar.id === id)
                busquedas.agregarHistorial(lugarSeleccionado.nombre)


                const clima = await busquedas.climaLugar(lugarSeleccionado.lat, lugarSeleccionado.lng)
                console.clear();
                console.log("\nInformacion de la ciudad\n".green.bold);
                console.log('Ciudad:', lugarSeleccionado.nombre)
                console.log('Lat:', lugarSeleccionado.lat)
                console.log('Lng:', lugarSeleccionado.lng)
                console.log('Temperatura', clima.actual);
                console.log('Minima', clima.minima);
                console.log('Maxima', clima.maxima);
                console.log('Como esta el clima?', clima.descripcion.green);
                break
            case 2:
                //reemplazar el historial capitalizado
                busquedas.historialCapitalizado.forEach((lugar, id) => {
                    const idx = `${id + 1}`.green
                    console.log(`${idx} - ${lugar}`)
                })
                break
            case 0:
                console.log('Listar tareas completadas')
        }

        if (opt !== 0) await pausa()

    } while (opt !== 0);
}

main()