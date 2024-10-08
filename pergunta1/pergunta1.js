let INDICE = 12;
let SOMA = 0;
let K = 1;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);

//O resultado será de 77, pois a variável SOMA é incrementada com o valor de K a cada iteração, e K é incrementado em 1 a cada iteração, até que K seja igual a 12. Portanto, a soma de todos os valores de K de 1 a 12 é 77.