//selectores
const barrita = document.querySelector(".barrita");
const fecha = document.querySelector(".fecha");
const numero = document.querySelector(".numero");
const boton = document.querySelector(".boton");
const tabla = document.querySelector(".tabla");
const formulario = document.querySelector(".formulario");

//event listeners
boton.addEventListener("click", ingresarData);
tabla.addEventListener("click", eliminar);

//funciones
function ingresarData(e) {
  e.preventDefault();
  const fila = document.createElement("tr");
  fila.classList.add("fila");
  tabla.appendChild(fila);

  const donde = document.createElement("td");
  donde.classList.add("donde");
  fila.appendChild(donde);
  donde.innerText = barrita.value;

  const cuando = document.createElement("td");
  cuando.classList.add("cuando");
  fila.appendChild(cuando);
  cuando.innerText = fecha.value;

  const cuanto = document.createElement("td");
  cuanto.classList.add("cuanto");
  fila.appendChild(cuanto);
  cuanto.innerText = numero.value;

  const borrar = document.createElement("button");
  borrar.classList.add("borrar");
  fila.appendChild(borrar);
  borrar.innerText = "X";

  barrita.value = "";
  fecha.value = "";
  numero.value = "";
}

function eliminar(e) {
  const item = e.target;
  if (item.classList[0] === "borrar") {
    const fila = item.parentElement;
    fila.remove();
  }
}
