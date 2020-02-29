let pizzas =[
    {
        sabor: "Calabresa",
        categoria: "salgada",
        preco: 10
    },
    {
        sabor: "Mussarela",
        categoria: "salgada",
        preco: 12
    },
    {
        sabor: "Chocolate",
        categoria: "doce",
        preco: 15
    },
    {
        sabor: "Brócolis",
        categoria: "vegetariana",
        preco: 30
    }
];
const listarPizzas= () =>{
    let conteudo = ""
        for(let pizza of pizzas){
            conteudo+=`
            ------------ <br>
            sabor: ${pizza.sabor} <br>
            Categoria: ${pizza.categoria} <br>
            Preço: ${pizza.preco} <br>        
            ------------`
        }
        return conteudo;     
}


const adicionarNovaPizza = (novaPizza) => pizzas.push(novaPizza);

const buscaPizzaPorSabor = (pizzaBuscada) => {
        let resultado = pizzas.filter((pizza => pizza.sabor === pizzaBuscada.sabor));

        if(resultado.length > 0){
            return resultado;
        } else {
            return false;
        }
}

const buscaPizzaPorCategoria = (pizzaBuscada) => {
    let resultado = pizzas.filter((pizza => pizza.categoria === pizzaBuscada.categoria));

    if(resultado.length > 0){
        return resultado;
    } else {
        return false;
    }
}


module.exports = {listarPizzas, adicionarNovaPizza, buscaPizzaPorSabor, buscaPizzaPorCategoria, pizzas}