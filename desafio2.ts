// Como podemos melhorar o esse código usando TS? 
/***Desafio*** 
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/
//*****RESOLUÇÃO*****//
enum emprego {
    Atriz,
    Padeiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: emprego
}

let pessoa1: Humano = {
    nome: 'maria',
    idade: 29,
    profissao: emprego.Atriz
};

let pessoa2: Humano = {
    nome: 'roberto',
    idade: 19,
    profissao: emprego.Padeiro
};

let pessoa3: Humano = {
    nome: 'laura',
    idade: 32,
    profissao: emprego.Atriz
};

let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: emprego.Padeiro
}