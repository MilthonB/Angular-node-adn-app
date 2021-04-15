// Arranque

//Arrancar base de datos
require('./database');

//Importaciones
const app = require("./app");  
const path = require('path') 
const expr = require('express') 
 
//Utilizar el valor de la constante port
app.listen( app.get('port'));

//Establecer una ruta 
app.use(expr.static(path.join(__dirname, '../public')))
    .get('/', (req, res) => res.render('../public/index.html'))

  



console.log("server on port: ", app.get('port'));
