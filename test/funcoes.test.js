const { inserirNotas, calcularMedia, determinarStatus } = require('../src/funcoes'); 

// Testes para a função inserirNotas
describe('inserirNotas', () => {
    test('deve retornar um objeto com UP1 e UP2 válidos', () => {
        const notas = inserirNotas(8.5, 7.0);
        expect(notas).toEqual({ UP1: 8.5, UP2: 7.0 });
    });

    test('deve lançar um erro para notas fora do intervalo 0.0 e 10.0', () => {
        expect(() => inserirNotas(11, 5.0)).toThrow("As notas devem ser números decimais entre 0.0 e 10.0, com uma casa decimal.");
    });

    test('deve lançar um erro para notas com mais de uma casa decimal', () => {
        expect(() => inserirNotas(8.55, 7.0)).toThrow("As notas devem ser números decimais entre 0.0 e 10.0, com uma casa decimal.");
    });
});

// Testes para a função calcularMedia
describe('calcularMedia', () => {
    test('deve calcular a média corretamente para notas válidas', () => {
        const notas = inserirNotas(8.5, 7.0);
        const media = calcularMedia(notas);
        expect(media).toBe(7.8); // Média arredondada para uma casa decimal
    });
});

// Testes para a função determinarStatus
describe('determinarStatus', () => {
    const notasAprovado = inserirNotas(8.5, 7.0);
    const mediaAprovado = calcularMedia(notasAprovado);

    const notasReprovado = inserirNotas(4.5, 3.0);
    const mediaReprovado = calcularMedia(notasReprovado);

    const notasFinal = inserirNotas(6.0, 5.0);
    const mediaFinal = calcularMedia(notasFinal);

    test('deve retornar "Reprovado por média" para média menor que 4.0', () => {
        expect(determinarStatus(mediaReprovado)).toBe("Reprovado por média");
    });

    test('deve retornar "Aprovado por média" para média maior ou igual a 6.0', () => {
        expect(determinarStatus(mediaAprovado)).toBe("Aprovado por média");
    });

    test('deve retornar "Aguardando a final" para média entre 4.0 e 6.0 (exclusivo 6.0)', () => {
        expect(determinarStatus(mediaFinal)).toBe("Aguardando a final");
    });
});
