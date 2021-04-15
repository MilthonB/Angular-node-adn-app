//Importar modulos
const express = require('express');
const morgan = require('morgan');
const funciono2 = require("./routes/adn.routes");
const cors = require('cors');


//Iniciar express
const app = express();

//Permitir que cualquier peticion llegue 
app.use(cors());

//Variable de entorno o puerto definido
app.set('port', process.env.PORT || 4000);

//Para poder mirar las peticiones en consola
app.use(morgan('dev'));

//Uso de json
app.use(express.json());

//Usar las rutas
app.use(require('./routes/adn.routes'));



module.exports = app; 