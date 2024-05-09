import productos from "../model/ModelProductos.js";

export function contadorVentas(numeroVentas) {
  let message = `Ventas realizadas: ${numeroVentas}\n`;

  for (const key in productos) {
    if (productos.hasOwnProperty(key)) {
      const producto = productos[key];
      message += `-------------------------------------------------
        ID PRODUCTO : ${producto.id}.
        NOMBRE: ${producto.nombre}.
        UNIDADES VENDIDAS: ${producto.vendidos} Unidades.\n`;
    }
  }

  alert(message);
}
