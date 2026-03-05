/**
 * Classe de teste responsável por validar
 * a operação de fatorial da calculadora.
 *
 * @author Erick
 * @date 03/03/2026
 */

const { fatorial } = require("../src/script.js");

describe("Operação de Fatorial da Calculadora", () => {
    test("fatorial de zero", () => {
        // Montagem do cenário: por definição, 0! = 1
        const n = 0;

        // Execução
        const resultado = fatorial(n);

        // Verificação
        expect(resultado).toBe(1);
    });

    test("fatorial de um", () => {
        // Montagem do cenário
        const n = 1;

        // Execução
        const resultado = fatorial(n);

        // Verificação
        expect(resultado).toBe(1);
    });

    test("fatorial de número positivo pequeno", () => {
        // Montagem do cenário: 5! = 120
        const n = 5;

        // Execução
        const resultado = fatorial(n);

        // Verificação
        expect(resultado).toBe(120);
    });

    test("fatorial de número negativo (tratamento de erro)", () => {
        // Montagem do cenário: fatorial de negativo não é definido nos inteiros
        const n = -5;

        // Execução
        const resultado = fatorial(n);

        // Verificação: deve retornar NaN como tratamento de erro
        expect(resultado).toBeNaN();
    });

    test("fatorial de número decimal (não inteiro)", () => {
        // Montagem do cenário: fatorial só para inteiros
        const n = 5.7;

        // Execução
        const resultado = fatorial(n);

        // Verificação: deve retornar NaN
        expect(resultado).toBeNaN();
    });

    test("fatorial de número grande", () => {
        // Montagem do cenário: 10! = 3628800
        const n = 10;

        // Execução
        const resultado = fatorial(n);

        // Verificação
        expect(resultado).toBe(3628800);
    });

    test("fatorial de 6", () => {
        // Montagem do cenário: 6! = 720
        const n = 6;

        // Execução
        const resultado = fatorial(n);

        // Verificação
        expect(resultado).toBe(720);
    });

    test("fatorial de 12", () => {
        // Montagem do cenário: 12! = 479001600
        const n = 12;

        // Execução
        const resultado = fatorial(n);

        // Verificação
        expect(resultado).toBe(479001600);
    });
});
