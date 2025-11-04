function validarDescuento(descuento) {
  if (descuento < 0 || descuento > 50) return "Error: descuento inválido";
  return descuento;
}
module.exports = { validarDescuento };
