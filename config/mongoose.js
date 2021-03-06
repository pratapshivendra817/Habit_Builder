const mongoose = require('mongoose');
// connecting to mongoose
mongoose.connect('mongodb://localhost/habit_builder');
// mongoose database connection
const db = mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

db.once('open',function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports=db;