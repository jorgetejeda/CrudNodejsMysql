const express = require("express");
const app = express();
const morgan = require("morgan");

const mysql = require("mysql");
const myConnection = require("express-myconnection");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("Hola mundo");
  res.send("hola");
});

// middleware
app.use(morgan("dev"));
app.use(
  myConnection(
    mysql,
    {
      host: "127.0.0.1",
      user: "root",
      password: "root",
      port: '8889',
      database: "crudnodejsmysql",
    },
    "single"
  )
);
//routes

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
