const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM customer", (err, customers) => {
      if (err) res.status(502).send("Error: " + err);
      res.json(customers);
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO customer set ?", [data], (err, customer) => {
      console.log(customer.insertId);
      if (err) res.status(502).send("Error: " + err);
      if (customer.affectedRows > 0)
        res.send(`Inserted id ${customer.insertId}`);
    });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("DELETE FROM customer WHERE id = ?", [id], (err, customer) => {
      if (err) 
        res.status(502).send("Error: " + err);
      if(customer.affectedRows > 0) 
        res.json(`ID:${id} was deleted`);
      else
        res.status(404).json(`ID:${id} not found`);
    });
  });
};

module.exports = controller;
