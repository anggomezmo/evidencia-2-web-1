import productos from "../model/ModelProductos.js";
export let mostrarProductos = () => {
alert('Por favor revisa la consola')

console.log(`Los productos disponibles son:\n1. ${productos.leche.nombre}.\nDescripción: ${productos.leche.descripcion}.\nPrecio: ${productos.leche.precio}\nCantidades disponibles: ${productos.leche.cantidad}
\n2.${productos.sal.nombre}.\nDescripción: ${productos.sal.descripcion}.\nPrecio: ${productos.sal.precio}\nCantidades disponibles: ${productos.sal.cantidad}\n
3.${productos.azucar.nombre}.\nDescripción: ${productos.azucar.descripcion}.\nPrecio: ${productos.azucar.precio}\nCantidades disponibles: ${productos.azucar.cantidad}\n
4.${productos.arroz.nombre}.\nDescripción: ${productos.arroz.descripcion}.\nPrecio: ${productos.arroz.precio}\nCantidades disponibles: ${productos.arroz.cantidad}\n
5.${productos.camiseta.nombre}.\nDescripción: ${productos.camiseta.descripcion}.\nPrecio: ${productos.camiseta.precio}\nCantidades disponibles: ${productos.camiseta.cantidad}`)
}
export default mostrarProductos