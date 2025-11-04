const { validarDescuento } = require('./funcionGrupoX');

test('Descuento válido (10%) debe retornarse igual', () => {
  expect(validarDescuento(10)).toBe(10);
});

test('Descuento inválido (-5%) debe devolver mensaje de error', () => {
  expect(validarDescuento(-5)).toBe("Error: descuento inválido");
});

test('Descuento inválido (70%) debe devolver mensaje de error', () => {
  expect(validarDescuento(70)).toBe("Error: descuento inválido");
});
