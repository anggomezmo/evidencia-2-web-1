import { carrito } from "./script.js";
import productos from "../model/ModelProductos.js";

export function anadirProductos() {

    let opcion = Number(prompt(`Ingrese cual de los siguientes productos desea agregar:\n\n1. ${productos.leche.nombre} ---- PRECIO : $${productos.leche.precio}\n` +
        `2. ${productos.sal.nombre} ---- PRECIO : $${productos.sal.precio}\n3. ${productos.azucar.nombre} ---- PRECIO : $${productos.azucar.precio}\n` +
        `4. ${productos.arroz.nombre} ---- PRECIO : $${productos.arroz.precio}\n` +
        `5. ${productos.camiseta.nombre} ---- PRECIO : $${productos.camiseta.precio}`))



    let anadidos = Number(prompt('Ingrese la cantidad de unidades que desea agregar al carro de compras'))

    switch (opcion) {
        case 1:
            productos.leche.enCanasta += anadidos
            if(!carrito.includes(productos.leche)){

                carrito.push(productos.leche)
            }
            alert('Añadido(s) con éxito, volviendo al menú principal')
            break;
        case 2:
            productos.sal.enCanasta = +anadidos
            if(!carrito.includes(productos.sal)){

                carrito.push(productos.sal)
            }
            alert('Añadido(s) con éxito, volviendo al menú principal')
            break;
        case 3:
            productos.azucar.enCanasta = +anadidos
            if(!carrito.includes(productos.azucar)){

                carrito.push(productos.azucar)
            }
            alert('Añadido(s) con éxito, volviendo al menú principal')
            break;
        case 4:
            productos.arroz.enCanasta += anadidos
            if(!carrito.includes(productos.arroz)){

                carrito.push(productos.arroz)
            }
            alert('Añadido(s) con éxito, volviendo al menú principal')
            break;
        case 5:
            productos.camiseta.enCanasta += anadidos
            if(!carrito.includes(productos.camiseta)){

                carrito.push(productos.camiseta)
            }
            alert('Añadido(s) con éxito, volviendo al menú principal')
            break;
        default:
            alert('Formato invalido, volviendo al menú principal')
            break;
    }



}

