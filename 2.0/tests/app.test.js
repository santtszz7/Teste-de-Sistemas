const path = require("path");
const fs = require("fs");

function montarDomBase() {
  document.body.innerHTML = `
    <input id="clienteNome" />
    <input id="clienteEmail" />
    <input id="clienteVip" type="checkbox" />
    <ul id="listaClientes"></ul>

    <input id="petNome" />
    <input id="petTipo" />
    <input id="petIdade" />
    <ul id="listaPets"></ul>

    <input id="produtoNome" />
    <input id="produtoPreco" />
    <ul id="listaProdutos"></ul>

    <select id="produtoSelect"></select>
    <button id="btnAdicionar">Adicionar</button>
    <button id="btnRemover">Remover</button>
    <button id="btnFinalizar">Finalizar</button>

    <div class="carousel">
      <div class="slides">
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
      </div>
    </div>

    <span id="total">0</span>
    <ul id="listaCarrinho"></ul>
  `;

  // espelha o comportamento do browser (IDs como globais)
  global.clienteNome = document.getElementById("clienteNome");
  global.clienteEmail = document.getElementById("clienteEmail");
  global.clienteVip = document.getElementById("clienteVip");
  global.listaClientes = document.getElementById("listaClientes");

  global.petNome = document.getElementById("petNome");
  global.petTipo = document.getElementById("petTipo");
  global.petIdade = document.getElementById("petIdade");
  global.listaPets = document.getElementById("listaPets");

  global.produtoNome = document.getElementById("produtoNome");
  global.produtoPreco = document.getElementById("produtoPreco");
  global.listaProdutos = document.getElementById("listaProdutos");

  global.produtoSelect = document.getElementById("produtoSelect");
  global.listaCarrinho = document.getElementById("listaCarrinho");
}

function carregarApp() {
  const appPath = path.resolve(__dirname, "..", "app.js");
  jest.resetModules();
  return require(appPath);
}

describe("Testes de Cliente", () => {
  let app;

  beforeEach(() => {
    jest.useFakeTimers();
    montarDomBase();
    global.alert = jest.fn();
    app = carregarApp();
    app.resetState();
  });

  test("1. Deve permitir criar cliente com nome válido", () => {
    clienteNome.value = "Ana";
    clienteEmail.value = "ana@exemplo.com";
    clienteVip.checked = false;

    app.criarCliente();
    const { clientes } = app._getState();

    expect(clientes).toHaveLength(1);
    expect(clientes[0].nome).toBe("Ana");
  });

  test("2. Não deve permitir cliente com nome vazio", () => {
    clienteNome.value = "";
    clienteEmail.value = "ana@exemplo.com";

    app.criarCliente();
    const { clientes } = app._getState();

    expect(global.alert).toHaveBeenCalled();
    expect(clientes).toHaveLength(0);
  });

  test("3. Deve permitir cadastrar cliente com email válido", () => {
    clienteNome.value = "Ana";
    clienteEmail.value = "ana@exemplo.com";

    app.criarCliente();
    const { clientes } = app._getState();

    expect(clientes[0].email).toBe("ana@exemplo.com");
  });

  test("4. Não deve permitir email inválido", () => {
    clienteNome.value = "Ana";
    clienteEmail.value = "anaexemplo.com";

    app.criarCliente();
    const { clientes } = app._getState();

    expect(global.alert).toHaveBeenCalled();
    expect(clientes).toHaveLength(0);
  });

  test("5. Deve permitir marcar cliente como VIP", () => {
    clienteNome.value = "Ana";
    clienteEmail.value = "ana@exemplo.com";
    clienteVip.checked = true;

    app.criarCliente();
    const { clientes } = app._getState();

    expect(clientes[0].vip).toBe(true);
    expect(app.temClienteVip()).toBe(true);
  });
});

