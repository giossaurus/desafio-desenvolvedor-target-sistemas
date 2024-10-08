function analisarFaturamento(faturamentoDiario) {

    const diasComFaturamento = faturamentoDiario.filter(valor => valor > 0);
    
    const menor = Math.min(...diasComFaturamento);
    const maior = Math.max(...diasComFaturamento);
    
    const media = diasComFaturamento.reduce((acc, curr) => acc + curr, 0) / diasComFaturamento.length;
    
    const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > media).length;
    
    return {
        menorValor: menor,
        maiorValor: maior,
        diasAcimaDaMedia: diasAcimaDaMedia,
        mediaFaturamento: media
    };
}

module.exports = { analisarFaturamento };