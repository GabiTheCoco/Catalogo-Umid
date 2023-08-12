import { ProductoHtml } from "./productoHTML.js";


export class Producto{
    constructor(data){
        this.nombre = data[0];
		this.imagen1 = data[1];
		this.imagen2 = data[2]
		this.descripcion = data[3];
		this.precio = data[4];
		this.stock = data[5];
		this.marca = data[6];
		this.tipo = data[7];
    }
}

export function crearProducto(datos) {
	const cuerpoProductos = document.querySelector(".pantalla-productos");
	
	datos.forEach(i => {
		let producto = new Producto(i);
		let productoHtml = new ProductoHtml(producto, cuerpoProductos);
	});
}