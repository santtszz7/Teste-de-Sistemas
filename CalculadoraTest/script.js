// ============================
// REFERÊNCIAS DO DOM
// ============================

const display = document.getElementById("display");
const botoesCalc = document.getElementById("botoesCalc");
const btnOnOff = document.getElementById("btnOnOff");
const historyList = document.getElementById("historyList");
const btnLimparHistorico = document.getElementById("btnLimparHistorico");
const calculadoraEl = document.querySelector(".calculadora");
const historicoEl = document.querySelector(".historico");

// ============================
// ESTADO: LIGADO / DESLIGADO
// ============================

let isOn = false;

function setPower(on) {
    isOn = !!on;
    display.disabled = !isOn;
    display.value = "";
    if (isOn) {
        calculadoraEl.classList.remove("off");
        historicoEl.classList.remove("off");
        btnOnOff.textContent = "ON";
        btnOnOff.setAttribute("data-state", "on");
    } else {
        calculadoraEl.classList.add("off");
        historicoEl.classList.add("off");
        btnOnOff.textContent = "OFF";
        btnOnOff.setAttribute("data-state", "off");
    }
}

btnOnOff.addEventListener("click", function () {
    setPower(!isOn);
});

// ============================
// FUNÇÕES BÁSICAS DA CALCULADORA
// ============================

function add(valor) {
    if (!isOn) return;
    display.value += valor;
}

function clearDisplay() {
    if (!isOn) return;
    display.value = "";
}

// ============================
// DELEGAÇÃO DE EVENTOS NOS BOTÕES
// ============================

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

// ============================
// CÁLCULO PRINCIPAL
// ============================

function calculate() {
    if (!isOn) return;
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
    const factorial = function factorial(n) {
        n = Number(n);
        if (n < 0 || n !== Math.floor(n)) return NaN;
        if (n === 0) return 1;
        return n * factorial(n - 1);
    };
    const fn = new Function("factorial", '"use strict"; return (' + expr + ")");
    return fn(factorial);
}

// ============================
// HISTÓRICO
// ============================

function addHistory(texto) {
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

btnLimparHistorico.addEventListener("click", function () {
    historyList.innerHTML = "";
});

// ============================
// INICIALIZAÇÃO: calculadora desligada
// ============================

setPower(false);
