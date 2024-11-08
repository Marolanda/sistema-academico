const lancarNotas = require('../src/lancamentoNotas');
const calcularMedia = require('../src/calcularMedia');
const obterStatus = require('../src/exibirStatus');

// Testes para o módulo de Lançamento de Notas
describe('Teste do Módulo de Lançamento de Notas', () => {
    test('Notas válidas (7.5 e 8.2)', () => {
        expect(lancarNotas(7.5, 8.2)).toBe('Notas salvas com sucesso');
    });

    test('Nota de 1UP fora do intervalo (-1.0 e 8.2)', () => {
        expect(lancarNotas(-1.0, 8.2)).toBe('Nota de 1UP inválida');
    });

    test('Nota de 2UP fora do intervalo (7.5 e 12.0)', () => {
        expect(lancarNotas(7.5, 12.0)).toBe('Nota de 2UP inválida');
    });

    test('Nota de 1UP com mais de uma casa decimal (7.567 e 8.2)', () => {
        expect(lancarNotas(7.567, 8.2)).toBe('Nota de 1UP inválida');
    });

    test('Nota de 2UP com mais de uma casa decimal (7.5 e 8.256)', () => {
        expect(lancarNotas(7.5, 8.256)).toBe('Nota de 2UP inválida');
    });

    test('Entradas não numéricas ("sete" e 8.2)', () => {
        expect(lancarNotas('sete', 8.2)).toBe('Entradas devem ser numéricas');
    });
});

// Testes para o módulo de Cálculo de Média
describe('Teste do Módulo de Cálculo de Média', () => {
    test('Notas válidas (7.0 e 8.0)', () => {
        expect(calcularMedia(7.0, 8.0)).toBe(7.5);
    });

    test('Notas iguais (5.0 e 5.0)', () => {
        expect(calcularMedia(5.0, 5.0)).toBe(5.0);
    });

    test('Nota mínima e máxima (0.0 e 10.0)', () => {
        expect(calcularMedia(0.0, 10.0)).toBe(5.0);
    });

    test('Nota de 1UP no limite inferior (0.0 e 7.0)', () => {
        expect(calcularMedia(0.0, 7.0)).toBe(3.5);
    });

    test('Nota de 2UP no limite superior (8.0 e 10.0)', () => {
        expect(calcularMedia(8.0, 10.0)).toBe(9.0);
    });

    test('Notas inválidas (fora do intervalo)', () => {
        expect(calcularMedia(-1.0, 11.0)).toBe('Erro de validação (do módulo 1)');
    });
});

// Testes para o módulo de Exibição de Status do Aluno
describe('Teste do Módulo de Status do Aluno', () => {
    test('Média inferior a 4.0 (3.5)', () => {
        expect(obterStatus(3.5)).toBe('Reprovado por média');
    });

    test('Média igual a 4.0', () => {
        expect(obterStatus(4.0)).toBe('Aguardando a final');
    });

    test('Média entre 4.0 e 6.0 (5.5)', () => {
        expect(obterStatus(5.5)).toBe('Aguardando a final');
    });

    test('Média igual a 6.0', () => {
        expect(obterStatus(6.0)).toBe('Aprovado por média');
    });

    test('Média superior a 6.0 (7.5)', () => {
        expect(obterStatus(7.5)).toBe('Aprovado por média');
    });

    test('Média no limite inferior (0.0)', () => {
        expect(obterStatus(0.0)).toBe('Reprovado por média');
    });
});
