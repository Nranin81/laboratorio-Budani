class Carrito {
  // añado prod al carrito
  comprarProducto(e) {
    e.preventDefault()
    if (e.target.classList.contains('agregar-carrito')) {
      const producto = e.target.parentElement.parentElement
      this.leerDatosProducto(producto)
    }
  }
  // datos del prod
  leerDatosProducto (producto) {
    const infoProducto = {
      imagen : producto.querySelector('img').src,
      nombre: producto.querySelector('h5').textContent,
      precio: producto.querySelector('.precio strong').textContent,
      id: producto.querySelector('a').getAttribute('data-id'),
      cantidad: 1
    }
    let productosLS
    productosLS = this.obtenerProductosLocalStorage()
    productosLS.forEach(function (productoLS) {
      if (productoLS.id === infoProducto.id) {
        productosLS = productoLS.id
      }
    })

    if(productosLS === infoProducto.id){
      Swal.fire({
        type: 'error',
        title: 'Atención',
        text: 'Producto agregado al carrito',
        showConfirmButton: true,
        timer: 2000
      })
    }
    else {
      this.insertarCarrito(infoProducto)
    }
  }

  insertarCarrito(producto) {
    const row = document.createElement('tr')
    row.innerHTML = `
        <td>
          <img src="${producto.imagen}" width=100>
        </td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>
          <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
        </td>
    `;
    listaProductos.appendChild(row)
    this.guardarProductosLocalStorage(producto)
  }

  //Eliminar producto en el DOM
  eliminarProducto(e) {
    e.preventDefault()
    let producto, productoID
    if (e.target.classList.contains('borrar-producto')) {
      e.target.parentElement.parentElement.remove()
      producto = e.target.parentElement.parentElement
      productoID = producto.querySelector('svg').getAttribute('data-id')
    }
    console.log(productoID)
    this.eliminarProductoLocalStorage(productoID)
    this.calcularTotal()
    }

  //Elimina todos los productos
  vaciarCarrito(e) {
    e.preventDefault()
    while (listaProductos.firstChild) {
      listaProductos.removeChild(listaProductos.firstChild)
    }
    this.vaciarLocalStorage()
    return false
  }

  //Almacenar en el LS
  guardarProductosLocalStorage(producto){
    let productos
    productos = this.obtenerProductosLocalStorage()
    productos.push(producto)
    localStorage.setItem('productos', JSON.stringify(productos))
  }

  // Comprobar que hay elementos en el LS
  obtenerProductosLocalStorage(){
    let productoLS
    if (localStorage.getItem('productos') === null) {
      productoLS = []
    }
    else {
      productoLS = JSON.parse(localStorage.getItem('productos'))
    }
    return productoLS
  }
  //Mostrar los productos guardados en el LS
  leerLocalStorage() {
    let productosLS
    productosLS = this.obtenerProductosLocalStorage()
    productosLS.forEach (function (producto) {
      const row = document.createElement('tr')
      row.innerHTML = `
        <td>
          <img src="${producto.imagen}" width=100>
        </td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>
          <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
        </td>
      `;
      listaProductos.appendChild(row)
    })
  }
  leerLocalStorageCompra() {
    let productosLS
    let contadorProductos = 0
    productosLS = this.obtenerProductosLocalStorage()
    productosLS.forEach (function (producto) {
      contadorProductos = productosLS.length
      const row = document.createElement('tr')
      row.innerHTML = `
        <td>
          <img src="${producto.imagen}" style="width:80px">
        </td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>
          <input type="number" class="form-control cantidad" min="1" value=${producto.cantidad}>
        </td>
        <td id='subtotales'>${producto.precio * producto.cantidad}</td>
        <td>
          <a href="#" class="borrar-producto fas fa-times-circle" style="font-size:30px" data-id="${producto.id}"></a>
        </td>
      `;
      listaCompra.appendChild(row);
    });
  }
  //Eliminar producto por ID del LS
  eliminarProductoLocalStorage(productoID){
    let productosLS
    productosLS = this.obtenerProductosLocalStorage()
    console.log(productosLS)
    productosLS.forEach(function(productoLS, index) {
      if (productoLS.id === productoID) {
        productosLS.splice(index, 1)
      }
    })
    localStorage.setItem('productos', JSON.stringify(productosLS))
  }

  // Eliminar todos los datos del LS
  vaciarLocalStorage(){
    localStorage.clear()
  }

  // Procesar pedido
  procesarPedido(e) {
    e.preventDefault()
    if (this.obtenerProductosLocalStorage().length === 0) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'El carrito está vacío, agrega algún producto',
        showConfirmButton: false,
        timer: 2000
      })
    }
    else {
      location.href = "carrito.html"
    }
  }
  // Calcular montos
  calcularTotal(){
    let productosLS = this.obtenerProductosLocalStorage()
    let total = 0
    let iva = 0
    let subtotal = 0
    
    for (let i = 0; i < productosLS.length; i++) {
      let precio = parseInt(productosLS[i].precio)
      let element = (precio * productosLS[i].cantidad)
      total = total + element
    }
    iva = parseFloat(total * 0.21).toFixed(2);
    subtotal = parseFloat(total-iva).toFixed(2);
    document.getElementById('subtotal').innerHTML = "$ " + subtotal;
    document.getElementById('iva').innerHTML = "$ " + iva;
    document.getElementById('total').value = "$ " + total.toFixed(2);
  }
  obtenerEvento(e) {
    e.preventDefault()
    let id, cantidad, producto, productosLS
    if (e.target.classList.contains('cantidad')) {
      producto = e.target.parentElement.parentElement
      id = producto.querySelector('svg').getAttribute('data-id')
      cantidad = producto.querySelector('input').value
      let actualizarMontos = document.querySelectorAll('#subtotales')
      productosLS = this.obtenerProductosLocalStorage()
      productosLS.forEach(function (productoLS, index) {
        if (productoLS.id === id) {
          productoLS.cantidad = cantidad      
          actualizarMontos[index].innerHTML = Number(cantidad * productosLS[index].precio)
        }
      })
      localStorage.setItem('productos', JSON.stringify(productosLS))
    }
    else {
      console.log("click afuera")
    }
  }
}