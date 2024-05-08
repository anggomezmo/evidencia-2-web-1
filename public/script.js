import { menues } from "./menu.js";
import mostrarProductos from "./productosDisponibles.js";
import { anadirProductos } from "./agregarProducto.js";

export let carrito = []
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
            default:
                break;
        }

    }
    repetition=true
}