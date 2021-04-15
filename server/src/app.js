//Importar modulos
const express = require('express');
const morgan = require('morgan');
const funciono2 = require("./routes/adn.routes");
const cors = require('cors');


//Iniciar express
const app = express();

app.use(cors());
app.set('port', process.env.PORT || 4000);

//Para poder mirar las peticiones en cosala
app.use(morgan('dev'));

app.use(express.json());

//Usar las rutas
app.use(require('./routes/adn.routes'));



module.exports = app; 