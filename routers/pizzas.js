// richiamo istanza di framework Express
const express = require('express')
// creiamo un istanza dell'oggetto rotte di Express
const router = express.Router();

//  import del middleware checkTime
const checkTime = require('./../middlewares/checkTime');

// registrato per le rotte di questo router
// router.use(checkTime);

// import del controller della risorsa pizze
const pizzaController = require('./../controllers/pizzaController');

// Rotte di CRUD
// index
router.get('/', pizzaController.index);

// show
router.get('/:id', checkTime, pizzaController.show);

// store
router.post('/', pizzaController.store);

// update
router.put('/:id', pizzaController.update);

// modify
router.patch('/:id', pizzaController.modify);

// destroy
router.delete('/:id', checkTime, pizzaController.destroy);

// esporta l'istanza di queste rotte
module.exports = router;