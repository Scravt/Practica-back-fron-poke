const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const pokeData = require('./mockeados/pokemonData.json');
const entrenadoresData = require('./mockeados/entrenadorData.json');
const gymData = require('./mockeados/gymData.json');
const objetosData = require('./mockeados/objetosData.json');
const regionesData = require('./mockeados/regionesData.json');


app.use(bodyParser.json());

app.get('/pokemons', (req, res) => {
    res.send(pokeData);
});
app.get('/entrenadores', (req, res) => {
    res.send(entrenadoresData);
});
app.get('/gym', (req, res) => {
    res.send(gymData);
});
app.get('/objetos', (req, res) => {
    res.send(objetosData);
});
app.get('/regiones', (req, res) => {
    res.send(regionesData);
});







app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
