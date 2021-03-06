const express = require("express")
const app = express()
const port = 8080

//Servir contenido estatico
app.use(express.static("public"))

// app.get("/",  (req, res) => {
//     res.send("Home Page")
// })

app.get("/hola-mundo",  (req, res) => {
    res.send("Hola mundo en la ruta")
})

app.get("*",  (req, res) => {
    res.sendFile(__dirname+"/public/404.html")
})

app.listen(port, () => {
    console.log(`Running app at localhost:${port}`);
})