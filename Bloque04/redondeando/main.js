function calcularLitros() {
  var elementoKm = document.getElementById("textoKm");
  var textoKm = elementoKm.value;
  var cantKm = Number(textoKm);

  var cantidadLitros = Math.ceil(cantKm / 8.8);

  var resultado = document.getElementById("textoResultado");
  resultado.textContent = "Carga: " + cantidadLitros + " litros de combustible";
}
