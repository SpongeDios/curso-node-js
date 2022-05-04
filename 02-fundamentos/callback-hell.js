const empleados = [
    {
        id:1,
        nombre: "Hector Alvarado" 
    },
    {
        id:2,
        nombre: "Linda" 
    },
    {
        id:3,
        nombre: "Karen" 
    }
]


const salarios = [
    {
        id:1,
        salario: 1000 
    },
    {
        id:2,
        salario: 2000 
    }
]

const getEmplado = (id, callback) => {
    const empleado = empleados.find((e) => e.id === id)

    if (empleado) {
        callback(null, empleado)
        return empleado        
    }

    return callback(null,"El empleado no existe")
}


getEmplado(3, (err, empleado) => {

    if (err) {
        console.log("ERROR!");
        return console.log(err);
    }

    console.log("Empleado existe");
    console.log(empleado);
})

const getSaliaro = (id, callback) => {
    const salario = salarios.find((e) => e.id === id)?.salario

    if (salario) {
        callback(null, salario)
        return salario        
    }

    return callback(null,"El empleado no existe")
}

getSaliaro(1, (err, salario) => {

    if (err) {
        console.log("ERROR!");
        return console.log(err);
    }
    console.log("Empleado existe");
    console.log(salario);

})

