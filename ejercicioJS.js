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

calcularGasto(3, 100)