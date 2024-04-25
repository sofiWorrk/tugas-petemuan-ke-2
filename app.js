const express = require("express");
const app = express();
const port = 3000;
const pengguna = require("./router/pengguna");
const pegawai = require("./router/pegawai");
const bos = require("./router/bos");
const detailUser = require("./router/detail_user");
const karyawan = require("./router/karyawan");
const mandor = require("./router/mandor");
const pedagang = require("./router/pedagang");
const users = require("./router/users");
const mentor = require("./router/mentor");
const guru = require("./router/guru");

app.use(
  pengguna,
  pegawai,
  bos,
  detailUser,
  karyawan,
  mandor,
  pedagang,
  users,
  mentor,
  guru
);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
