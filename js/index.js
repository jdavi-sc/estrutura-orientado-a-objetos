//criar duas pessoas (dois objetos)
//comparar as idades e retornar o mais velho

class pessoas {
    nome;
    idade;
    anoDeNasc;

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
        this.anoDeNasc = 2025 - idade
    }

    descreva() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
    }
}

function comparar(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`O(a) ${p1.nome} é mais velho(a)`);
    } else if (p2.idade > p1.idade) {
        console.log(`O(a) ${p2.nome} é mais velho(a)`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const davi = new pessoas("Davi", 19);
const joao = new pessoas("João", 6);

comparar(davi, joao );