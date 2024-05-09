import { carrito } from "./script.js";
export function verCarrito(){
    let total=0
   
    if(carrito.length==0){
        alert('Su carro esta vacio, añada un producto primero.')
        return total
    }else{

    let message = `Este es el estado actual de su carrito de compras:\n\n`
    let flag=1

    carrito.forEach(element => {
        message+=`${flag}. ${element.nombre} --- En carrito: ${element.enCanasta} unidades --- Subtotal: ${element.enCanasta*element.precio}\n`  //GENERA EL STRING DEL PROMPT
        total+=element.enCanasta*element.precio
        flag+=1
    });
    message+=`\nVALOR TOTAL DEL CARRITO: $${total}.`
    alert(message)
    return total
}
}