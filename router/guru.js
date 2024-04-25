const express = require("express").Router();
// const route = express.Router();

express.get("/guru", (req, res) => {
  res.json({
    message: "Ini adalah halaman guru, dengan method get",
  });
});

express.post("/guru/post", (req, res) => {
  res.json({
    message: "Ini adalah halaman guru, dengan methode post",
  });
});

express.put("/guru/put", (req, res) => {
  res.json({
    message: "Ini adalah halaman guru,dengan methode put",
  });
});

express.delete("/guru/delete", (req, res) => {
  res.json({
    message: "Ini adalah halaman guru,dengan methode delete",
  });
});

module.exports = express;
