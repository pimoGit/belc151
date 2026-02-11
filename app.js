const express = require('express');
const app = express();
const port = 3000;

//  import del middleware checkTime
// const checkTime = require('./middlewares/checkTime');

// import del middelware di gestione errore interno 500
const errorsHandler = require("./middlewares/errorsHandler");

// importa router delle pizze
const pizzasRouter = require('./routers/pizzas');

// attivazione della cartella public per uso file statici
app.use(express.static('public'));

// registro il body-parser per "application/json"...
app.use(express.json());

// registro middleware checkTime
// app.use(checkTime);

// rotta home APP
app.get('/', (req, res) => {
    res.send("<h1>Rotta di home della nostra App della pizzeria</h1>")
})

// registrazione middleware su router specifico
// app.use("/pizzas", checkTime)

// istanza delle rotte per risorsa pizze
app.use("/pizzas", pizzasRouter)

// registriamo middelware di gestione err 500
app.use(errorsHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})