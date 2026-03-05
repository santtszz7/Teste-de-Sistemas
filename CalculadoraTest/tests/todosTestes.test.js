/**
 * Ponto de entrada único: carrega e executa todas as suítes
 * de teste das operações da calculadora.
 * Ao rodar npm test, o Jest executa apenas este arquivo,
 * que por sua vez puxa os testes de cada operação.
 *
 * @author Erick
 * @date 03/03/2026
 */

// Carrega todas as suítes de operação (cada uma registra seus describe/test no Jest)
require("./soma.suite.js");
require("./subtracao.suite.js");
require("./multiplicacao.suite.js");
require("./divisao.suite.js");
require("./potencia.suite.js");
require("./raiz.suite.js");
require("./fatorial.suite.js");
