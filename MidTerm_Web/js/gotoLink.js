
console.log("Script goto cargado correctamente"); //Mensaje para comoprobar que el script se ha cargado correctamente.

//con querySelector -> Cargamos el primer elemento de la clase encontrado en el documento.
const gotoIn1 = document.querySelector(".gotoLinkedin"); //Cargamos en la variable constante el elemento con clase gotoLinkedin
const gotoIn2 = document.querySelector(".gotoFacebook"); //Cargamos en la variable constante el elemento con clase gotoFacebook
const gotoIn3 = document.querySelector(".gotoInstagram"); //Cargamos en la variable constante el elemento con clase gotoInstagram

gotoIn1.addEventListener("click", () => {
    window.open("https://es.linkedin.com/in/fernando-arroyo-almodovar-8641b453");
    console.log("Link al perfil del desarrollador en LinkedIn abierto: "+ "https://es.linkedin.com/in/fernando-arroyo-almodovar-8641b453"); //Mostrar mensaje en consola
    alert("Link al perfil del desarrollador en LinkedIn abierto: "+ "https://es.linkedin.com/in/fernando-arroyo-almodovar-8641b453"); //Mostrar mensaje en consola

});


gotoIn2.addEventListener("click", () => {
    window.open("https://www.facebook.com/fernando.arroyoalmodovar/", "_blank");
    console.log("Link al perfil del desarrollador en Facebook abierto: "+ "https://www.facebook.com/fernando.arroyoalmodovar/"); //Mostrar mensaje en consola
});

gotoIn3.addEventListener("click", () => {
    window.open("https://www.instagram.com/xferonex/", "_blank");
    console.log("Link al perfil del desarrollador en Instagram abierto: " + "https://www.instagram.com/xferonex/"); //Mostrar mensaje en consola
});

