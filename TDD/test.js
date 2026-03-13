
//Lista de Testes
// @author Erick
// date = 12/03/2026

//Nível 1 – Operações básicas
console.log("Nível 1 – Operações básicas");

//1.Criar um teste para soma de dois números positivos (Exemplo: 2 + 3 = 5)
function testSoma() {
  let resultado = soma(2, 3);
  if (resultado === 5) {
    console.log("1. Teste de Soma N. Positivos Passou!!!");
  } else {
    console.log("1. Teste de Soma N. Positivos Falhou!!!");
  }
}
testSoma();

//2.Criar um teste para soma com número negativo (Exemplo: 5 + (-2) = 3)
function testSomaNumerosNegativos() {
  let resultado = soma(5, -2);
  if (resultado === 3) {
    console.log("2. Teste de Soma N. Negativos Passou!");
  } else {
    console.log("2. Teste de Soma N. Negativos Falhou!");
  }
}
testSomaNumerosNegativos();

//3.Criar um teste para subtração simples (Exemplo: 7 - 3 = 4)
function testSubtração() {
  let resultado = subtração(7, 3);
  if (resultado === 4) {
    console.log("3. Teste de Subtração Passou!");
  } else {
    console.log("3. Teste de Subtração Falhou!");
  }
}
testSubtração();

//4. Criar um teste para multiplicação simples (Exemplo: 4 × 3 = 12)
function testMultiplicação() {
  let resultado = multiplicação(4, 3);
  if (resultado === 12) {
    console.log("4. Teste de Multiplicação Passou!");
  } else {
    console.log("4. Teste de Multiplicação Falhou!");
  }
}
testMultiplicação();

//5. Criar um teste para divisão simples (Exemplo: 10 ÷ 2 = 5)
function testDivisão() {
  let resultado = divisão(10, 2);
  if (resultado === 5) {
    console.log("5. Teste de Divisão Passou!");
  } else {
    console.log("5. Teste de Divisão Falhou!");
  }
}
testDivisão();

//6. Criar um teste para divisão por zero. O sistema deve lançar uma exceção.
function testDivisaoPorZero() {
  try {
    dividir(10, 0);
    console.log("6. Teste de Divisão Por Zero Falhou! Não lançou exceção");
  } catch (erro) {
    if (erro.message === "Divisão por zero não permitida") {
      console.log("6. Teste de Divisão Por Zero Passou!");
    } else {
      console.log("6. Teste de Divisão Por Zero Falhou!");
    }
  }
}
testDivisaoPorZero();

//Nível 2 – Validação de dados
console.log("Nível 2 – Validação de dados");

//7. Criar um teste para login válido (Usuário e senha corretos devem retornar verdadeiro.)
function testLoginValido() {
  let resultado = login("admin", "1234");
  if (resultado === true) {
    console.log("7. Teste de Login Válido Passou!");
  } else {
    console.log("7. Teste de Login Válido Falhou!");
  }
}
testLoginValido();

//8. Criar um teste para login inválido (Senha incorreta deve retornar falso.)
function testLoginInvalido() {
  let resultado = login("admin", "senhaerrada");
  if (resultado === false) {
    console.log("8. Teste de Login Inválido Passou!");
  } else {
    console.log("8. Teste de Login Inválido Falhou!");
  }
}
testLoginInvalido();

//9. Criar um teste para login com usuário vazio
function testLoginUsuarioVazio() {
  let resultado = login("", "1234");
  if (resultado === false) {
    console.log("9. Teste de Login com Usuário Vazio Passou!");
  } else {
    console.log("9. Teste de Login com Usuário Vazio Falhou!");
  }
}
testLoginUsuarioVazio();

//10.Criar um teste para login com senha vazia
function testLoginSenhaVazia() {
  let resultado = login("admin", "");
  if (resultado === false) {
    console.log("10. Teste de Login com Senha Vazia Passou!");
  } else {
    console.log("10. Teste de Login com Senha Vazia Falhou!");
  }
}
testLoginSenhaVazia();

//11.Criar um teste para cadastro de usuário com email válido
function testCadastroEmailValido() {
  let resultado = cadastroEmailValido("usuario@email.com");
  if (resultado === true) {
    console.log("11. Teste de Cadastro com Email Válido Passou!");
  } else {
    console.log("11. Teste de Cadastro com Email Válido Falhou!");
  }
}
testCadastroEmailValido();

