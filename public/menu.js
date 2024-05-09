import productos from "../model/ModelProductos.js"
export const menues= {
    0:{
        message:
        "Seleccione una opción:\n1. Ver productos disponibles\n2. Agregar producto al carrito de compras"+
        "\n3. Quitar producto del carrito de compras\n4. Ver carrito\n5. Pagar pedido\n6. Contador de ventas\n7. Salir",
        
    },

    1:{
        messageAlert:'Los productos disponibles son: \n',
    },
   2:{
        message: `Seleccione que producto desea agregar al carrito\n1. ${productos.leche.nombre}\n2. ${productos.sal.nombre}\n3. ${productos.azucar.nombre}\n
        4. ${productos.arroz.nombre}\n5. ${productos.camiseta.nombre}`
    },
    3:{
        
    },4:{
      
    },5:{           //se descartó esta forma de guardar los menús, pero sigue siendo necesario para el funcionamiento
   
    },6:{
      
    },7:{}
}