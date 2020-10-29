const express = require("express");
const app = express();
const morgan = require("morgan");

const mysql = require("mysql");
const myConnection = require("express-myconnection");

// Port
const port = process.env.PORT || 3000;

// Read json
app.use(express.json());

// middleware
app.use(morgan("dev"));

//Database connection
app.use(myConnection(mysql,{
      host: "127.0.0.1",
      user: "root",
      password: "root",
      port: '8889',
      database: "crudnodejsmysql",
    },  "single"));

// routes
app.use("/", require("./routes/customer"));

// starting the server
app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
