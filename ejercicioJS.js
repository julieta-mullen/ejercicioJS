// Crear una función constructora la cual vamos a llamar Computadora, deberá tener las siguientes propiedades:

// ram:string
// cpu:string
// disco:string
// monitor:string
// gpu:boolean


function Computadora (ram, cpu, disco, monitor, gpu) {
    this.ram = ram
    this.cpu = cpu
    this.disco = disco
    this.monitor = monitor
    this.gpu = gpu
}

// Crear 5 computadoras distintas y guardarlas (Array) 
// de manera que luego podamos consultar cuántas computadoras tenemos 
// y poder mostrarlas por consola. Además queremos ver el detalle de cada computadora por consola.

let computadoras = []

computadoras.push( new Computadora ('ram1', 'cpu1', 'disco1', 'monitor1', false))
computadoras.push( new Computadora ('ram', 'cpu', 'disco2', 'monitor2', true))
computadoras.push( new Computadora ('ram', 'cpu', 'disco3', 'monitor3', false))
computadoras.push( new Computadora ('ram', 'cpu', 'disco4', 'monitor4', false))
computadoras.push( new Computadora ('ram', 'cpu', 'disco5', 'monitor5', true))

function consultarComputadoras (computadoras) {
    console.log(computadoras.length)
    console.log(computadoras)
}


// Crear un nuevo Array a partir del primero, donde vamos a guardar 
// solamente las computadoras con gpu.

let computadorasConGPU = computadoras.filter(computadora => computadora.gpu)

// Crear una función que calcule cuántos litros de nafta gasta un auto que 
// consume 2 litros cada 100km, ingresando por parámetro la 
// cantidad de kilómetros del recorrido a realizar.

function calcularNafta (km) {
    return (km * 2 / 100)
}

// Luego crear una función que, 
// a partir de ese dato, devuelva cuánto significa eso en pesos ingresando por parámetro 
// el precio del litro de nafta.

function calcularGasto (precioLtNafta, km) {
    return calcularNafta(km) * precioLtNafta
}

// Ejercicio 5

// Crear un array que contenga números del 1 al 10. Retornar un nuevo array que contenga todos los números multiplicados por dos

const arr = []
for (let index = 0; index < 10; index++) {
    arr.push(index + 1)
}
const newArr = arr.map(num => {
    return num * 2
})

//  Ejercicio 6

// Del array que devuelve el ejercicio número 5, filtrar los que sean mayores a 5

const mayoresA5 = newArr.filter(num => num > 5)

console.log(mayoresA5)

//  Ejercicio 7

// Del array que devuelve el ejercicio 6, buscar el primero que sea mayor a 10.

const primerMayorA10 = mayoresA5.find(num => num > 10)

//  Ejercicio 8

//  Dado el siguiente array filtremos a los pokemones con poder menor a 10.

let pokemones = [ 
    { nombre: 'pikachu', poder: 12 },
     { nombre: 'bulbasaur', poder: 6 },
     { nombre: 'charizard', poder: 19 },
     { nombre: 'squirtle', poder: 3 },
     { nombre: 'metwo', poder: 6 }, 
    ]
    
const pokemonesPicantes = pokemones.filter(pokemon => pokemon.poder > 10)