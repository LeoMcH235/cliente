const url_base = "http://127.0.0.1:8000";
const consumirAPI = () => {//Funciones de tipo flecha.  
  const urlTareas = "/tareas";//Este lleva el url de tareas, especificas que es lo que quieres.
  fetch(url_base + urlTareas)//Es oara consumir apis o 
    .then((respuesta) => {//Primero se procesa la respuesta || Aqui obtengo los datos
      // procesar la respuesta.
      // 1==true...
      //1===true
      if (respuesta.status === 200) {//Aqui es donde tambien aplican estos errores. Not Found 404-.
        return respuesta.json();
      } else {
        return undefined;
      }
    })
    .then((data) => {
      //obtiene los datos en base a la respuesta
      if (data === undefined) {
        console.log("el servidor no envia datos.");
      } else {
        mostrar(data.results);//TODO : data.cosa ejemplo
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
window.addEventListener("DOMContentLoaded", consumirAPI);

const mostrar = (tareas) => {//Aca recibo todas las tareas y puedo definir cualquier cosa en vez de tareas.
  let listarTareas = document.getElementById("listar-tareas");
  let fragment = document.createDocumentFragment();//El Fragment es para ir cargando la interfaz en pequeños fragmentos
  listarTareas.innerHTML = "";
  //Arreglo de tareas
  tareas.forEach((tarea, index) => {//El index es para identificar el espacio en el que se encuentra
    let contenedor = document.createElement("div");
    //Combinar html con codigo js.
    let template = `
    <div class="alert alert-primary" role="alert">
      <b>${tarea.id}</b>.- ${tarea.name}
    </div>
    `;
    contenedor.innerHTML = template;
    fragment.appendChild(contenedor);//TODO:                                             <Como funciona el CHILD>
  });
  listarTareas.appendChild(fragment);
};