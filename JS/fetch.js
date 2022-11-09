let listRegistro = ""
let listInd = ""
let listRutra = ""
let listCuenta = ""
let contenidoJSON = []
let verMas = ""
let detalleJSON = []




const contenidoRegistroDOM = document.querySelector("#registro")
const contenidoIndDOM = document.querySelector("#indumentaria")

const contenidoCuentaDOM = document.querySelector("#cuenta")

const URL=`https://script.google.com/macros/s/AKfycbz8WloK3snvapDeJyc55n4fHiTKgN55gFc52G9Y0GAPn5BNmqmZwF-NM_8TmaAqLfUU/exec`




document.addEventListener("DOMContentLoaded", ()=> {

 const obtengoContenido = (URL)=> {
  fetch(URL)
  .then(response => response.json() )
  .then(data=> { 
     
        filtrado = data.filter( p => p.categoria === "Etapa de registro" )
        console.log(filtrado)
        filtrado.forEach(contenido => {
            listRegistro += retornoCardContenido(contenido)
        })
        contenidoRegistroDOM.innerHTML = listRegistro

        filtrado = data.filter( p => p.categoria === "Material Publicitario" )
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
     obtengoContenido(URL)


 
  //  seleccionDePais()
   
          })



const retornoCardContenido = (contenido)=> {
   
            const {categoria,pregunta, id, respuesta} = contenido
               let HTMLCard = ""
                     HTMLCard += `<p>
                     <a class="btn text-start btn-pregunta" data-bs-toggle="collapse" href="#question-${id}"
                         role="button" aria-expanded="false" aria-controls="question-${id}">
                        ${pregunta}
                     </a>
                 </p>
                 <div class="collapse" id="question-${id}" style="margin-bottom: 15px;">
                     <div class="card card-body">
                    <p> ${respuesta}</p>

                     </div>
                 </div>`
               return HTMLCard
         }


        