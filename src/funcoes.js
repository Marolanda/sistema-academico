// Função do 1º Módulo: Lançamento de notas pelo professor
function inserirNotas(UP1, UP2) {
    if (
        typeof UP1 !== "number" || typeof UP2 !== "number" ||
        UP1 < 0.0 || UP1 > 10.0 || UP2 < 0.0 || UP2 > 10.0 ||
        !Number.isInteger(UP1 * 10) || !Number.isInteger(UP2 * 10)
    ) {
        throw new Error("As notas devem ser números decimais entre 0.0 e 10.0, com uma casa decimal.");
    }
    return { UP1, UP2 };
}

// Função do 2º Módulo: Cálculo da média
function calcularMedia(inserirNotas) {
    const { UP1, UP2 } = inserirNotas;
    const media = (UP1 + UP2) / 2;
    return parseFloat(media.toFixed(1)); // Limita a uma casa decimal
}

// Função do 3º Módulo: Status do aluno
function determinarStatus(calcularMedia) {
    const media = calcularMedia;
    if (media < 4.0) {
        return "Reprovado por média";
    } else if (media >= 6.0) {
        return "Aprovado por média";
    } else {
        return "Aguardando a final";
    }
}

module.exports = {
    inserirNotas,
    calcularMedia,
    determinarStatus
};