// Função que gera a sequência de Fibonacci até o número desejado
function fibonacci(n) {
  let fibSeq = [0, 1]; // Inicia com os primeiros números da sequência
  while (fibSeq[fibSeq.length - 1] < n) {
    fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]); // Soma os dois últimos
  }
  return fibSeq;
}

// Função que verifica se o número faz parte da sequência de Fibonacci
function pertenceAFibonacci(numero) {
  let fibSeq = fibonacci(numero); // Gera a sequência até o número
  if (fibSeq.includes(numero)) {
    return `O número ${numero} pertence à sequência de Fibonacci.`;
  } else {
    return `O número ${numero} não pertence à sequência de Fibonacci.`;
  }
}

// Número a ser verificado
let numero = 21; // Você pode mudar esse valor para testar outro número

// Imprime o resultado
console.log(pertenceAFibonacci(numero));