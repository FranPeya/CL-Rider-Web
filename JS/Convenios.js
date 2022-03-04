const fila = document.querySelector(".contenedor-carousel");
const peliculas = document.querySelectorAll(".pelicula");

const flechaIzquierda  = document.getElementById("flecha-izquierda");
const flechaDerecha  = document.getElementById("flecha-derecha");

// -----------Event listener ------------//
 flechaDerecha.addEventListener("click", () => {
     fila.scrollLeft += fila.offsetWidth;

     const indicadorActivo = document.querySelector(".Indicadores .activo");
     if(indicadorActivo.nextSibling){
         indicadorActivo.nextSibling.classList.add("activo");
         indicadorActivo.classList.remove("activo"); 
     }



 });
// -----------Event listener ------------//
 flechaIzquierda.addEventListener("click", () => {
     fila.scrollLeft -= fila.offsetWidth;

     const indicadorActivo = document.querySelector(".Indicadores .activo");
     if(indicadorActivo.previousSibling){
         indicadorActivo.previousSibling .classList.add("activo");
         indicadorActivo.classList.remove("activo"); 
     }

 });


   // -----------HOVER ------------//
peliculas.forEach((pelicula) => {
        pelicula.addEventListener("mouseenter", (e) => {
             const elemento = e.currentTarget;
             setTimeout(() => {
                 peliculas.forEach(pelicula => pelicula.classList.remove("hover"));
                 elemento.classList.add("hover");

             }, 300);
        });
});

fila.addEventListener ("mouseleave",() => {
    peliculas.forEach(pelicula => pelicula.classList.remove("hover"));

});