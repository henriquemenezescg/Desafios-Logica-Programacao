// Função para inverter uma string
function inverterString(texto) {
  let stringInvertida = ""; // String vazia que vai receber os caracteres invertidos
  for (let i = texto.length - 1; i >= 0; i--) {
    stringInvertida += texto[i]; // Adiciona os caracteres de trás para frente
  }
  return stringInvertida;
}

// Teste com uma string
const texto = "Exemplo de string"; // Você pode mudar o texto aqui
console.log(inverterString(texto));