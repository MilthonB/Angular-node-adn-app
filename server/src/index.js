// arranca toda la apicacion


//obtener la base de datos
require('./database');

const app = require("./app");  
const path = require('path') 
const expr = require('express') 
 
//Utilizar el valor de la constate port
app.listen( app.get('port'));

app.use(expr.static(path.join(__dirname, '../public')))
    .get('/', (req, res) => res.render('../public/index.html'))

  



console.log("server on port: ", app.get('port'));
