// ============================
// REFERÊNCIAS DO DOM (apenas no browser)
// ============================

const display = typeof document !== "undefined" ? document.getElementById("display") : null;
const botoesCalc = typeof document !== "undefined" ? document.getElementById("botoesCalc") : null;
const btnOnOff = typeof document !== "undefined" ? document.getElementById("btnOnOff") : null;
const historyList = typeof document !== "undefined" ? document.getElementById("historyList") : null;
const btnLimparHistorico = typeof document !== "undefined" ? document.getElementById("btnLimparHistorico") : null;
const calculadoraEl = typeof document !== "undefined" ? document.querySelector(".calculadora") : null;
const historicoEl = typeof document !== "undefined" ? document.querySelector(".historico") : null;

// ============================
// ESTADO: LIGADO / DESLIGADO
// ============================

let isOn = false;

function setPower(on) {
    isOn = !!on;
    if (display) {
        display.disabled = !isOn;
        display.value = "";
    }
    if (calculadoraEl) calculadoraEl.classList.toggle("off", !isOn);
    if (historicoEl) historicoEl.classList.toggle("off", !isOn);
    if (btnOnOff) {
        btnOnOff.textContent = isOn ? "ON" : "OFF";
        btnOnOff.setAttribute("data-state", isOn ? "on" : "off");
    }
}

if (btnOnOff) {
    btnOnOff.addEventListener("click", function () {
        setPower(!isOn);
    });
}

// ============================
// FUNÇÕES MATEMÁTICAS PURAS (para cálculos e testes)
// ============================

/**
 * Soma dois números.
 * @param {number} a - Primeiro operando
 * @param {number} b - Segundo operando
 * @returns {number} Resultado da soma
 */
function somar(a, b) {
    return a + b;
}

/**
 * Subtrai o segundo número do primeiro.
 * @param {number} a - Minuendo
 * @param {number} b - Subtraendo
 * @returns {number} Resultado da subtração
 */
function subtrair(a, b) {
    return a - b;
}

/**
 * Multiplica dois números.
 * @param {number} a - Primeiro fator
 * @param {number} b - Segundo fator
 * @returns {number} Resultado da multiplicação
 */
function multiplicar(a, b) {
    return a * b;
}

/**
 * Divide o primeiro número pelo segundo.
 * @param {number} a - Dividendo
 * @param {number} b - Divisor
 * @returns {number} Resultado da divisão (Infinity se b === 0)
 */
function dividir(a, b) {
    if (b === 0) return a >= 0 ? Infinity : -Infinity;
    return a / b;
}

/**
 * Eleva a base à potência do expoente.
 * @param {number} a - Base
 * @param {number} b - Expoente
 * @returns {number} Resultado da potência
 */
function potencia(a, b) {
    return Math.pow(a, b);
}

/**
 * Calcula a raiz quadrada de um número.
 * @param {number} a - Radicando
 * @returns {number} Raiz quadrada (NaN se a < 0)
 */
function raiz(a) {
    return Math.sqrt(a);
}

/**
 * Calcula o fatorial de um número inteiro não negativo.
 * @param {number} n - Número inteiro
 * @returns {number} Fatorial (NaN se n < 0 ou não inteiro)
 */
function fatorial(n) {
    n = Number(n);
    if (n < 0 || n !== Math.floor(n)) return NaN;
    if (n === 0) return 1;
    return n * fatorial(n - 1);
}

// ============================
// FUNÇÕES BÁSICAS DA CALCULADORA (DOM)
// ============================

function add(valor) {
    if (!isOn || !display) return;
    display.value += valor;
}

function clearDisplay() {
    if (!isOn || !display) return;
    display.value = "";
}

// ============================
// DELEGAÇÃO DE EVENTOS NOS BOTÕES
// ============================

if (botoesCalc) {
botoesCalc.addEventListener("click", function (e) {
    if (!isOn) return;
    const btn = e.target.closest("button");
    if (!btn) return;

    const action = btn.getAttribute("data-action");
    const val = btn.getAttribute("data-val");

    if (action === "add" && val != null) {
        add(val);
    } else if (action === "clear") {
        clearDisplay();
    } else if (action === "calculate") {
        calculate();
    }
});
}

// ============================
// CÁLCULO PRINCIPAL
// ============================

function calculate() {
    if (!isOn || !display) return;
    try {
        let expression = display.value.trim();
        if (!expression) return;

        // Substitui símbolos por funções JS 
        expression = expression.replace(/√/g, "Math.sqrt");
        expression = expression.replace(/\^/g, "**");

        // Fatorial: n! -> factorial(n)
        expression = expression.replace(/(\d+\.?\d*)!/g, function (_, n) {
            return "factorial(" + n + ")";
        });

        const result = evaluate(expression);
        addHistory(display.value + " = " + result);
        display.value = result;
    } catch (err) {
        display.value = "Erro";
    }
}

// ============================
// AVALIADOR MATEMÁTICO
// Suporta: + - * / ** Math.sqrt factorial ( )
// ============================

function evaluate(expr) {
    const fn = new Function("factorial", '"use strict"; return (' + expr + ")");
    return fn(fatorial);
}

// ============================
// HISTÓRICO
// ============================

function addHistory(texto) {
    if (!historyList || !display) return;
    const li = document.createElement("li");
    li.textContent = texto;
    li.addEventListener("click", function () {
        if (!isOn) return;
        const parts = texto.split(" = ");
        if (parts.length >= 2) {
            display.value = parts[1];
        }
    });
    historyList.prepend(li);
}

if (btnLimparHistorico && historyList) {
    btnLimparHistorico.addEventListener("click", function () {
        historyList.innerHTML = "";
    });
}

// ============================
// INICIALIZAÇÃO: calculadora desligada (apenas no browser)
// ============================

if (display) setPower(false);

// ============================
// EXPORT PARA NODE (testes Jest)
// ============================

if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        somar,
        subtrair,
        multiplicar,
        dividir,
        potencia,
        raiz,
        fatorial
    };
}
