const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/beers", (req, res) => {
    const response = getAllBeers();
    return res.status(response.status).send(response.body);
});

app.get("/beer", (req, res) => {
    const response = getBeer(req.query.id);
    return res.status(response.status).send(response.body);
});

app.delete("/beer", (req, res) => {
    const response = removeBeer(req.query.id);
    return res.status(response.status).send(response.body);
});

app.post("/beer", (req, res) => {
    const response = addBeer({
        name: req.body.name,
        priceTTC: req.body.priceTTC,
        priceHT: req.body.priceHT,
        alcoholDegre: req.body.alcoholDegre,
        comment: req.body.comment,
        type: req.body.type,
        owner: req.body.owner
    });
    return res.status(response.status).send(response.body);
});

app.get("/beers", (req, res) => {
    const response = getAllBeers();
    return res.status(response.status).send(response.body);
});

app.put("/beer", (req, res) => {
    const response = updateBeer({
        id: req.body.id,
        name: req.body.name,
        priceTTC: req.body.priceTTC,
        priceHT: req.body.priceHT,
        alcoholDegre: req.body.alcoholDegre,
        comment: req.body.comment,
        type: req.body.type,
        owner: req.body.owner
    });
    return res.status(response.status).send(response.body);
});


const beers = [];
let id = 0;

function addBeer(beer) {
    if (!beer.name || !beer.type || !beer.priceHT || !beer.priceTTC) {
        return {
            status: 400,
            body: {message: "Propriété manquante"}
        };
    }
    if (!beer.alcoholDegre) {
        return {
            status: 400,
            body: {message: "Propriété manquante"}
        };
    }
    id++;

    beers.push({...beer, id});
    return {
        status: 200,
        body: {...beer, id}
    };
}

function updateBeer(beer) {
    const findedIndex = beers.findIndex(b => b.id == beer.id);

    if (findedIndex < 0) {
        return {
            status: 404,
            body: {
                message: 'Not found',
            }
        }
    }
    beers[findedIndex] = {...beer};

    return {
        status: 200,
        body: {message: 'Updated'}
    }
}

function removeBeer(beerId) {

    const findedIndex = beers.findIndex(b => b.id == beerId);
    if (findedIndex < 0) {
        return {
            status: 404,
            body: {message: 'Not found'}
        }
    }

    beers.splice(findedIndex, 1);
    return {
        status: 200,
        body: {message: 'Removed'}
    }
}

function getBeer(beerId) {
    const findedIndex = beers.findIndex(b => b.id == beerId);

    if (findedIndex < 0) {
        return {
            status: 404,
            body: {message: 'Not Found'}
        }
    }

    return {
        status: 200,
        body: beers[findedIndex]
    }
}

function getAllBeers() {
    return {
        status: 200,
        body: beers
    }
}

app.listen(port, () => {
    console.log("Listening on " + port);
});

module.exports = app;
