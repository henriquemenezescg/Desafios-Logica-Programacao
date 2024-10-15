// Dados de faturamento em formato JSON
const faturamentoMensal = [
  { dia: 1, valor: 22174.1664 },
  { dia: 2, valor: 24537.6698 },
  { dia: 3, valor: 26139.6134 },
  { dia: 4, valor: 0.0 },
  { dia: 5, valor: 0.0 },
  { dia: 6, valor: 26742.6612 }
];

// Filtra apenas os valores maiores que 0
const valores = faturamentoMensal.filter(d => d.valor > 0).map(d => d.valor);

// Calcula o menor, maior e a média de faturamento
const menorFaturamento = Math.min(...valores);
const maiorFaturamento = Math.max(...valores);
const mediaMensal = valores.reduce((acc, val) => acc + val, 0) / valores.length;

// Conta quantos dias tiveram faturamento acima da média
const diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;

// Imprime os resultados
console.log("Menor valor de faturamento:", menorFaturamento);
console.log("Maior valor de faturamento:", maiorFaturamento);
console.log("Dias com faturamento acima da média:", diasAcimaDaMedia);
