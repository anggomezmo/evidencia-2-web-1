import { carrito } from "./script.js";
import { verCarrito } from "./verCarro.js";
import { numeroVentas } from "./script.js";
export function pagarPedido(){

    
     alert('Acontinuación verá el estado actual de su pedido.')
    let total = verCarrito()
    if(carrito.length==0){
        alert('Añada algun producto al carro para poder pagar.')
    }else{
        let opcion = Number(prompt(`Desea pagar un total de $${total}?. Elija una opción:\n1. PAGAR\n2. NO PAGAR`))
        switch (opcion) {
            case 1:

                carrito.forEach(element => {
                    element.cantidad-=element.enCanasta
                    element.vendidos+=element.enCanasta
                    element.enCanasta=0
                    

                    
                });
                carrito.splice(0,carrito.length)
                alert(`Gracias por su compra!!`)
                return true
                break;
            case 2:
                alert('Pago cancelado.')
                return false
                break;
            default:
                alert('Formato invalido, intente de nuevo.')
                return false
                break;
        }
    }
}