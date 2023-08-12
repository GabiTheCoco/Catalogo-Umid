import { crearProducto } from "./crearProducto.js";
// import { actualizarBusqueda } from "./filtrado.js";

export function obtenerDatos(){
    const fileUrl = './resources/datosPrueba.xlsx.ods'; // Reemplaza 'ruta_del_archivo/archivo.ods' con la URL de tu archivo ODS
    
    fetch(fileUrl)
      .then(response => response.arrayBuffer())
      .then(data => {
        const workbook = XLSX.read(data, { type: 'array' });
    
        // Supongamos que solo queremos el primer hoja del archivo ODS
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
    
        // Convertir los datos de la hoja en objetos
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        
        // Aquí tienes los datos convertidos en objetos
        // console.log(jsonData);
        crearProducto(jsonData);
        // verificarBusqueda(jsonData);

      })
      .catch(error => {
        console.error('Error al obtener el archivo:', error);
      });
      
}

// function verificarBusqueda(datos){
//   const barraBusqueda = document.querySelector(".search-bar");

//   barraBusqueda.addEventListener('input', () => {
        
//     const textoBuscado = barraBusqueda.value.toLowerCase();
//     const productosFiltrados = filtrarPorNombre(datos, textoBuscado);

    
//   });

// }