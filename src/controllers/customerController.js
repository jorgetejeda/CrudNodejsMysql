const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM customer", (err, customers) => {
      if (err) res.status(502).json({ menssage: err});
      res.json(customers);
    });
  });
};

controller.listById = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, customer) => {
      if (err) res.status(502).send("Error: " + err);
      if (customer.length == 0) res.status(404).json({ message: "User not found"});
      else res.json(customer);
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO customer set ?", [data], (err, customer) => {
      console.log(customer.insertId);
      if (err) res.status(502).json({ menssage: err});
      if (customer.affectedRows > 0)
        res.json({ message: `Inserted id ${customer.insertId}`});
    });
  });
};

controller.udpate = (req,res)=>{
  const {id} = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn)=>{
    conn.query("UPDATE customer SET ? WHERE id = ?", [newCustomer, id], (err, customer)=>{
      if (err) res.status(502).send("Error: " + err);
      if (customer.affectedRows > 0) res.json({ message: `ID:${id} was updated` });
      else res.status(404).json({ message: `ID:${id} not found` });
    })
  })
}

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("DELETE FROM customer WHERE id = ?", [id], (err, customer) => {
      if (err) res.status(502).send("Error: " + err);
      if (customer.affectedRows > 0) res.json({ message: `ID:${id} was deleted` });
      else res.status(404).json({ message: `ID:${id} not found` });
    });
  });
};

module.exports = controller;
