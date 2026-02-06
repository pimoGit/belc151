// richiamo istanza di framework Express
const express = require('express')
// creiamo un istanza dell'oggetto rotte di Express
const router = express.Router();

// Rotte di CRUD
// index
router.get('/', function (req, res) {
    res.send('Lista delle pizze');
});

// show
router.get('/:id', function (req, res) {
    res.send('Dettagli della pizza ' + req.params.id);
});

// store
router.post('/', function (req, res) {
    res.send('Creazione nuova pizza');
});

// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale della pizza ' + req.params.id);
});

// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale della pizza ' + req.params.id);
});

// destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione della pizza ' + req.params.id);
});

// esporta l'istanza di queste rotte
module.exports = router;