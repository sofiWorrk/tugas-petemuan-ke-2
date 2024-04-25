const express = require("express").Router();
// const route = express.Router();

express.get("/pegawai", (req, res) => {
  res.json({
    message: "Ini adalah halaman pegawai, dengan method get",
  });
});

express.post("/pegawai/post", (req, res) => {
  res.json({
    message: "Ini adalah halaman pegawai, dengan methode post",
  });
});

express.put("/pegawai/put", (req, res) => {
  res.json({
    message: "Ini adalah halaman pegawai,dengan methode put",
  });
});

express.delete("/pegawai/delete", (req, res) => {
  res.json({
    message: "Ini adalah halaman pegawai,dengan methode delete",
  });
});

module.exports = express;
