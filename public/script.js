import { menues } from "./menu.js";
import mostrarProductos from "./productosDisponibles.js";
import { anadirProductos } from "./agregarProducto.js";
import { quitarProducto } from "./quitarProducto.js";
import { verCarrito } from "./verCarro.js";
import { contadorVentas } from "./contadorVentas.js";
import { pagarPedido } from "./pagarPedido.js";

export let carrito = []
export let numeroVentas= 0
let repetition= true
while (repetition) {
    let opcion= Number(prompt(menues[0].message))
    if (menues[opcion] && opcion!=0){

        switch (opcion) {
            case 1:
                mostrarProductos()
                break;
            case 2:
                anadirProductos()
                break;
            case 3:
                quitarProducto()
                break;
            case 4:
                verCarrito()
                break;
            case 5:
                let status = pagarPedido()
                if(status){
                    numeroVentas+=1
                }
                break;
            case 6:
                contadorVentas(numeroVentas)
                break;
            case 7:
                alert('Programa finalizado')
                repetition=false
                break;
            default:
                alert('Formato u opción invalida intente de nuevo')

    }
}

}