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
let carrito = 0
let suma = 0
const producto0 = { nombre:"Suero Amarillo", valor: 500 }
const producto1 = { nombre:"Gotas", valor: 800 }
const producto2 = { nombre:"Suero Rojo", valor: 750 }
const producto3 = { nombre:"Kit tres pasos", valor: 5500 }
const producto4 = { nombre:"Serum Aquaprom", valor: 2500 }
const producto5 = { nombre:"Spray Curativo", valor: 15000 }
const producto6 = { nombre:"Suero Naranja", valor: 2100 }
const producto7 = { nombre:"Kit de Prueba", valor: 7500 }
const producto8 = { nombre:"Suero Carmesí", valor: 4000 }
const producto9 = { nombre:"Kit Fullbelleza", valor: 20500 }

respuesta = respuesta.toUpperCase()
  let suma = 0
  for (let i = 0; respuesta != 'FINALIZAR'; i++) {
    let items = i
    switch (respuesta) {
      case '1':
        suma = suma + 500    
        break;
      case '2':
        suma = suma + 800
        break;
      case '3':
        suma = suma + 750
        break;
      case '4':
        suma = suma + 5500
        break;
      case 'FINALIZAR':
        let mensaje = 'El total de su compra es de: $'
        alert(mensaje, suma)
      default:
        respuesta = prompt(`Ingrese una opción válida: 
        1- Suero Amarillo $500 
        2- Gotas $800 
        3- Suero rojo $750 
        4-Kit tres pasos $5500 
        Para finalizar ingrese FINALIZAR`)    
        break;
    }    
  }
*/
  

window.addEventListener("load", ()=>{
  let opcion = prompt(`¿Qué productos desea comprar? 
  Escriba el numero de la opción: 
  1- Suero Amarillo $500 
  2- Gotas $800 
  3- Suero rojo $730 
  4- Kit tres pasos $5500 
  5- Spray Curativo $13500
  Para finalizar ingrese FINALIZAR
  `);
  let suma = 0;
  while (opcion != "FINALIZAR" && opcion != "finalizar") {
    if (opcion == '1') {
      suma = suma + 500
    } else if (opcion == '2'){
      suma = suma + 800
    }else if (opcion == '3'){
      suma = suma + 730
    }else if (opcion == '4'){
      suma = suma + 5500
    }else if (opcion == '5'){
      suma = suma +13500
    }
    opcion = prompt(`Ingrese una opción o FINALIZAR para terminar: 
    1- Suero Amarillo $500 
    2- Gotas $800 
    3- Suero rojo $730 
    4- Kit tres pasos $5500 
    5- Spray Curativo $13500
    `);
  }
  if (opcion == 'finalizar' || opcion =='FINALIZAR'){
    alert(`el total de su compra es: $${suma}`)
  }

})