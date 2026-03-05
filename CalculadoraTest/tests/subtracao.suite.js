/**
 * Classe de teste responsável por validar
 * a operação de subtração da calculadora.
 *
 * @author Erick
 * @date 03/03/2026
 */

const { subtrair } = require("../src/script.js");

describe("Operação de Subtração da Calculadora", () => {
    test("subtração de dois números positivos", () => {
        // Montagem do cenário
        const a = 10;
        const b = 4;

        // Execução
        const resultado = subtrair(a, b);

        // Verificação
        expect(resultado).toBe(6);
    });

    test("subtração com zero (minuendo)", () => {
        // Montagem do cenário: zero menos um número
        const a = 0;
        const b = 5;

        // Execução
        const resultado = subtrair(a, b);

        // Verificação
        expect(resultado).toBe(-5);
    });

    test("subtração com zero (subtraendo)", () => {
        // Montagem do cenário: número menos zero
        const a = 8;
        const b = 0;

        // Execução
        const resultado = subtrair(a, b);

        // Verificação
        expect(resultado).toBe(8);
    });

    test("subtração resultando em negativo", () => {
        // Montagem do cenário: resultado negativo
        const a = 3;
        const b = 10;

        // Execução
        const resultado = subtrair(a, b);

        // Verificação
        expect(resultado).toBe(-7);
    });

    test("subtração entre negativos", () => {
        // Montagem do cenário: -5 - (-3) = -2
        const a = -5;
        const b = -3;

        // Execução
        const resultado = subtrair(a, b);

        // Verificação
        expect(resultado).toBe(-2);
    });

    test("subtração com números decimais", () => {
        // Montagem do cenário
        const a = 5.5;
        const b = 2.3;

        // Execução
        const resultado = subtrair(a, b);

        // Verificação
        expect(resultado).toEqual(3.2);
    });

    test("subtração de números grandes", () => {
        // Montagem do cenário
        const a = 5000000;
        const b = 1234567;

        // Execução
        const resultado = subtrair(a, b);

        // Verificação
        expect(resultado).toBe(3765433);
    });

    test("subtração de zero por zero", () => {
        // Montagem do cenário
        const a = 0;
        const b = 0;

        // Execução
        const resultado = subtrair(a, b);

        // Verificação
        expect(resultado).toBe(0);
    });
});
