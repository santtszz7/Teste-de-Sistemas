/**
 * Classe de teste responsável por validar
 * a operação de raiz quadrada da calculadora.
 *
 * @author Erick
 * @date 03/03/2026
 */

const { raiz } = require("../src/script.js");

describe("Operação de Raiz Quadrada da Calculadora", () => {
    test("raiz quadrada de número positivo", () => {
        // Montagem do cenário
        const a = 25;

        // Execução
        const resultado = raiz(a);

        // Verificação
        expect(resultado).toBe(5);
    });

    test("raiz quadrada de zero", () => {
        // Montagem do cenário
        const a = 0;

        // Execução
        const resultado = raiz(a);

        // Verificação
        expect(resultado).toBe(0);
    });

    test("raiz quadrada de número negativo", () => {
        // Montagem do cenário: raiz de negativo retorna NaN (números reais)
        const a = -9;

        // Execução
        const resultado = raiz(a);

        // Verificação
        expect(resultado).toBeNaN();
    });

    test("raiz quadrada de um", () => {
        // Montagem do cenário
        const a = 1;

        // Execução
        const resultado = raiz(a);

        // Verificação
        expect(resultado).toBe(1);
    });

    test("raiz quadrada com resultado decimal", () => {
        // Montagem do cenário: √2 ≈ 1.414...
        const a = 2;

        // Execução
        const resultado = raiz(a);

        // Verificação
        expect(resultado).toBeCloseTo(1.414213562, 5);
    });

    test("raiz quadrada de número grande", () => {
        // Montagem do cenário: √1000000 = 1000
        const a = 1000000;

        // Execução
        const resultado = raiz(a);

        // Verificação
        expect(resultado).toBe(1000);
    });

    test("raiz quadrada de decimal", () => {
        // Montagem do cenário: √6.25 = 2.5
        const a = 6.25;

        // Execução
        const resultado = raiz(a);

        // Verificação
        expect(resultado).toEqual(2.5);
    });
    test("raiz quadrada de 49", () => {
        // Montagem do cenário
        const a = 49;

        // Execução
        const resultado = raiz(a);

        // Verificação
        expect(resultado).toBe(7);
    });
});