describe("Testes de Pet", () => {
  let app;

  beforeEach(() => {
    jest.useFakeTimers();
    montarDomBase();
    global.alert = jest.fn();
    app = carregarApp();
    app.resetState();
  });

  test("6. Deve permitir cadastrar um pet", () => {
    petNome.value = "Rex";
    petTipo.value = "cachorro";
    petIdade.value = "3";

    app.cadastrarPet();
    const { pets } = app._getState();

    expect(pets).toHaveLength(1);
    expect(pets[0]).toEqual({ nome: "Rex", tipo: "cachorro", idade: 3 });
  });

  test("7. Pet deve possuir nome obrigatório", () => {
    petNome.value = "";
    petTipo.value = "gato";
    petIdade.value = "2";

    app.cadastrarPet();
    const { pets } = app._getState();

    expect(global.alert).toHaveBeenCalled();
    expect(pets).toHaveLength(0);
  });

  test("8. Pet deve possuir tipo (cachorro, gato, etc)", () => {
    petNome.value = "Mimi";
    petTipo.value = "";
    petIdade.value = "2";

    app.cadastrarPet();
    const { pets } = app._getState();

    expect(global.alert).toHaveBeenCalled();
    expect(pets).toHaveLength(0);
  });

  test("9. Pet deve possuir idade válida (número)", () => {
    petNome.value = "Mimi";
    petTipo.value = "gato";
    petIdade.value = "abc";

    app.cadastrarPet();
    const { pets } = app._getState();

    expect(global.alert).toHaveBeenCalled();
    expect(pets).toHaveLength(0);
  });
});

describe("Testes de Produto", () => {
  let app;

  beforeEach(() => {
    jest.useFakeTimers();
    montarDomBase();
    global.alert = jest.fn();
    app = carregarApp();
    app.resetState();
  });

  test("10. Deve permitir criar produto com nome", () => {
    produtoNome.value = "Ração";
    produtoPreco.value = "10";

    app.criarProduto();
    const { produtos } = app._getState();

    expect(produtos).toHaveLength(1);
    expect(produtos[0].nome).toBe("Ração");
  });

  test("11. Produto deve possuir preço maior que zero", () => {
    produtoNome.value = "Ração";
    produtoPreco.value = "0";

    app.criarProduto();
    const { produtos } = app._getState();

    expect(global.alert).toHaveBeenCalled();
    expect(produtos).toHaveLength(0);
  });

  test("12. Produto não pode possuir preço negativo", () => {
    produtoNome.value = "Ração";
    produtoPreco.value = "-5";

    app.criarProduto();
    const { produtos } = app._getState();

    expect(global.alert).toHaveBeenCalled();
    expect(produtos).toHaveLength(0);
  });

  test("13. Produto deve aparecer na lista de produtos cadastrados", () => {
    produtoNome.value = "Ração";
    produtoPreco.value = "10";

    app.criarProduto();
    expect(listaProdutos.querySelectorAll("li")).toHaveLength(1);
    expect(listaProdutos.textContent).toContain("Ração");
    expect(produtoSelect.querySelectorAll("option")).toHaveLength(1);
  });
});

describe("Testes de Carrinho", () => {
  let app;

  beforeEach(() => {
    jest.useFakeTimers();
    montarDomBase();
    global.alert = jest.fn();
    app = carregarApp();
    app.resetState();

    // cria 2 produtos
    produtoNome.value = "Ração";
    produtoPreco.value = "10";
    app.criarProduto();
    produtoNome.value = "Brinquedo";
    produtoPreco.value = "20";
    app.criarProduto();
  });

  test("14. Deve permitir adicionar produto ao carrinho", () => {
    produtoSelect.value = "0";
    app.adicionarCarrinho();
    const { carrinho } = app._getState();
    expect(carrinho).toHaveLength(1);
    expect(listaCarrinho.querySelectorAll("li")).toHaveLength(1);
  });

  test("15. Deve permitir remover produto do carrinho", () => {
    produtoSelect.value = "0";
    app.adicionarCarrinho();
    produtoSelect.value = "1";
    app.adicionarCarrinho();

    app.removerCarrinho();
    const { carrinho } = app._getState();
    expect(carrinho).toHaveLength(1);
  });

  test("16. Carrinho deve listar todos os produtos adicionados", () => {
    produtoSelect.value = "0";
    app.adicionarCarrinho();
    produtoSelect.value = "1";
    app.adicionarCarrinho();

    expect(listaCarrinho.querySelectorAll("li")).toHaveLength(2);
  });

  test("17. Carrinho deve calcular o valor total da compra", () => {
    produtoSelect.value = "0"; // 10
    app.adicionarCarrinho();
    produtoSelect.value = "1"; // 20
    app.adicionarCarrinho();

    expect(app.calcularTotal()).toBe("30.00");
    expect(document.getElementById("total").textContent).toBe("30.00");
  });
});

