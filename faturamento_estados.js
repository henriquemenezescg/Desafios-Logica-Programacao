// Faturamento por estado
const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

// Calcula o total de faturamento
const faturamentoTotal = Object.values(faturamentoEstados).reduce((acc, val) => acc + val, 0);

// Calcula e imprime o percentual de cada estado
for (let estado in faturamentoEstados) {
  const percentual = (faturamentoEstados[estado] / faturamentoTotal) * 100;
  console.log(`${estado} representa ${percentual.toFixed(2)}% do faturamento total.`);
}