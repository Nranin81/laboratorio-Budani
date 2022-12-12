/* La Mariana del futuro seguirá con esto
let carrito = 0
let suma = 0

function Producto(nombre, precio) {
  this.nombre = nombre
  this.precio = precio
  this.disponible = true
}

const producto0 = new Producto("Suero Amarillo", 500)
const producto1 = new Producto("Gotas", 800)
const producto2 = new Producto("Suero Rojo", 750)
const producto3 = new Producto("Kit tres pasos", 5500)
const producto4 = new Producto("Serum Aquaprom", 2500)
const producto5 = new Producto("Spray Curativo", 15000)
const producto6 = new Producto("Suero Naranja", 2100)
const producto7 = new Producto("Kit de Prueba", 7500)
const producto8 = new Producto("Suero Carmesí", 4000)
const producto9 = new Producto("Kit Fullbelleza", 20500)

function agregarCarrito(id){
  console.log(id)
  if (carrito >= 1) {
    prompt("¿Desea agregar más productos?")
  }else{
    
  }
  while (id != null) {
    carrito = carrito + 1
    console.log(carrito)
  }
}

*/
const productos = [
  { id: '1', nombre: 'suero amarillo',  precio: 500 },
  { id: '2', nombre: 'gotas', precio: 800 },
  { id: '3', nombre: 'suero rojo', precio: 730 },
  { id: '4', nombre: 'kit tres pasos', precio: 5500 },
  { id: '5', nombre: 'gotas aqueprom', precio: 3500 },
  { id: '6', nombre: 'spray curativo', precio: 13500 },
  { id: '7', nombre: 'suero naranja', precio: 8300 },
  { id: '8', nombre: 'kit de prueba', precio: 7420 },
  { id: '9', nombre: 'suero carmesí', precio: 9543 },
  { id: '10', nombre: 'kit completo', precio: 24130 }
]

const sueros = productos.filter((productos)=> productos.nombre.includes ('suero') )
const kit = productos.filter((productos)=> productos.nombre.includes ("kit") )
const spray = productos.filter((productos)=> productos.nombre.includes ("spray") )
const gotas = productos.filter((productos)=> productos.nombre.includes ("gotas") )
// console.log(sueros)

let suma = 0;

// const total = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0)

// window.addEventListener("load", ()=>{
  function elegirOpciones() {
    let opcion = prompt(`¿Qué desea hacer? 
    Escriba el numero de la opción: 
    1- Buscar un producto
    2- Comprar
    3- Salir`)
    
    if (opcion == '1') {
      let busqueda = prompt(`Ingrese el nombre del producto.
      Opciones:
      Suero - Kit - Spray - Gotas
      Para finalizar ingrese 0(cero)`)
      let clave = productos.filter((productos)=> productos.nombre.includes(busqueda))
      let resultado = ''
      for (let i = 0; i < clave.length; i++) {
        let item = clave[i].nombre
        resultado += item+', '
      }
      Swal.fire('Los resultados son: ', resultado)
      if (busqueda == '0' || busqueda == 'cero') {
        comprarProducto()
      }
    }else if(opcion == '2'){
      let carrito = prompt(`Elija los productos a comprar:
      1- Suero Amarillo
      2- Gotas
      3- Suero Rojo
      4- Kit tres pasos
      5- Aqueprom
      6- Spray Curativo
      7- Suero Naranja
      8- Kit de prueba
      9- Suero Carmesí
      10- Kit completo
      Para finalizar ingrese 0 (cero)
      `)
      let resultado = comprarCarrito(carrito)
      resultado = 'El monto final es: ' + resultado.toString()
      Swal.fire('Carrito ', resultado)
    }else{
      Swal.fire('Adios!')
    }
  }
elegirOpciones()  
  function comprarCarrito(carrito) {
    let suma = 0;
    opcion = carrito.toUpperCase()
    while (opcion != "0" && opcion != "CERO") {
      if (opcion == '1') {
        suma = suma + 500
      } else if (opcion == '2'){
        suma = suma + 800
      }else if (opcion == '3'){
        suma = suma + 730
      }else if (opcion == '4'){
        suma = suma + 5500
      }else if (opcion == '5'){
        suma = suma + 3500
      }else if (opcion == '6'){
        suma = suma + 13500
      }else if (opcion == '7'){
        suma = suma + 8300
      }else if (opcion == '8'){
        suma = suma + 7420
      }else if (opcion == '9'){
        suma = suma + 9543
      }else if (opcion == '10'){
        suma = suma + 24130
      }
      opcion = prompt(`Ingrese una opción o CERO para terminar: 
      1- Suero Amarillo $500 
      2- Gotas $800 
      3- Suero rojo $730 
      4- Kit tres pasos $5500 
      5- Spray Curativo $3500
      6- Spray Curativo $13500
      7- Suero Naranja $8300
      8- Kit de prueba $7420
      9- Suero Carmesí $9543
      10- Kit completo $24130
      `);
    }
    if (opcion == '0' || opcion =='CERO'){
      return suma
      // alert(`el total de su compra es: $${suma}`)
    }
    /*
    let total = 0
    let valor = productos.find(producto => productos.id === carrito)
    
    while (carrito != '0' || carrito != 'cero') {
      console.log(valor)
      carrito = prompt(`Ingrese una opción o CERO para terminar: 
      1- Suero Amarillo
      2- Gotas
      3- Suero Rojo
      4- Kit tres pasos
      5- Aqueprom
      6- Spray Curativo
      7- Suero Naranja
      8- Kit de prueba
      9- Suero Carmesí
      10- Kit completo
      Para finalizar ingrese 0 (cero)
      `)
      console.log(total)
      console.log(carrito)
    }
    carrito = carrito.toUpperCase()
    if (carrito == '0' || carrito == 'CERO') {
      Swal.fire('Adios!')
    }*/
  }
// })