interface pessoaGenerica {
    nome: string,
    idade: number,
    profissao: profissao;
}

enum profissao {
    Atriz,
    Padeiro
}


let pessoa1: pessoaGenerica = {

    nome: 'maria',
    idade: 29,
    profissao: profissao.Atriz

};

let pessoa2: pessoaGenerica = {
    nome: 'roberto',
    idade: 19,
    profissao: profissao.Padeiro
};

let pessoa3: pessoaGenerica = {
    nome: 'laura',
    idade: 32,
    profissao: profissao.Atriz
};

let pessoa4: pessoaGenerica = {
    nome: "carlos",
    idade: 19,
    profissao: profissao.Padeiro
}
