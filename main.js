/* 1- Creamos una lista de productos ofrecidos por la tienda
2- Damos la bienvenida al mercado online!
3- Agregamos una funcón que nos permita agregar un producto de la tienda al carrito con una cantidad específica
4- Mostramos los items del carrito y la suma total final de los productos agregados
5- Mostramos la lista de productos para elegir
 */

//1
const productos = [
  new Producto('ProPlan Gatos Adultos - 7.5kg', 22000),
  new Producto('ProPlan Gatos Sterilized - 7.5kg', 27000),
  new Producto('Royal Canin Gatos Cachorros - 15kg', 55000),
  new Producto('Arena aglomerante - 4kg', 2500),
  new Producto('Pouch Royal Canin sabor salmón', 550)
];

// 2
alert('Bienvenido a la primera tienda online de productos para su gato');

// 3
function agregarAlCarrito(producto, cantidad) {
  producto.cantidad += cantidad;
}

// 4
function mostrarCarrito() {
  let total = 0;

  if (productos.every(producto => producto.cantidad === 0)) {
    alert('El carrito está vacío.');
    return;
  }

  let mensaje = 'Productos en el carrito:\n';

  for (let producto of productos) {
    if (producto.cantidad > 0) {
      mensaje += `${producto.nombre} - Cantidad: ${producto.cantidad} - Subtotal: $${producto.precio * producto.cantidad}\n`;
      total += producto.precio * producto.cantidad;
    }
  }

  mensaje += `\nTotal: $${total}`;

  alert(mensaje);
}

// 5
let opciones = '';

for (let i in productos) {
  opciones += `${+(i) + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`;
}

while (true) {
  const eleccion = prompt(`Elige un número del 1 al ${productos.length} para agregar un producto al carrito o elige 0 (cero) para finalizar:\n${opciones}`);

  if (eleccion === '0') {
    break;
  }

  if (eleccion && eleccion >= 1 && eleccion <= productos.length) {
    const cantidad = +(prompt(`¿Cuántas unidades de "${productos[eleccion - 1].nombre}" deseas agregar al carrito?`));

    if (!isNaN(cantidad) && cantidad >= 1) {
      agregarAlCarrito(productos[eleccion - 1], cantidad);
      alert(`Se han agregado ${cantidad} unidades de "${productos[eleccion - 1].nombre}" al carrito.`);
    } else {
      alert("Cantidad no válida. Por favor intente nuevamente.");
    }
  } else {
    alert("Opción no válida. Por favor intente nuevamente.");
  }
}

mostrarCarrito();
