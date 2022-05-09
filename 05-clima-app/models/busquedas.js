const axios = require('axios');

class Busquedas {

    historial = ['Santiago', 'Madrid', 'San Jose']

    constructor() {
        //TODO: TENGO QUE LEER MI DB
    }

    async buscarCiudad(ciudad= '') {
        try {
            const response = await axios.get('https://reqres.in/api/users?page=2')
            console.log(response.data);
            return [] //retornar todos los lugares
        } catch (error) {
            return []
        }
        //TODO: peticion http
       
    }
}

module.exports = Busquedas