const distanciaTotal = 125; // km
const velocidadeCarro = 90; // km/h
const velocidadeCaminhao = 80; // km/h
const numeroPedagios = 3;
const tempoExtraCarroPorPedagio = 5; // minutos extras por pedágio

const tempoExtraCarro = (numeroPedagios * tempoExtraCarroPorPedagio) / 60; // 15 minutos = 0.25 horas

const tempoAteCruzamento = distanciaTotal / (velocidadeCarro + velocidadeCaminhao); // horas

const distanciaCaminhao = tempoAteCruzamento * velocidadeCaminhao; // km

const tempoCarroComPedagios = tempoAteCruzamento + tempoExtraCarro;

const distanciaCarro = tempoAteCruzamento * velocidadeCarro; // km

if (distanciaCarro < distanciaCaminhao) {
  console.log("O carro estará mais próximo de Ribeirão Preto.");
} else {
  console.log("O caminhão estará mais próximo de Ribeirão Preto.");
}