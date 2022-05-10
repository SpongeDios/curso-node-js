const fs = require('fs')
require('dotenv').config()


const axios = require('axios');

class Busquedas {

    historial = []
    dbPath = './db/database.json'

    constructor() {
        this.leerDB()
    }

    get historialCapitalizado(){
        let overrideHistorial = []
        this.historial.forEach(ciudad => {
            overrideHistorial.push(this.capitalizeWords(ciudad))
        })
        return overrideHistorial
    }

    get paramsMapBox(){
        return {
            'language':'es',
            'access_token':process.env.MAPBOX_KEY,
            'limit': 5
        }
    }

    async buscarCiudad(ciudad= '') {
        try {

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ciudad}.json`,
                params: this.paramsMapBox
            })

            const response = await instance.get()
            return response.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lat: lugar.center[1],
                lng: lugar.center[0]
            })) //retornar todos los lugares
        } catch (error) {
            return []
        }
        //TODO: peticion http
    }

    async climaLugar(lat, lon) {
        try {

            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {
                    'lat': lat,
                    'lon': lon,
                    'units': 'metric',
                    'appid': process.env.OPENWEATHER_KEY,
                    'lang': 'es'
                }
            })

            const response = await instance.get()
            const descripcion = response.data.weather[0].description
            const temperatura = response.data.main.temp
            const minima = response.data.main.temp_min
            const maxima = response.data.main.temp_max
        
            return {
                actual: temperatura,
                minima,
                maxima,
                descripcion
            }

        } catch (error) {
            return error
        }
    }

    agregarHistorial(lugar = ''){
        if (this.historial.includes(lugar.toLocaleLowerCase())) {
            return
        }

        this.historial = this.historial.splice(0,5)

        this.historial.unshift(lugar.toLocaleLowerCase())
        this.guardarDB()
    }

    guardarDB() {
        const payload = {
            historial: this.historial
        }

        fs.writeFileSync(this.dbPath, JSON.stringify(payload))
    }

    leerDB(){
        //verificar que exista
        if (!fs.existsSync(this.dbPath)) return 

        const info = fs.readFileSync(this.dbPath, 'utf-8')
        const data = JSON.parse(info)
        console.log(data);
        this.historial = data.historial
    }

    capitalizeWords(string) {
        return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
    };
}

module.exports = Busquedas