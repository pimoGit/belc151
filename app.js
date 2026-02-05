const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    // creo un oggetto js da inviare nella res
    const person = {
        name: "Ted",
        lastname: "Lasso"
    };

    res.json(person);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})