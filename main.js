function Cidade(cidade, populacao, idade, estado) {
    this.cidade = cidade;
    
    let _populacao = populacao;

    this.getpopulacao = function () {
        return _populacao;
    }

    this.setPopulacao = function(valor) {

        if (typeof valor === 'number') {
            _populacao = valor;
        }

    }

    // this.populacao = populacao;
    this.idade = idade;
    this.estado = estado;

    this.toJSON = function () {
        return {
            cidade: this.cidade,
            populacao: this.getpopulacao(),
            idade: this.idade,
            estado: this.estado
        }
    }
}

function Bairro(bairro, cidade, mercados) {
    this.bairro = bairro;
    this.mercados = mercados;

    Cidade.call(this, cidade.cidade, cidade.getpopulacao(), cidade.idade, cidade.estado);
}

function Mercado(mercado, produtos, rua, numero, bairro) {
    this.mercado = mercado;
    this.produtos = produtos;
    this.rua = rua;
    this.numero = numero;

    this.bairro = bairro.bairro;
    this.mercados = bairro.mercados;
    this.cidade = bairro.cidade;
    this.populacao = bairro.getpopulacao();
    this.idade = bairro.idade;
    this.estado = bairro.estado;

    this.toJSON = function () {
        return {
            mercado: this.mercado,
            produtos: this.produtos,
            rua: this.rua,
            numero: this.numero,
            bairro: this.bairro,
            mercados: this.mercados,
            cidade: this.cidade,
            populacao: this.populacao,
            idade: this.idade,
            estado: this.estado
        }
    }
}

const cidade1 = new Cidade("Caarapó", 30000, 60, "Mato Grosso do Sul");
const bairro1 = new Bairro("Capitão Vigário", cidade1, 3);
const mercado1 = new Mercado("Antunes", ["Secos", "Molhados", "Frios"], "Manoel Bandeira", 1192, bairro1);
const mercado2 = new Mercado("Pão na hora", ["Confeitaria", "Padaria", "Café da manhã"], "Osvald Andrade", 1244, bairro1);


console.log(mercado1);
console.log(mercado2);
