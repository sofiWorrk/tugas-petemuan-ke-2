const express = require("express").Router();
// const route = express.Router();

express.get("/mandor", (req, res) => {
  res.json({
    message: "Ini adalah halaman mandor, dengan method get",
  });
});

express.post("/mandor/post", (req, res) => {
  res.json({
    message: "Ini adalah halaman mandor, dengan methode post",
  });
});

express.put("/mandor/put", (req, res) => {
  res.json({
    message: "Ini adalah halaman mandor,dengan methode put",
  });
});

express.delete("/mandor/delete", (req, res) => {
  res.json({
    message: "Ini adalah halaman mandor,dengan methode delete",
  });
});

module.exports = express;
