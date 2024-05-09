import { carrito } from "./script.js";



export  function quitarProducto(){
    
    
    if (carrito.length==0) {
        alert('Su carrito de compras está vacio, por favor añada un producto primero')
    }else{
        let flag=1
        let message=`Ingrese cual de los siguientes productos desea quitar del carrito:\n\n`

        carrito.forEach(element => {
            message+=`${flag}. ${element.nombre} --- En carrito: ${element.enCanasta} unidades\n`  //GENERA EL STRING DEL PROMPT
        flag+=1
        });
        
    let opcion = Number(prompt(message))-1
    if(0<opcion+1 && opcion+1<=carrito.length){
      
        
        if( carrito[opcion].enCanasta==1){ //SI HAY SOLO 1 UNIDAD AGREGADA ELIMINA DIRECTAMENTE DE LA LISTA
            carrito[opcion].enCanasta=0
            carrito.splice(opcion,1) //REMOVEMOS EL ELEMENTO DE LA CANASTA
            alert('Producto(s) eliminados correctamente')
            
        }else{
            let eliminados = Number(prompt(`Cuantas unidades de '${carrito[opcion].nombre}' desea quitar?`))
            carrito[opcion].enCanasta-=eliminados
            if (carrito[opcion].enCanasta<0){
                carrito[opcion].enCanasta=0
            }
            if(carrito[opcion].enCanasta==0){ //SI QUEDARON 0 UNIDADES ELIMINA DE LA LISTA
                carrito.splice(opcion,1)
            }
            
            alert('Producto(s) eliminados correctamente')
        }
    }else{
        alert('Formato invalido, volviendo al menú principal')
    }
        
    

}
}