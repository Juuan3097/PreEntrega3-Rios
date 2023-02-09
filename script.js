const shopContent = document.getElementById("shopContent");


class Producto {
    constructor(nombre, precio, img, cantidad, id) {

        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.img = img;
        this.cantidad = parseInt(cantidad);
        this.id = parseInt(id);

    }


}

let productos = [];

productos.push(new Producto("Microondas", "2000", "img/microwave.jpg", "1", "1"));
productos.push(new Producto("Horno", "3600", "img/oven.jpg", "1", "2"));
productos.push(new Producto("Sofa", "1000", "img/sofa.jpg", "1", "3"));
productos.push(new Producto("Mesa", "1800", "img/table.jpg", "1", "4"));
productos.push(new Producto("Tostadora", "1200", "img/toaster.jpg", "1","5"));
productos.push(new Producto("Cacerola", "800", "img/pot.jpg", "1","6"));


let carritoProductos = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}" alt="..." class="card-img-top" height="150" width="150">
    <h3>${product.nombre}</h3>
    <p>$${product.precio}</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "comprar";


    content.append(comprar);

    comprar.addEventListener("click", () => {
        carritoProductos.push({
            img: product.img,
            nombre: product.nombre,
            cantidad: product.cantidad,
            precio: product.precio,
            id: product.id
        });

            let tabla = document.getElementById("tbody");
            let fila = document.createElement("tr");
    
            fila.innerHTML = `<td><img width=50 src="${product.img}"></td>
            <td>${product.nombre}</td>
            <td>${product.cantidad}</td>
            <td>${product.precio}</td>
            <td><button class="btn btn-danger borrar_elemento">Borrar</button></td>`;
    
            tabla.append(fila);
   
        console.log(carritoProductos);

        
       
    });
});

function borrar_producto(id) {
    
    let findId = carritoProductos.find((product) =>product.id === id);
    console.log(findId);

    borrarItem = carritoProductos.filter((carritoId) =>{
        return carritoId !== findId;
    });

}

let btn_borrar = document.querySelectorAll(".borrar_elemento");

    
for( let boton of borrar_producto){

    boton.addEventListener("click" , borrar_producto);
}







// function borrar_producto(id){

//     let findId = carritoProductos.find((product) =>product.id === id);
//     console.log(findId);

//     borrarItem = carritoProductos.filter((carritoId) =>{
//         return carritoId !== findId;
//     });

// }

console.log(carritoProductos);