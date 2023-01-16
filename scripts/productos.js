const carro = new Carrito()
const carrito = document.getElementById("carrito")
const productos = document.getElementById("lista-productos")
const listaProductos = document.querySelector("#lista-carrito tbody")
const vaciarCarritoBtn = document.getElementById("vaciar-carrito")
const procesarPedidoBtn = document.getElementById("procesar-pedido")
const contenedorCarrito = document.querySelector('.card-items')
const contadorCarrito = document.querySelector('.contarProductos')

cargarEventos()

function cargarEventos() {

	// Se ejecuta cuando se presionar agregar carrito
	productos.addEventListener("click", (e) => {
		carro.comprarProducto(e)
	})

	// Cuando se elimina productos
	carrito.addEventListener("click", (e) => {
		carro.eliminarProducto(e)
	})

	// vaciar carrito
	vaciarCarritoBtn.addEventListener("click", (e) => {
		carro.vaciarCarrito(e)
	})

	// cargar documento LS
	document.addEventListener("DOMContentLoaded", () => {
		carro.leerLocalStorage()
		fetchProductos()
	})

	// Enviar pedido
	procesarPedidoBtn.addEventListener("click", (e) => {
		carro.procesarPedido(e)
	})
}

async function fetchProductos() {
	let res = await fetch("../json/productos.json")
	let datos = await res.json()
	let html = ""
	datos.forEach((producto, index) => {
    curr= `
		<div class="col">
			<div class="card card-prod">
				<img src=${producto.imagen} class="card-img-top" alt=${producto.nombre}">
					<div class="card-body">
						<h5 class="card-title precio"><span class="">${producto.nombre}</span></h5>
						<p class="card-text">${producto.descripcion}</p>
						<p class="card-text precio">$<strong>${producto.precio}</strong></p>
						<a href="" class="btn btn-outline-danger agregar-carrito" id="producto-id" data-id=${producto.id}>Comprar</a>
					</div>
				</div>
			</div>
    `
		if(index === 0){
			html += `<div class="row row-cols-1 row-cols-md-3 g-4">${curr}`
		}else if(index % 3 === 0 && index !== 0){
			html += `</div><br><div class="row row-cols-1 row-cols-md-3 g-4">${curr}`
		}else{
			html += curr
		}
  })
	productos.innerHTML = html;
}

