const mongoose = require('mongoose');

mongoose.connect( process.env.MONGODB_URI ||'mongodb://localhost/mean-employees',{
    useUnifiedTopology:true,
    useNewUrlParser: true
})
.then( db => console.log('db conectada'))
.catch(err => console.error(err));