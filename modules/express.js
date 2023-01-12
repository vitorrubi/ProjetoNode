const express = require("express");
const UserModel = require("../src/models/user.model");
const app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "src/views");

// para registrar o tipo de request e horário
app.use((req, res, next) => {
  console.log(`Request type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  next();
});

app.get("/views/users", async (req, res) => {
  res.render("index");
});

// Para puxar os usuários
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// para puxar os usuários por id
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// para criar um novo usuário

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// para atualizar um usuário
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// para deletar um usuário
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndRemove(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => console.log(`rodando com Express na porta ${port}`));
