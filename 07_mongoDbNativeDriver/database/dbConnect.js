const {MongoClient} = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

const connectDb = async () => {
    try{
        await client.connect();
        console.log("Connected to database successfully");
        return client.db("practiceDB");
    }catch(e){
        console.log(e);
    }
}

module.exports = connectDb;