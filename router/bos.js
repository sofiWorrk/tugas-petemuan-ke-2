const express = require("express").Router();
// const route = express.Router();

express.get("/bos", (req, res) => {
  res.json({
    message: "Ini adalah halaman bos, dengan method get",
  });
});

express.post("/bos/post", (req, res) => {
  res.json({
    message: "Ini adalah halaman bos, dengan methode post",
  });
});

express.put("/bos/put", (req, res) => {
  res.json({
    message: "Ini adalah halaman bos,dengan methode put",
  });
});

express.delete("/bos/delete", (req, res) => {
  res.json({
    message: "Ini adalah halaman bos,dengan methode delete",
  });
});

module.exports = express;
