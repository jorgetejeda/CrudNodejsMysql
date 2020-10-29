const router = require('express').Router();

const customerController = require('../controllers/customerController');

router
    .get('/', customerController.list)
    .get('/:id', customerController.listById)
    .post('/add', customerController.save)
    .post('/update/:id', customerController.udpate)
    .delete('/delete/:id', customerController.delete);

module.exports = router;