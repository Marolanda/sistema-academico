// lancamentoNotas.js

function lancarNotas(nota1, nota2) {
    // Valida se as notas são numéricas
    if (isNaN(nota1) || isNaN(nota2)) {
        return "Entradas devem ser numéricas";
    }

    // Valida se as notas estão no intervalo de 0.0 a 10.0 e com uma casa decimal
    if (nota1 < 0.0 || nota1 > 10.0 || !Number.isFinite(nota1) || (Math.round(nota1 * 10) / 10) !== nota1) {
        return "Nota de 1UP inválida";
    }

    if (nota2 < 0.0 || nota2 > 10.0 || !Number.isFinite(nota2) || (Math.round(nota2 * 10) / 10) !== nota2) {
        return "Nota de 2UP inválida";
    }

    // Se tudo estiver correto, retorna uma mensagem de sucesso
    return "Notas salvas com sucesso";
}

module.exports = lancarNotas;
