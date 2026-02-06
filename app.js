const express = require('express');
const app = express();
const port = 3000;

// attivazione della cartella public per uso file statici
app.use(express.static('public'));

// rotta index APP
app.get('/', (req, res) => {
    res.send("<h1>Rotta di home della nostra App della pizzeria</h1>")
})

// Rotte di CRUD
// index
app.get('/pizzas', function (req, res) {
    res.send('Lista delle pizze');
});

// show
app.get('/pizzas/:id', function (req, res) {
    res.send('Dettagli della pizza ' + req.params.id);
});

// store
app.post('/pizzas', function (req, res) {
    res.send('Creazione nuova pizza');
});

// update
app.put('/pizzas/:id', function (req, res) {
    res.send('Modifica integrale della pizza ' + req.params.id);
});

// modify
app.patch('/pizzas/:id', function (req, res) {
    res.send('Modifica parziale della pizza ' + req.params.id);
});

// destroy
app.delete('/pizzas/:id', function (req, res) {
    res.send('Eliminazione della pizza ' + req.params.id);
});





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})