var dados = [
    {
        "imagem" : "assets/img/produtos/gabinete.jpg",
        "cabecalho" : "Gabinete ATX 220R 4B - Composto",
        "valor" : 120.0
    },
    {
        "imagem" : "assets/img/produtos/monitor.jpg",
        "cabecalho" : "Monitor AOC 21,5 LED Full HD",
        "valor" : 620.0
    },
    {
        "imagem" : "assets/img/produtos/teclado.jpg",
        "cabecalho" : "Teclado USB K1500 HP",
        "valor" : 150.0
    },
    {
        "imagem" : "assets/img/produtos/mouse.jpg",
        "cabecalho" : "M325 Wireless Mouse",
        "valor" : 189.0
    },
    {
        "imagem" : "assets/img/produtos/processador.jpg",
        "cabecalho" : "Processador Intel Core i7",
        "valor" : 1400.0
    },
    {
        "imagem" : "assets/img/produtos/nobreak.jpg",
        "cabecalho" : "Nobreak Mini III Bivolt",
        "valor" : 500.0
    }
];

var produtos = {
    listAll: function() {
        return dados;
    },
    getByIndex: function(index) {
        return dados [index];
    }
}

module.exports = produtos;