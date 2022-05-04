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



const getInfoUsuario = async(id) => {
    
    const nombreEmpleado = await getEmplado(id)
    const salario = await getSalario(id)
    return nombreEmpleado + " " +salario
}

const getInfoUsuario2 = async(id) => {
    
    try {
        const nombreEmpleado = await getEmplado(id)
        const salario = await getSalario(id)
        return nombreEmpleado + " " +salario        
    } catch (error) {
        return error
    }
    
}


const id = 3
getInfoUsuario2(id)
    .then(msg => console.log(msg))