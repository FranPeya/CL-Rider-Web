let cardsAmostrar = "";
let contenidoJSON = [];
let verMas = "";
let detalleJSON = [];

const contenidoDOM = document.querySelector("#contenido");
const cargandoDOM = document.querySelector("#cargando");
const detalleDOM = document.querySelector("#exampleModal");
let btnSubmit = document.querySelector("#submit");
let country = document.querySelector("#paisSelection");
let formulario = document.querySelector("#formulario");


const URL =`https://script.google.com/macros/s/AKfycbw-vsF9S5KYKwnnb4go-uqrNJHOYCtpnTLkiE5Uiwl5qX_c43ujqGd8DCdBgrxAJNFH/exec`;


document.addEventListener("DOMContentLoaded", () => {



  
    const obtengoContenido = (URL) => {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {

        

          contenidoJSON = data;
          contenidoJSON.forEach((contenido) => {
            cardsAmostrar += retornoCardContenido(contenido);
          });
          contenidoDOM.innerHTML = cardsAmostrar;
        });
    };
    obtengoContenido(URL);
  
});

const retornoCardContenido = (contenido) => {
  const { tarjetaicon, titulo, id, resumen, redireccion } = contenido;
  let HTMLCard = "";
  HTMLCard += `<div class="col-xl-4 col-lg-4 col-md-6 col-sm-10 gy-4">
        <div class="card">
          <a id="${id}" href="${redireccion}">
            <!---<img src="${tarjetaicon}" class="card-img-top" alt="...">---->
            <div class="card-body">
              <h2 class="card-title">${titulo}</h2>
              <p class="card-text">${resumen}</p>
            
            </div>
          </a>
        </div>
      </div>`;
  return HTMLCard;
};
