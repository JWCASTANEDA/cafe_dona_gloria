// ---------- Config ----------
// Número de WhatsApp de Camilo (Finca La Gloria), con indicativo de Colombia.
// Para cambiarlo, edita SOLO esta línea (formato: 57 + número, sin espacios ni '+').
const WHATSAPP_NUMBER = "573173644621";

// ---------- Elementos ----------
const form = document.getElementById("pedido-form");
const cantidadInput = document.getElementById("cantidad");
const btnMenos = document.getElementById("menos");
const btnMas = document.getElementById("mas");
const resumenTexto = document.getElementById("resumen-texto");

function bolsaLabel(n) {
  return n === 1 ? "bolsa" : "bolsas";
}

function molidoSeleccionado() {
  const checked = form.querySelector('input[name="molido"]:checked');
  return checked ? checked.value : "Grano entero";
}

function actualizarResumen() {
  const cantidad = Math.max(1, parseInt(cantidadInput.value, 10) || 1);
  const molido = molidoSeleccionado();
  resumenTexto.textContent =
    `${cantidad} ${bolsaLabel(cantidad)} de 250 g · Bourbon Rosado · ${molido}`;
}

btnMenos.addEventListener("click", () => {
  const actual = parseInt(cantidadInput.value, 10) || 1;
  cantidadInput.value = Math.max(1, actual - 1);
  actualizarResumen();
});

btnMas.addEventListener("click", () => {
  const actual = parseInt(cantidadInput.value, 10) || 1;
  cantidadInput.value = Math.min(20, actual + 1);
  actualizarResumen();
});

cantidadInput.addEventListener("input", actualizarResumen);
form.querySelectorAll('input[name="molido"]').forEach((el) => {
  el.addEventListener("change", actualizarResumen);
});

// ---------- Envío por WhatsApp ----------
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Math.max(1, parseInt(cantidadInput.value, 10) || 1);
  const molido = molidoSeleccionado();
  const nombre = form.nombre.value.trim();
  const entrega = form.entrega.value.trim();
  const notas = form.notas.value.trim();

  if (!nombre) {
    form.nombre.focus();
    form.nombre.reportValidity();
    return;
  }

  const lineas = [
    "Hola Camilo! Quiero pedir café de Finca La Gloria:",
    "",
    `Bourbon Rosado — ${molido}`,
    `Cantidad: ${cantidad} ${bolsaLabel(cantidad)} de 250 g`,
    `Nombre: ${nombre}`,
  ];

  if (entrega) lineas.push(`Entrega: ${entrega}`);
  if (notas) lineas.push(`Notas: ${notas}`);
  lineas.push("", "¿Me confirmas disponibilidad y forma de pago? ¡Gracias!");

  const mensaje = encodeURIComponent(lineas.join("\n"));
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`;
  window.open(url, "_blank", "noopener");
});

actualizarResumen();
