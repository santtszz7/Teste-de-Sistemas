# Calculadora (com testes Jest)

Projeto de calculadora em HTML, CSS e JavaScript, com testes automatizados no padrão XUnit (Jest).

## Estrutura do projeto

```
CalculadoraTest
│
├── src
│   ├── script.js      # Lógica da calculadora e funções matemáticas
│   └── style.css      # Estilos da interface
│
├── tests
│   ├── soma.test.js
│   ├── subtracao.test.js
│   ├── multiplicacao.test.js
│   ├── divisao.test.js
│   ├── potencia.test.js
│   ├── raiz.test.js
│   ├── fatorial.test.js
│   └── todosTestes.test.js
│
├── index.html
├── package.json
├── README.md
└── .gitignore
```

## Papel de cada pasta

| Pasta / arquivo | Descrição |
|-----------------|-----------|
| **src/** | Código-fonte da aplicação: JavaScript da calculadora e CSS. Toda a lógica e estilos ficam aqui. |
| **tests/** | Testes automatizados (Jest). Cada arquivo testa uma operação da calculadora; os testes importam as funções de `src/script.js`. |
| **index.html** | Página principal; carrega `src/style.css` e `src/script.js`. |
| **package.json** | Dependências e scripts npm (por exemplo, `npm test` para rodar o Jest). |
| **.gitignore** | Ignora `node_modules` no Git. |

## Como executar os testes

No terminal, na pasta do projeto:

```bash
npm install
npm test
```

- **`npm install`** — instala as dependências (Jest).
- **`npm test`** — executa todos os testes em `tests/**/*.test.js`.
