// import dei data della risorsa
const menuPizze = require('./../data/menu');

function index(req, res) {
    //Inizialmente, il menu filtrato corrisponde a quello originale
    let filteredMenu = menuPizze;

    // Se la richiesta contiene un filtro, allora filtriamo il menu
    if (req.query.ingredient) {
        filteredMenu = menuPizze.filter(
            pizza => pizza.ingredients.includes(req.query.ingredient)
        );
    }

    // creo un nuovo oggetto con le prop che mi servono
    const oggettoMenu = {
        numeroPizze: filteredMenu.length,
        listaPizze: filteredMenu
    };

    // restituisco in risposta ql'oggetto creato
    res.json(oggettoMenu);
}

function show(req, res) {
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const idNum = parseInt(req.params.id)

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
    res.send('Creazione nuova pizza');
}

function update(req, res) {
    res.send('Modifica integrale della pizza ' + req.params.id);
}

function modify(req, res) {
    res.send('Modifica parziale della pizza ' + req.params.id);
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