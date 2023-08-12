import { agregarContenidoDemo, cambiarPantallita, cambiarImgGiga } from "./script.js";
import { agregarElementosDemo } from "./script.js";



const control = true;

export class ProductoHtml{
    constructor(Producto, productsScreen){
        this.product = document.createElement("div");
        this.product.classList.add("product");
        this.imageDiv = document.createElement("div");
        this.imageDiv.classList.add("imageDiv");
        this.image1 = document.createElement("img");
        this.image1.classList.add("imgProduct");
        this.image2 = document.createElement("img");
        this.image2.classList.add("img2");
        this.name = document.createElement("p");
        this.name.classList.add("name");
        this.price = document.createElement("p");
        this.price.classList.add("price");


        this.description = document.createElement("p");
        this.description.classList.add("descripcion-producto");
        this.description.innerHTML = Producto.descripcion;
        this.stockaso = document.createElement("p");
        this.stockaso.classList.add("stock");
        this.stockaso.innerHTML = Producto.stock;



        productsScreen.appendChild(this.product);
        this.product.appendChild(this.imageDiv);
        this.imageDiv.appendChild(this.image1);
        this.product.appendChild(this.name);
        this.product.appendChild(this.price);

        this.image1.src = Producto.imagen1;
        this.image2.src = Producto.imagen2;
        this.name.innerHTML = Producto.nombre;
        this.price.innerHTML = "$" + Producto.precio;

        this.mostrarProducto();
    };
    
    mostrarProducto(){
        
        this.product.addEventListener("click", ()=>{
            
            cambiarPantallita(control);
            agregarElementosDemo();
            agregarContenidoDemo(this.image1.src, this.image2.src, this.name.innerHTML, this.description.innerHTML, this.stockaso.innerHTML, this.price.innerHTML);
            
            const imagenesDemo = document.querySelectorAll(".img-demo");
            cambiarImgGiga(imagenesDemo);
        });
    }
}






