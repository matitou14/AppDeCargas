

const titulo = document.querySelector("#titulo");
titulo.innerText = "Login";



class Transporte {
  constructor(numeroTte, nombre, nroPedido, chofer, capacidad, destino) {
    this.numeroTte = numeroTte;
    this.nombre = nombre;
    this.nroPedido = nroPedido;
    this.chofer = chofer;
    this.capacidad = capacidad;
    this.destino = destino;
    this.capacidadCarga = function (pallets) {
    this.capacidad = this.capacidad - pallets;
    };
  }
}

function muestraTransportes() {
  const transportes = [];
  transportes.push(
    new Transporte("1234", "Logistica Pepe", "987", "tito gomez", 26, "Cordoba")
  );
  transportes.push(
    new Transporte("12345", "Logi trans", "654", "Matias Gomez", 30, "Buenos Aires")); // una nueva copia de la funcion constructora
  transportes.push(
    new Transporte("123456", "TransVader", "321", "Tony Gomez", 28, "Concordia"));
  transportes.push 
  (new Transporte("1234567", "Transporte Messi", "123", "Lionel Gomez", 28, "Bariloche"));
  return transportes;
}

const loadingFork = () => {
  return `<img src="./img/gif/final-comp-unscreen.gif" width="50%">`;
    }



// LOGIN PARA IDENTIFICAR EL SECTOR DE CARGA

let exp = []
    fetch(`js/expediciones.json`)
  .then((response) => response.json())
  .then((data) => exp = data)
  .catch((error) => { sa("Error:", error) })

 


let ingreseExpedicion;


function llamarExpe() {
  ingreseExpedicion = document.getElementById("nombreExpe").value;
  let listadoDeExpe = exp;
  console.log(listadoDeExpe);
  let expedicionRetornada = listadoDeExpe.find((expedicion) => 
    expedicion.nombre.toUpperCase() === ingreseExpedicion.toUpperCase()
  ); 
  console.log(expedicionRetornada);
  (expedicionRetornada) ? toastExpe (`Bienvenido ${expedicionRetornada.nombre }`, "success") : sa("Ingrese expedicion correcta", "warning")   
}
  

const boton = document.querySelector("#btn__login");
boton.addEventListener("click", () => {
const inputExpe = document.getElementById("nombreExpe").value; 
const loginExpe = exp.find(expedicion => expedicion.nombre === inputExpe)
console.log(loginExpe)
 if (loginExpe === "" || loginExpe  === expediciones.nombre) {
   sa("Ingrese los datos correctamente", "error"); 
  document.querySelector(".index__section__login").style.display = "";
  
}else{
 let loading = document.querySelector("#loading");
  loading.innerHTML = loadingFork();
  setTimeout(() => {
    let loading = document.querySelector("#loading").style.display = "none";
    
   }, 4000);
   
    setTimeout(() => {
   
      document.querySelector(".index__form__tte").style.display =""; 
        },4000);
 
  document.querySelector(".index__section__login").style.display = "none";
  return llamarExpe ()
}});

const inputText = document.querySelector("#nombreExpe");
inputText.addEventListener("keydown", function teclado(tecla) {
 let codigo = tecla.keyCode;
  codigo === 13 ? llamarExpe() : "No existe expedicion";
})

// USO DE LIBRERIA SWEETALERT2 PARA MOSTRAR MENSAJES
const sa = (mensaje,icon ) => {
  swal.fire ({
    title:mensaje,
    icon:icon,
    timer : 1000,
  })

}

const toastExpe = (mensaje, icon) =>{
swal.fire({
 toast: true,
 showConfirmButton: false,
 icon: icon,
 text:mensaje,
 timer: 2000,
  
})
}
const toastExpecarga = (mensaje, icon, bgcolor) =>{
  swal.fire({
   toast: true,
   icon: icon,
   text:mensaje,
   showConfirmButton: false,
   timer: 1000, 
   position: "top-right",
  background: bgcolor,
   color: "white"})
  }

  toastTransp = (mensaje, icon) =>{
    swal.fire({
      icon: icon,
      text:mensaje,
      showConfirmButton: true, 
      allowEnterKey: true,})
     };

     toastTransp1 = (mensaje, icon) =>{
      swal.fire({
        text:mensaje,
        showConfirmButton: true, 
        allowEnterKey: true,})
       };

// BUSQUEDA DE TRANSPORTE POR NUMERO

document.querySelector(".index__form__tte").style.display = "none";
let ingreseTte;

function llamarTte() {
  ingreseTte = document.getElementById("transporteTte").value;
  let lista = muestraTransportes();
  let tteResultante = lista.find(
    (transportes) => transportes.numeroTte === ingreseTte
  );
  console.log(tteResultante);
(tteResultante) ? toastExpe (`Inciando carga en ${tteResultante.nombre}
                                             Destino: ${tteResultante.destino}
                                             Capacidad:${tteResultante.capacidad}`  , "success") : sa("No existe el transporte", "error");
 
  }                    
const inputTextTte = document.querySelector("#transporteTte");
const boton2 = document.querySelector("#btn__grabar__tte");
boton2.addEventListener("click",() => {
  const inputTte = document.getElementById("transporteTte").value;
  const loginTte = muestraTransportes().find(transportes => transportes.numeroTte === inputTte); 
 
  if (loginTte === "" ||  loginTte === Transporte.numeroTte) {
    sa("Ingrese los datos correctamente", "warning");
    document.querySelector(".index__form__tte").style.display = ""
  }else { 
    loading.innerHTML = loadingFork();
    setTimeout(() => {
     let loading = document.querySelector("#loading").style.display = "";
     }, 2000);
     
     
      setTimeout(() => {
     document.querySelector(".card__carga").style.display = ""
     document.querySelector("#loading").style.display = "none"}, 6000);
 
          document.querySelector(".index__form__tte").style.display = "none";
          
                               
          return llamarTte (); 
        }});
      
