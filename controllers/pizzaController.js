
// Importiamo il file di connessione al database
const connection = require('./../data/db');

// import dei data della risorsa
const menuPizze = require('./../data/menu');

function index(req, res) {
    // prepariamo la query
    const sql = 'SELECT * FROM pizzas';

    // eseguiamo la query!
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results);
    });
}

function show(req, res) {
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const idNum = parseInt(req.params.id)

    // introduciamo un errore a caso per test middelware err 500
    // throw new Error("Errore di test middleware");

    // cerchiamo il pizza tramite id
    const pizza = menuPizze.find(pizza => pizza.id === idNum);

    // condizione di check se trovato item
    if (!pizza) {

        // forziamo lo stato di risposta a 404
        res.status(404);

        // rispondiamo con oggetto di errore
        return res.json({
            errror: "Not Found",
            message: "Pizza non trovata"
        })
    }


    // Restituiamolo sotto forma di JSON   
    res.json(pizza);
}

function store(req, res) {
    const newId = Date.now();

    // Creiamo un nuovo oggetto pizza
    const newPizza = {
        id: newId,
        name: req.body.name,
        image: req.body.image,
        ingredients: req.body.ingredients,

    }

    // Aggiungiamo la nuova pizza al menu
    menuPizze.push(newPizza);

    // controlliamo
    console.log(menuPizze);


    // Restituiamo lo status corretto e la pizza appena creata
    res.status(201);
    res.json(newPizza);
}

function update(req, res) {
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il pizza tramite id
    const pizza = menuPizze.find(pizza => pizza.id === id);

    // Piccolo controllo
    if (!pizza) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Pizza non trovata"
        })
    }

    // Aggiorniamo la pizza
    pizza.name = req.body.name;
    pizza.image = req.body.image;
    pizza.ingredients = req.body.ingredients;

    // Controlliamo il menu
    console.log(menuPizze)

    // Restituiamo la pizza appena aggiornata...
    res.json(pizza);
}

// potenziale modifica parziale
function modify(req, res) {
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il pizza tramite id
    const pizza = menuPizze.find(pizza => pizza.id === id);

    // Piccolo controllo
    if (!pizza) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Pizza non trovata"
        })
    }

    // Aggiorniamo la pizza
    req.body.name ? pizza.name = req.body.name : pizza.name = pizza.name;
    req.body.image ? pizza.image = req.body.image : pizza.image = pizza.image;
    req.body.ingredients ? pizza.ingredients = req.body.ingredients : pizza.ingredients = pizza.ingredients;


    // Controlliamo il menu
    console.log(menuPizze)

    // Restituiamo la pizza appena aggiornata...
    res.json(pizza);
}

function destroy(req, res) {
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il pizza tramite id
    const pizza = menuPizze.find(pizza => pizza.id === id);

    // Piccolo controllo
    if (!pizza) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Pizza non trovata"
        })
    }

    // Rimuoviamo la pizza dal menu
    menuPizze.splice(menuPizze.indexOf(pizza), 1);

    // forziamo status secondo convenzioni REST che chiude anche function
    res.sendStatus(204)
}

// esportiamo tutto
module.exports = { index, show, store, update, destroy, modify }