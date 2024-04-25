const express = require("express").Router();
// const route = express.Router();

express.get("/pedagang", (req, res) => {
  res.json({
    message: "Ini adalah halaman pedagang, dengan method get",
  });
});

express.post("/pedagang/post", (req, res) => {
  res.json({
    message: "Ini adalah halaman pedagang, dengan methode post",
  });
});

express.put("/pedagang/put", (req, res) => {
  res.json({
    message: "Ini adalah halaman pedagang,dengan methode put",
  });
});

express.delete("/pedagang/delete", (req, res) => {
  res.json({
    message: "Ini adalah halaman pedagang,dengan methode delete",
  });
});

module.exports = express;
