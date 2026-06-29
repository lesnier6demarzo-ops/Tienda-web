// script.js
let total = 0;

function agregar(nombre, precio) {
  const lista = document.getElementById("lista");
  const item = document.createElement("li");

  item.textContent = `${nombre} - $${precio} MXN`;
  lista.appendChild(item);

  total += precio;
  document.getElementById("total").textContent = total;
}