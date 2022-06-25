const mongoose = require('mongoose');

const host = process.env.DB_HOST;
const port = process.env.DB_PORT || '27017';
const user = process.env.DB_USER;
const pass = process.env.DB_PASSWORD;
const db = process.env.DB_DATABASE;
const auth = process.env.DB_AUTH === 'true' ? `${user}:${pass}@` : '' ;

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${auth}${host}:${port}/${db}`); 
        console.log('Online');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {connectDB};
