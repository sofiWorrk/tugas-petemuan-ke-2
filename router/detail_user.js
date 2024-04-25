const express = require("express").Router();
// const route = express.Router();

express.get("/detail_user", (req, res) => {
  res.json({
    message: "Ini adalah halaman detail_user, dengan method get",
  });
});

express.post("/detail_user/post", (req, res) => {
  res.json({
    message: "Ini adalah halaman detail_user, dengan methode post",
  });
});

express.put("/detail_user/put", (req, res) => {
  res.json({
    message: "Ini adalah halaman detail_user,dengan methode put",
  });
});

express.delete("/detail_user/delete", (req, res) => {
  res.json({
    message: "Ini adalah halaman detail_user,dengan methode delete",
  });
});

module.exports = express;
