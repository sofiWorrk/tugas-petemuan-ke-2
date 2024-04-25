const express = require("express").Router();
// const route = express.Router();

express.get("/karyawan", (req, res) => {
  res.json({
    message: "Ini adalah halaman karyawan, dengan method get",
  });
});

express.post("/karyawan/post", (req, res) => {
  res.json({
    message: "Ini adalah halaman karyawan, dengan methode post",
  });
});

express.put("/karyawan/put", (req, res) => {
  res.json({
    message: "Ini adalah halaman karyawan,dengan methode put",
  });
});

express.delete("/karyawan/delete", (req, res) => {
  res.json({
    message: "Ini adalah halaman karyawan,dengan methode delete",
  });
});

module.exports = express;
