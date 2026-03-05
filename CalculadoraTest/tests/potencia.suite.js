/**
 * Classe de teste responsável por validar
 * a operação de potência da calculadora.
 *
 * @author Erick
 * @date 03/03/2026
 */

const { potencia } = require("../src/script.js");

describe("Operação de Potência da Calculadora", () => {
    test("potência de números positivos", () => {
        // Montagem do cenário: 2^3 = 8
        const a = 2;
        const b = 3;

        // Execução
        const resultado = potencia(a, b);

        // Verificação
        expect(resultado).toBe(8);
    });

    test("potência com expoente zero", () => {
        // Montagem do cenário: qualquer base^0 = 1
        const a = 100;
        const b = 0;

        // Execução
        const resultado = potencia(a, b);

        // Verificação
        expect(resultado).toBe(1);
    });

    test("potência com base zero e expoente positivo", () => {
        // Montagem do cenário: 0^n = 0 (n > 0)
        const a = 0;
        const b = 5;

        // Execução
        const resultado = potencia(a, b);

        // Verificação
        expect(resultado).toBe(0);
    });

    test("potência com expoente negativo", () => {
        // Montagem do cenário: 2^(-2) = 0.25
        const a = 2;
        const b = -2;

        // Execução
        const resultado = potencia(a, b);

        // Verificação
        expect(resultado).toEqual(0.25);
    });

    test("potência com base negativa e expoente par", () => {
        // Montagem do cenário: (-3)^2 = 9
        const a = -3;
        const b = 2;

        // Execução
        const resultado = potencia(a, b);

        // Verificação
        expect(resultado).toBe(9);
    });

    test("potência com base negativa e expoente ímpar", () => {
        // Montagem do cenário: (-2)^3 = -8
        const a = -2;
        const b = 3;

        // Execução
        const resultado = potencia(a, b);

        // Verificação
        expect(resultado).toBe(-8);
    });

    test("potência com decimais", () => {
        // Montagem do cenário: 2.5^2 = 6.25
        const a = 2.5;
        const b = 2;

        // Execução
        const resultado = potencia(a, b);

        // Verificação
        expect(resultado).toEqual(6.25);
    });

    test("potência de números grandes", () => {
        // Montagem do cenário: 10^6
        const a = 10;
        const b = 6;

        // Execução
        const resultado = potencia(a, b);

        // Verificação
        expect(resultado).toBe(1000000);
    });

    test("potência com expoente um", () => {
        // Montagem do cenário: base^1 = base
        const a = 77;
        const b = 1;

        // Execução
        const resultado = potencia(a, b);

        // Verificação
        expect(resultado).toBe(77);
    });
});
