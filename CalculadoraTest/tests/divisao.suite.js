/**
 * Classe de teste responsável por validar
 * a operação de divisão da calculadora.
 *
 * @author Erick
 * @date 03/03/2026
 */

const { dividir } = require("../src/script.js");

describe("Operação de Divisão da Calculadora", () => {
    test("divisão de dois números positivos", () => {
        // Montagem do cenário
        const a = 20;
        const b = 4;

        // Execução
        const resultado = dividir(a, b);

        // Verificação
        expect(resultado).toBe(5);
    });

    test("divisão por zero (dividendo positivo)", () => {
        // Montagem do cenário: divisão por zero
        const a = 10;
        const b = 0;

        // Execução
        const resultado = dividir(a, b);

        // Verificação: retorno esperado é Infinity (comportamento da calculadora)
        expect(resultado).toBe(Infinity);
    });

    test("divisão por zero (dividendo negativo)", () => {
        // Montagem do cenário: número negativo dividido por zero
        const a = -10;
        const b = 0;

        // Execução
        const resultado = dividir(a, b);

        // Verificação
        expect(resultado).toBe(-Infinity);
    });

    test("zero dividido por número", () => {
        // Montagem do cenário
        const a = 0;
        const b = 7;

        // Execução
        const resultado = dividir(a, b);

        // Verificação
        expect(resultado).toBe(0);
    });

    test("divisão com números negativos", () => {
        // Montagem do cenário: negativo / positivo
        const a = -15;
        const b = 3;

        // Execução
        const resultado = dividir(a, b);

        // Verificação
        expect(resultado).toBe(-5);
    });

    test("divisão com resultado decimal", () => {
        // Montagem do cenário
        const a = 10;
        const b = 4;

        // Execução
        const resultado = dividir(a, b);

        // Verificação
        expect(resultado).toEqual(2.5);
    });

    test("divisão de números grandes", () => {
        // Montagem do cenário
        const a = 1000000;
        const b = 1000;

        // Execução
        const resultado = dividir(a, b);

        // Verificação
        expect(resultado).toBe(1000);
    });

    test("divisão por um (elemento neutro)", () => {
        // Montagem do cenário
        const a = 42;
        const b = 1;

        // Execução
        const resultado = dividir(a, b);

        // Verificação
        expect(resultado).toBe(42);
    });
});