//12.Criar um teste para cadastro com email inválido
function testCadastroEmailInvalido() {
  let resultado = cadastroEmailValido("emailinvalido");
  if (resultado === false) {
    console.log("12. Teste de Cadastro com Email Inválido Passou!");
  } else {
    console.log("12. Teste de Cadastro com Email Inválido Falhou!");
  }
}
testCadastroEmailInvalido();

//Nível 3 – Regras de negócio
console.log("Nível 3 – Regras de negócio");

//13.Criar um teste para cálculo de desconto de 10%
function testDesconto10() {
  let resultado = desconto10(100);
  if (resultado === 90) {
    console.log("13. Teste de Desconto 10% Passou!");
  } else {
    console.log("13. Teste de Desconto 10% Falhou!");
  }
}
testDesconto10();

//14.Criar um teste para cálculo de desconto para cliente VIP
function testDescontoVIP() {
  let resultado = descontoVIP(100);
  if (resultado === 80) {
    console.log("14. Teste de Desconto VIP Passou!");
  } else {
    console.log("14. Teste de Desconto VIP Falhou!");
  }
}
testDescontoVIP();

//15.Criar um teste para cálculo de média de notas de um aluno
function testMediaNotas() {
  let resultado = mediaNotas([7, 8, 9]);
  if (resultado === 8) {
    console.log("15. Teste de Média de Notas Passou!");
  } else {
    console.log("15. Teste de Média de Notas Falhou!");
  }
}
testMediaNotas();

//16.Criar um teste para verificar se o aluno está aprovado (média maior ou igual a 7)
function testAlunoAprovado() {
  let resultado = alunoAprovado(7);
  if (resultado === true) {
    console.log("16. Teste de Aluno Aprovado Passou!");
  } else {
    console.log("16. Teste de Aluno Aprovado Falhou!");
  }
}
testAlunoAprovado();

//17.Criar um teste para verificar se o aluno está reprovado
function testAlunoReprovado() {
  let resultado = alunoReprovado(5);
  if (resultado === true) {
    console.log("17. Teste de Aluno Reprovado Passou!");
  } else {
    console.log("17. Teste de Aluno Reprovado Falhou!");
  }
}
testAlunoReprovado();

//Nível 4 – Sistema de carrinho de compras
console.log("Nível 4 – Sistema de carrinho de compras");

//18.Criar um teste para adicionar item ao carrinho
function testAdicionarItemCarinho() {
  let carrinho = [];
  adicionarItemAoCarrinho(carrinho, "Produto A", 10, 2);
  if (carrinho.length === 1 && carrinho[0].nome === "Produto A" && carrinho[0].preco === 10 && carrinho[0].quantidade === 2) {
    console.log("18. Teste de Adicionar Item ao Carrinho Passou!");
  } else {
    console.log("18. Teste de Adicionar Item ao Carrinho Falhou!");
  }
}
testAdicionarItemCarinho();

//19.Criar um teste para remover item do carrinho
function testRemoverItemCarinho() {
  let carrinho = [];
  adicionarItemAoCarrinho(carrinho, "Produto A", 10, 1);
  adicionarItemAoCarrinho(carrinho, "Produto B", 20, 1);
  removerItemDoCarrinho(carrinho, "Produto A");
  if (carrinho.length === 1 && carrinho[0].nome === "Produto B") {
    console.log("19. Teste de Remover Item do Carrinho Passou!");
  } else {
    console.log("19. Teste de Remover Item do Carrinho Falhou!");
  }
}
testRemoverItemCarinho();

//20.Criar um teste para calcular o valor total do carrinho
function testValorTotalCarinho() {
  let carrinho = [];
  adicionarItemAoCarrinho(carrinho, "Produto A", 10, 2);
  adicionarItemAoCarrinho(carrinho, "Produto B", 5, 3);
  let total = valorTotalCarrinho(carrinho);
  if (total === 35) {
    console.log("20. Teste de Valor Total do Carrinho Passou!");
  } else {
    console.log("20. Teste de Valor Total do Carrinho Falhou!");
  }
}
testValorTotalCarinho();