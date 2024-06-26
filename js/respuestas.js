import { resAutogestion } from './base.js';

let cardsAmostrar = "";
let contenidoJSON = [];
let verMas = "";
let detalleJSON = [];
let filtrado=""


const contenidoDOM = document.querySelector(".contenido");
const cargandoDOM = document.querySelector("#cargando");
const detalleDOM = document.querySelector("#exampleModal");
const pageName = document.querySelector("#nombrePagina");

document.addEventListener("DOMContentLoaded", () => {
  const obtengoContenido = (resAutogestion) => {
    fetch(resAutogestion)
      .then((response) => response.json())
      .then((data) => {
        if (true) {
          filtrado = data.filter(
       
            (p) => p.categoria === pageName.textContent.toLocaleLowerCase()
          );
          console.log(filtrado);
          filtrado.forEach((contenido) => {
            cardsAmostrar += retornoCardContenido(contenido);
          });
          contenidoDOM.innerHTML = cardsAmostrar;
        } 
        
      });
  };
  obtengoContenido(resAutogestion);
});

const retornoCardContenido = (contenido) => {
  const { pregunta, id, respuesta } = contenido;
  let HTMLCard = "";
  HTMLCard += `<div class="accordion-item">
      <h2 class="accordion-header" id="flush-heading${id}">
        <button id=${id} class="accordion-button collapsed d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${id}" aria-expanded="false" aria-controls="flush-collapse${id}">
         <p class="m-0 py-2"> ${pregunta}</p>
        </button>
      </h2>
      <div id="flush-collapse${id}" class="accordion-collapse collapse" aria-labelledby="flush-heading${id}" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body"> <p>${respuesta}</p>
          
          </div>
      </div>
    </div>`;
  return HTMLCard;
};
