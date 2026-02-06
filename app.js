const express = require('express');
const app = express();
const port = 3000;

// importa router delle pizze
const pizzasRouter = require('./routers/pizzas');

// attivazione della cartella public per uso file statici
app.use(express.static('public'));

// rotta home APP
app.get('/', (req, res) => {
    res.send("<h1>Rotta di home della nostra App della pizzeria</h1>")
})

// istanza delle rotte per risorsa pizze
app.use("/pizzas", pizzasRouter)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})