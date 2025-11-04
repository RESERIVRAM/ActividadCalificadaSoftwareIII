const { calcularTotalPedido } = require('./pedido');
const { validarDescuento } = require('./Grupo2TripleR');

test('Integración: validar descuento y calcular total del pedido', () => {
  const productos = [
    { precio: 100, cantidad: 3 },
    { precio: 50, cantidad: 2 }
  ];

  // Primero validamos el descuento
  const descuento = validarDescuento(10);
  expect(typeof descuento).toBe('number');

  // Luego calculamos el total usando el descuento validado
  const total = calcularTotalPedido(productos, descuento);
  expect(total).toBeGreaterThan(0);
});

test('Integración: descuento inválido detiene el flujo', () => {
  const productos = [{ precio: 100, cantidad: 2 }];
  const descuento = validarDescuento(70); // fuera de rango
  expect(descuento).toBe("Error: descuento inválido");
});
