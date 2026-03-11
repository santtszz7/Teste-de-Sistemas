/**
 * Atividade – Testes Unitários com Calculadora
 * @author Erick
 * @date 11/03/2026
 * A função testada é evaluate() do script.js (equivalente a calcular_expressao).
 */

/* =============================================================================
   PARTE 1 — Compreendendo o que é um teste
   =============================================================================
   1) Testar uma função em programação significa executá-la com entradas conhecidas
      e verificar se o resultado (ou o comportamento) é o esperado, de forma
      automatizada, para garantir que a função continua correta ao mudar o código.

   2) Se a função recebe '2+3', o resultado esperado é 5 (ou a string '5',
      dependendo de como a calculadora retorna).

   3) No unittest (Python), o comando que compara dois valores é assertEqual.

   4) Forma completa:
      self.assertEqual(calcular_expressao('2+3'), 5)
      (ou com '5' se a função retornar string)
   ============================================================================= */

/* =============================================================================
   PARTE 2 — Estrutura de um teste
   =============================================================================
   5) As três partes principais de um teste unitário são:
      • CENÁRIO (ou Montagem): preparar os dados e condições de entrada.
      • EXECUÇÃO (ou Chamada de Função): chamar a função que está sendo testada.
      • VERIFICAÇÃO (ou Assert): conferir se o resultado é o esperado.

   6) No código:
      expressao = '3*5'           → CENÁRIO (preparação da entrada)
      resultado = calcular_expressao(expressao)  → EXECUÇÃO (chamada da função)
      self.assertEqual(resultado, '15')          → VERIFICAÇÃO (assert)
   ============================================================================= */

/* =============================================================================
   PARTE 4 — Pensamento crítico
   =============================================================================
   11) Ao dividir por zero (ex.: 10/0), o ideal é tratar o caso: retornar uma
       mensagem de erro, lançar exceção ou um valor especial.

   13) Se o usuário digitar algo inválido (ex.: 'abc'), a função deve tratar o
       erro (ex.: lançar exceção ou retornar mensagem de erro) em vez de travar
       ou retornar um valor indefinido.
   ============================================================================= */

/* =============================================================================
   PARTE 5 — Raciocínio mais avançado
   =============================================================================
   15) Com precedência matemática: 2 + 3 * 4 = 2 + 12 = 14
       (a multiplicação é feita antes da soma).

   17) Com parênteses: (2 + 3) * 4 = 5 * 4 = 20
   ============================================================================= */

/* =============================================================================
   REFLEXÃO
   =============================================================================
   18) Não. Os testes da função calcular_expressao() (ou evaluate()) testam
       apenas a lógica de cálculo. A interface gráfica (botões, display, eventos)
       é outra camada. Mudanças na interface não alteram a assinatura nem o
       comportamento da função de cálculo, então os testes continuam válidos.

   19) Usando um único método que percorre uma lista de casos de teste. Cada
       caso tem: expressão de entrada e resultado esperado. O teste itera sobre
       a lista e, para cada par (expressão, esperado), chama a função e faz o
       assert. Assim vários cenários são validados no mesmo teste (ver teste
       "várias expressões em um único método" abaixo).
   ============================================================================= */

const { evaluate } = require("../src/script.js");

describe("Atividade – Calculadora (calcular_expressao / evaluate)", () => {
    test("7) 4 + 6 = 10", () => {
        // Montagem do cenário: expressão de soma
        const expressao = "4+6";

        // Execução
        const resultado = evaluate(expressao);

        // Verificação
        expect(resultado).toBe(10);
    });

    test("8) 10 - 3 = 7", () => {
        // Montagem do cenário: expressão de subtração
        const expressao = "10-3";

        // Execução
        const resultado = evaluate(expressao);

        // Verificação
        expect(resultado).toBe(7);
    });

    test("9) 7 * 8 = 56", () => {
        // Montagem do cenário: expressão de multiplicação
        const expressao = "7*8";

        // Execução
        const resultado = evaluate(expressao);

        // Verificação
        expect(resultado).toBe(56);
    });

    test("10) 20 / 5 = 4", () => {
        // Montagem do cenário: expressão de divisão
        const expressao = "20/5";

        // Execução
        const resultado = evaluate(expressao);

        // Verificação
        expect(resultado).toBe(4);
    });

    test("12) divisão por zero (10/0) retorna Infinity", () => {
        // Montagem do cenário: divisão por zero
        const expressao = "10/0";

        // Execução
        const resultado = evaluate(expressao);

        // Verificação
        expect(resultado).toBe(Infinity);
    });

    test("14) expressão inválida ('abc') lança erro", () => {
        // Montagem do cenário: expressão não matemática
        const expressao = "abc";

        // Execução e verificação: deve lançar erro
        expect(() => evaluate(expressao)).toThrow();
    });

    test("16) precedência: 2 + 3 * 4 = 14", () => {
        // Montagem do cenário: expressão com precedência de operadores
        const expressao = "2+3*4";

        // Execução
        const resultado = evaluate(expressao);

        // Verificação
        expect(resultado).toBe(14);
    });

    test("17) parênteses: (2+3)*4 = 20", () => {
        // Montagem do cenário: expressão com parênteses
        const expressao = "(2+3)*4";

        // Execução
        const resultado = evaluate(expressao);

        // Verificação
        expect(resultado).toBe(20);
    });

    test("19) várias expressões em um único método (lista de casos)", () => {
        // Montagem do cenário: lista de expressões e resultados esperados
        const casos = [
            { expressao: "2+3", esperado: 5 },
            { expressao: "3*5", esperado: 15 },
            { expressao: "10-3", esperado: 7 },
            { expressao: "20/5", esperado: 4 },
            { expressao: "2+3*4", esperado: 14 },
            { expressao: "(2+3)*4", esperado: 20 },
        ];

        casos.forEach(({ expressao, esperado }) => {
            // Execução
            const resultado = evaluate(expressao);

            // Verificação
            expect(resultado).toBe(esperado);
        });
    });
});

// npm test -- atividadecalculadora — para rodar o teste da atividade.