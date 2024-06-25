import { faqAplicantes } from './base.js';

let listRegistro = ""
let listInd = ""

let listCuenta = ""
let contenidoJSON = []
let verMas = ""
let detalleJSON = []
let filtrado = ""

const contenidoRegistroDOM = document.querySelector("#registro")
const contenidoIndDOM = document.querySelector("#indumentaria")
const contenidoCuentaDOM = document.querySelector("#cuenta")


document.addEventListener("DOMContentLoaded", ()=> {

 const obtengoContenido = (faqAplicantes)=> {
  fetch(faqAplicantes)
  .then(response => response.json() )
  .then(data=> { 
     
        filtrado = data.filter( p => p.categoria === "Etapa de registro" )
        console.log(filtrado)
        filtrado.forEach(contenido => {
            listRegistro += retornoCardContenido(contenido)
        })
        contenidoRegistroDOM.innerHTML = listRegistro

        filtrado = data.filter( p => p.categoria === "Equipamiento" )
        console.log(filtrado)
        filtrado.forEach(contenido => {
            listInd += retornoCardContenido(contenido)
        })
        contenidoIndDOM.innerHTML = listInd


        filtrado = data.filter( p => p.categoria === "Ya tengo mi cuenta" )
        console.log(filtrado)
        filtrado.forEach(contenido => {
            listCuenta += retornoCardContenido(contenido)
        })
        contenidoCuentaDOM.innerHTML = listCuenta


      

     })}
     obtengoContenido(faqAplicantes)


 
  //  seleccionDePais()
   
          })



const retornoCardContenido = (contenido)=> {
   
            const {categoria,pregunta, id, respuesta} = contenido
               let HTMLCard = ""
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
                   </div>`
               return HTMLCard
         }


        