const { error } = require("console");
const fs = require("fs");
const path = require("path");

//criar uma pasta
//fs.mkdir(path.join(__dirname, "/test"), (error) => {
//if (error) {
//  console.log("Erro: ", error);
// }
// console.log("Pasta Criada com Sucesso!");
//});

//Criar um arquivo de texto
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso");
  }
);

// adicionar a um arquivo
fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello world",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo modificado com sucesso");
  }
);

// Ler arquivo
fs.readFile(
  path.join(__dirname, "/test", "test.txt"),
  "utf-8",
  (error, data) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log(data);
  }
);
