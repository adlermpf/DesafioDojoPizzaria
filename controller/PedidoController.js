const pedidoModel = require("../model/Pedido");

const pedidoController = {
    
    adicionar:(req, res) => {
        let pedido = req.params;
        pedido = pedidoModel.fazerPedido(pedido);
    
        res.send(`Pedido de ${pedido.cliente}:<br>
        ${pedido.sabores.join(" ")}<br>
        Valor total do pedido: ${pedido.total}`);
    },

    listarTodosOsPedidos:(req, res) => {
        res.send(pedidoModel.listarTodosOsPedidos());
    },

    totalPedido:(req, res) => {
        
    }

}

module.exports = pedidoController;

