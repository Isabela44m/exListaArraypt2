//Map
//Ex1
console.log("===MAP===")
const produtos = [ 
{ id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true }, 
{ id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true }, 
{ id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false }, 
{ id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true } 
]; 

 
const  nomes = produtos.map((produto) =>{
    return produto.nome.toUpperCase()
});
 
console.log(nomes); 

//EX2


const ajuste = produtos.map((valor) => {
    return {
        ...valor,
        preco: valor.preco * 0.9
    };
});

console.log(ajuste);


//Filter 
//EX3
console.log("===FILTER===");
const ativos = produtos.filter((ativ) => { 
  return ativ.ativo  === true; 
}); 
 
console.log(ativos);

//EX4
const maiores = produtos.filter((maior) => { 
  return maior.estoque  > 0 &&  maior.preco > 100; 
}); 
 
console.log(maiores);

//Find 
//Ex5
console.log("===FIND===")
const encontrar = produtos.find((numero)=> numero.id===3);
console.log(encontrar);
//EX6
const semEstoque = produtos.find((estoque0) =>estoque0.estoque === 0);
console.log(semEstoque);

//findIndex
//Ex7
console.log("===findIndex===");
const indiceMonitor = produtos.findIndex((iMonitor)=>iMonitor.nome ==="Monitor");
console.log(indiceMonitor);

//Ex8
const indiceInativo = produtos.findIndex((IInativo) =>IInativo.ativo === false);
console.log(indiceInativo);


//Reduce
//EX9
console.log("===REDUCE===");
const estoqueTotal = produtos.reduce((calcularE, valorE) => calcularE + valorE.estoque,0 );
console.log(estoqueTotal)

//EX10
const  patrimonioTotalEstoque = produtos.reduce ((total,produtoT)=>total + produtoT.preco * produtoT.estoque,0);
console.log(patrimonioTotalEstoque);


//Some
console.log("===SOME===");
//EX11
const precoSuperior = produtos.some ((precoSup)=> precoSup.preco >3000);
console.log(precoSuperior);

//EX12
const produtoInativo = produtos.some((produtosInat)=>produtosInat.ativo === false);
console.log(produtoInativo); 

//Every
//EX13
console.log("===EVERY===")
const precoMaior = produtos.every((maiorP)=> maiorP.preco >50);
console.log(precoMaior);

//EX14
const todosDisponiveis = produtos.every(
  produtoD => produtoD.estoque > 0
);

console.log(todosDisponiveis);
