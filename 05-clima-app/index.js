const {leerInput, inquirerMenu, pausa} = require('./helpers/inquirer.js');
const Busquedas = require('./models/busquedas.js');

const main = async() => {

    let opt = ''
    const busquedas = new Busquedas()

    do {

        opt = await inquirerMenu()

        switch (opt) {
            case 1:

                const ciudad = await leerInput('Ingrese la ciudad a buscar: ')
                const cuidadResponse = await busquedas.buscarCiudad(ciudad)
                console.log(cuidadResponse);

                console.log("\nInformacion de la ciudad\n".green.bold);
                console.log('Ciudad');
                console.log('Lat');
                console.log('Lng');
                console.log('Temperatura');
                console.log('Minima');
                console.log('Maxima');
                break
            case 2:
                console.log('Historial')
                break
            case 0:
                console.log('Listar tareas completadas')
        }

        if (opt !== 0) await pausa()

    } while (opt !== 0);
}

main()