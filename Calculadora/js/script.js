const campo1 = document.querySelector("#campo1");

const campo2 = document.querySelector("#campo2");

let numero1,
  numero2;

campo1.addEventListener("input", (e) => (numero1 = e.target.value));

campo2.addEventListener("input", (e) => (numero2 = e.target.value));

const botonSumar = document.querySelector("#sumar");
const botonRestar = document.querySelector("#restar");
const botonMultiplicar = document.querySelector("#multiplicar");
const botonDividir = document.querySelector("#dividir");

const respuesta = document.createElement("H1");
document.body.appendChild(respuesta);

botonSumar.addEventListener("click", () => {
  if (numero1 == "" || numero2 == "") {
    respuesta.textContent = "Alguno de los campos esta vacio";
    return;
  }

  let resultado = parseInt(numero1) + parseInt(numero2);

  respuesta.textContent = resultado;

  reestablecerValores();
});
//resta

botonRestar.addEventListener("click", () => {
  if (numero1 == "" || numero2 == "") {
    respuesta.textContent = "Alguno de los campos esta vacio";
    return;
  }

  let resultado = parseInt(numero1) - parseInt(numero2);

  respuesta.textContent = resultado;

  reestablecerValores();
});

//multiplicacion

botonMultiplicar.addEventListener("click", () => {
  if (numero1 == "" || numero2 == "") {
    respuesta.textContent = "Alguno de los campos esta vacio";
    return;
  }

  let resultado = parseInt(numero1) * parseInt(numero2);

  respuesta.textContent = resultado;

  reestablecerValores();
});

//division

botonDividir.addEventListener("click", () => {
  if (numero1 == "" || numero2 == "") {
    respuesta.textContent = "Alguno de los campos esta vacio";
    return;
  }

  if (numero2 == "0") {
    respuesta.textContent("No es posible dividir por 0");
    return;
  }

  let resultado = parseInt(numero1) / parseInt(numero2);

  respuesta.textContent = resultado;

  reestablecerValores();
});

function reestablecerValores() {
  campo1.value = "";

  campo2.value = "";

  numero1 = "";
  numero2 = "";
}
