let clientes=[]
let pets=[]
let produtos=[]
let carrinho=[]

function resetState(){
clientes=[]
pets=[]
produtos=[]
carrinho=[]
}

// CLIENTE

function criarCliente(){

let nome=clienteNome.value
let email=clienteEmail.value
let vip=clienteVip.checked

if(nome==""){
alert("Nome inválido")
return
}

if(!isEmailValido(email)){
alert("Email inválido")
return
}

clientes.push({nome,email,vip})

renderClientes()

}

function isEmailValido(email){
if(typeof email !== "string") return false
const e=email.trim()
// validação simples: possui algo@algo.algo e sem espaços
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
}

function renderClientes(){

listaClientes.innerHTML=""

clientes.forEach(c=>{
let li=document.createElement("li")
li.textContent=c.nome+" - "+c.email
listaClientes.appendChild(li)
})

}

function temClienteVip(){
return clientes.some(c=>c.vip===true)
}

// PET

function cadastrarPet(){

let nome=petNome.value
let tipo=petTipo.value
let idade=parseInt(petIdade.value)

if(nome==""){
alert("Pet precisa de nome")
return
}

if(tipo==""){
alert("Pet precisa de tipo")
return
}

if(Number.isNaN(idade)){
alert("Idade inválida")
return
}

pets.push({nome,tipo,idade})

renderPets()

}

function renderPets(){

listaPets.innerHTML=""

pets.forEach(p=>{
let li=document.createElement("li")
li.textContent=p.nome+" ("+p.tipo+")"
listaPets.appendChild(li)
})

}

// PRODUTOS

function criarProduto(){

let nome=produtoNome.value
let preco=parseFloat(produtoPreco.value)

if(nome==""){
alert("Produto precisa de nome")
return
}

if(!(preco>0)){
alert("Preço inválido")
return
}

produtos.push({nome,preco})

renderProdutos()

}

function renderProdutos(){

listaProdutos.innerHTML=""
produtoSelect.innerHTML=""

produtos.forEach((p,i)=>{

let li=document.createElement("li")
li.textContent=p.nome+" - R$ "+p.preco
listaProdutos.appendChild(li)

let op=document.createElement("option")
op.value=i
op.textContent=p.nome
produtoSelect.appendChild(op)

})

}

// CARRINHO

function adicionarCarrinho(){

let p=produtos[produtoSelect.value]

if(!p) return

if(!(p.preco>0)){
alert("Produto inválido")
return
}

carrinho.push(p)

renderCarrinho()

}

function removerCarrinho(){

if(carrinho.length===0) return

carrinho.pop()

renderCarrinho()

}

function renderCarrinho(){

listaCarrinho.innerHTML=""

carrinho.forEach(p=>{

let li=document.createElement("li")
li.textContent=p.nome+" - "+p.preco
listaCarrinho.appendChild(li)

})

calcularTotal()

}

// TOTAL

function calcularTotal(){

let total=0

carrinho.forEach(p=>{

total+=p.preco

})

if(temClienteVip()){
total*=0.85
}else if(total>100){
total*=0.9
}

total=total.toFixed(2)

document.getElementById("total").textContent=total

return total

}

// FINALIZAR

function finalizarCompra(){

alert("Compra finalizada: "+calcularTotal())

carrinho=[]

renderCarrinho()

}


// CARROSSEL

let slideIndex = 0

function nextSlide(){
slideIndex++
updateSlide()
}

function prevSlide(){
slideIndex--
updateSlide()
}

function updateSlide(){

const slides = document.querySelector(".slides")
const total = document.querySelectorAll(".slide").length
if(!slides || total===0) return

if(slideIndex >= total) slideIndex = 0
if(slideIndex < 0) slideIndex = total - 1

slides.style.transform = "translateX(-" + slideIndex * 100 + "%)"

}

if(typeof window !== "undefined"){
setInterval(nextSlide,4000)
}

if(typeof module !== "undefined"){
module.exports={
resetState,
isEmailValido,
temClienteVip,
criarCliente,
renderClientes,
cadastrarPet,
renderPets,
criarProduto,
renderProdutos,
adicionarCarrinho,
removerCarrinho,
renderCarrinho,
calcularTotal,
finalizarCompra,
nextSlide,
prevSlide,
updateSlide,
_getState:()=>({clientes,pets,produtos,carrinho})
}
}