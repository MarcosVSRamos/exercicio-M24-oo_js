function Pais(pais, estados, idade) {
    this.pais = pais;

    let _estados = estados;

    this.getEstados = function () {
        return _estados;
    }

    this.setEstados = function(valor) {
        if (typeof valor === 'number') {
            _estados = valor;
        }
    }

    this.idade = idade;
}

function Estado(estado, idadeEstado, pais, cidades) {
    Pais.call(this, pais.pais, pais.getEstados(), pais.idade);
    this.estado = estado;
    this.idadeEstado = idadeEstado;
    this.cidades = cidades;
}

Estado.prototype = Object.create(Pais.prototype);
Estado.prototype.constructor = Estado;

function Cidade(cidade, idadeCidade, populacao, estado) {
    Estado.call(this, estado.estado, estado.idadeEstado, estado, estado.cidades);
    this.cidade = cidade;
    this.idadeCidade = idadeCidade;
    this.populacao = populacao;
}

Cidade.prototype = Object.create(Estado.prototype);
Cidade.prototype.constructor = Cidade;

const pais1 = new Pais("Brasil", 26, 200);
const estado1 = new Estado("Mato Grosso do Sul", 47, pais1, 79);
const cidade1 = new Cidade('Caarapó', 65, 30000, estado1);


console.log(cidade1);
console.log(pais1.getEstados());
