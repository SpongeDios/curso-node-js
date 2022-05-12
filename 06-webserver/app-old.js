const http = require('http')

http.createServer( (request, response) => {

    // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // response.writeHead(200, {'Content-type': 'application/csv'})


    console.log(request);
    
    // response.write('id, nombre\n')
    // response.write('1, Fernando\n')
    // response.write('2, Hector\n')
    // response.write('3, Maria\n')
    // response.write('4, Juan\n')

    response.write("hola mundo")
    response.end()

})
.listen(8080)

console.log('escuchando en el puerto 8080');