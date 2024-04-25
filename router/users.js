const express = require("express").Router();
// const route = express.Router();

express.get("/users", (req, res) => {
  res.json({
    message: "Ini adalah halaman users, dengan method get",
  });
});

express.post("/users/post", (req, res) => {
  res.json({
    message: "Ini adalah halaman users, dengan methode post",
  });
});

express.put("/users/put", (req, res) => {
  res.json({
    message: "Ini adalah halaman users,dengan methode put",
  });
});

express.delete("/users/delete", (req, res) => {
  res.json({
    message: "Ini adalah halaman users,dengan methode delete",
  });
});

module.exports = express;
