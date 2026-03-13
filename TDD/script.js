
//Nível 1 – Operações básicas
// FUNÇÃO PARA SOMA
function soma(a, b) {
  return a + b;
}
// FUNÇÃO PARA SUBTRAÇÃO
function subtração(a, b) {
  return a - b;
}
// FUNÇÃO PARA MULTIPLICAÇÃO
function multiplicação(a, b) {
  return a * b;
}
// FUNÇÃO PARA DIVISÃO
function divisão(a, b) {
  return a / b;
}
// FUNÇÃO PARA DIVISÃO POR ZERO
function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero não permitida");
  }
  return a / b;
}

//Nível 2 – Validação de dados
// FUNÇÃO PARA LOGIN
function login(usuario, senha) {
  const usuarioCorreto = "admin";
  const senhaCorreta = "1234";
  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    return true;
  }
  return false;
}
// FUNÇÃO PARA CADASTRO (validar email)
function cadastroEmailValido(email) {
  if (!email || typeof email !== "string") return false;
  return email.indexOf("@") > 0 && email.indexOf(".") > email.indexOf("@");
}

//Nível 3 – Regras de negócio
// FUNÇÃO DESCONTO 10%
function desconto10(valor) {
  return valor * 0.9;
}
// FUNÇÃO DESCONTO CLIENTE VIP (20%)
function descontoVIP(valor) {
  return valor * 0.8;
}
// FUNÇÃO MÉDIA DE NOTAS
function mediaNotas(notas) {
  if (!notas || notas.length === 0) return 0;
  let soma = 0;
  for (let i = 0; i < notas.length; i++) soma += notas[i];
  return soma / notas.length;
}
// FUNÇÃO ALUNO APROVADO (média >= 7)
function alunoAprovado(media) {
  return media >= 7;
}
// FUNÇÃO ALUNO REPROVADO (média < 7)
function alunoReprovado(media) {
  return media < 7;
}

//Nível 4 – Sistema de carrinho de compras
// Carrinho: array de itens { nome, preco, quantidade }
function adicionarItemAoCarrinho(carrinho, nome, preco, quantidade) {
  quantidade = quantidade || 1;
  carrinho.push({ nome: nome, preco: preco, quantidade: quantidade });
  return carrinho;
}
function removerItemDoCarrinho(carrinho, nome) {
  for (let i = 0; i < carrinho.length; i++) {
    if (carrinho[i].nome === nome) {
      carrinho.splice(i, 1);
      return carrinho;
    }
  }
  return carrinho;
}
function valorTotalCarrinho(carrinho) {
  let total = 0;
  for (let i = 0; i < carrinho.length; i++) {
    total += carrinho[i].preco * carrinho[i].quantidade;
  }
  return total;
}
