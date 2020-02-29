const pizzaModel = require("../model/Pizza");


const pizzaController = {
    index:(req, res) => res.send(pizzaModel.listarPizzas()),

    adicionar:(req, res) => {
        let novaPizza = req.params;
        
        novaPizza.preco = parseInt(novaPizza.preco);
        
        pizzaModel.adicionarNovaPizza(novaPizza);
        res.send(`A pizza de ${novaPizza.sabor} da categoria ${novaPizza.categoria} e preco ${novaPizza.preco}
        foi adicionada com sucesso!`);
    },
    buscarsabor:(req, res) => {
        let pizzaBuscada = req.params;
        if(pizzaModel.buscaPizzaPorSabor(pizzaBuscada)){
            let pizzaEncontrada = (pizzaModel.buscaPizzaPorSabor(pizzaBuscada)).pop();
            
            res.send(`A pizza ${pizzaBuscada.sabor} foi encontrada<br>
            -----------<br>
            Sabor: ${pizzaEncontrada.sabor}<br>
            Categoria: ${pizzaEncontrada.categoria}<br>
            Preço: ${pizzaEncontrada.preco}<br>
            ------------`);
        } else {
            res.send(`A pizza ${pizzaBuscada.sabor} não foi encontrada`);
        };
    },
    buscarcategoria:(req, res) => {
        let categoriaBuscada = req.params;
        if(pizzaModel.buscaPizzaPorCategoria(categoriaBuscada)){
            let pizzaEncontrada = (pizzaModel.buscaPizzaPorCategoria(categoriaBuscada));
            let acumulador = `Foram encontrados ${pizzaEncontrada.length} pizzas na categoria ${categoriaBuscada.categoria}<br>`;
            for(let pizza of pizzaEncontrada){
                acumulador+=`-----------<br>
                Sabor: ${pizza.sabor}<br>
                Categoria: ${pizza.categoria}<br>
                Preço: ${pizza.preco}<br>
                ------------`
            }
            
            res.send(acumulador);
        
        } else {
            res.send(`A pizza ${categoriaBuscada.categoria} não foi encontrada`);
            
        };
    }
}

module.exports = pizzaController