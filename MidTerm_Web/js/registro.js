

document.addEventListener("DOMContentLoaded", () => {
  console.log("Script cargado correctamente"); //Mensaje para comprobar que el script ha sido cargado
  const objFormulario = document.getElementById("formularioRegistro"); //cargamos el formulario en la variable 
  const objMensaje = document.getElementById("mensaje"); //Cargamos el elemento con id=mensaje en la variable

  objFormulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // evita que el formulario se envíe y recargue
   


    // Modificamos los atributos del id contenido en la variable objMensaje. Mostrando el mensaje
    objMensaje.textContent = "Registro realizado con éxito"; 
    objMensaje.style.backgroundColor = "#2bc72dff";
    objMensaje.style.color = "white";
    objMensaje.style.padding = "5px";
    objMensaje.style.marginTop = "5px";
    objMensaje.style.borderRadius = "4px";
    objFormulario.style.fontSize = "12px";
    console.log("Mensaje mostrado");

    // Modificamos los atributos del id contenido en la variable objMensaje. Ocultandolo pasados 3s (3000ms)
    setTimeout(() => {
      objMensaje.textContent = "";
      objMensaje.style.backgroundColor = "";
      objMensaje.style.color = "";
      objMensaje.style.padding = "";
      objMensaje.style.marginTop = "";
      objMensaje.style.borderRadius = "";
    }, 3000);

  });
});