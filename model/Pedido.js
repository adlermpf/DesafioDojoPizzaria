const pizzaModel = require("./Pizza");

let pedidos = [
    {
        cliente:'Joao',
        sabores:['Calabresa'],
        total: 10
    }
];

const listarTodosOsPedidos = () => {
    let conteudo = ""
        for(let pedido of pedidos){
            conteudo+=`
            ------------ <br>
            Cliente: ${pedido.cliente} <br>
            Sabores: ${pedido.sabores.join(" ")} <br>
            Preço: ${pedido.total} <br>     
            ------------<br>`
        }
        return conteudo;     
}

const fazerPedido = (pedido)=>{
    let cliente = pedido.cliente;

    let sabores = [];
    sabores.push(pedido.sabor1);
    sabores.push(pedido.sabor2)
    sabores.push(pedido.sabor3)
    sabores.push(pedido.sabor4)
    
    let total = 0;
    for(sabor of sabores){
    for(pizza of pizzaModel.pizzas){
        if(sabor==pizza.sabor){
                total+= pizza.preco;
            }
        }
    }
    
    pedido = {
        cliente: cliente,
        sabores: sabores,
        total: total
    }

    pedidos.push(pedido);
    
    return pedido;
}

module.exports = {fazerPedido, listarTodosOsPedidos}