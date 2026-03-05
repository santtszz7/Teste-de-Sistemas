/**
 * Classe de teste responsável por validar
 * a operação de soma da calculadora.
 *
 * @author Erick
 * @date 03/03/2026
 */

const { somar } = require("../src/script.js");

describe("Operação de Soma da Calculadora", () => {
    test("soma de dois números positivos", () => {
        // Montagem do cenário: valores positivos
        const a = 5;
        const b = 3;

        // Execução: chamada da função somar
        const resultado = somar(a, b);

        // Verificação: resultado esperado
        expect(resultado).toBe(8);
    });

    test("soma com zero", () => {
        // Montagem do cenário: um operando é zero
        const a = 10;
        const b = 0;

        // Execução
        const resultado = somar(a, b);

        // Verificação: soma com zero mantém o outro número
        expect(resultado).toBe(10);
    });

    test("soma de dois zeros", () => {
        // Montagem do cenário: ambos zero
        const a = 0;
        const b = 0;

        // Execução
        const resultado = somar(a, b);

        // Verificação
        expect(resultado).toBe(0);
    });

    test("soma com número negativo", () => {
        // Montagem do cenário: um positivo e um negativo
        const a = 7;
        const b = -3;

        // Execução
        const resultado = somar(a, b);

        // Verificação
        expect(resultado).toBe(4);
    });

    test("soma de dois números negativos", () => {
        // Montagem do cenário: ambos negativos
        const a = -5;
        const b = -3;

        // Execução
        const resultado = somar(a, b);

        // Verificação
        expect(resultado).toBe(-8);
    });

    test("soma com números decimais", () => {
        // Montagem do cenário: valores decimais
        const a = 2.5;
        const b = 3.7;

        // Execução
        const resultado = somar(a, b);

        // Verificação: uso toEqual para decimais (precisão)
        expect(resultado).toEqual(6.2);
    });

    test("soma de números grandes", () => {
        // Montagem do cenário: valores grandes
        const a = 1000000;
        const b = 999999;

        // Execução
        const resultado = somar(a, b);

        // Verificação
        expect(resultado).toBe(1999999);
    });

    test("soma comutativa: a + b === b + a", () => {
        // Montagem do cenário: verificação da propriedade comutativa
        const a = 15;
        const b = 22;

        // Execução: ambas as ordens
        const resultado1 = somar(a, b);
        const resultado2 = somar(b, a);

        // Verificação
        expect(resultado1).toBe(resultado2);
        expect(resultado1).toBe(37);
    });
});
