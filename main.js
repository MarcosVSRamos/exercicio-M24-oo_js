function Cidade(cidade, populacao, idade, estado) {
    this.cidade = cidade;

    let _populacao = populacao;

    this.getPopulacao = function () {
        return _populacao;
    }

    this.setPopulacao = function(valor) {
        if (typeof valor === 'number') {
            _populacao = valor;
        }
    }

    this.idade = idade;
    this.estado = estado;

}

function Bairro(bairro, cidade, mercados) {
    Cidade.call(this, cidade.cidade, cidade.populacao, cidade.idade, cidade.estado);
    this.bairro = bairro;
    this.mercados = mercados;
}

Bairro.prototype = Object.create(Cidade.prototype);
Bairro.prototype.constructor = Bairro;

function Mercado(mercado, produtos, rua, numero, bairro) {
    Bairro.call(this, bairro.bairro, bairro, bairro.mercados);
    this.mercado = mercado;
    this.produtos = produtos;
    this.rua = rua;
    this.numero = numero;
}

Mercado.prototype = Object.create(Bairro.prototype);
Mercado.prototype.constructor = Mercado;


const cidade1 = new Cidade("Caarapó", 30000, 60, "Mato Grosso do Sul");
const bairro1 = new Bairro("Capitão Vigário", cidade1, 3);
const mercado1 = new Mercado("Antunes", ["Secos", "Molhados", "Frios"], "Manoel Bandeira", 1192, bairro1);
const mercado2 = new Mercado("Pão na hora", ["Confeitaria", "Padaria", "Café da manhã"], "Osvald Andrade", 1244, bairro1);

console.log(mercado1);
console.log(mercado2);
//console.log(cidade1.getPopulacao());
