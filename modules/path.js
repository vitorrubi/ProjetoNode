const path = require("path");

// Basename

console.log(path.basename(__filename));

// Nome do diretório atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Criar objeto Path
console.log(path.parse(__filename));

//juntar caminho de arquivos

console.log(path.join(__dirname, "test", "test.html"));
