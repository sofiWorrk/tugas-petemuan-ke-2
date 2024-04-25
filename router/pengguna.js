const express = require("express").Router();
// const route = express.Router();

express.get("/pengguna", (req, res) => {
  res.json({
    message: "Ini adalah halaman pengguna, dengan method get",
  });
});

express.post("/pengguna/post", (req, res) => {
  res.json({
    message: "Ini adalah halaman pengguna, dengan methode post",
  });
});

express.put("/pengguna/put", (req, res) => {
  res.json({
    message: "Ini adalah halaman pengguna,dengan methode put",
  });
});

express.delete("/pengguna/delete", (req, res) => {
  res.json({
    message: "Ini adalah halaman pengguna,dengan methode delete",
  });
});

module.exports = express;
