// richiamo istanza di framework Express
const express = require('express')
// creiamo un istanza dell'oggetto rotte di Express
const router = express.Router();

// importo i dati delle pizze
const menuPizze = require('./../data/menu');

// Rotte di CRUD
// index
router.get('/', function (req, res) {

    // creo un nuovo oggetto con le prop che mi servono
    const oggettoMenu = {
        numeroPizze: menuPizze.length,
        listaPizze: menuPizze
    };

    // restituisco in risposta ql'oggetto creato
    res.json(oggettoMenu);
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