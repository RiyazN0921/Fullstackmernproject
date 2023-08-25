const mongoose = require('mongoose');

const db_url = 'mongodb+srv://riyazn886:MkQOwmMKsyYSw5Eo@riyaz.aatdsty.mongodb.net/'

const dbConnection = async (req, res) => {
    console.log("inside db connection")
    await mongoose.connect(db_url);
    console.log("database connection established")
}

module.exports = dbConnection;