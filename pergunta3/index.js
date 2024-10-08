const { analisarFaturamento } = require('./analiseFaturamento');
const dados = require('./dados.json');

try {
    const resultado = analisarFaturamento(dados.faturamentoDiario);
    
    console.log('Análise de Faturamento:');
    console.log(`Menor valor: R$ ${resultado.menorValor.toFixed(2)}`);
    console.log(`Maior valor: R$ ${resultado.maiorValor.toFixed(2)}`);
    console.log(`Média de faturamento: R$ ${resultado.mediaFaturamento.toFixed(2)}`);
    console.log(`Dias acima da média: ${resultado.diasAcimaDaMedia}`);
} catch (erro) {
    console.error('Erro ao processar os dados:', erro);
}