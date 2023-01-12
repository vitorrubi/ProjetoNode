const http = require("http");
const { stringify } = require("querystring");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Contet-type": "text/html" });
    res.end("<h1>Home page</h1>");
  }

  if (req.url === "/users") {
    const users = [
      {
        name: "john doe",
        email: "joão@hotmail.com",
      },
      {
        name: "Joana doe",
        email: "joana@hotmail.com",
      },
    ];

    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Rodando na porta ${port}!`));
