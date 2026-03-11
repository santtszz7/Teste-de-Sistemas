/**
 * Classe de teste responsável por validar
 * a operação de multiplicação da calculadora.
 *
 * @author Erick
 * @date 03/03/2026
 */

const { multiplicar } = require("../src/script.js");

describe("Operação de Multiplicação da Calculadora", () => {
    test("multiplicação de dois números positivos", () => {
        // Montagem do cenário
        const a = 6;
        const b = 7;

        // Execução
        const resultado = multiplicar(a, b);

        // Verificação
        expect(resultado).toBe(42);
    });

    test("multiplicação por zero", () => {
        // Montagem do cenário: qualquer número vezes zero
        const a = 100;
        const b = 0;

        // Execução
        const resultado = multiplicar(a, b);

        // Verificação
        expect(resultado).toBe(0);
    });

    test("zero vezes número", () => {
        // Montagem do cenário: zero como primeiro fator
        const a = 0;
        const b = 25;

        // Execução
        const resultado = multiplicar(a, b);

        // Verificação
        expect(resultado).toBe(0);
    });

    test("multiplicação por um (elemento neutro)", () => {
        // Montagem do cenário
        const a = 99;
        const b = 1;

        // Execução
        const resultado = multiplicar(a, b);

        // Verificação
        expect(resultado).toBe(99);
    });

    test("multiplicação com número negativo", () => {
        // Montagem do cenário: positivo * negativo
        const a = 4;
        const b = -3;

        // Execução
        const resultado = multiplicar(a, b);

        // Verificação
        expect(resultado).toBe(-12);
    });

    test("multiplicação de dois negativos", () => {
        // Montagem do cenário: negativo * negativo = positivo
        const a = -5;
        const b = -4;

        // Execução
        const resultado = multiplicar(a, b);

        // Verificação
        expect(resultado).toBe(20);
    });

    test("multiplicação com decimais", () => {
        // Montagem do cenário
        const a = 2.5;
        const b = 4;

        // Execução
        const resultado = multiplicar(a, b);

        // Verificação
        expect(resultado).toEqual(10);
    });

    test("multiplicação de números grandes", () => {
        // Montagem do cenário
        const a = 10000;
        const b = 10000;

        // Execução
        const resultado = multiplicar(a, b);

        // Verificação
        expect(resultado).toBe(100000000);
    });

    test("comutatividade: a * b === b * a", () => {
        // Montagem do cenário
        const a = 11;
        const b = 13;

        // Execução
        const resultado1 = multiplicar(a, b);
        const resultado2 = multiplicar(b, a);

        // Verificação
        expect(resultado1).toBe(resultado2);
        expect(resultado1).toBe(143);
    });

    test("multiplicação com números decimais", () => {
        // Montagem do cenário
        const a = 2.5;
        const b = 4.2;

        // Execução
        const resultado = multiplicar(a, b);

        // Verificação
        expect(resultado).toBe(10.5);
    });
});
