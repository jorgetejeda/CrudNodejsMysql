const router = require('express').Router();

const customerController = require('../controllers/customerController');

router
    .get('/', customerController.list)
    .post('/add', customerController.save)
    .delete('/delete/:id', customerController.delete);

module.exports = router;