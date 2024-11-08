// calcularMedia.js

function calcularMedia(nota1, nota2) {
    // Verifica se as notas são válidas
    if (nota1 < 0.0 || nota1 > 10.0 || nota2 < 0.0 || nota2 > 10.0) {
        return "Erro de validação (do módulo 1)";
    }

    // Calcula a média
    const media = (nota1 + nota2) / 2;

    // Retorna a média calculada com uma casa decimal
    return Math.round(media * 10) / 10;
}

module.exports = calcularMedia;
