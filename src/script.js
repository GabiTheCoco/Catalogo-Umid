import { obtenerDatos } from "./obtenerDatos.js";

const html = document.querySelector("html");
const pantallaProductos = document.querySelector(".pantalla-productos");
const encabezado = document.querySelector(".encabezado");
const pantallaDemo = document.querySelector(".pantalla-demo");
const cuerpo = document.querySelector("body");


const divImgNBack = document.createElement("div");
divImgNBack.classList.add("img-back");
const backButton = document.createElement("i");
backButton.classList.add("fa-solid", "fa-arrow-left");
const img1 = document.createElement("img");
img1.classList.add("img1", "img-demo", "img-active");
const img2 = document.createElement("img");
img2.classList.add("img2", "img-demo");
const divImgGiga = document.createElement("div");
divImgGiga.classList.add("div-img-giga");
const imgGiga = document.createElement("img");
imgGiga.classList.add("img-giga");
const productoDetails = document.createElement("div");
productoDetails.classList.add("producto-details");
const nombreDemo = document.createElement("p");
nombreDemo.classList.add("nombre-demo");
const precioDemo = document.createElement("p");
precioDemo.classList.add("precio-demo");
const descripcionDemo = document.createElement("p");
descripcionDemo.classList.add("descripcion-demo");
const stockDemo = document.createElement("p");
stockDemo.classList.add("stock-demo");
const divStockPrecio = document.createElement("div");
divStockPrecio.classList.add("info-producto");

const piePagina = document.querySelector(".pie-pagina");
const content = document.querySelector(".content");
const pantallaPrincipal = document.querySelector(".pantalla-principal")
const btnProductos = document.querySelector(".btn-productos");
const backBtn = document.querySelector(".btn-atras");

const instagramIcon = document.querySelector(".fa-instagram");
const tiktokIcon = document.querySelector(".fa-tiktok");
const emailIcon = document.querySelector(".fa-envelope");


const control = true;


let cont = 0;
btnProductos.addEventListener("click", () => {
    
    cambiarPantallas(control);

    if(cont === 0){
        obtenerDatos();
        console.log(cont);
        cont++;
    }
    // verProducto();


})

backBtn.addEventListener("click", () => {
    cambiarPantallas(!control);
});

backButton.addEventListener("click", () => {
    cambiarPantallita(!control);
    img2.classList.remove("img-active");
    img1.classList.add("img-active");
})

instagramIcon.addEventListener("click", ()=> {
    window.open("https://www.instagram.com/umid_velas/", "_blank");
})

tiktokIcon.addEventListener("click", ()=> {
    window.open("https://www.tiktok.com/@umidvelas?_t=8e6UIqRHo0M&_r=1", "_blank");
})

emailIcon.addEventListener("click", ()=> {
    window.open("mailto:${`umidvelas@gmail.com`}", "_blank");
})


function cambiarPantallas(control){
    pantallaDemo.style.display = "none";

    if(control){
        encabezado.style.display = "block";
        pantallaPrincipal.style.display = "none";
        pantallaProductos.style.display = "grid";
        pantallaProductos.style.padding = "1em 0"
        cuerpo.style.height = "auto";
        piePagina.style.borderTop = "1px solid #ccc"
    }else{
        encabezado.style.display = "none";
        pantallaPrincipal.style.display = "flex";
        pantallaProductos.style.display = "none";
        cuerpo.style.height = "100%";
        piePagina.style.borderTop = "none";
    }
}

export function cambiarPantallita(control){
    if(control){
        pantallaProductos.style.display = "none";
        pantallaDemo.style.display = "flex";
        // cuerpo.style.overflow = "hidden";
        cuerpo.style.height = "100%";
        content.style.height = "75%";
    }else{
        pantallaProductos.style.display = "grid";
        pantallaDemo.style.display = "none";
        // cuerpo.style.overflow = "auto";
        cuerpo.style.height = "auto";
        content.style.height = "auto";
    }
}

export function agregarElementosDemo(){
    pantallaDemo.appendChild(divImgNBack);

    divImgNBack.appendChild(backButton);
    divImgNBack.appendChild(img1);
    divImgNBack.appendChild(img2);
    
    divImgGiga.appendChild(imgGiga)
    pantallaDemo.appendChild(divImgGiga);

    pantallaDemo.appendChild(productoDetails);

    productoDetails.appendChild(nombreDemo);
    productoDetails.appendChild(descripcionDemo);
    productoDetails.appendChild(divStockPrecio);

    divStockPrecio.appendChild(stockDemo);
    divStockPrecio.appendChild(precioDemo);
}

export function agregarContenidoDemo(imagen1, imagen2, nombre, descripcion, stock, precio){
    imgGiga.src = imagen1;
    img1.src = imagen1;
    img2.src = imagen2;
    nombreDemo.innerHTML = nombre;
    descripcionDemo.innerHTML = descripcion;
    stockDemo.innerHTML = stock;
    precioDemo.innerHTML = precio;
}


export function cambiarImgGiga (imagenesDemo){
    imagenesDemo.forEach((img) =>{ 
        img.addEventListener("click", (event) => {
            imgGiga.src = event.target.src;
            imagenesDemo.forEach((img) => {
                if (img === event.target) {
                  img.classList.add("img-active");
                } else {
                  img.classList.remove("img-active");
                }
            });
        });
    });
}
