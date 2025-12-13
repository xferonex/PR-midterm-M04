
console.log("Script fondo cargado correctamente"); //Mensaje para comoprobar que el script se ha cargado correctamente.

let var1 = 0; //Variable contador.
const in1 = document.getElementById("whiteButton"); //Asignamos el elemento por id a la variable costante in1
const out = document.querySelectorAll(".border-line-2"); //Asignamos todos los elementos con la clase a la variable constante our


//Cualdo realizamos click en el boton asignado a in1
in1.addEventListener("click", () =>{
  //Condicion variable= 0
  if (var1==0) {
    out.forEach(a => a.style.backgroundColor = "burlywood"); //Cambiamos el color mediante forEch para recorrer todas las clases de ese tipo
    console.log("Color cambiado a burlywood"); //Mensaje para mostrar el color cambiado.
  } 

  //Condicion variable= 1
  if (var1==1) {
    out.forEach(a => a.style.backgroundColor = "pink");//Cambiamos el color.
    console.log("Color cambiado a pink");  //Mensaje para mostrar el color cambiado.
  }

  //Condicion variable= 2
  if (var1==2) {
    out.forEach(a => a.style.backgroundColor = "blanchedalmond");//Cambiamos el color.
    console.log("Color cambiado a blanchedalmond");  //Mensaje para mostrar el color cambiado.
  }

  //Condicion variable= 3
  if (var1==3) {
    out.forEach(a => a.style.backgroundColor = "bisque");//Cambiamos el color.
    console.log("Color cambiado a bisque");  //Mensaje para mostrar el color cambiado.
  }

  //Condicion variable= 4
  if (var1==4) {
    out.forEach(a => a.style.backgroundColor = "mediumturquoise");//Cambiamos el color.
    console.log("Color cambiado a mediumturquoise"); //Mensaje para mostrar el color cambiado. 
  }
//Condicion variable= 5
  if (var1==5) {
    out.forEach(a => a.style.backgroundColor = "whitesmoke");//Cambiamos el color.
    console.log("Color cambiado al color incial");  //Mensaje para mostrar el color cambiado.
  }

  var1 = (var1 + 1) % 6; //Inclrementamos en 1 a cada click, limitamos con modulo 6.
  console.log("Valor de variable = " + var1); //Mostramos el valor de la variable utilizada como contador.
});


