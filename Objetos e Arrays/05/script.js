let pessoa = {
  nome: "Marcos",
  idade: 24,
  profissao: "programador",
};

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = false;

console.log(pessoa.casado);
