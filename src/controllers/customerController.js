const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM customer', (err, customers)=> {
      if (err) res.status(502).send("Error: " + err);
      res.json(customers);
    });
  });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn)=>{
        conn.query('INSERT INTO customer set ?', [data], (err, customer)=>{
            console.log(err);
            if(err) 
                res.status(502).send("Error: " + err);
            if(customer.affectedRows > 0)
                res.send(`Inserted id ${customer.insertedId}`);
        });
    })
}

module.exports = controller;
