
//declaracion de base de datos 
const mongoose = require('mongoose');

//conexion a la base de datos
mongoose.connect( process.env.MONGODB_URI ||'mongodb://localhost/dan-db',{
    useUnifiedTopology:true,
    useNewUrlParser: true
})
.then( db => console.log('db conectada'))
.catch(err => console.error(err));