let pessoa = {
  nome: "Matheus",
};

let pessoafake = {
  nome: "Matheus",
};

let pessoa2 = pessoa;

console.log(pessoa == pessoa2);

console.log(pessoa == pessoafake);

console.log(pessoa2 == pessoafake);

pessoa2.nome = "Pedro";

console.log(pessoa.nome);

pessoa.nome = "Marica";

console.log(pessoa2.nome);