inputTextTte.addEventListener("keydown", function teclado(tecla) {
  const codigo1 = tecla.keyCode;
  codigo1 === 13 ? llamarTte() : "No existe transporte";
  
});

//CONSULTAS DE TRANSPORTES  (nombre, destino, capacidad)
let ttes = []

  fetch(`js/transportes.json`)
    .then((response) => response.json())
    .then((data) => ttes = data) 
    .catch((error) => console(error));
    
  
let consultaTransporte;
function consultaTtee(){

consultaTransporte = document.querySelector("#transporteTte").value;
  console.log(consultaTransporte);
  const listaTransportes = ttes.find(tte => tte.numeroTte === consultaTransporte);
 toastTransp                    (`Nombre: ${listaTransportes.nombre} 
                                  Destino: ${listaTransportes.destino} 
                                  Capacidad: ${listaTransportes.capacidad} pallets`, "info")}


const boton3 = document.querySelector("#consulta__tte");
boton3.addEventListener("click", consultaTtee);


//SECTION CARGA (en esta section se guardan los datos de la carga, inicio y fin de carga)

const sectionCarga = document.querySelector(".card__carga");
function mostrarCarga() {
sectionCarga.innerHTML = `<main id="main__carga" class="index__section__carga">

<card id="cardTtes" class="inner__tte">

</card>
<div class="btn__inicia__todo">
<button class="btn__sty" id="btn__preset">Transporte en sector de carga</button>

</div>
<div class="hidden">
<h1 class="carga__titulo">Datos de carga</h1>
<div class="btn__cargas">
<button class="btn__styles" id="btn__ini">Iniciar Carga </button>
<button class="btn__styles" id="btn__fin" >Finalizar Carga</button>
</div>

<div class="carga__pallets">
<label class="label__carga">Pallets cargados</label>
<input id="pallet__entero" class="input__carga" type="text"</input>


<label class="label__carga">Pallets picking</label>
<input id="pallet__picking" class= "input__carga"  type="text"></input>


<label class="label__carga">Pallets cortados</label>
<input id="pallets__cortados" class="input__carga" type="text" ></input>
</div>
<div class="btn__grabar__carga">
<button class="btn__styles__grabar" id="btn__grabar__all" class="btn__grabar" > Grabar</button>
</div>
</main>`;


}
mostrarCarga();
document.querySelector(".hidden").style.display = "none";

//BOTONES QUE EJECUTAN LOS EVENTOS DE LA SECTION CARGA (LLEGADA, INICIO y FIN DE CARGAS)

document.querySelector("#btn__preset").addEventListener("click",() =>{
  comienzo = new Date().toLocaleTimeString();
  document.querySelector(".hidden").style.display = "";
  document.querySelector(".btn__inicia__todo").style.display = "none";
  return comienzo;
});


const iniCarga = document.querySelector("#btn__ini");

iniCarga.addEventListener("click", () =>{
  horaIni = new Date().toLocaleTimeString();
  toastExpecarga (`Iniciando carga`, "success", "red");
  return horaIni;
});
  

const finiCarga = document.querySelector("#btn__fin");
finiCarga.addEventListener("click",() =>{
horaFin = new Date().toLocaleTimeString();
toastExpecarga(`Finalizando carga`, "success", "red");
return horaFin});


document.querySelector(".card__carga").style.display = "none";


const cuantosPallets = document.querySelector("#pallet__entero");
const palletPicking = document.querySelector("#pallet__picking");
const palletCortados = document.querySelector("#pallets__cortados");
const nombreExpedicion = document.querySelector("#nombreExpe");
const nombreTransporte = document.querySelector("#transporteTte"); 
const btnGrabaTodo = document.querySelector("#btn__grabar__all")


const tteEnSectore = document.querySelector("#btn__preset");


btnGrabaTodo.addEventListener("click", () => {
  Swal.fire({
    title: '¿Desea guardar la carga?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    denyButtonText: `No guardar`,
  }).then((result) => {

    if (result.isConfirmed) {
      Swal.fire('Guardado!', '', 'success')
      document.querySelector(".card__carga").style.display = "none"
      document.querySelector(".index__form__tte").style.display = "none";
      return guardarPallets(), refrescaPage(); 
    } else if (result.isDenied) {
      Swal.fire('Los cambios no se guardaron', '', 'info')
      document.querySelector(".card__carga").style.display = "none"
      document.querySelector(".index__form__tte").style.display = "";
    }
       
  });
});

function refrescaPage() {
  window.location.reload();
}


const infoCargas = [];
function guardarPallets (){
const cantidadesCargas = {
  palletsenteros: cuantosPallets.value,
  palletspicking: palletPicking.value,
  palletscortados: palletCortados.value,
}
 
const cargaDatos ={ 
  Expedicion: nombreExpedicion.value,
  Transporte: nombreTransporte.value,
  Pallets: cantidadesCargas,
  llegadaSector: comienzo,
  Inicio:horaIni,
  Fin: horaFin,
}

infoCargas.push(cargaDatos)
localStorage.setItem(`resumenCarga`, JSON.stringify(infoCargas))//guarda en el local storage

}

function recuperarDatos (){
  const datos = JSON.parse(localStorage.getItem(`resumenCarga`))//recupera los datos del local storage
  console.log(datos)
}	
recuperarDatos();



