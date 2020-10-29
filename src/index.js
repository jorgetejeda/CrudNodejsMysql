const express = require("express");
const app = express();
const morgan = require("morgan");

// require .env config
require("dotenv").config();

const mysql = require("mysql");
const myConnection = require("express-myconnection");

// Port
const port = process.env.PORT ||5000;

// Read json
app.use(express.json());

// middleware
app.use(morgan("dev"));

//Database connection
app.use(myConnection(mysql,{
      host: process.env.DB_HOST || "127.0.0.1",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASS || "root",
      port: process.env.DB_PORT || '8889',
      database: process.env.DB_DATABASE || "crudnodejsmysql",
    },  "single"));

// routes
app.use("/", require("./routes/customer"));

// starting the server
app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
