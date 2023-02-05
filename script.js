
function agregarCarrito(e){

    let nombre_producto = this.nombre ;
    let precio_producto = this.precio ;
    let img_producto = this.img ;


    let producto = {
        nombre: nombre_producto,
        precio: precio_producto,
        img: img_producto,
        cantidad:1
    };

    mostrar_carrito( producto );
}

// let boton = document.getElementById("botonCarrito")
// boton.addEventListener("click", respuestaClick)
// function agregarCarrito() {

// }

class Producto {
    constructor(nombre, precio, img, cantidad) {

        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.img = img;
        this.cantidad = parseInt(cantidad);

    }


}

let carrito = [];

carrito.push(new Producto("Microondas", "2000", "img/microwave.jpg", "1"));
carrito.push(new Producto("Horno", "3600", "img/oven.jpg", "1"));
carrito.push(new Producto("Sofa", "1000", "img/sofa.jpg", "1"));
carrito.push(new Producto("Mesa", "1800", "img/table.jpg", "1"));
carrito.push(new Producto("Tostadora", "1200", "img/toaster.jpg", "1"));
carrito.push(new Producto("Cacerola", "800", "img/pot.jpg", "1"));

console.log(carrito);

function mostrar_carrito(producto) {

    let fila = document.createElement("tr");

    fila.innerHTML = `<td><img src="${producto.img}"></td>
                      <td>${producto.nombre}</td>
                      <td>${producto.cantidad}</td>
                      <td>${producto.precio}</td>
                      <td><button class="btn btn-danger borrar_elemento">Borrar</button></td>`;

    let tabla = document.getElementById("tbody");
    tabla.append(fila);

    // let btn_borrar = document.querySelectorAll(".borrar_elemento");


    // for( let boton of btn_borrar){

    //     boton.addEventListener("click" , borrar_producto);
    // }



}


let btn_compra = document.querySelectorAll(".botonCarrito");

for (let boton of btn_compra) {

    boton.addEventListener("click", mostrar_carrito);

}




let btn_carrito = document.getElementById("mostrar_carrito");


// btn_carrito.addEventListener("click" , function(){


//     let carrito = document.getElementById("carrito");

//     if( carrito.style.display != "none"){

//         carrito.style.display = "none";
//     }
//     else{
//         carrito.style.display = "block";
//     }

// })
