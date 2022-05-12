require('dotenv').config();

const express = require('express')
const app = express()
const hbs = require('hbs')
const port = process.env.PORT

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: "Hector Alvarado",
        curso: 'Curso de Node'
    })
})

app.get('/generic', (req,res) => {
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req,res) => {
    res.sendFile(__dirname + '/public/elements.html')
})


app.listen(port, () => console.log(`App listening on port ${port}!`))