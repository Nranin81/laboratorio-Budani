const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');

cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());
    //Eliminar productos del carrito
    carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });
    compra.calcularTotal();
    //cuando se selecciona procesar Compra
    procesarCompraBtn.addEventListener('click', procesarCompra);
    carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });
    carrito.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });
    // localStorage.clear()
}

function procesarCompra() {
    if (compra.obtenerProductosLocalStorage().length === 0) {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'El carrito se encuentra vacío',
            showConfirmButton: false,
            timer: 2000
        }).then(function () {
            window.location = "productos.html";
        })
    }else if(cliente.value === '') {
        Swal.fire({
            type: 'info',
            title: 'Atención',
            text: 'Debe completar su nombre',
            showConfirmButton: true,
            timer: 2000
          })
    }else {
        productosLS = compra.obtenerProductosLocalStorage()
        document.getElementById('procesar-pago')
        .addEventListener('submit', function (event) {
            event.preventDefault()
            Swal.fire({
                type: 'success',
                title: 'Hecho',
                text: 'Los productos estarán listos para retirar mañana',
                showConfirmButton: true,
                timer: 2500
            }).then(function () {
                compra.vaciarLocalStorage();
                window.location = "productos.html"
            })
        })
    }
}