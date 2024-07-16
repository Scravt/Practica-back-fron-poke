const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


const pokeData = require('./mockeados/pokemonData.json');
const trainersData = require('./mockeados/trainersData.json');
const gymData = require('./mockeados/gymData.json');
const objetosData = require('./mockeados/objetosData.json');
const regionsData = require('./mockeados/regionsData.json');

app.use(cors());
app.use(bodyParser.json());

app.get('/pokemons', (req, res) => {
    res.send(pokeData);
});
app.get('/trainers', (req, res) => {
    res.send(trainersData);
});
app.get('/gym', (req, res) => {
    res.send( gymData );
});
app.get('/objetos', (req, res) => {
    res.send(objetosData);
});
app.get('/regions', (req, res) => {
    res.send(regionsData);
});







app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
