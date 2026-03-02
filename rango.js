const rangos = {
  20: [
    { desde: 87280145, hasta: 91646549 },
    { desde: 96650001, hasta: 97100000 }
  ],
  10: [
    { desde: 67250001, hasta: 67700000 }
  ],
  50: [
    { desde: 77100001, hasta: 77550000 }
  ]
};

function estaInhabilitado(corte, numero) {
  if (!rangos[corte]) return false;

  for (let r of rangos[corte]) {
    if (numero >= r.desde && numero <= r.hasta) {
      return true;
    }
  }
  return false;
}