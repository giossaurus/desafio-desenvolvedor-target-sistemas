const verificarSequencias = () => {
    // Sequência A
    const sequenciaA = [1, 3, 5, 7];
    const proximoA = sequenciaA[sequenciaA.length - 1] + 2;
    console.log('Sequência A:', sequenciaA.join(', '), proximoA);

    // Sequência B
    const sequenciaB = [2, 4, 8, 16, 32, 64];
    const proximoB = sequenciaB[sequenciaB.length - 1] * 2;
    console.log('Sequência B:', sequenciaB.join(', '), proximoB);

    // Sequência C
    const sequenciaC = [0, 1, 4, 9, 16, 25, 36];
    const proximoC = Math.pow(Math.sqrt(sequenciaC[sequenciaC.length - 1]) + 1, 2);
    console.log('Sequência C:', sequenciaC.join(', '), proximoC);

    // Sequência D
    const sequenciaD = [4, 16, 36, 64];
    const proximoD = Math.pow(10, 2);
    console.log('Sequência D:', sequenciaD.join(', '), proximoD);

    // Sequência E
    const sequenciaE = [1, 1, 2, 3, 5, 8];
    const proximoE = sequenciaE[sequenciaE.length - 1] + sequenciaE[sequenciaE.length - 2];
    console.log('Sequência E:', sequenciaE.join(', '), proximoE);

    // Sequência F
    const sequenciaF = [2, 10, 12, 16, 17, 18, 19];
    const proximoF = sequenciaF[sequenciaF.length - 1] + 1;
    console.log('Sequência F:', sequenciaF.join(', '), proximoF);
}

verificarSequencias();

const resultados = {
    sequenciaA: 9,
    sequenciaB: 128,
    sequenciaC: 49,
    sequenciaD: 100,
    sequenciaE: 13,
    sequenciaF: 20
};

console.log('\nResultados finais:');
for (let seq in resultados) {
    console.log(`${seq}: ${resultados[seq]}`);
}