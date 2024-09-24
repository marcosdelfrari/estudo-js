let pessoa = {
  nome: "Matheus",
  idade: 28,
  profissao: "programador",
  hobbies: ["video game", "fumar"],
};

let pessoaTexto = JSON.stringify(pessoa);

// console.log(pessoaTexto.nome);
console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);
