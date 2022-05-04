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

const getEmplado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id)?.nombre
        empleado ? resolve(empleado) : reject("No existe el empleado")
    })
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find((e) => e.id === id)?.salario
        salario ? resolve(salario) : reject("No existe salario con ese ID")
    })
}




// const id = 3
// getEmplado(id)
//     .then((empleado) => console.log(empleado))
//     .catch((err) => console.log("ERROOOOOR en el empleado", err));

// getSalario(2)
//     .then((salario) => console.log(salario))
//     .catch((err) => console.log("ERRRRRRRRRRRRROOOOOOR en el salario", err))

// getEmplado(id)
//     .then((empleado) => {
//         getSalario(id)
//             .then(salario => {
//                 console.log(empleado, salario);
//             })
//             .catch(err => console.log(err))
//     })
//     .catch((err) => console.log("ERROOOOOR en el empleado", err));    

const id = 3
getEmplado(id)
    .then(empleado => {
        nombre = empleado
        return getSalario(id)
    
    })
    .then(salario => console.log("El empleado", nombre, "tiene un salario de", salario))
    .catch(err => console.log(err))