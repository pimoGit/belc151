const express = require('express');
const app = express();
const port = 3000;

// attivazione della cartella public per uso file statici
app.use(express.static('public'));

// rotta index APP
app.get('/', (req, res) => {
    res.send("<h1>Rotta di home della nostra App della pizzeria</h1>")
})

// rotta menù APP
app.get('/menu', (req, res) => {

    // settiamo dati del json da ritornare a questa rotta (menù pizze)
    const menu = [
        {
            id: 1,
            name: "Margherita",
            image: "imgs/pizze/margherita.webp",
            ingredients: ["pomodoro", "mozzarella"],
        }, {
            id: 2,
            name: "Marinara",
            image: "imgs/pizze/marinara.jpeg",
            ingredients: ["pomodoro", "aglio", "origano"],
        }, {
            id: 3,
            name: "Diavola",
            image: "imgs/pizze/diavola.jpeg",
            ingredients: ["pomodoro", "mozzarella", "salame piccante"],
        }, {
            id: 4,
            name: "Bufalina",
            image: "imgs/pizze/bufalina.jpeg",
            ingredients: ["pomodoro", "mozzarella di bufala"],
        }, {
            id: 5,
            name: "4 formaggi",
            image: "imgs/pizze/4_formaggi.jpeg",
            ingredients: ["pomodoro", "mozzarella", "gorgonzola", "parmigiano", "ricotta"],
        }
    ];

    // ritorniamo res con json array di oggetti pizze
    res.json(menu);
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})