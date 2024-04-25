const express = require("express").Router();
// const route = express.Router();

express.get("/mentor", (req, res) => {
  res.json({
    message: "Ini adalah halaman mentor, dengan method get",
  });
});

express.post("/mentor/post", (req, res) => {
  res.json({
    message: "Ini adalah halaman mentor, dengan methode post",
  });
});

express.put("/mentor/put", (req, res) => {
  res.json({
    message: "Ini adalah halaman mentor,dengan methode put",
  });
});

express.delete("/mentor/delete", (req, res) => {
  res.json({
    message: "Ini adalah halaman mentor,dengan methode delete",
  });
});

module.exports = express;