describe("Testes de Regras de Negócio", () => {
  let app;

  beforeEach(() => {
    jest.useFakeTimers();
    montarDomBase();
    global.alert = jest.fn();
    app = carregarApp();
    app.resetState();
  });

  test("18. Compra acima de R$100 deve aplicar desconto de 10%", () => {
    // sem VIP
    produtoNome.value = "A";
    produtoPreco.value = "60";
    app.criarProduto();
    produtoNome.value = "B";
    produtoPreco.value = "60";
    app.criarProduto();

    produtoSelect.value = "0";
    app.adicionarCarrinho();
    produtoSelect.value = "1";
    app.adicionarCarrinho();

    expect(app.calcularTotal()).toBe("108.00"); // 120 * 0.9
  });

  test("19. Cliente VIP deve receber desconto de 15%", () => {
    clienteNome.value = "Vip";
    clienteEmail.value = "vip@exemplo.com";
    clienteVip.checked = true;
    app.criarCliente();

    produtoNome.value = "A";
    produtoPreco.value = "100";
    app.criarProduto();

    produtoSelect.value = "0";
    app.adicionarCarrinho();

    expect(app.calcularTotal()).toBe("85.00"); // 100 * 0.85
  });

  test("20. Carrinho não deve aceitar produto com preço igual a zero", () => {
    produtoNome.value = "Gratis";
    produtoPreco.value = "0";
    app.criarProduto();

    // produto não deve ser criado; logo, não deve ir pro carrinho
    expect(global.alert).toHaveBeenCalled();
    const { produtos, carrinho } = app._getState();
    expect(produtos).toHaveLength(0);
    expect(carrinho).toHaveLength(0);
  });
});

describe("Outros Testes", () => {
  let app;

  beforeEach(() => {
    jest.useFakeTimers();
    montarDomBase();
    global.alert = jest.fn();
    app = carregarApp();
    app.resetState();
  });

  test("21. Carrinho vazio deve retornar total igual a 0", () => {
    expect(app.calcularTotal()).toBe("0.00");
  });

  test("22. Ao finalizar compra o carrinho deve ser limpo", () => {
    produtoNome.value = "A";
    produtoPreco.value = "10";
    app.criarProduto();
    produtoSelect.value = "0";
    app.adicionarCarrinho();

    app.finalizarCompra();
    const { carrinho } = app._getState();
    expect(carrinho).toHaveLength(0);
    expect(listaCarrinho.querySelectorAll("li")).toHaveLength(0);
    expect(document.getElementById("total").textContent).toBe("0.00");
  });

  test("23. O carrossel deve trocar automaticamente as imagens", () => {
    const slides = document.querySelector(".slides");
    expect(slides.style.transform).toBe("");

    jest.advanceTimersByTime(4000);
    // após 1 troca, deve mover 100%
    expect(slides.style.transform).toBe("translateX(-100%)");
  });

  test("24. Os botões Adicionar / Remover / Finalizar devem funcionar corretamente", () => {
    // prepara produtos
    produtoNome.value = "A";
    produtoPreco.value = "10";
    app.criarProduto();
    produtoSelect.value = "0";

    document.getElementById("btnAdicionar").addEventListener("click", () => app.adicionarCarrinho());
    document.getElementById("btnRemover").addEventListener("click", () => app.removerCarrinho());
    document.getElementById("btnFinalizar").addEventListener("click", () => app.finalizarCompra());

    document.getElementById("btnAdicionar").click();
    expect(app._getState().carrinho).toHaveLength(1);

    document.getElementById("btnRemover").click();
    expect(app._getState().carrinho).toHaveLength(0);

    document.getElementById("btnAdicionar").click();
    expect(app._getState().carrinho).toHaveLength(1);

    document.getElementById("btnFinalizar").click();
    expect(app._getState().carrinho).toHaveLength(0);
  });
});